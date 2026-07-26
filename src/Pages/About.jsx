import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Components/Common/Line";
import Mission from "../Components/Sections/Mission";
import Reviews from "../Components/Sections/Reviews";
import Footer from "../Components/Sections/Common/Footer";
import NavBar from "../Components/Sections/Common/NavBar";
import PageHeading from "../Components/Common/PageHeading";
import Team from "../Components/Sections/Team";

function About() {
  const pageRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-bg", {
        scale: 1.15,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          ".hero-title",
          {
            y: 70,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-text p",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35",
        );
    },
    { scope: pageRef },
  );
  return (
    <div ref={pageRef} className="w-full relative overflow-hidden bg-black">
      <div className="w-full min-h-fit relative overflow-hidden">
        <NavBar />

        <PageHeading title={"ABOUT US"} />

        {/* HERO */}
        <section className="hero-section relative overflow-hidden py-16">
          {/* Background */}
          <img
            src="/Images/Bg_1.png"
            alt="Background"
            className="hero-bg absolute inset-0 h-full w-full object-cover opacity-10"
          />

          <div className="relative z-10 mx-auto flex max-w-[1450px] flex-col-reverse items-center gap-14 px-6 sm:px-10 lg:flex-row lg:gap-24 lg:px-20">
            {/* Left */}
            <div className="hero-content flex-1">
              {/* Heading */}
              <div className="hero-title relative z-10 mb-5 flex flex-col items-start sm:gap-2">
                <span
                  className="
                  font-[Poppins]
                  font-bold
                  text-white
                  text-4xl
                  sm:text-5xl
                  "
                >
                  Building Businesses That Deserve to Be Seen,
                </span>

                <span
                  className="
                  bg-gradient-to-b
                  from-white
                  to-[#4D4D4D]
                  bg-clip-text
                  text-transparent
                  font-[Poppins]
                  font-bold
                  text-4xl
                  sm:text-5xl
                  "
                >
                  Trusted, and Chosen.
                </span>
              </div>

              <div className="hero-line my-8">
                <Line />
              </div>

              <div className="hero-text space-y-7">
                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  WEBIVIFAM was founded with a simple belief: businesses
                  shouldn't have to struggle for visibility in a digital world
                  full of noise.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  We are a growth-focused digital agency that combines strategy,
                  creativity, technology, and innovation to help businesses
                  build stronger brands, generate quality leads, and create
                  meaningful customer experiences. Unlike traditional agencies
                  that focus only on services, we focus on outcomes.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  From startups launching their first product to established
                  businesses looking to scale, our mission remains the same—to
                  create digital solutions that drive measurable growth.
                </p>

                <p className="text-base leading-8 text-gray-300 lg:text-lg lg:leading-9">
                  In today's rapidly evolving digital landscape, success
                  requires more than visibility. WEBIVIFAM helps businesses
                  leverage AI, marketing, development, and automation to create
                  meaningful customer experiences, accelerate growth, and stay
                  ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Mission />
      <Team />
      <Reviews />
      <Footer />
    </div>
  );
}

export default About;
