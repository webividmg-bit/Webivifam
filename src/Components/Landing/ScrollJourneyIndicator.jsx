import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "transformation", label: "Transformation" },
  { id: "roadmap", label: "Growth Roadmap" },
  { id: "industries", label: "Industries" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "seo", label: "Search & SEO" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Global Reach" },
  { id: "growing-haryana", label: "Growth" },
];

export default function ScrollJourneyIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      SECTIONS.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex((prev) => (prev !== index ? index : prev));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section Wayfinding"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none pointer-events-auto"
    >
      <div className="relative flex flex-col items-center py-2">
        {/* Background Vertical Line */}
        <div className="absolute top-2 bottom-2 w-[1px] bg-[#1C264D]/60" />

        {/* Progress Line */}
        <div
          className="absolute top-2 w-[1.5px] bg-gradient-to-b from-[#2BB3FF] to-[#3C4BBF] transition-all duration-500 ease-out"
          style={{
            height: `${(activeIndex / (SECTIONS.length - 1)) * 100}%`,
          }}
        />

        {/* Section Nodes */}
        <div className="flex flex-col gap-5 relative z-10">
          {SECTIONS.map((section, idx) => {
            const isActive = activeIndex === idx;
            const isPassed = activeIndex > idx;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                aria-label={`Scroll to ${section.label}`}
                className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2BB3FF] rounded-full"
              >
                {/* Visual Dot */}
                <div
                  className={`
                    rounded-full transition-all duration-300 ease-out
                    ${
                      isActive
                        ? "w-2.5 h-2.5 bg-[#2BB3FF] shadow-[0_0_12px_#2BB3FF] scale-125"
                        : isPassed
                        ? "w-1.5 h-1.5 bg-[#3C4BBF]/90"
                        : "w-1.5 h-1.5 bg-[#1E2952] group-hover:bg-[#3C4BBF] group-hover:scale-110"
                    }
                  `}
                />

                {/* Subtle Hover Tooltip Label */}
                <span className="absolute right-6 px-2.5 py-1 text-[11px] font-[Poppins] tracking-wider uppercase whitespace-nowrap rounded bg-[#090C1A]/90 border border-[#2B3E94]/40 text-gray-300 opacity-0 pointer-events-none translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
