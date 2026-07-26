import React, { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Components
import NavBar from "./Common/NavBar";
import Button from "../Common/Buttons/Button";

import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_CONTENT = [
  {
    title1: "Rank Your Website",
    title2: "On 1st Page",
    title3: "Of Google Search",
    description:
      "If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. As its name illuminates, Digital Marketing King is a leading & the Best Digital Marketing Agency In India rendering success-proven business solutions worldwide.",
    buttonText: "Learn More",
    image: "/Images/immmg.png",
  },
  {
    title1: "Rank Your Website",
    title2: "On 1st Page",
    title3: "Of Google Search",
    description:
      "If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. As its name illuminates, Digital Marketing King is a leading & the Best Digital Marketing Agency In India rendering success-proven business solutions worldwide.",
    buttonText: "Learn More",
    image: "/Images/immmg.png",
  },
  {
    title1: "Rank Your Website",
    title2: "On 1st Page",
    title3: "Of Google Search",
    description:
      "If your ultimate business goal is to generate numerous leads quickly, you've come to the right place. As its name illuminates, Digital Marketing King is a leading & the Best Digital Marketing Agency In India rendering success-proven business solutions worldwide.",
    buttonText: "Learn More",
    image: "/Images/immmg.png",
  },
];

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

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Animates Slider
  useGSAP(() => {
    if (isAnimatingSlider || !trackRef.current) return;
    setIsAnimationSlider(true);

    gsap.to(trackRef.current, {
      xPercent: -100 * current,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        // setIsAnimationSlider(false);
        // if (!intervalRef.current) startAutoSlide();
      },
    });
  }, [current]);

  // Animates Slides Elements
  // useGSAP(() => {
  //   if (!trackRef.current) return;

  //   const activeSlide = trackRef.current.querySelector(
  //     '.hero-slide[data-active="true"]',
  //   );

  //   if (!activeSlide) return;

  //   const tl = gsap.timeline();

  //   tl.from(activeSlide.querySelector(".hero-title1"), {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.5,
  //     ease: "power3.out",
  //   })
  //     .from(
  //       activeSlide.querySelector(".hero-title2"),
  //       {
  //         y: 50,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //       },
  //       "-=0.35",
  //     )
  //     .from(
  //       activeSlide.querySelector(".hero-title3"),
  //       {
  //         y: 50,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //       },
  //       "-=0.35",
  //     )
  //     .from(
  //       activeSlide.querySelector(".hero-description"),
  //       {
  //         y: 30,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //       },
  //       "-=0.3",
  //     )
  //     .from(
  //       activeSlide.querySelector(".hero-button"),
  //       {
  //         y: 20,
  //         opacity: 0,
  //         scale: 0.9,
  //         duration: 0.4,
  //         ease: "back.out(1.7)",
  //       },
  //       "-=0.25",
  //     )
  //     .from(
  //       activeSlide.querySelector(".hero-image"),
  //       {
  //         x: 80,
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: "power3.out",
  //       },
  //       "-=0.6",
  //     );
  // }, [current]);

  // useEffect(() => {
  //   startAutoSlide();
  //   return () => stopAutoSlide();
  // }, []);

  return (
    <div className="w-full h-fit min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Glow */}
      {/* <div className="hidden lg:block absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] aspect-square rounded-full blur-[100px] bg-gradient-to-b from-[#5B6DFF] to-[#3C4BBFB2]" />
      <div className="hidden lg:block absolute -top-[1200px] left-1/2 -translate-x-1/2 w-[1800px] aspect-square rounded-full bg-black" /> */}

      {/* NAVBAR */}
      <NavBar />

      {/* HERO */}
      <section className="relative z-10 flex-1 flex items-center overflow-hidden py-10 lg:py-0">
        <div ref={trackRef} className="min-w-screen flex">
          {HERO_CONTENT.map((hero, index) => (
            <div
              key={index}
              data-active={index === current}
              className="
              hero-slide
              min-w-full
              flex
              flex-col-reverse
              lg:flex-row
              items-center
              justify-center
              gap-10
              lg:gap-20
              px-6
              sm:px-10
              lg:px-16
              xl:px-24
              text-center
              lg:text-left
              "
            >
              {/* LEFT CONTENT */}
              <div className="w-full max-w-xl mr-auto">
                <h1 className="hero-title1 text-4xl sm:text-5xl lg:text-[64px] font-[Poppins] font-bold leading-none -mb-4 text-white">
                  {hero.title1}
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
                  {hero.title2}
                </h2>

                <h3 className="hero-title3 text-3xl sm:text-4xl lg:text-[48px] font-[Poppins] font-bold -mt-2 leading-none text-white">
                  {hero.title3}
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
                  {hero.description}
                </p>

                <div className="hero-button mt-8 flex justify-center lg:justify-start">
                  <Button className="cursor-pointer">{hero.buttonText}</Button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-image relative flex items-center justify-center w-full lg:w-auto">
                <div
                  className="absolute 
                  w-[260px]
                  h-[260px]
                  sm:h-[360px]
                  sm:w-[360px]
                  lg:h-[500px]
                  lg:w-[500px] 
                  rounded-full 
                  bg-[#3C4BBF30] 
                  blur-[100px] "
                />

                {/* <img
                  src={hero.image}
                  alt={hero.title1}
                  className="relative
                  z-10
                  w-[280px]
                  sm:w-[400px]
                  md:w-[500px]
                  lg:w-[560px]
                  object-contain
                  rounded-3xl"
                /> */}

                {/* <video
                  muted
                  autoPlay
                  loop
                  src={"/Vid.mp4"}
                  className="relative
                  z-10
                  -mt-10
                  w-[280px]
                  sm:w-[400px]
                  md:w-[500px]
                  lg:w-[560px]
                  object-contain
                  rounded-3xl"
                ></video> */}
              </div>
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        {/* <button
          onClick={() => changeSlide("prev")}
          className="p-1 lg:p-2 absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 text-5xl text-white cursor-pointer transition-all duration-300 ease-out hover:-translate-x-1 hover:text-gray-300 active:scale-95 border border-white rounded-full"
        >
          <ChevronLeft />
        </button> */}
        {/* Right Arrow */}
        {/* <button
          onClick={() => changeSlide("next")}
          className="p-1 lg:p-2 absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 text-5xl text-white cursor-pointer transition-all duration-300 ease-out hover:-translate-x-1 hover:text-gray-300 active:scale-95 border border-white rounded-full"
        >
          <ChevronRight />
        </button> */}
      </section>

      <video
        autoPlay
        muted
        loop
        className="w-screen h-screen absolute top-1/2 left-1/2 -translate-x-1/2
       -translate-y-1/2 object-cover"
        src="/Images/vid.mp4"
      ></video>
    </div>
  );
}
