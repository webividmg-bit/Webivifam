import React from "react";

export default function SEOBlueprintGraphic() {
  const cardBaseClass =
    "w-full rounded-2xl overflow-hidden relative border border-[#2B3E94]/70 bg-gradient-to-br from-[#0c1538] to-[#040714] p-2 sm:p-3 flex items-center justify-center shadow-[0_0_25px_rgba(43,179,255,0.2)] transition-all duration-300 hover:border-[#2BB3FF] hover:shadow-[0_0_35px_rgba(43,179,255,0.4)] hover:-translate-y-0.5 cursor-default group";

  return (
    <div className="w-full relative select-none">
      {/* Scoped CSS Keyframes for High-Performance 60fps Micro-Animations */}
      <style>{`
        @keyframes radarRipple {
          0% { r: 5px; opacity: 0.9; }
          100% { r: 34px; opacity: 0; }
        }
        @keyframes pinFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes scanInspect {
          0% { transform: translateX(0px); }
          50% { transform: translateX(60px); }
          100% { transform: translateX(0px); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitSpinRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes waveOscillate1 {
          0%, 100% { height: 6px; }
          50% { height: 22px; }
        }
        @keyframes waveOscillate2 {
          0%, 100% { height: 20px; }
          50% { height: 8px; }
        }
        @keyframes waveOscillate3 {
          0%, 100% { height: 12px; }
          50% { height: 26px; }
        }
        @keyframes graphMoveUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Main 2-Column Responsive Layout */}
      <div className="w-full flex gap-3.5 sm:gap-5 lg:gap-6 relative items-stretch">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Local SEO + Technical SEO + GEO                             */}
        {/* ========================================================================= */}
        <div className="w-1/2 flex flex-col justify-between gap-3.5 sm:gap-5 min-h-[460px] sm:min-h-[520px]">
          
          {/* ----------------------------------------------------------------------- */}
          {/* CARD 1: LOCAL SEO (Map Grid + Radar + Floating Pin + Bold Title)        */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#3C4BBF]/15 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 240 140"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pinBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FACC15" />
                  <stop offset="60%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>

              {/* Perspective Road Network Grid */}
              <g opacity="0.35" stroke="#2B3E94" strokeWidth="0.8">
                <path d="M 20 85 L 220 35" strokeDasharray="3 3" />
                <path d="M 40 95 L 200 20" stroke="#3C4BBF" strokeWidth="1.2" />
                <path d="M 120 10 L 120 90" stroke="#2BB3FF" strokeWidth="0.8" strokeOpacity="0.5" />
                <path d="M 30 55 L 210 65" />
              </g>

              {/* Pulsing Radar Ripples */}
              <g transform="translate(120, 52)">
                <ellipse
                  cx="0"
                  cy="0"
                  rx="14"
                  ry="6"
                  fill="none"
                  stroke="#2BB3FF"
                  strokeWidth="1.4"
                  style={{ animation: "radarRipple 2.6s cubic-bezier(0.1, 0.7, 0.4, 1) infinite" }}
                />
                <ellipse
                  cx="0"
                  cy="0"
                  rx="28"
                  ry="11"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1"
                  style={{ animation: "radarRipple 2.6s cubic-bezier(0.1, 0.7, 0.4, 1) 0.9s infinite" }}
                />
              </g>

              {/* 3D Floating Yellow Map Pin */}
              <g
                transform="translate(120, 48)"
                style={{ animation: "pinFloat 2.4s ease-in-out infinite" }}
              >
                <path
                  d="M 0 -26 C -8 -26 -12 -18 -12 -10 C -12 -3 0 0 0 0 C 0 0 12 -3 12 -10 C 12 -18 8 -26 0 -26 Z"
                  fill="url(#pinBodyGrad)"
                  stroke="#FEF08A"
                  strokeWidth="0.8"
                  filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))"
                />
                <circle cx="0" cy="-14" r="4" fill="#090E24" stroke="#FEF08A" strokeWidth="0.8" />
                <circle cx="0" cy="-14" r="1.8" fill="#38BDF8" />
              </g>

              {/* Integrated Bold Typography */}
              <text
                x="120"
                y="114"
                fill="#FFFFFF"
                fontSize="19"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                Local SEO
              </text>
            </svg>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 2: TECHNICAL SEO (Browser Bar + Scanning Lens + Code Tag)          */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#3C4BBF]/15 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 240 140"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Browser Container Frame */}
              <rect
                x="20"
                y="14"
                width="200"
                height="82"
                rx="8"
                fill="#090E24"
                stroke="#2BB3FF"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <line x1="20" y1="32" x2="220" y2="32" stroke="#2BB3FF" strokeWidth="0.8" strokeOpacity="0.3" />
              <circle cx="32" cy="23" r="3" fill="#2BB3FF" />
              <circle cx="42" cy="23" r="3" fill="#3C4BBF" />
              <circle cx="52" cy="23" r="3" fill="#1C2D63" />

              {/* Search Pill */}
              <rect x="40" y="44" width="160" height="28" rx="14" fill="#060C22" stroke="#2B3E94" strokeWidth="1" />
              
              {/* Query & Code Syntax */}
              <circle cx="56" cy="58" r="4.5" fill="none" stroke="#2BB3FF" strokeWidth="1.2" />
              <line x1="59" y1="61" x2="63" y2="65" stroke="#2BB3FF" strokeWidth="1.5" />
              <text x="74" y="62" fill="#64748B" fontFamily="Courier, monospace" fontSize="11" fontWeight="bold">
                &lt;index:200 /&gt;
              </text>

              {/* Animated Magnifying Glass Scanning Lens */}
              <g style={{ animation: "scanInspect 3s ease-in-out infinite" }}>
                <circle
                  cx="70"
                  cy="58"
                  r="10"
                  fill="#38BDF8"
                  fillOpacity="0.15"
                  stroke="#38BDF8"
                  strokeWidth="1.6"
                  filter="drop-shadow(0 0 6px #38BDF8)"
                />
                <line x1="77" y1="65" x2="85" y2="73" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Integrated Bold Typography */}
              <text
                x="120"
                y="122"
                fill="#FFFFFF"
                fontSize="18"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                Technical SEO
              </text>
            </svg>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 3: GEO (Crisp 3D "GEO" Lettering + Visible "SEO" Reflection)       */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#2563EB]/10 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 240 140"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Reflective Gradient for SEO Shadow (Ref 1) */}
                <linearGradient id="seoReflectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* AI Neural Web Lines */}
              <g stroke="#3C4BBF" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.35">
                <line x1="30" y1="22" x2="75" y2="38" />
                <line x1="75" y1="38" x2="165" y2="34" />
                <line x1="165" y1="34" x2="210" y2="22" />
              </g>
              <circle cx="75" cy="38" r="2.2" fill="#38BDF8" opacity="0.8" />
              <circle cx="165" cy="34" r="2.2" fill="#818CF8" opacity="0.8" />

              {/* Floor Plane Horizon Line */}
              <line x1="45" y1="70" x2="195" y2="70" stroke="#2B3E94" strokeWidth="0.8" opacity="0.4" />

              {/* Prominent, Clearly Visible "SEO" Shadow Reflection on Floor (Ref 1) */}
              <g transform="translate(120, 72) skewX(-42) scale(1, 0.48)">
                <text
                  x="0"
                  y="0"
                  fill="url(#seoReflectionGrad)"
                  stroke="#38BDF8"
                  strokeWidth="0.8"
                  strokeOpacity="0.75"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="900"
                  fontSize="34"
                  textAnchor="middle"
                  letterSpacing="5"
                >
                  SEO
                </text>
              </g>

              {/* Crisp 3D "GEO" Typography with Reduced, Clean Glow */}
              <g transform="translate(120, 56)">
                {/* Subtle Depth Shadow */}
                <text
                  x="1.5"
                  y="1.5"
                  fill="#0F172A"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="900"
                  fontSize="38"
                  textAnchor="middle"
                  letterSpacing="3"
                >
                  GEO
                </text>
                {/* Crisp White Letter Face */}
                <text
                  x="0"
                  y="0"
                  fill="#FFFFFF"
                  stroke="#38BDF8"
                  strokeWidth="0.8"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="900"
                  fontSize="38"
                  textAnchor="middle"
                  letterSpacing="3"
                  filter="drop-shadow(0 0 5px rgba(56, 189, 248, 0.35))"
                >
                  GEO
                </text>
              </g>

              {/* Integrated Clean Subtitle */}
              <text
                x="120"
                y="112"
                fill="#94A3B8"
                fontSize="11"
                fontFamily="Poppins, sans-serif"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                GENERATIVE ENGINE OPTIMIZATION
              </text>
            </svg>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CENTER BLUEPRINT DIVIDER (Vertical Line with Neon Dots)                   */}
        {/* ========================================================================= */}
        <div className="relative flex flex-col items-center justify-between my-2 py-4">
          <div className="w-[1px] bg-gradient-to-b from-transparent via-[#2B3E94] to-transparent h-full absolute" />
          <span className="w-2 h-2 rounded-full bg-[#1C2D63] border border-[#2BB3FF]/40 relative z-10" />
          <span className="w-2 h-2 rounded-full bg-[#2BB3FF] shadow-[0_0_10px_#2BB3FF] relative z-10 animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-[#1C2D63] border border-[#2BB3FF]/40 relative z-10" />
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: SEO Browser + Content Authority + Conversion Optimization   */}
        {/* ========================================================================= */}
        <div className="w-1/2 flex flex-col justify-between gap-3.5 sm:gap-5 min-h-[460px] sm:min-h-[520px]">
          
          {/* ----------------------------------------------------------------------- */}
          {/* CARD 4: SEO (Minimal Browser Frame + Rotating Orbits + Bold SEO)       */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#3C4BBF]/20 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 200 120"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Browser Window Frame */}
              <rect
                x="15"
                y="15"
                width="170"
                height="90"
                rx="8"
                fill="#090E24"
                stroke="#2BB3FF"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <line x1="15" y1="35" x2="185" y2="35" stroke="#2BB3FF" strokeWidth="0.8" strokeOpacity="0.3" />
              <circle cx="30" cy="25" r="4" fill="#2BB3FF" />
              <circle cx="45" cy="25" r="4" fill="#3C4BBF" />
              <circle cx="60" cy="25" r="4" fill="#1C2D63" />

              {/* Bold Center SEO Text */}
              <text
                x="100"
                y="72"
                fill="#FFFFFF"
                fontSize="24"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                SEO
              </text>
              
              {/* Rotating Dual Orbit Rings */}
              <g transform="translate(100, 68)">
                <g style={{ animation: "orbitSpin 12s linear infinite" }}>
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="45"
                    ry="18"
                    fill="none"
                    stroke="#2BB3FF"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />
                </g>
                <g style={{ animation: "orbitSpinRev 16s linear infinite" }}>
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="55"
                    ry="24"
                    fill="none"
                    stroke="#3C4BBF"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 5: CONTENT AUTHORITY (Verified Crest + Resonance Waves + Title)   */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#3C4BBF]/15 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 240 140"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Resonance Waveform Bars */}
              <g transform="translate(50, 52)" fill="#38BDF8">
                <rect x="-24" y="-3" width="3" height="6" rx="1.5" opacity="0.4" style={{ animation: "waveOscillate1 1.2s ease-in-out infinite" }} />
                <rect x="-16" y="-7" width="3" height="14" rx="1.5" opacity="0.6" style={{ animation: "waveOscillate2 1.4s ease-in-out 0.2s infinite" }} />
                <rect x="-8" y="-12" width="3" height="24" rx="1.5" opacity="0.9" style={{ animation: "waveOscillate3 1.1s ease-in-out 0.4s infinite" }} />
              </g>

              {/* Center Authority Crest Shield */}
              <g transform="translate(120, 48)">
                <circle cx="0" cy="0" r="22" fill="#2563EB" fillOpacity="0.18" />
                <polygon
                  points="0,-20 14,-13 20,0 14,13 0,20 -14,13 -20,0 -14,-13"
                  fill="#060C22"
                  stroke="#2BB3FF"
                  strokeWidth="1.3"
                  filter="drop-shadow(0 0 8px rgba(43, 179, 255, 0.45))"
                />
                <polygon
                  points="0,-6 1.8,-1.8 6,-1.8 2.8,0.6 3.8,4.8 0,2.2 -3.8,4.8 -2.8,0.6 -6,-1.8 -1.8,-1.8"
                  fill="#FFFFFF"
                />
              </g>

              {/* Right Resonance Waveform Bars */}
              <g transform="translate(190, 52)" fill="#38BDF8">
                <rect x="8" y="-12" width="3" height="24" rx="1.5" opacity="0.9" style={{ animation: "waveOscillate3 1.1s ease-in-out 0.3s infinite" }} />
                <rect x="16" y="-7" width="3" height="14" rx="1.5" opacity="0.6" style={{ animation: "waveOscillate2 1.4s ease-in-out 0.1s infinite" }} />
                <rect x="24" y="-3" width="3" height="6" rx="1.5" opacity="0.4" style={{ animation: "waveOscillate1 1.2s ease-in-out 0.4s infinite" }} />
              </g>

              {/* Integrated Bold Typography */}
              <text
                x="120"
                y="112"
                fill="#FFFFFF"
                fontSize="18"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                Content Authority
              </text>
            </svg>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* CARD 6: CONVERSION OPTIMIZATION (Browser Window + Upward Curve + Title)  */}
          {/* ----------------------------------------------------------------------- */}
          <div className={`${cardBaseClass} h-[145px] sm:h-[160px]`}>
            <div className="absolute inset-0 bg-[#3C4BBF]/20 blur-xl pointer-events-none" />

            <svg
              viewBox="0 0 240 140"
              className="w-full h-full relative z-10"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="blueArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2BB3FF" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>

              {/* Browser Window Frame with 3 dots */}
              <rect
                x="20"
                y="14"
                width="200"
                height="82"
                rx="8"
                fill="#090E24"
                stroke="#2BB3FF"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <line x1="20" y1="32" x2="220" y2="32" stroke="#2BB3FF" strokeWidth="0.8" strokeOpacity="0.3" />
              <circle cx="32" cy="23" r="3" fill="#2BB3FF" />
              <circle cx="42" cy="23" r="3" fill="#3C4BBF" />
              <circle cx="52" cy="23" r="3" fill="#1C2D63" />

              {/* Clean Upward Moving Graph Group (Smooth Upward Floating Motion) */}
              <g style={{ animation: "graphMoveUp 2.6s ease-in-out infinite" }}>
                {/* Solid Glowing Cyan Curve */}
                <path
                  d="M 45 74 Q 80 72 108 60 T 158 46 T 190 36"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))"
                />

                {/* Milestone Checkpoint Data Nodes */}
                <circle cx="45" cy="74" r="3.4" fill="#38BDF8" stroke="#090E24" strokeWidth="1.5" />
                <circle cx="108" cy="60" r="3.4" fill="#38BDF8" stroke="#090E24" strokeWidth="1.5" />
                <circle cx="158" cy="46" r="3.4" fill="#38BDF8" stroke="#090E24" strokeWidth="1.5" />
                <circle cx="190" cy="36" r="3.8" fill="#38BDF8" stroke="#090E24" strokeWidth="1.5" />

                {/* Upward Arrow at Curve Peak */}
                <polygon
                  points="190,32 202,23 194,37"
                  fill="url(#blueArrowGrad)"
                  filter="drop-shadow(0 0 6px #38BDF8)"
                />
              </g>

              {/* Integrated Bold Typography */}
              <text
                x="120"
                y="122"
                fill="#FFFFFF"
                fontSize="17"
                fontFamily="Poppins, sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                Conversion Optimization
              </text>
            </svg>
          </div>

        </div>

      </div>
    </div>
  );
}
