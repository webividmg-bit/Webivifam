import React, { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import InfinityGraphic from "../Graphics/InfinityGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function TransformationSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".infinity-graphic-parallax",
        { y: 10 },
        {
          y: -10,
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
    <section id="transformation" ref={containerRef} className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      {/* Subtle Atmospheric Cosmic Glow */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[520px] h-[340px] rounded-full bg-[#1A2560]/14 blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Heading + Infinity Curve Graphic */}
          <div className="w-full lg:w-[50%] flex flex-col items-start">
            
            {/* Heading with "BUSINESS" Blue Highlight Box */}
            <div className="mb-10">
              <h2 className="font-[Poppins] font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-wide leading-tight">
                LET'S TRANSFORM YOUR
              </h2>
              <div className="mt-2 inline-block bg-[#3C4BBF] px-4 py-1">
                <span className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-wide leading-tight">
                  BUSINESS
                </span>
              </div>
            </div>

            {/* Infinity Figure-8 Vector Curve Graphic with Subtle Scroll Response */}
            <div className="infinity-graphic-parallax w-full">
              <InfinityGraphic />
            </div>
          </div>

          {/* Right Column: Body Paragraph + Link */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center">
            <p className="font-[Poppins] text-[18px] sm:text-[19px] lg:text-[21px] leading-[1.65] text-gray-200 font-normal mb-8 max-w-lg">
              Not another agency delivering posts and campaigns. A system where
              strategy, tech, and marketing work as one — built for your business,
              not a template.
            </p>

            <div>
              <Link
                to="/contact_us"
                className="inline-flex items-center gap-2 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-all duration-300 group hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#2BB3FF] rounded"
              >
                <span className="text-white">Build My</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] group-hover:drop-shadow-[0_0_8px_rgba(43,179,255,0.6)] transition-all duration-300">
                  Growth Roadmap
                </span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
