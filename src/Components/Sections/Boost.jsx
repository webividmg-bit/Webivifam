import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger, useGSAP]);

function Boost() {
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

      tl.from(".boost-left", {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".boost-divider",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".boost-right",
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Wave Background */}
      <img
        src="/Images/Bg_1.png"
        alt="Waves Background"
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />

      <div
        className="
        relative z-10
        mx-auto
        flex
        max-w-[1450px]
        flex-col
        lg:flex-row
        items-center
        lg:items-start
        justify-between
        gap-12
        lg:gap-16
        px-6
        sm:px-10
        lg:px-20
      "
      >
        {/* Left */}
        <div
          className="
          boost-left
          w-full
          lg:w-[40%]
          text-center
          lg:text-left
        "
        >
          <h2
            className="
            font-[Poppins]
            text-3xl
            sm:text-4xl
            lg:text-[42px]
            font-bold
            leading-tight
            text-white
          "
          >
            Boost Your Business With
          </h2>

          <h2
            className="
            bg-gradient-to-b
            from-white
            via-[#D8D8D8]
            to-[#4D4D4D]
            bg-clip-text
            text-transparent
            font-bold
            leading-tight
            text-3xl
            sm:text-4xl
            lg:text-[42px]
          "
          >
            WEBIVIFAM AGENCY.
          </h2>
        </div>

        {/* Divider */}
        <div
          className="
          boost-divider
          hidden
          lg:block
          h-[180px]
          w-[2px]
          rounded-full
          bg-gradient-to-b
          from-[#2BB3FF]
          via-[#3C4BBF]
          to-transparent
        "
        />

        {/* Mobile Divider */}
        <div
          className="
          boost-divider
          lg:hidden
          h-[2px]
          w-32
          rounded-full
          bg-gradient-to-r
          from-[#2BB3FF]
          via-[#3C4BBF]
          to-transparent
        "
        />

        {/* Right */}
        <div
          className="
          boost-right
          w-full
          lg:w-[60%]
          text-center
          lg:text-left
        "
        >
          <p
            className="
            font-[Poppins]
            text-base
            sm:text-[17px]
            leading-8
            text-gray-300
          "
          >
            Boost your business with WEBIVIFAM by partnering with a team that
            combines creativity, technology, and data-driven strategies to
            deliver real results. From building powerful digital experiences to
            driving qualified leads and strengthening your brand, we help
            businesses grow faster, scale smarter, and stay ahead of the
            competition with solutions tailored to their unique goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Boost;
