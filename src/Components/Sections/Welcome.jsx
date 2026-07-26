import React, { useRef } from "react";
import { Link } from "react-router";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Components
import Line from "../Common/Line";
import Button from "../Common/Buttons/Button";

function Welcome() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".welcome-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".welcome-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".welcome-content p",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".welcome-buttons",
          {
            y: 25,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1350px] px-6 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="welcome-heading mx-auto max-w-[820px] lg:mx-0">
          <h2
            className="
            mb-5
            bg-gradient-to-b
            from-white
            via-[#D8D8D8]
            to-[#4D4D4D]
            bg-clip-text
            text-transparent
            font-[Poppins]
            font-bold
            leading-tight
            text-3xl
            sm:text-4xl
            lg:text-[48px]
            text-center
            lg:text-left
          "
          >
            Why Businesses Choose WEBIVIFAM
          </h2>
        </div>

        {/* Accent Line */}
        <Line className="welcome-line mx-auto lg:ml-0 mb-10 lg:mb-12" />

        {/* Description */}
        <div
          className="
          welcome-content
          mx-auto
          max-w-[900px]
          space-y-6
          lg:mx-0
          text-center
          lg:text-left
        "
        >
          <p
            className="
            font-[Poppins]
            text-base
            sm:text-[17px]
            lg:text-[18px]
            leading-8
            lg:leading-[36px]
            text-gray-300
          "
          >
            At WEBIVIFAM, every project is approached with a long-term vision.
            We believe sustainable growth comes from aligning branding,
            technology, SEO, marketing, and customer experience into one
            powerful ecosystem.
          </p>

          <p
            className="
            font-[Poppins]
            text-base
            sm:text-[17px]
            lg:text-[18px]
            leading-8
            lg:leading-[36px]
            text-gray-300
          "
          >
            Our team works closely with every client to understand their goals,
            challenges, and market opportunities before developing customized
            strategies that create real business impact.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="
          welcome-buttons
          mt-10
          lg:mt-12
          flex
          flex-col
          sm:flex-row
          lg:justify-start
          items-start
          lg:items-center
          gap-4
          sm:gap-6
        "
        >
        <Link to="/about_us">
          <Button className="w-fit cursor-pointer sm:w-auto">Learn More</Button>
        </Link>

        <Link to="/contact_us">
          <Button className="cursor-pointer sm:w-auto">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
