import React, { useRef } from "react";
import { Link } from "react-router";

export default function EcosystemSection() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const boxBaseClass =
    "w-full sm:w-1/3 py-3.5 px-6 bg-black border border-[#2B3E94]/60 text-white font-[Poppins] text-[17px] sm:text-[18px] font-normal cursor-default transition-all duration-300 ease-out hover:border-[#2BB3FF] hover:shadow-[0_0_28px_rgba(43,179,255,0.35)] hover:-translate-y-0.5";

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="blueprint-spotlight-zone relative w-full overflow-hidden py-20 lg:py-28 bg-black"
    >
      {/* Background Soft Blue Ambient Glow */}
      <div className="absolute inset-0 m-auto w-[600px] h-[380px] rounded-full bg-[#182860]/20 blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        
        {/* Top Rectangular Tag Boxes */}
        <div className="w-full max-w-[800px] flex justify-between items-end gap-4 sm:gap-6 mb-8 flex-wrap sm:flex-nowrap">
          {/* Strategy */}
          <div className={boxBaseClass}>
            Strategy
          </div>

          {/* Technology (Elevated on desktop/tablet) */}
          <div className={`${boxBaseClass} sm:-translate-y-3 hover:sm:-translate-y-3.5`}>
            Technology
          </div>

          {/* Marketing */}
          <div className={boxBaseClass}>
            Marketing
          </div>
        </div>

        {/* Central Headline (Static) */}
        <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-tight tracking-tight mb-5 bg-gradient-to-b from-white via-[#E0E0E0] to-[#707070] bg-clip-text text-transparent">
          One Business. One Ecosystem
        </h2>

        {/* Subtitle */}
        <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 font-normal max-w-xl mx-auto mb-10">
          Marketing alone won't build you. Neither will a website, or SEO.
        </p>

        {/* Bottom Rectangular Tag Boxes */}
        <div className="w-full max-w-[800px] flex justify-between items-center gap-4 sm:gap-6 mb-10 flex-wrap sm:flex-nowrap">
          {/* Automation */}
          <div className={boxBaseClass}>
            Automation
          </div>

          {/* Search */}
          <div className={boxBaseClass}>
            Search
          </div>

          {/* Conversion */}
          <div className={boxBaseClass}>
            Conversion
          </div>
        </div>

        {/* Bottom Link Box */}
        <div>
          <Link
            to="/contact_us"
            className="inline-block py-3 px-8 bg-black border border-[#2B3E94]/60 font-[Poppins] text-[16px] sm:text-[18px] font-normal text-[#3C4BBF] hover:text-[#2BB3FF] hover:border-[#2BB3FF] hover:shadow-[0_0_24px_rgba(43,179,255,0.35)] transition-all duration-300"
          >
            connected, not scattered
          </Link>
        </div>

      </div>
    </section>
  );
}
