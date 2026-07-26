import React, { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import NavBar from "./Common/NavBar";
import Button from "../Common/Buttons/Button";

export default function Hero() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [isAnimatingSlider, setIsAnimationSlider] = useState(false);

  const changeSlide = (direction) => {
    stopAutoSlide();

    let index =
      direction === "next"
        ? (current + 1) % HERO_CONTENT.length
        : (current - 1 + HERO_CONTENT.length) % HERO_CONTENT.length;

    setCurrent(index);
  };

  const startAutoSlide = () => {
    stopAutoSlide(); // Prevent duplicate intervals

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000);
  };

  return (
    <div className="w-full h-fit min-h-screen flex flex-col relative overflow-hidden">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO */}
      <section className="relative z-10 flex-1 flex items-center overflow-hidden py-10 lg:py-0">
        <div className="min-w-screen px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="w-full max-w-xl mr-auto ">
            <h1 className="hero-title1 text-4xl sm:text-5xl lg:text-[64px] font-[Poppins] font-bold leading-none -mb-4 text-white">
              Rank Your Website
            </h1>

            <h2
              className="
                  mt-1.5 lg:mt-0
                  hero-title2 
                  text-4xl
                  sm:text-5xl
                  lg:text-[62px]
                  leading-tight
                  lg:leading-[85px]
                  font-[Poppins]
                  font-bold
                  leading-[85px]
                  bg-gradient-to-b
                  from-white
                  via-[#D8D8D8]
                  to-[#4D4D4D]
                  bg-clip-text
                  text-transparent
                "
            >
              On 1st Page
            </h2>

            <h3 className="hero-title3 text-3xl sm:text-4xl lg:text-[48px] font-[Poppins] font-bold -mt-2 leading-none text-white">
              Of Google Search
            </h3>

            <p
              className="hero-description 
                  mt-6
                  max-w-xl
                  mx-auto
                  lg:mx-0
                  text-base
                  lg:text-lg
                  leading-8 
                  text-gray-300"
            >
              If your ultimate business goal is to generate numerous leads
              quickly, you've come to the right place. As its name illuminates,
              Digital Marketing King is a leading & the Best Digital Marketing
              Agency In India rendering success-proven business solutions
              worldwide.
            </p>

            <div className="hero-button mt-8 flex justify-center lg:justify-start">
              <Button className="cursor-pointer">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Background Video  */}
      <video
        loop
        muted
        autoPlay
        className="w-screen h-screen absolute top-1/2 left-1/2 -translate-x-1/2
       -translate-y-1/2 object-cover z-0 opacity-30"
        src="/Videos/hero.mp4"
      ></video>
    </div>
  );
}
