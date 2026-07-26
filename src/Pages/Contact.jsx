import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Icons
import {
  Phone,
  Mail,
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Award,
} from "lucide-react";

// Components
import Line from "../Components/Common/Line";
import Button from "../Components/Common/Buttons/Button";
import NavBar from "../Components/Sections/Common/NavBar";
import Footer from "../Components/Sections/Common/Footer";
import PageHeading from "../Components/Common/PageHeading";
import ContactUsForm from "../Components/Common/ContactUsForm";
import AnalyticCard from "../Components/Common/Cards/AnalyticCard";
import CopyButton from "../Components/Common/Buttons/CopyButton";

const STATS = [
  {
    icon: Users,
    title: "Active Clients",
    value: "200+",
  },
  {
    icon: Briefcase,
    title: "Projects Done",
    value: "570+",
  },
  {
    icon: TrendingUp,
    title: "Success Rate",
    value: "98%",
  },
  {
    icon: Award,
    title: "Awards",
    value: "50+",
  },
];

function Contact() {
  const pageRef = useRef();

  useGSAP(
    () => {
      // Hero
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact-hero",
            start: "top 75%",
          },
        })
        .from(".contact-form", {
          x: -80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".contact-info",
          {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        );

      // Stats
      gsap.from(".contact-stat", {
        scrollTrigger: {
          trigger: ".contact-stat",
          start: "top 85%",
          // markers: true,
        },
        y: 70,
        opacity: 0,
        scale: 0.9,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: pageRef },
  );
  return (
    <div ref={pageRef} className="w-full relative overflow-hidden bg-black">
      <div className="w-full min-h-fit relative overflow-hidden">
        <NavBar />

        <PageHeading title={"CONTACT US"} />

        {/* HERO */}
        <section className="contact-hero relative overflow-hidden py-16">
          {/* Background */}
          <img
            src="/Images/Bg_1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />

          <div className="relative z-10 mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-20">
            {/* Top */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
              {/* Contact Us Form */}
              <div className="contact-form">
                <ContactUsForm />
              </div>

              {/* Contact Info */}
              <div
                className="
                contact-info
                w-full       
                rounded-[24px]
                lg:rounded-[30px] 
                border 
                border-[#3C4BBF40] 
                bg-gradient-to-b
              from-[#11162E]
              to-[#090B15] 
                p-6
                sm:p-8
                lg:p-10 
                shadow-[0_0_50px_rgba(43,179,255,.15)]
                "
              >
                <h2 className="mb-5 text-3xl font-bold text-white lg:text-[42px]">
                  WEBIVIFAM Agency
                </h2>

                <Line className="mb-8 lg:mb-10" />

                <div className="space-y-7">
                  <div className="flex items-center gap-5">
                    {/* EMAIL */}
                    <CopyButton
                      size="lg"
                      icon={Mail}
                      value={"Webividmg@gmail.com"}
                    >
                      Webividmg@gmail.com
                    </CopyButton>
                  </div>

                  <div className="flex items-center gap-5">
                    {/* EMAIL */}
                    <CopyButton
                      size="lg"
                      icon={Mail}
                      value={"webividmg@icloud.com"}
                    >
                      webividmg@icloud.com
                    </CopyButton>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 text-[#2BB3FF]" />

                    <span className="text-lg leading-8 text-gray-300">
                      Chandpur Highway, <br /> Yamunanagar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {STATS?.map((item, index) => (
                <div key={index} className="contact-stat">
                  <AnalyticCard
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
