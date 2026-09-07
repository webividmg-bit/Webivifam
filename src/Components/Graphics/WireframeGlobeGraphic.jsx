import React, { useState } from "react";

const HUBS = [
  { name: "Haryana (HQ)", x: 335, y: 245, isHQ: true },
  { name: "Delhi NCR", x: 320, y: 268, isHQ: false },
  { name: "Dubai", x: 250, y: 285, isHQ: false },
  { name: "London", x: 200, y: 205, isHQ: false },
  { name: "New York", x: 155, y: 220, isHQ: false },
  { name: "Singapore", x: 410, y: 330, isHQ: false },
];

export default function WireframeGlobeGraphic() {
  const [hoveredHub, setHoveredHub] = useState(null);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[640px] lg:h-[640px] max-w-full flex items-center justify-center">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[460px] sm:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#3C4BBF]/15 blur-[110px] pointer-events-none" />

      <svg
        viewBox="0 0 600 600"
        className="w-full h-full overflow-visible select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wireframe Glow Stroke Gradient */}
          <linearGradient id="globeWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3DB9FF" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#435CEE" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#1E2B6A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0E1640" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="meridianGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E2B6A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3DB9FF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1E2B6A" stopOpacity="0.2" />
          </linearGradient>

          {/* Glowing Filter */}
          <filter id="globeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Spherical Boundary Rim (Transparent / No Fill) */}
        <circle
          cx="300"
          cy="300"
          r="245"
          fill="none"
          stroke="#3850D4"
          strokeWidth="1.4"
          strokeOpacity="0.6"
        />

        {/* ======================================================== */}
        {/* TRUE 3D WIREFRAME GLOBE: TILTED PLANETARY AXIS (-22 DEG) */}
        {/* ======================================================== */}
        <g transform="rotate(-22 300 300)">
          
          {/* Latitude Parallel Rings (Perspective Fore-shortened) */}
          {/* Equator */}
          <ellipse cx="300" cy="300" rx="245" ry="62" fill="none" stroke="url(#globeWireGrad)" strokeWidth="1.4" />
          
          {/* Northern Latitudes */}
          <ellipse cx="300" cy="245" rx="236" ry="54" fill="none" stroke="url(#globeWireGrad)" strokeWidth="1.2" strokeOpacity="0.8" />
          <ellipse cx="300" cy="190" rx="206" ry="46" fill="none" stroke="url(#globeWireGrad)" strokeWidth="1.1" strokeOpacity="0.7" />
          <ellipse cx="300" cy="138" rx="156" ry="35" fill="none" stroke="url(#globeWireGrad)" strokeWidth="0.95" strokeOpacity="0.55" />
          <ellipse cx="300" cy="95" rx="92" ry="22" fill="none" stroke="url(#globeWireGrad)" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* Southern Latitudes */}
          <ellipse cx="300" cy="355" rx="236" ry="54" fill="none" stroke="url(#globeWireGrad)" strokeWidth="1.2" strokeOpacity="0.8" />
          <ellipse cx="300" cy="410" rx="206" ry="46" fill="none" stroke="url(#globeWireGrad)" strokeWidth="1.1" strokeOpacity="0.7" />
          <ellipse cx="300" cy="462" rx="156" ry="35" fill="none" stroke="url(#globeWireGrad)" strokeWidth="0.95" strokeOpacity="0.55" />
          <ellipse cx="300" cy="505" rx="92" ry="22" fill="none" stroke="url(#globeWireGrad)" strokeWidth="0.8" strokeOpacity="0.4" />

          {/* ======================================================== */}
          {/* ROTATING 3D LONGITUDINAL MERIDIANS                       */}
          {/* ======================================================== */}
          <g>
            {/* Center Meridian */}
            <line x1="300" y1="55" x2="300" y2="545" stroke="#3DB9FF" strokeWidth="1.2" strokeOpacity="0.7" />

            {/* Meridian 1 (Oscillating 3D rotation) */}
            <ellipse cx="300" cy="300" rx="60" ry="245" fill="none" stroke="url(#meridianGrad)" strokeWidth="1.2">
              <animate attributeName="rx" values="60;245;60;0;60" dur="18s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.75;0.35;0.75;0.9;0.75" dur="18s" repeatCount="indefinite" />
            </ellipse>

            {/* Meridian 2 */}
            <ellipse cx="300" cy="300" rx="120" ry="245" fill="none" stroke="url(#meridianGrad)" strokeWidth="1.2">
              <animate attributeName="rx" values="120;245;120;0;120" dur="18s" begin="-4.5s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.7;0.35;0.7;0.9;0.7" dur="18s" begin="-4.5s" repeatCount="indefinite" />
            </ellipse>

            {/* Meridian 3 */}
            <ellipse cx="300" cy="300" rx="180" ry="245" fill="none" stroke="url(#meridianGrad)" strokeWidth="1.1">
              <animate attributeName="rx" values="180;245;180;0;180" dur="18s" begin="-9s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.65;0.35;0.65;0.85;0.65" dur="18s" begin="-9s" repeatCount="indefinite" />
            </ellipse>

            {/* Meridian 4 */}
            <ellipse cx="300" cy="300" rx="225" ry="245" fill="none" stroke="url(#meridianGrad)" strokeWidth="1">
              <animate attributeName="rx" values="225;245;225;0;225" dur="18s" begin="-13.5s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.55;0.35;0.55;0.8;0.55" dur="18s" begin="-13.5s" repeatCount="indefinite" />
            </ellipse>
          </g>

          {/* Planetary Polar Axis Indicator Line */}
          <line x1="300" y1="30" x2="300" y2="570" stroke="#2BB3FF" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.45" />
        </g>

        {/* Global Connecting Arc Network Lines (Connecting Haryana to Global Hubs) */}
        <g className="pointer-events-none opacity-60">
          <path d="M 335 245 Q 280 195 200 205" fill="none" stroke="#2BB3FF" strokeWidth="1.1" strokeDasharray="3 3" />
          <path d="M 335 245 Q 235 210 155 220" fill="none" stroke="#2BB3FF" strokeWidth="1.1" strokeDasharray="3 3" />
          <path d="M 335 245 Q 295 270 250 285" fill="none" stroke="#2BB3FF" strokeWidth="1.1" strokeDasharray="3 3" />
          <path d="M 335 245 Q 380 290 410 330" fill="none" stroke="#2BB3FF" strokeWidth="1.1" strokeDasharray="3 3" />
        </g>

        {/* ======================================================== */}
        {/* LOCATION MARKERS ON THE GLOBE                            */}
        {/* ======================================================== */}
        {HUBS.map((hub, idx) => (
          <g
            key={idx}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredHub(hub)}
            onMouseLeave={() => setHoveredHub(null)}
          >
            {hub.isHQ ? (
              /* Haryana (Headquarters) Distinct Prominent Pin */
              <>
                <circle cx={hub.x} cy={hub.y} r="16" fill="none" stroke="#2BB3FF" strokeWidth="1.3" className="pin-pulse-glow" opacity="0.75" />
                <circle cx={hub.x} cy={hub.y} r="6.5" fill="#2BB3FF" filter="url(#globeGlow)" />
                <rect x={hub.x - 52} y={hub.y - 36} width="104" height="24" rx="12" fill="#0A1435" stroke="#2BB3FF" strokeWidth="1.1" />
                <text x={hub.x} y={hub.y - 20} fill="#FFFFFF" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="600" textAnchor="middle">
                  Haryana (HQ)
                </text>
              </>
            ) : (
              /* Global Hub Pins */
              <>
                <circle cx={hub.x} cy={hub.y} r="8" fill="#3C4BBF" opacity="0.45" />
                <circle cx={hub.x} cy={hub.y} r="4" fill="#2BB3FF" filter="url(#globeGlow)" />
              </>
            )}
          </g>
        ))}

        {/* Interactive Tooltip on Hover */}
        {hoveredHub && !hoveredHub.isHQ && (
          <g transform={`translate(${hoveredHub.x}, ${hoveredHub.y - 20})`} className="pointer-events-none">
            <rect x="-46" y="-20" width="92" height="22" rx="6" fill="#080E24" stroke="#2BB3FF" strokeWidth="0.9" />
            <text x="0" y="-5" fill="#FFFFFF" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="500" textAnchor="middle">
              {hoveredHub.name}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
