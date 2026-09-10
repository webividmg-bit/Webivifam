import React, { useState } from "react";
import Earth, { DEFAULT_HUBS, DEFAULT_ARCS } from "@/components/ui/globe";

export default function WireframeGlobeGraphic() {
  const [selectedHub, setSelectedHub] = useState(null);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[520px] lg:max-w-[660px] flex flex-col items-center justify-center select-none mx-auto">
      {/* Background Soft Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#1E3A8A]/20 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none -z-10" />

      {/* Cybernetic Orbital Ring Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] sm:w-[490px] sm:h-[490px] lg:w-[610px] lg:h-[610px] rounded-full border border-cyan-500/15 pointer-events-none -z-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] sm:w-[520px] sm:h-[520px] lg:w-[650px] lg:h-[650px] rounded-full border border-dashed border-blue-500/15 pointer-events-none -z-5 animate-[spin_120s_linear_infinite]" />

      {/* 3D Animated Revolving Cobe Earth with Live Projected Countries */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        <Earth
          className="w-full h-full max-w-full"
          scale={1.1}
          mapSamples={32000}
          mapBrightness={6}
          baseColor={[0.35, 0.65, 1.0]}
          markerColor={[0.15, 0.95, 1.0]}
          glowColor={[0.18, 0.5, 0.98]}
          arcColor={[0.3, 0.8, 1.0]}
          arcWidth={0.65}
          arcHeight={0.28}
          hubs={DEFAULT_HUBS}
          arcs={DEFAULT_ARCS}
          showCountryBadges={true}
          interactive={true}
          autoRotate={true}
          autoRotateSpeed={0.0024}
          onHubClick={(hub) => setSelectedHub(hub.id)}
          activeHubId={selectedHub}
        />
      </div>

      {/* Interactive Global Network Chips Strip */}
      <div className="relative z-20 mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-2 max-w-lg px-2">
        {DEFAULT_HUBS.map((hub) => {
          const isSelected = selectedHub === hub.id;
          return (
            <button
              key={hub.id}
              onClick={() => setSelectedHub(isSelected ? null : hub.id)}
              className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur-md cursor-pointer ${hub.isHQ
                ? "bg-cyan-950/70 border border-cyan-400/60 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:border-cyan-300 hover:scale-105"
                : "bg-[#0b1329]/75 border border-blue-500/30 text-slate-300 hover:border-blue-400 hover:text-white hover:scale-105"
                } ${isSelected ? "ring-2 ring-cyan-400 border-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]" : ""}`}
            >
              <span
                className={`w-2 h-2 rounded-full ${hub.isHQ ? "bg-cyan-400 animate-pulse" : "bg-blue-400"
                  }`}
              />
              <span>{hub.name}</span>
              {hub.isHQ && (
                <span className="text-[9px] font-bold px-1.5 py-0.2 bg-cyan-400/20 text-cyan-300 rounded-full">
                  Primary
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
