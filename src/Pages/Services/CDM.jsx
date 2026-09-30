import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Footer from "../../Components/Sections/Common/Footer";
import NavBar from "../../Components/Sections/Common/NavBar";
import PageHeading from "../../Components/Common/PageHeading";

function CustomDigitalMarketingServices() {
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
          ".marketing-solutions",
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

        <PageHeading title={"Custom Digital Marketing Services"} />

        {/* Custom Digital Marketing Content */}
        <section className="hero-bg relative w-full px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Hero Heading */}
            <div className="hero-title max-w-5xl">
              <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/50">
                Custom Digital Marketing
              </span>

              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
                Marketing built around
                <span className="text-white/40">
                  {" "}
                  your business.
                </span>
              </h1>
            </div>

            <div className="hero-line mt-10 w-full h-px bg-white/20" />

            {/* Main Content */}
            <div className="hero-text mt-10 max-w-5xl space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70">
                Not every business fits into a standard marketing package—and
                your strategy shouldn't have to either.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                Webivifam creates customized digital marketing programs based
                on your goals, audience, industry, market, competition, and
                stage of growth. We can bring together SEO, social media,
                content marketing, Google Ads, Meta Ads, email marketing, local
                SEO, lead generation, conversion optimization, remarketing,
                and analytics into one coordinated strategy.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                For some businesses, the priority may be building organic
                visibility. For others, it may be generating qualified leads,
                launching a new product, entering a new geographic market,
                strengthening brand awareness, or improving conversion rates.
                Our custom approach allows us to build the right combination of
                channels rather than forcing your business into a predetermined
                package.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                We also believe digital marketing should be measurable. Our
                strategies are designed around meaningful business indicators
                such as qualified traffic, leads, conversions, customer
                acquisition, engagement, and overall marketing performance. As
                your business evolves, the strategy can evolve with it.
              </p>
            </div>

            {/* Core Solutions */}
            <div className="marketing-solutions mt-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                    What We Combine
                  </span>

                  <h2 className="mt-3 text-3xl md:text-5xl font-medium">
                    Core Solutions
                  </h2>
                </div>

                <p className="max-w-md text-white/40 leading-relaxed">
                  The right combination of channels, campaigns, and optimization
                  strategies built around your specific business objectives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                {[
                  "SEO",
                  "Local SEO",
                  "SMM",
                  "Google Ads",
                  "Meta Ads",
                  "Content Marketing",
                  "Email Marketing",
                  "Lead Generation",
                  "Remarketing",
                  "Conversion Optimization",
                  "Analytics",
                  "Digital Strategy",
                  "Campaign Management",
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

export default CustomDigitalMarketingServices;