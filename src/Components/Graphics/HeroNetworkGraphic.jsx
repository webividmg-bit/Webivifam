import React from "react";

// 7 Service Nodes matching exact layout
const HERO_SERVICES = [
  {
    x: 320,
    y: 390,
    r: 15,
    lines: ["AI Development", "& Automation"],
  },
  {
    x: 450,
    y: 130,
    r: 14,
    lines: ["UI/UX", "Design"],
  },
  {
    x: 850,
    y: 150,
    r: 13,
    lines: ["Lead Generation &", "Performance Marketing"],
  },
  {
    x: 650,
    y: 370,
    r: 15,
    lines: ["Website Design", "& Development"],
  },
  {
    x: 1030,
    y: 380,
    r: 14,
    lines: ["Branding &", "Creative Strategy"],
  },
  {
    x: 480,
    y: 640,
    r: 15,
    lines: ["SEO & AI Search", "Optimization"],
  },
  {
    x: 920,
    y: 660,
    r: 14,
    lines: ["Mobile App", "Development"],
  },
];

export default function HeroNetworkGraphic() {
  return (
    <div className="absolute right-[-15%] sm:right-[-10%] lg:right-[-5%] xl:right-[-2%] top-[-15%] sm:top-[-10%] lg:top-[-5%] bottom-[-5%] w-[720px] sm:w-[920px] lg:w-[1150px] xl:w-[1250px] pointer-events-none z-10 flex items-center justify-center">
      <svg
        viewBox="0 0 1200 950"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bandGrad1" cx="57%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#040714" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <radialGradient id="bandGrad2" cx="57%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#080E24" />
            <stop offset="100%" stopColor="#040714" />
          </radialGradient>
          <radialGradient id="bandGrad3" cx="57%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#0E1738" />
            <stop offset="100%" stopColor="#080E24" />
          </radialGradient>
          <radialGradient id="bandGrad4" cx="57%" cy="42%" r="50%">
            <stop offset="0%" stopColor="#14214E" />
            <stop offset="100%" stopColor="#0E1738" />
          </radialGradient>

          <radialGradient id="sphere3dShade" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#B3E5FF" />
            <stop offset="25%" stopColor="#3DB9FF" />
            <stop offset="55%" stopColor="#2555CC" />
            <stop offset="85%" stopColor="#0E2370" />
            <stop offset="100%" stopColor="#040920" />
          </radialGradient>

          <filter id="softBlueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric Circle Bands centered at (680, 400) */}
        <circle cx="680" cy="400" r="470" fill="url(#bandGrad1)" stroke="#1C2D63" strokeWidth="0.8" strokeOpacity="0.25" />
        <circle cx="680" cy="400" r="375" fill="url(#bandGrad2)" stroke="#23387A" strokeWidth="0.8" strokeOpacity="0.3" />
        <circle cx="680" cy="400" r="275" fill="url(#bandGrad3)" stroke="#2B4494" strokeWidth="0.8" strokeOpacity="0.35" />
        <circle cx="680" cy="400" r="170" fill="url(#bandGrad4)" stroke="#3555B8" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Concentric Orbit Guidelines */}
        <circle cx="680" cy="400" r="470" fill="none" stroke="#2BB3FF" strokeWidth="0.5" strokeOpacity="0.1" />
        <circle cx="680" cy="400" r="375" fill="none" stroke="#2BB3FF" strokeWidth="0.5" strokeOpacity="0.12" />
        <circle cx="680" cy="400" r="275" fill="none" stroke="#2BB3FF" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="680" cy="400" r="170" fill="none" stroke="#2BB3FF" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Radiating Water-Drop / Energy Ripple Shockwaves */}
        <circle cx="680" cy="400" r="170" fill="none" stroke="#2BB3FF" className="hero-ripple-1 pointer-events-none" />
        <circle cx="680" cy="400" r="170" fill="none" stroke="#2BB3FF" className="hero-ripple-2 pointer-events-none" />
        <circle cx="680" cy="400" r="170" fill="none" stroke="#2BB3FF" className="hero-ripple-3 pointer-events-none" />

        {/* 7 3D Spheres with Clean Typography Labels */}
        {HERO_SERVICES.map((item, idx) => (
          <g key={idx} className="pointer-events-auto cursor-default">
            <circle cx={item.x} cy={item.y} r={item.r + 3} fill="#2BB3FF" opacity="0.22" filter="url(#softBlueGlow)" />
            <circle cx={item.x} cy={item.y} r={item.r} fill="url(#sphere3dShade)" filter="url(#softBlueGlow)" />
            <text
              x={item.x}
              y={item.y + item.r + 18}
              textAnchor="middle"
              fill="#D8E2F0"
              fontSize="12.5"
              fontFamily="Poppins, sans-serif"
              fontWeight="400"
              letterSpacing="0.01em"
            >
              {item.lines.map((line, lineIdx) => (
                <tspan key={lineIdx} x={item.x} dy={lineIdx === 0 ? 0 : 16}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
