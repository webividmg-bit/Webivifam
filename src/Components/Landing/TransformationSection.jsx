import React from "react";
import { Link } from "react-router";
import InfinityGraphic from "../Graphics/InfinityGraphic";

export default function TransformationSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
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

            {/* Infinity Figure-8 Vector Curve Graphic */}
            <InfinityGraphic />
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
                className="inline-flex items-center gap-1.5 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-colors duration-200 group"
              >
                <span className="text-white">Build My</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-colors duration-200 ml-1">
                  Growth Roadmap
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
