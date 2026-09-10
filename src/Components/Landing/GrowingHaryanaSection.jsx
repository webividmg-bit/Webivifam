import React from "react";
import { Link } from "react-router";
import TreeRootsGraphic from "../Graphics/TreeRootsGraphic";

export default function GrowingHaryanaSection() {
  return (
    <section id="growing-haryana" className="relative w-full overflow-hidden pt-20 lg:pt-28 pb-0 bg-black">
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

          {/* CTA Button styled with the exact same blue color (#2c378a) as the Roadmap steps */}
          <div className="relative z-10 pb-8 sm:pb-14">
            <Link
              to="/contact_us"
              style={{ backgroundColor: "#2c378a" }}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 font-[Poppins] font-medium text-[16px] sm:text-[17px] text-white bg-[#2c378a] border border-transparent hover:border-[#2BB3FF] transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(44,55,138,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2BB3FF]"
            >
              <span>Start Your Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
