import React from "react";
import { Link } from "react-router";
import IndustryBlueprintGraphic from "../Graphics/IndustryBlueprintGraphic";

export default function IndustriesSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Row */}
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
                className="inline-flex items-center gap-1.5 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-colors duration-200 group"
              >
                <span className="text-white">Tell Us</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-colors duration-200 ml-1">
                  About Your Business
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Overlapping Interconnected Geometric Blueprint Graphic */}
        <IndustryBlueprintGraphic />

      </div>
    </section>
  );
}
