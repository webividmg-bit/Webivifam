import React, { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Icons
import {
  TrendingUp,
  Award,
  Users,
  Clock3,
  MousePointerClick,
} from "lucide-react";

// Components
import Line from "../Common/Line";
import AnalyticCard from "../Common/Cards/AnalyticCard";

// Configs
const STATS = [
  {
    icon: Users,
    title: "Increased Average Page Views",
    value: "6.5%",
  },
  {
    icon: Clock3,
    title: "Increased Length Of Each Visit",
    value: "7%",
  },
  {
    icon: TrendingUp,
    title: "Increased Organic Traffic",
    value: "80%",
  },
  {
    icon: MousePointerClick,
    title: "Decreased Bounce Rate",
    value: "5.4%",
  },
];

function SeoPartner() {
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

      tl.from(".seo-left", {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".seo-line",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".seo-feature",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".seo-image",
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".seo-card",
          {
            y: 60,
            opacity: 0,
            scale: 0.92,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Top */}
      <div
        className="
          mx-auto
          flex
          max-w-[1450px]
          flex-col
          items-center
          gap-14
          px-6
          sm:px-10
          lg:flex-row
          lg:justify-between
          lg:gap-24
          lg:px-20
        "
      >
        {/* Left */}
        <div className="seo-left max-w-[560px] text-center lg:text-left">
          <h2
            className="
              mb-5
              font-[Poppins]
              font-bold
              leading-tight
              text-white
              text-4xl
              sm:text-5xl
              lg:text-[48px]
            "
          >
            Choose Your
            <br />
            <span className="bg-gradient-to-b from-white via-[#D8D8D8] to-[#4D4D4D] bg-clip-text text-transparent">
              SEO Partner Wisely!
            </span>
          </h2>

          <Line className="seo-line mx-auto mb-10 lg:mx-0 lg:mb-16" />

          <p
            className="
              text-gray-300
              text-base
              lg:text-[18px]
              leading-8
              lg:leading-[36px]
            "
          >
            We're SEO experts helping businesses grow through intelligent
            strategies, technical optimization, and performance-driven
            marketing. Our mission is to improve your search visibility,
            increase qualified traffic, and generate measurable business
            results.
          </p>

          <div className="mt-8 space-y-5 lg:mt-10 lg:space-y-6">
            <div className="seo-feature flex items-center gap-4 justify-center lg:justify-start">
              <div className="rounded-full bg-gradient-to-b from-[#2BB3FF20] to-[#3C4BBF20] p-3">
                <TrendingUp className="h-6 w-6 text-[#2BB3FF]" />
              </div>

              <span className="text-base lg:text-lg font-medium text-white">
                55% Growth In Organic Traffic
              </span>
            </div>

            <div className="seo-feature flex items-center gap-4 justify-center lg:justify-start">
              <div className="rounded-full bg-gradient-to-b from-[#2BB3FF20] to-[#3C4BBF20] p-3">
                <Award className="h-6 w-6 text-[#2BB3FF]" />
              </div>

              <span className="text-base lg:text-lg font-medium text-white">
                #1 Rankings For Multiple Keywords
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="seo-image relative flex justify-center">
          <div className="absolute h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px] rounded-full bg-[#3C4BBF30] blur-[120px]" />

          <img
            src="/Images/Img_3.png"
            alt="SEO"
            className="relative z-10 w-[280px] sm:w-[380px] lg:w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Stats */}
      <div
        className="
          mx-auto
          mt-16
          grid
          max-w-[1450px]
          gap-6
          px-6
          sm:mt-20
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          sm:px-10
          xl:mt-24
          xl:gap-10
          xl:px-20
        "
      >
        {STATS.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="seo-card">
              <AnalyticCard
                icon={item.icon}
                title={item.title}
                value={item.value}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SeoPartner;
