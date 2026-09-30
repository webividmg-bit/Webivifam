import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Footer from "../../Components/Sections/Common/Footer";
import NavBar from "../../Components/Sections/Common/NavBar";
import PageHeading from "../../Components/Common/PageHeading";

function SMM() {
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
          ".smm-solutions",
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

        <PageHeading title={"SMM"} />

        {/* SMM Content */}
        <section className="hero-bg relative w-full px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Hero Heading */}
            <div className="hero-title max-w-5xl">
              <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/50">
                Social Media Marketing
              </span>

              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
                Turn your social presence
                <span className="text-white/40"> into real growth.</span>
              </h1>
            </div>

            <div className="hero-line mt-10 w-full h-px bg-white/20" />

            {/* Main Content */}
            <div className="hero-text mt-10 max-w-5xl space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/70">
                Your social media should be more than a collection of
                posts—it should be an extension of your brand and a channel
                for meaningful business growth.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                Webivifam develops social media strategies that combine
                creative storytelling, audience insights, platform-specific
                content, community engagement, and performance marketing.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                We create content that helps businesses become more visible,
                communicate their value, build credibility, and stay connected
                with their audience across platforms such as Instagram,
                Facebook, LinkedIn, and YouTube.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white/50">
                From strategic content calendars and branded creatives to
                short-form videos, campaigns, community management, and social
                advertising, we create a social presence with a clear purpose
                behind every piece of content.
              </p>
            </div>

            {/* Core Solutions */}
            <div className="smm-solutions mt-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                <div>
                  <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                    What We Do
                  </span>

                  <h2 className="mt-3 text-3xl md:text-5xl font-medium">
                    Core SMM Solutions
                  </h2>
                </div>

                <p className="max-w-md text-white/40 leading-relaxed">
                  Strategic social media solutions designed to build your
                  brand, engage your audience, and create measurable growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                {[
                  "Social Media Strategy",
                  "Instagram Marketing",
                  "Facebook Marketing",
                  "LinkedIn Marketing",
                  "YouTube Marketing",
                  "Content Planning",
                  "Creative Content",
                  "Reels & Short-Form Video",
                  "Community Management",
                  "Social Advertising",
                  "Campaign Management",
                  "Performance Analytics",
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

export default SMM;