import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Client Logos in public/logos with Company Names & Per-Logo Visual Optimizations
const LOGOS = [
  {
    id: 1,
    name: "AAforce Demolition",
    src: "/logos/1.png",
    alt: "AAforce Demolition",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-[#EAB308]",
  },
  {
    id: 2,
    name: "Spreevo",
    src: "/logos/2.png",
    alt: "Spreevo",
    imgClass: "scale-[1.7] object-cover group-hover:scale-[1.8]",
    bgClass: "bg-white",
  },
  {
    id: 3,
    name: "Brokyfy",
    src: "/logos/3.png",
    alt: "Brokyfy",
    imgClass: "scale-[1.8] object-cover group-hover:scale-[1.9]",
    bgClass: "bg-[#4138C2]",
  },
  {
    id: 4,
    name: "Devyuga",
    src: "/logos/4.png",
    alt: "Devyuga",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-[#c4ccd6]",
  },
  {
    id: 5,
    name: "Arbomeric",
    src: "/logos/5.png",
    alt: "Arbomeric",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-white",
  },
  {
    id: 6,
    name: "Hirely",
    src: "/logos/6.png",
    alt: "Hirely",
    imgClass: "scale-[1.85] object-contain group-hover:scale-[1.95]",
    bgClass: "bg-white",
  },
  // Duplicate set to guarantee seamless infinite loop & 3D panoramic depth
  {
    id: 7,
    name: "AAforce Demolition",
    src: "/logos/1.png",
    alt: "AAforce Demolition",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-[#EAB308]",
  },
  {
    id: 8,
    name: "Spreevo",
    src: "/logos/2.png",
    alt: "Spreevo",
    imgClass: "scale-[1.7] object-cover group-hover:scale-[1.8]",
    bgClass: "bg-white",
  },
  {
    id: 9,
    name: "Brokyfy",
    src: "/logos/3.png",
    alt: "Brokyfy",
    imgClass: "scale-[1.8] object-cover group-hover:scale-[1.9]",
    bgClass: "bg-[#4138C2]",
  },
  {
    id: 10,
    name: "Devyuga",
    src: "/logos/4.png",
    alt: "Devyuga",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-[#c4ccd6]",
  },
  {
    id: 11,
    name: "Arbomeric",
    src: "/logos/5.png",
    alt: "Arbomeric",
    imgClass: "scale-[1.65] object-cover group-hover:scale-[1.75]",
    bgClass: "bg-white",
  },
  {
    id: 12,
    name: "Hirely",
    src: "/logos/6.png",
    alt: "Hirely",
    imgClass: "scale-[1.85] object-contain group-hover:scale-[1.95]",
    bgClass: "bg-white",
  },
];

export default function LogoStorySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef(
    Autoplay({
      playOnInit: true,
      delay: 1350, // Snappy auto-scroll cadence
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      skipSnaps: false,
      duration: 25,
    },
    [autoplayRef.current]
  );

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Calculate circular distance from selected index to apply smooth 3D transform without wrap jumps
  const getCardTransformStyle = (index) => {
    const total = LOGOS.length;
    let diff = (index - selectedIndex + total) % total;
    if (diff > total / 2) diff -= total; // e.g. -2, -1, 0, 1, 2

    const absDiff = Math.abs(diff);

    if (absDiff === 0) {
      // Center active card - prominent cyan glow
      return {
        transform: "perspective(1000px) rotateY(0deg) scale(1.06)",
        zIndex: 30,
        opacity: 1,
        borderColor: "rgba(43, 179, 255, 0.85)", // #2BB3FF
        boxShadow: "0 0 28px rgba(43, 179, 255, 0.4), inset 0 0 16px rgba(43, 179, 255, 0.12)",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out",
      };
    } else if (absDiff === 1) {
      // Adjacent left/right
      const rotation = diff > 0 ? -14 : 14;
      return {
        transform: `perspective(1000px) rotateY(${rotation}deg) scale(0.94)`,
        zIndex: 20,
        opacity: 0.9,
        borderColor: "rgba(60, 75, 191, 0.55)", // #3C4BBF
        boxShadow: "0 0 16px rgba(43, 179, 255, 0.16)",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out",
      };
    } else if (absDiff === 2) {
      // Outer visible wings
      const rotation = diff > 0 ? -22 : 22;
      return {
        transform: `perspective(1000px) rotateY(${rotation}deg) scale(0.85)`,
        zIndex: 10,
        opacity: 0.6,
        borderColor: "rgba(43, 62, 148, 0.4)", // #2B3E94
        boxShadow: "0 0 10px rgba(43, 62, 148, 0.12)",
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out",
      };
    } else {
      // Offscreen loop wrap-around cards: fully hidden and no transform animation to eliminate snap/jump artifacts
      const rotation = diff > 0 ? -28 : 28;
      return {
        transform: `perspective(1000px) rotateY(${rotation}deg) scale(0.75)`,
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
        borderColor: "transparent",
        boxShadow: "none",
        transition: "opacity 0.2s ease-out", // only fade opacity, no transform transition during wrap jump
      };
    }
  };

  return (
    <section
      id="growth-story"
      className="relative w-full overflow-hidden py-14 lg:py-20 bg-black select-none"
    >
      {/* Deep Atmospheric Cosmic Blue Glow Background */}
      <div className="absolute inset-0 m-auto w-[650px] h-[350px] rounded-full bg-[#1A2870]/18 blur-[150px] pointer-events-none -z-0" />
      <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[400px] h-[180px] rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8 text-center">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-semibold mb-3 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Client Portfolio
          </span>

          <h2 className="font-[Poppins] font-bold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight mb-2.5 bg-gradient-to-b from-white via-[#E0E0E0] to-[#707070] bg-clip-text text-transparent leading-tight max-w-2xl">
            Behind every logo is a growth story
          </h2>

          <p className="font-[Poppins] text-xs sm:text-[15px] text-slate-300 max-w-lg mx-auto leading-relaxed">
            Empowering innovative brands, scaling ventures, and driving real-world digital transformations.
          </p>
        </div>

        {/* 3D Panoramic Cylinder Capsule Container */}
        <div className="relative w-full mx-auto px-3 sm:px-8 py-6 sm:py-8 rounded-[28px] sm:rounded-[44px] border border-[#2B3E94]/80 bg-gradient-to-r from-[#0c1538]/85 via-[#060c22]/95 to-[#0c1538]/85 backdrop-blur-2xl shadow-[0_0_45px_rgba(43,179,255,0.15),inset_0_0_30px_rgba(43,179,255,0.06)] overflow-hidden">

          {/* Top & Bottom Specular Lens Flares */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2.5px] bg-gradient-to-r from-transparent via-[#2BB3FF] to-transparent shadow-[0_0_15px_#2BB3FF,0_0_30px_#3C4BBF]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white blur-[1.5px] shadow-[0_0_20px_#fff,0_0_35px_#2BB3FF]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1.5px] bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent shadow-[0_0_12px_#2BB3FF]" />

          {/* Side Curved Rim Lighting */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-950/25 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cyan-950/25 via-transparent to-transparent pointer-events-none" />

          {/* Left Arrow Button */}
          <button
            onClick={scrollPrev}
            aria-label="Previous logo"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#060C22]/90 border border-[#2B3E94] text-cyan-300 transition-all duration-300 hover:scale-110 hover:border-[#2BB3FF] hover:bg-[#0c1538] hover:text-white hover:shadow-[0_0_20px_rgba(43,179,255,0.5)] cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 -translate-x-0.5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            aria-label="Next logo"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#060C22]/90 border border-[#2B3E94] text-cyan-300 transition-all duration-300 hover:scale-110 hover:border-[#2BB3FF] hover:bg-[#0c1538] hover:text-white hover:shadow-[0_0_20px_rgba(43,179,255,0.5)] cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 translate-x-0.5" />
          </button>

          {/* Carousel Viewport with Edge Fade Mask to Prevent Pop-In */}
          <div
            ref={emblaRef}
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
            className="overflow-hidden w-full cursor-grab active:cursor-grabbing py-3 [perspective:1200px]"
          >
            <div className="flex items-center">
              {LOGOS.map((logo, index) => {
                const cardStyle = getCardTransformStyle(index);

                return (
                  <div
                    key={`${logo.id}-${index}`}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    className="min-w-0 shrink-0 grow-0 basis-[58%] sm:basis-[36%] md:basis-[25%] lg:basis-[18.5%] px-2 sm:px-2.5 cursor-pointer"
                  >
                    <div
                      style={cardStyle}
                      className="relative w-full h-[138px] sm:h-[150px] md:h-[162px] rounded-xl sm:rounded-2xl border bg-gradient-to-b from-[#0c1538]/90 via-[#070d24]/95 to-[#030612] p-2.5 sm:p-3 flex flex-col items-center justify-center gap-2 backdrop-blur-xl group"
                    >
                      {/* Subdued Inner Radial Glow */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-radial from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Scaled Circular Logo Emblem Badge */}
                      <div
                        className={`relative z-10 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full ${logo.bgClass || "bg-white"} flex items-center justify-center p-1 sm:p-1.5 shadow-[0_0_18px_rgba(43,179,255,0.22)] border-2 border-cyan-400/40 group-hover:border-cyan-300 group-hover:shadow-[0_0_24px_rgba(43,179,255,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden shrink-0`}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`w-full h-full ${logo.imgClass || "object-contain scale-110 sm:scale-115 group-hover:scale-120"} filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] transition-transform duration-300`}
                        />
                      </div>

                      {/* Company Name Label */}
                      <span className="relative z-10 font-[Poppins] font-medium text-xs sm:text-[13px] text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 tracking-wide truncate max-w-full text-center">
                        {logo.name}
                      </span>
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
