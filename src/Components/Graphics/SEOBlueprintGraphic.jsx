import React from "react";

export default function SEOBlueprintGraphic() {
  const boxCardClass =
    "relative overflow-hidden bg-black border border-[#2B3E94]/70 p-5 cursor-default transition-all duration-300 ease-out hover:border-[#2BB3FF] hover:shadow-[0_0_24px_rgba(43,179,255,0.25)] hover:-translate-y-0.5";

  return (
    <div className="w-full lg:w-[56%] flex gap-5 lg:gap-8 relative">
      {/* Middle Column Boxes */}
      <div className="w-1/2 flex flex-col justify-between min-h-[540px] gap-5">
        
        {/* Box 1: Local SEO */}
        <div className={`w-full h-[170px] ${boxCardClass} flex flex-col justify-end items-end`}>
          <span className="font-[Poppins] text-[17px] sm:text-[19px] text-white text-right leading-tight font-normal z-10">
            Local
            <br />
            SEO
          </span>
        </div>

        {/* Box 2: Technical SEO */}
        <div className={`w-full h-[130px] ${boxCardClass} flex flex-col justify-end items-end`}>
          <span className="font-[Poppins] text-[17px] sm:text-[19px] text-white text-right leading-tight font-normal z-10">
            Technical
            <br />
            SEO
          </span>
        </div>

        {/* Box 3: GEO */}
        <div className={`w-[85%] self-end h-[130px] ${boxCardClass} flex items-end justify-end`}>
          <span className="font-[Poppins] text-[17px] sm:text-[19px] text-white font-normal z-10">
            GEO
          </span>
        </div>

      </div>

      {/* Vertical Blueprint Divider Line */}
      <div className="w-[1.2px] bg-[#2B3E94]/60 self-stretch my-2" />

      {/* Right Column: SEO 3D Visual + Content Authority + Conversion Optimization */}
      <div className="w-1/2 flex flex-col justify-between min-h-[540px] gap-5">
        
        {/* SEO Top Card */}
        <div>
          <p className="font-[Poppins] text-white text-base font-normal mb-2">
            SEO
          </p>
          <div className="w-full h-[150px] rounded-xl overflow-hidden relative border border-[#2B3E94]/70 bg-gradient-to-br from-[#0c1538] to-[#040714] p-3 flex items-center justify-center shadow-[0_0_25px_rgba(43,179,255,0.2)] transition-all duration-300 hover:border-[#2BB3FF] hover:shadow-[0_0_35px_rgba(43,179,255,0.4)]">
            <div className="absolute inset-0 bg-[#3C4BBF]/20 blur-xl pointer-events-none" />
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2BB3FF]/40 to-transparent scanline-sweep pointer-events-none" />

            <svg viewBox="0 0 200 120" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="15" width="170" height="90" rx="8" fill="#090E24" stroke="#2BB3FF" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="15" y1="35" x2="185" y2="35" stroke="#2BB3FF" strokeWidth="0.8" strokeOpacity="0.3" />
              <circle cx="30" cy="25" r="4" fill="#2BB3FF" />
              <circle cx="45" cy="25" r="4" fill="#3C4BBF" />
              <circle cx="60" cy="25" r="4" fill="#1C2D63" />
              <text x="100" y="72" fill="#FFFFFF" fontSize="24" fontFamily="Poppins, sans-serif" fontWeight="bold" textAnchor="middle">SEO</text>
              
              {/* Rotating Orbit Rings */}
              <g className="orbit-spin-slow">
                <ellipse cx="100" cy="70" rx="45" ry="18" fill="none" stroke="#2BB3FF" strokeWidth="1.2" strokeOpacity="0.6" />
                <ellipse cx="100" cy="70" rx="55" ry="24" fill="none" stroke="#3C4BBF" strokeWidth="0.8" strokeOpacity="0.4" />
              </g>
            </svg>
          </div>
        </div>

        {/* Box 4: Content Authority */}
        <div className={`w-full h-[120px] ${boxCardClass} flex items-end justify-start`}>
          <span className="font-[Poppins] text-[17px] sm:text-[19px] text-white font-normal z-10">
            Content Authority
          </span>
        </div>

        {/* Box 5: Conversion Optimization */}
        <div className={`w-full h-[200px] ${boxCardClass} flex flex-col justify-end items-start`}>
          <span className="font-[Poppins] text-[17px] sm:text-[19px] text-white leading-tight font-normal z-10">
            Conversion
            <br />
            Optimization
          </span>
        </div>

      </div>
    </div>
  );
}
