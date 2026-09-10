import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

// Default global reach hubs with geographic coordinates [latitude, longitude]
export const DEFAULT_HUBS = [
  {
    id: "india",
    name: "India (HQ)",
    location: [20.5937, 78.9629],
    isHQ: true,
    size: 0.1,
    color: [0.15, 0.95, 1.0], // Glowing cyan
    subtitle: "Global HQ & Operations",
  },
  {
    id: "uk",
    name: "United Kingdom",
    shortName: "UK",
    location: [55.3781, -3.436],
    isHQ: false,
    size: 0.07,
    color: [0.35, 0.75, 1.0],
    subtitle: "European Hub",
  },
  {
    id: "usa",
    name: "United States",
    shortName: "USA",
    location: [37.0902, -95.7129],
    isHQ: false,
    size: 0.08,
    color: [0.35, 0.75, 1.0],
    subtitle: "Americas Hub",
  },
  {
    id: "canada",
    name: "Canada",
    shortName: "Canada",
    location: [56.1304, -106.3468],
    isHQ: false,
    size: 0.07,
    color: [0.35, 0.75, 1.0],
    subtitle: "North America Hub",
  },
  {
    id: "australia",
    name: "Australia",
    shortName: "Australia",
    location: [-25.2744, 133.7751],
    isHQ: false,
    size: 0.075,
    color: [0.35, 0.75, 1.0],
    subtitle: "Asia-Pacific Hub",
  },
];

// Glowing 3D Arcs connecting India HQ to all key international regions
export const DEFAULT_ARCS = [
  { from: [20.5937, 78.9629], to: [55.3781, -3.436], color: [0.3, 0.8, 1.0] }, // India -> UK
  { from: [20.5937, 78.9629], to: [37.0902, -95.7129], color: [0.3, 0.8, 1.0] }, // India -> USA
  { from: [20.5937, 78.9629], to: [56.1304, -106.3468], color: [0.3, 0.8, 1.0] }, // India -> Canada
  { from: [20.5937, 78.9629], to: [-25.2744, 133.7751], color: [0.3, 0.8, 1.0] }, // India -> Australia
];

// Spherical to 2D screen projection matching Cobe's internal camera math
function toCartesian([lat, lon]) {
  const r = (lat * Math.PI) / 180;
  const a = (lon * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

function projectPoint(latLon, phi, theta, scale = 1, markerElevation = 0.05) {
  const t = toCartesian(latLon);
  const r = 0.8 + markerElevation;
  const p = [t[0] * r, t[1] * r, t[2] * r];

  const cosTheta = Math.cos(theta);
  const cosPhi = Math.cos(phi);
  const sinTheta = Math.sin(theta);
  const sinPhi = Math.sin(phi);

  const c = cosPhi * p[0] + sinPhi * p[2];
  const s = sinPhi * sinTheta * p[0] + cosTheta * p[1] - cosPhi * sinTheta * p[2];

  const x = (c * scale + 1) / 2;
  const y = (-s * scale + 1) / 2;
  const z = -sinPhi * cosTheta * p[0] + sinTheta * p[1] + cosPhi * cosTheta * p[2];

  // Point is visible when facing the camera (z > 0.05)
  const isVisible = z > 0.05;

  return { x, y, z, isVisible };
}

export default function Earth({
  className,
  theta = 0.22,
  dark = 1,
  scale = 1.08,
  diffuse = 1.2,
  mapSamples = 28000,
  mapBrightness = 6,
  baseColor = [0.35, 0.65, 1.0],
  markerColor = [0.2, 0.9, 1.0],
  glowColor = [0.18, 0.5, 0.98],
  arcColor = [0.3, 0.75, 1.0],
  arcWidth = 0.6,
  arcHeight = 0.26,
  hubs = DEFAULT_HUBS,
  arcs = DEFAULT_ARCS,
  showCountryBadges = true,
  interactive = true,
  autoRotate = true,
  autoRotateSpeed = 0.0028,
  onHubClick,
  activeHubId = null,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const globeRef = useRef(null);
  const isInteracting = useRef(false);
  const pointerStart = useRef(0);
  const pointerStartPhi = useRef(3.1);
  const phiRef = useRef(3.1); // Initial rotation angle showcasing India & surrounding hubs
  const thetaRef = useRef(theta);
  const targetPhiRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHub, setActiveHub] = useState(activeHubId || null);
  const labelRefs = useRef({});

  // Sync activeHub with activeHubId prop
  useEffect(() => {
    setActiveHub(activeHubId);
    if (activeHubId) {
      const hub = hubs.find((h) => h.id === activeHubId);
      if (hub) {
        const lon = hub.location[1];
        // Target phi to bring this hub to center front
        const target = Math.PI * 1.5 - (lon * Math.PI) / 180;
        const current = phiRef.current;
        const diff = (target - current) % (Math.PI * 2);
        const shortestDiff = ((diff + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        targetPhiRef.current = current + shortestDiff;
      }
    } else {
      targetPhiRef.current = null;
    }
  }, [activeHubId, hubs]);

  // Formatted Cobe markers
  const markersConfig = useMemo(
    () =>
      hubs.map((hub) => ({
        location: hub.location,
        size: hub.size || (hub.isHQ ? 0.09 : 0.065),
        color: hub.color || (hub.isHQ ? [0.2, 0.95, 1.0] : [0.35, 0.75, 1.0]),
        id: hub.id,
      })),
    [hubs]
  );

  // Handle pointer down (drag start) with pointer capture for robust interaction
  const handlePointerDown = useCallback(
    (e) => {
      if (!interactive) return;
      e.currentTarget.setPointerCapture?.(e.pointerId);
      isInteracting.current = true;
      pointerStart.current = e.clientX;
      pointerStartPhi.current = phiRef.current;
      targetPhiRef.current = null; // Cancel any active target hub lerp
      setIsDragging(true);
      if (canvasRef.current) {
        canvasRef.current.style.cursor = "grabbing";
      }
    },
    [interactive]
  );

  // Handle pointer move
  const handlePointerMove = useCallback((e) => {
    if (isInteracting.current) {
      const delta = e.clientX - pointerStart.current;
      phiRef.current = pointerStartPhi.current + delta * 0.005;
    }
  }, []);

  // Handle pointer up (drag end)
  const handlePointerUp = useCallback((e) => {
    if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    isInteracting.current = false;
    setIsDragging(false);
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = canvasRef.current.offsetWidth || 400;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Initialize COBE Globe v2
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: width,
      height: width,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      arcColor: arcColor,
      arcWidth: arcWidth,
      arcHeight: arcHeight,
      markerElevation: 0.05,
      opacity: 1,
      offset: [0, 0],
      markers: markersConfig,
      arcs: arcs,
    });
    globeRef.current = globe;

    // Dedicated requestAnimationFrame render loop (required in COBE v2)
    let animId;
    const render = () => {
      if (!isInteracting.current) {
        if (targetPhiRef.current !== null) {
          // Smooth glide toward target hub
          phiRef.current += (targetPhiRef.current - phiRef.current) * 0.06;
          if (Math.abs(targetPhiRef.current - phiRef.current) < 0.001) {
            targetPhiRef.current = null;
          }
        } else if (autoRotate) {
          phiRef.current += autoRotateSpeed;
        }
      }

      // Re-render WebGL canvas with new rotation angles
      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
      });

      // Directly update country badge DOM positions for 60fps performance
      if (showCountryBadges) {
        hubs.forEach((hub) => {
          const el = labelRefs.current[hub.id];
          if (el) {
            const { x, y, isVisible } = projectPoint(
              hub.location,
              phiRef.current,
              thetaRef.current,
              scale
            );

            el.style.left = `${(x * 100).toFixed(2)}%`;
            el.style.top = `${(y * 100).toFixed(2)}%`;
            el.style.opacity = isVisible ? "1" : "0";
            el.style.pointerEvents = isVisible ? "auto" : "none";
            el.style.transform = `translate(-50%, -100%) scale(${
              isVisible ? 1 : 0.7
            })`;
          }
        });
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleResize = () => {
      if (canvasRef.current) {
        const w = canvasRef.current.offsetWidth || 400;
        globe.update({
          width: w,
          height: w,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      globe.destroy();
      globeRef.current = null;
    };
  }, [
    scale,
    diffuse,
    dark,
    mapSamples,
    mapBrightness,
    arcWidth,
    arcHeight,
    autoRotate,
    autoRotateSpeed,
    showCountryBadges,
  ]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerMove={handlePointerMove}
      className={cn(
        "relative flex items-center justify-center z-10 w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[560px] mx-auto select-none touch-none",
        className
      )}
    >
      {/* High-Tech Glowing Atmospheric Backdrop Layer */}
      <div className="absolute inset-0 m-auto w-[82%] h-[82%] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18)_0%,rgba(37,99,235,0.1)_50%,transparent_75%)] blur-[50px] pointer-events-none" />

      {/* Primary WebGL Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
          cursor: interactive ? (isDragging ? "grabbing" : "grab") : "default",
        }}
        className="relative z-10 block"
      />

      {/* Floating 3D-Projected Country Labels & Live Presence Badges */}
      {showCountryBadges && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {hubs.map((hub) => {
            const isHQ = hub.isHQ;
            const isSelected = activeHub === hub.id;

            return (
              <div
                key={hub.id}
                ref={(el) => (labelRefs.current[hub.id] = el)}
                onClick={() => {
                  setActiveHub(hub.id);
                  if (onHubClick) onHubClick(hub);
                }}
                className={cn(
                  "absolute transition-opacity duration-200 cursor-pointer group pointer-events-auto",
                  "will-change-transform"
                )}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -100%)",
                  opacity: 0,
                }}
              >
                {/* Visual Pin & Badge Container */}
                <div className="relative flex flex-col items-center">
                  {/* Badge Capsule */}
                  <div
                    className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300",
                      isHQ
                        ? "bg-[#06182c]/90 border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.45)] hover:border-cyan-300 hover:scale-105"
                        : "bg-[#080f1e]/85 border-blue-500/40 shadow-[0_0_12px_rgba(59,130,246,0.3)] hover:border-blue-400 hover:scale-105",
                      isSelected && "ring-2 ring-cyan-400 scale-105"
                    )}
                  >
                    {/* Pulsing Beacon Dot */}
                    <span className="relative flex h-2 w-2">
                      {isHQ ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                        </>
                      ) : (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                        </>
                      )}
                    </span>

                    {/* Country Name */}
                    <span
                      className={cn(
                        "text-[11px] font-semibold tracking-wide whitespace-nowrap",
                        isHQ ? "text-cyan-200 font-bold" : "text-slate-200"
                      )}
                    >
                      {hub.name}
                    </span>

                    {/* HQ Pill Tag */}
                    {isHQ && (
                      <span className="text-[9px] uppercase tracking-wider font-extrabold bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded-full border border-cyan-400/40">
                        HQ
                      </span>
                    )}
                  </div>

                  {/* Indicator Stem / Needle pointing to marker on globe */}
                  <div
                    className={cn(
                      "w-[1.5px] h-2.5 mt-0.5 transition-colors",
                      isHQ ? "bg-cyan-400/80 shadow-[0_0_6px_#22d3ee]" : "bg-blue-400/60"
                    )}
                  />
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full -mt-0.5",
                      isHQ ? "bg-cyan-300 shadow-[0_0_8px_#67e8f9]" : "bg-blue-300"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
