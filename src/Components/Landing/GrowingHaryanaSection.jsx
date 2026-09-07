import React from "react";
import { Link } from "react-router";
import TreeRootsGraphic from "../Graphics/TreeRootsGraphic";

export default function GrowingHaryanaSection() {
  return (
    <section className="relative w-full overflow-hidden pt-20 lg:pt-28 pb-0 bg-black">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        
        {/* Centered Heading */}
        <div className="mb-12">
          <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.08] tracking-tight bg-gradient-to-b from-white via-[#E0E0E0] to-[#909090] bg-clip-text text-transparent">
            Growing From Haryana.
          </h2>
          <h2 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight mt-1 text-[#606060]">
            Built for Everywhere.
          </h2>
        </div>

        {/* Tree Root Flowing Vector Graphic System */}
        <div className="relative w-full max-w-[850px] min-h-[440px] flex flex-col items-center justify-start">
          
          {/* SVG Converging Branch Lines flowing straight down into footer */}
          <TreeRootsGraphic />

          {/* Body Text */}
          <div className="relative z-10 pt-24 pb-12">
            <p className="font-[Poppins] text-base sm:text-lg lg:text-[18px] text-gray-200 font-normal leading-[1.65] max-w-md mx-auto">
              Execution that scales globally.
              <br />
              Understand the business. Build
              <br />
              the system. Create real growth.
            </p>
          </div>

          {/* CTA Link */}
          <div className="relative z-10 pb-14">
            <Link
              to="/contact_us"
              className="inline-flex items-center gap-1.5 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-colors duration-200 group"
            >
              <span className="text-white">Start Your</span>
              <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-colors duration-200 ml-1">
                Project
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
