import React from "react";
import { Link } from "react-router";
import SEOBlueprintGraphic from "../Graphics/SEOBlueprintGraphic";

export default function SEOSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28 bg-black">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Heading, Paragraphs & CTA */}
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
                className="inline-flex items-center gap-1.5 font-[Poppins] text-[17px] sm:text-[18px] font-normal transition-colors duration-200 group"
              >
                <span className="text-white">Explore Our</span>
                <span className="text-[#3C4BBF] group-hover:text-[#2BB3FF] transition-colors duration-200 ml-1">
                  SEO &amp; GEO Solutions
                </span>
              </Link>
            </div>
          </div>

          {/* Right Blueprint System Graphic */}
          <SEOBlueprintGraphic />

        </div>
      </div>
    </section>
  );
}
