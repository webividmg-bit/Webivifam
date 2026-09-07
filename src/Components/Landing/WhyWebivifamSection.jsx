import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WireframeGlobeGraphic from "../Graphics/WireframeGlobeGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function WhyWebivifamSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".globe-atmosphere-parallax",
        { y: 10, scale: 0.98, opacity: 0.85 },
        {
          y: -10,
          scale: 1.02,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="why-us" ref={containerRef} className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      {/* Deep Atmospheric Glow Patch */}
      <div className="absolute inset-0 m-auto w-[650px] h-[450px] rounded-full bg-[#1A2870]/14 blur-[160px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        
        {/* Top Label (Static) */}
        <h3 className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-3 bg-gradient-to-b from-white via-[#E0E0E0] to-[#707070] bg-clip-text text-transparent">
          Why WEBIVIFAM
        </h3>

        {/* Centered Heading (Static) */}
        <h2 className="font-[Poppins] font-bold text-2xl sm:text-3xl lg:text-[38px] text-white leading-tight mb-6 bg-gradient-to-b from-white via-[#E0E0E0] to-[#808080] bg-clip-text text-transparent">
          We're Not Another Vendor on Your List.
        </h2>

        {/* Body Text (Static) */}
        <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.65] max-w-xl mx-auto mb-14 font-normal">
          Strategy before execution. Tech with a purpose, not a buzzword.
          <br />
          Marketing tied to revenue, not vanity metrics. Systems built to make
          <br />
          your business stronger — not dependent on us.
        </p>

        {/* 3D Wireframe Globe Graphic with Atmospheric Scroll Emergence */}
        <div className="globe-atmosphere-parallax flex items-center justify-center">
          <WireframeGlobeGraphic />
        </div>

      </div>
    </section>
  );
}
