import React from "react";
import WireframeGlobeGraphic from "../Graphics/WireframeGlobeGraphic";

export default function WhyWebivifamSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        
        {/* Top Label */}
        <h3 className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-3 bg-gradient-to-b from-white via-[#E0E0E0] to-[#707070] bg-clip-text text-transparent">
          Why WEBIVIFAM
        </h3>

        {/* Centered Heading */}
        <h2 className="font-[Poppins] font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-tight mb-6 bg-gradient-to-b from-white via-[#E0E0E0] to-[#808080] bg-clip-text text-transparent">
          We're Not Another Vendor on Your List.
        </h2>

        {/* Body Text */}
        <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.65] max-w-xl mx-auto mb-14 font-normal">
          Strategy before execution. Tech with a purpose, not a buzzword.
          <br />
          Marketing tied to revenue, not vanity metrics. Systems built to make
          <br />
          your business stronger — not dependent on us.
        </p>

        {/* 3D Tilted Wireframe Spherical Globe Graphic */}
        <WireframeGlobeGraphic />

      </div>
    </section>
  );
}
