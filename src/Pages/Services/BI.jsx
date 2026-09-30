import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Footer from "../../Components/Sections/Common/Footer";
import NavBar from "../../Components/Sections/Common/NavBar";
import PageHeading from "../../Components/Common/PageHeading";

function BrandIdentity() {
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
        )
        .from(
          ".brand-solutions",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: pageRef },
  );

  return (
    <div
      ref={pageRef}
      className="w-full relative overflow-hidden bg-black text-white"
    >
      <div className="w-full relative overflow-hidden">
        <NavBar />

        <PageHeading title={"Brand Identity"} />

        {/* Brand Identity Content */}
        <section className="hero-bg relative w-full px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Hero Heading */}
            <div className="hero-title max-w-5xl">
              <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/50">
                Brand Identity
              </span>

              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
                Build a brand people
                <span className="text-white/40">
                  {" "}
                  recognize and remember.
                </span>
              </h1>
            </div>

            <div className="hero-line mt-10 w-full h-px bg-white/20" />

            {/* Main Content */}
            <div className="hero-text mt-10 max-w-5xl space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70">
                A brand is more than a logo. It is the experience, personality,
                and perception people associate with your business.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                Webivifam helps businesses build distinctive brand identities
                that remain consistent across every place customers encounter
                them.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                We bring together strategy, visual direction, messaging,
                typography, color systems, imagery, and design principles to
                create a brand that feels cohesive and recognizable.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                Whether you're launching a new company, repositioning an
                existing business, or preparing for expansion into a new
                market, we help establish the visual foundation your business
                needs to communicate with confidence.
              </p>
            </div>

            {/* Core Solutions */}
            <div className="brand-solutions mt-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                    What We Build
                  </span>

                  <h2 className="mt-3 text-3xl md:text-5xl font-medium">
                    Core Brand Solutions
                  </h2>
                </div>

                <p className="max-w-md text-white/40 leading-relaxed">
                  Strategic and visual brand solutions designed to create a
                  consistent, recognizable, and confident identity across every
                  customer touchpoint.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                {[
                  "Brand Strategy",
                  "Brand Positioning",
                  "Visual Identity",
                  "Brand Guidelines",
                  "Color Systems",
                  "Typography",
                  "Brand Messaging",
                  "Marketing Collateral",
                  "Digital Branding",
                  "Social Media Branding",
                  "Website Branding",
                  "Rebranding",
                ].map((solution, index) => (
                  <div
                    key={solution}
                    className="group border-r border-b border-white/10 p-6 md:p-8 min-h-[140px] flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    <span className="text-xs text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-8 text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-300">
                      {solution}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default BrandIdentity;