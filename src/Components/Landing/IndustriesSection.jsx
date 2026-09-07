import React, { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import IndustryBlueprintGraphic from "../Graphics/IndustryBlueprintGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".industry-graphic-parallax",
        { y: 8 },
        {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="industries"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="blueprint-spotlight-zone relative w-full overflow-hidden py-20 lg:py-28 bg-black"
    >
      {/* Subtle Atmospheric Cosmic Depth */}
      <div className="absolute inset-0 m-auto w-[700px] h-[450px] rounded-full bg-[#142055]/14 blur-[160px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Row (Static Typography) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-16">
          
          {/* Left: 3-line Heading */}
          <div className="w-full lg:w-[50%]">
            <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.1] tracking-tight">
              Built Around Your
              <br />
              Business. Not a
              <br />
              <span className="text-[#606060]">
                Template.
              </span>
            </h2>
          </div>

          {/* Right: Description & CTA */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center pt-1">
            <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.6] mb-4">
              Every industry moves differently.
              <br />
              So do we.
            </p>
            <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.6] mb-6">
              Don't see yours? If you've got a
              <br />
              business or a growth problem —
              <br />
              we'll build around it.
            </p>
            <div>
              <Link
                to="/contact_us"
                className="inline-flex items-center gap-2 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-all duration-300 group hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#2BB3FF] rounded"
              >
                <span className="text-white">Tell Us</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] group-hover:drop-shadow-[0_0_8px_rgba(43,179,255,0.6)] transition-all duration-300">
                  About Your Business
                </span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Overlapping Interconnected Geometric Blueprint Graphic with Subtle Parallax */}
        <div className="industry-graphic-parallax w-full">
          <IndustryBlueprintGraphic />
        </div>

      </div>
    </section>
  );
}
