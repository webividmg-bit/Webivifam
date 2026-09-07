import React, { useState, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { id: 1, label: "Discover", align: "justify-end pl-6 sm:pl-16", variant: "solid" },
  { id: 2, label: "Strategize", align: "justify-start pr-4 sm:pr-12", variant: "solid" },
  { id: 3, label: "Build", align: "justify-center px-4 sm:px-8", variant: "outline" },
  { id: 4, label: "Launch", align: "justify-start pr-6 sm:pr-16", variant: "solid" },
  { id: 5, label: "Optimize", align: "justify-center px-4 sm:px-8", variant: "outline" },
  { id: 6, label: "Scale", align: "justify-end pl-4 sm:pl-12", variant: "solid" },
];

export default function GrowthRoadmapSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".roadmap-bg-rects",
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
    <section id="roadmap" ref={containerRef} className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      {/* Subtle Atmospheric Cosmic Depth */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#182860]/12 blur-[150px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Background Blueprint Rectangles with subtle parallax */}
          <svg
            className="roadmap-bg-rects absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="10"
              width="76%"
              height="88%"
              fill="none"
              stroke="#2B3E94"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
            <rect
              x="60"
              y="55"
              width="76%"
              height="88%"
              fill="none"
              stroke="#2B3E94"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />
          </svg>

          {/* Left Column: Heading, Body Text & Link (Static) */}
          <div className="w-full lg:w-[48%] z-10 py-2">
            <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.1] tracking-tight">
              Growth Roadmap
            </h2>

            <p className="mt-3 font-[Poppins] text-lg sm:text-xl text-white font-normal">
              From Idea to Impact.
            </p>

            <p className="mt-8 font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 leading-[1.65] font-normal max-w-sm">
              We map where you are, where you're going,
              <br />
              and build the roadmap to get you there —
              <br />
              then execute it.
            </p>

            <div className="mt-8">
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

          {/* Right Column: Step Ladder with Vertical Rails & Subtle Depth Hover */}
          <div className="w-full lg:w-[48%] z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] flex flex-col items-center py-2">
              
              {/* Vertical Blueprint Connector Rails */}
              <div className="absolute top-2 bottom-2 left-[32%] w-[1.2px] bg-[#2B3E94] pointer-events-none opacity-80" />
              <div className="absolute top-2 bottom-2 right-[32%] w-[1.2px] bg-[#2B3E94] pointer-events-none opacity-80" />

              {/* 6 Steps with subtle depth hover */}
              {STEPS.map((step, idx) => {
                const isHovered = hoveredId === step.id;
                const isDimmed = hoveredId !== null && !isHovered;

                return (
                  <div
                    key={step.id}
                    className={`w-full flex ${step.align} ${idx < STEPS.length - 1 ? "mb-3.5" : ""} relative`}
                    onMouseEnter={() => setHoveredId(step.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div
                      className={`
                        w-[78%] py-3.5 px-6 text-center font-[Poppins] font-medium text-[16px] cursor-default
                        transition-all duration-300 ease-out
                        ${step.variant === "solid" ? "bg-[#3C4BBF] text-white" : "bg-black border border-[#2B3E94] text-white"}
                        ${isHovered ? "scale-[1.03] -translate-y-0.5 shadow-[0_0_24px_rgba(60,75,191,0.55)] border-[#2BB3FF] z-20" : ""}
                        ${isDimmed ? "opacity-75 scale-[0.985] z-10" : "opacity-100 z-10"}
                      `}
                    >
                      {step.label}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
