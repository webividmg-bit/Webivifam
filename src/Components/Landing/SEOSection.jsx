import React, { useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEOBlueprintGraphic from "../Graphics/SEOBlueprintGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function SEOSection() {
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
        ".seo-graphic-parallax",
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
      id="seo"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="blueprint-spotlight-zone relative w-full overflow-hidden py-20 lg:py-28 bg-black"
    >
      {/* Subtle Atmospheric Cosmic Depth */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[360px] rounded-full bg-[#162258]/14 blur-[150px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Heading, Paragraphs & CTA (Static Typography) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-between py-2">
            <div>
              <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.08] tracking-tight mb-10">
                Be Visible
                <br />
                Where Search
                <br />
                <span className="text-[#606060]">
                  Is Heading.
                </span>
              </h2>

              <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.65] mb-14 max-w-sm">
                Search isn't ten blue links
                <br />
                anymore. It's Google, AI answers,
                <br />
                maps, and conversation.
              </p>
            </div>

            <div>
              <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.65] mb-6 max-w-sm">
                Don't chase rankings. Build a
                <br />
                presence worth finding.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-all duration-300 group hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-[#2BB3FF] rounded"
              >
                <span className="text-white">Explore Our</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] group-hover:drop-shadow-[0_0_8px_rgba(43,179,255,0.6)] transition-all duration-300">
                  SEO &amp; GEO Solutions
                </span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Blueprint System Graphic with Subtle Parallax */}
          <div className="seo-graphic-parallax w-full lg:w-[56%]">
            <SEOBlueprintGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
