import React from "react";
import NavBar from "../Sections/Common/NavBar";
import HeroNetworkGraphic from "../Graphics/HeroNetworkGraphic";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[720px] lg:min-h-screen flex flex-col bg-black relative overflow-hidden">
      {/* Top Navigation */}
      <NavBar />

      {/* Hero Body aligned with global grid max-w-[1280px] */}
      <section className="relative flex-1 flex items-center justify-between w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-4 pb-16 lg:pb-24 z-10">
        
        {/* Left Column: Typography */}
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

        {/* Right Concentric Radial Backdrop & 3D Spheres Graphic */}
        <HeroNetworkGraphic />

      </section>
    </div>
  );
}
