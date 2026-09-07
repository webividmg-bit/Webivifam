import React from "react";

export default function ServicesWaveGraphic() {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center py-6 sm:py-8">
      {/* Background Soft Blue Ambient Haze */}
      <div className="absolute inset-0 m-auto w-full max-w-[850px] h-[220px] rounded-full bg-[#1A2D75]/25 blur-[100px] pointer-events-none" />

      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
        <svg
          viewBox="0 0 1920 360"
          className="w-full min-w-[700px] sm:min-w-[1000px] lg:min-w-[1280px] xl:w-full h-auto overflow-visible mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2542B0" stopOpacity="0.35" />
              <stop offset="25%" stopColor="#2E52D6" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#45C4FF" stopOpacity="1" />
              <stop offset="75%" stopColor="#2E52D6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2542B0" stopOpacity="0.35" />
            </linearGradient>

            <linearGradient id="waveLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#182A70" stopOpacity="0.25" />
              <stop offset="25%" stopColor="#233FA8" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#3058D6" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#233FA8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#182A70" stopOpacity="0.25" />
            </linearGradient>

            <linearGradient id="waveLineGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#101D50" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#1E3485" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#1E3485" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#101D50" stopOpacity="0.2" />
            </linearGradient>

            <filter id="serviceNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Full-Width Continuous Harmonic Wave Paths */}
          {/* Wave 1 */}
          <path
            d="M -100 180 C 150 110 400 250 650 180 C 900 110 1150 250 1400 180 C 1650 110 1900 250 2050 180"
            fill="none"
            stroke="url(#waveLineGrad1)"
            strokeWidth="2"
            className="wave-flow-1 pointer-events-none"
          />

          {/* Wave 2 */}
          <path
            d="M -100 200 C 180 270 420 130 680 200 C 940 270 1180 130 1440 200 C 1700 270 1940 130 2050 200"
            fill="none"
            stroke="url(#waveLineGrad2)"
            strokeWidth="1.6"
            className="wave-flow-2 pointer-events-none"
          />

          {/* Wave 3 (Harmonic baseline) */}
          <path
            d="M -100 160 C 250 90 550 270 850 160 C 1150 70 1450 270 1750 160 C 1900 110 2000 210 2050 160"
            fill="none"
            stroke="url(#waveLineGrad3)"
            strokeWidth="1.3"
            className="wave-flow-3 pointer-events-none"
          />

          {/* 1. AI Development & Automation */}
          <g transform="translate(280, 130)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="48" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="-4" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              <tspan x="18" dy="0">AI Development &amp;</tspan>
              <tspan x="18" dy="20">Automation</tspan>
            </text>
          </g>

          {/* 2. Performance Marketing & Lead Gen */}
          <g transform="translate(520, 255)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="-55" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="-4" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              <tspan x="18" dy="0">Performance</tspan>
              <tspan x="18" dy="20">Marketing &amp; Lead Gen</tspan>
            </text>
          </g>

          {/* 3. SEO & AI Search Optimization */}
          <g transform="translate(860, 120)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="45" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="-4" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              <tspan x="18" dy="0">SEO &amp; AI Search</tspan>
              <tspan x="18" dy="20">Optimization</tspan>
            </text>
          </g>

          {/* 4. Branding & Creative Strategy */}
          <g transform="translate(1120, 260)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="-50" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="-4" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              <tspan x="18" dy="0">Branding &amp; Creative</tspan>
              <tspan x="18" dy="20">Strategy</tspan>
            </text>
          </g>

          {/* 5. Website & App Development */}
          <g transform="translate(1440, 125)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="45" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="-4" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              <tspan x="18" dy="0">Website &amp; App</tspan>
              <tspan x="18" dy="20">Development</tspan>
            </text>
          </g>

          {/* 6. UI/UX Design */}
          <g transform="translate(1660, 255)" className="cursor-default group select-none">
            <line x1="0" y1="0" x2="0" y2="-55" stroke="#2B46A8" strokeWidth="1.2" className="group-hover:stroke-[#2BB3FF] transition-colors duration-300" />
            <circle cx="0" cy="0" r="5" fill="#3C4BBF" filter="url(#serviceNodeGlow)" className="group-hover:fill-[#2BB3FF] transition-colors duration-300" />
            <text x="18" y="5" fill="#FFFFFF" fontSize="15" fontFamily="Poppins, sans-serif" fontWeight="400">
              UI/UX Design
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
