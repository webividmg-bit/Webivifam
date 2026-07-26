import React, { useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Icons
import {
  Palette,
  Code2,
  Smartphone,
  PenTool,
  Megaphone,
  Search,
  Globe,
  Link2,
  MapPin,
  ShoppingCart,
  Building2,
  FileText,
} from "lucide-react";

// Components
import Line from "../Components/Common/Line";
import Footer from "../Components/Sections/Common/Footer";
import NavBar from "../Components/Sections/Common/NavBar";
import PageHeading from "../Components/Common/PageHeading";
import SmServiceCard from "../Components/Common/Cards/SmServiceCard";
import ServicePopUp from "../Components/PopUps/ServicePopUp";

const services = [
  {
    icon: Palette,
    title: "Creative Graphic Design",
    description:
      "Professional design solutions that help businesses build a memorable and consistent brand identity.",
    subServices: [
      "Logo Design",
      "Brand Identity",
      "Business Cards",
      "Brochures",
      "Social Media Creatives",
      "Packaging Design",
      "Banners & Posters",
      "Presentation Design",
    ],
  },

  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, modern, and scalable websites built with the latest technologies for exceptional user experiences.",
    subServices: [
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-Commerce Development",
      "Custom Web Applications",
      "CMS Development",
      "Website Maintenance",
      "Performance Optimization",
    ],
  },

  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Scalable Android and iOS applications designed for performance, usability, and business growth.",
    subServices: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "Flutter Development",
      "React Native Development",
      "App UI/UX Design",
      "API Integration",
      "App Maintenance",
    ],
  },

  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Comprehensive SEO strategies to improve visibility, rankings, and long-term organic growth.",
    subServices: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "E-Commerce SEO",
      "Enterprise SEO",
      "SEO Content Marketing",
      "SEO Audits",
      "Keyword Research",
      "Link Building",
    ],
  },

  {
    icon: PenTool,
    title: "UI / UX Design",
    description:
      "Intuitive and visually engaging digital experiences focused on usability and customer satisfaction.",
    subServices: [
      "Wireframing",
      "User Research",
      "User Journey Mapping",
      "Prototype Design",
      "Website UI Design",
      "Mobile App UI",
      "Dashboard Design",
      "Design Systems",
    ],
  },

  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase brand awareness, leads, and conversions.",
    subServices: [
      "Social Media Marketing",
      "Google Ads",
      "Facebook & Instagram Ads",
      "Content Marketing",
      "Email Marketing",
      "Lead Generation",
      "Brand Strategy",
      "Marketing Analytics",
    ],
  },
];

function Services() {
  const pageRef = useRef();

  const [openPopUp, setOpenPopUp] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [subServices, setSubServices] = useState([]);

  const handleOnPopUpClosed = () => {
    setOpenPopUp(false);
    setSubServices([]);
  };

  useGSAP(
    () => {
      // ===========================
      // Heading Animation
      // ===========================
      gsap
        .timeline()
        .from(".services-title", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        })
        .from(
          ".services-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.35",
        );

      // ===========================
      // Cards Animation
      // ===========================
      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.12, // each card starts 0.12s after the previous
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="w-full relative overflow-hidden bg-black">
      <div className="w-full min-h-fit relative overflow-hidden">
        <NavBar />
        <PageHeading className="relative z-10" title={"SERVICES"} />

        {/* HERO  */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          {/* Background */}
          <img
            src="/Images/Bg_1.png"
            alt="Background"
            className="hero-bg absolute inset-0 h-full w-full object-cover opacity-10"
          />

          {/* Heading */}
          <h2
            className="
            services-title
            mb-5
            w-fit
            mx-auto
            bg-gradient-to-b
            from-white
            via-[#D8D8D8]
            to-[#4D4D4D]
            bg-clip-text
            text-transparent
            font-bold
            text-center
            text-4xl
            sm:text-5xl
            lg:text-[48px]
           "
          >
            OUR SERVICES
          </h2>

          {/* Accent Line */}
          <div className="services-line w-fit mx-auto mb-12 lg:mb-20">
            <Line />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <SmServiceCard
                  className="h-full"
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onMoreInfo={() => {
                    setOpenPopUp(true);
                    setServiceTitle(service.title);
                    setSubServices(service.subServices);
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

      <ServicePopUp
        open={openPopUp}
        title={serviceTitle}
        subServices={subServices}
        onClose={handleOnPopUpClosed}
      />
    </div>
  );
}

export default Services;
