import React from "react";
import ServicesWaveGraphic from "../Graphics/ServicesWaveGraphic";

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      {/* Heading aligned with global container */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 mb-12">
        <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.08] tracking-tight">
          Everything Your Growth
          <br />
          <span className="text-[#606060]">
            Needs. One Roof.
          </span>
        </h2>
      </div>

      {/* Full-Width Edge-to-Edge Continuous Wave System */}
      <div className="w-full relative z-10">
        <ServicesWaveGraphic />
      </div>
    </section>
  );
}
