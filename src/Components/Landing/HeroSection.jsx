import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NavBar from "../Sections/Common/NavBar";
import HeroNetworkGraphic from "../Graphics/HeroNetworkGraphic";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Subtle Hero Graphic Parallax & Dissolution into Section 2
      gsap.to(".hero-graphic-parallax", {
        y: -35,
        scale: 0.96,
        opacity: 0.75,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      id="hero"
      ref={containerRef}
      className="hero-section-root w-full min-h-[720px] lg:min-h-screen flex flex-col bg-black relative overflow-hidden"
    >
      {/* Background Soft Atmospheric Indigo Depth */}
      <div className="absolute right-[5%] top-[10%] w-[650px] h-[550px] rounded-full bg-[#142258]/18 blur-[160px] pointer-events-none -z-0" />

      {/* Top Navigation */}
      <NavBar />

      {/* Hero Body aligned with global grid max-w-[1280px] */}
      <section className="relative flex-1 flex items-center justify-between w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-4 pb-16 lg:pb-24 z-10">
        
        {/* Left Column: Typography (Completely Static) */}
        <div className="w-full lg:w-[48%] z-20 py-4">
          <h1 className="font-[Poppins] font-bold text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.1] tracking-tight">
            AI-Powered Digital
            <br />
            <span className="bg-gradient-to-b from-white via-[#E0E0E0] to-[#606060] bg-clip-text text-transparent">
              Growth Agency
            </span>
          </h1>

          <p className="mt-6 font-[Poppins] text-base sm:text-lg lg:text-[20px] text-gray-300 leading-[1.65] font-normal max-w-md">
            Build Smarter. Get
            <br />
            Discovered. Grow Faster.
          </p>
        </div>

        {/* Right Concentric Radial Backdrop & 3D Spheres Graphic with Subtle Scroll Response */}
        <HeroNetworkGraphic className="hero-graphic-parallax" />

      </section>
    </div>
  );
}
