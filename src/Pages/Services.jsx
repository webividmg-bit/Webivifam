import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import {
  Palette,
  Code2,
  Smartphone,
  PenTool,
  Megaphone,
  Search,
  Video,
  BriefcaseBusiness,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// Components
import Line from "../Components/Common/Line";
import Footer from "../Components/Sections/Common/Footer";
import NavBar from "../Components/Sections/Common/NavBar";
import PageHeading from "../Components/Common/PageHeading";
import SmServiceCard from "../Components/Common/Cards/SmServiceCard";
import ServicePopUp from "../Components/PopUps/ServicePopUp";

gsap.registerPlugin(ScrollTrigger);

/*
|--------------------------------------------------------------------------
| SERVICES DATA
|--------------------------------------------------------------------------
*/

const services = [
  {
    icon: Search,
    title: "SEO",
    path: "/services/seo",
    description:
      "Improve your search visibility, attract qualified visitors, and turn organic traffic into consistent leads and business growth.",
  },
  {
    icon: Megaphone,
    title: "SMM",
    path: "/services/smm",
    description:
      "Build your social presence through strategic content, audience engagement, and consistent brand communication.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    path: "/services/logo_design",
    description:
      "Create distinctive and memorable logos that represent your brand and establish a strong visual identity.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    path: "/services/brand_identity",
    description:
      "Build a distinctive and consistent brand identity through strategic visual direction, messaging, typography, and design.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    path: "/services/app_developkment",
    description:
      "Turn your ideas into powerful Android and iOS applications designed for performance, usability, and long-term scalability.",
  },
  {
    icon: Palette,
    title: "Graphic Design & UI/UX",
    path: "/services/graphics_designing",
    description:
      "Create visually engaging designs and intuitive digital experiences that communicate clearly and keep users engaged.",
  },
  {
    icon: Code2,
    title: "Website Development",
    path: "/services/web_development",
    description:
      "Build modern, responsive, high-performance websites designed around your brand, customers, and business goals.",
  },
  {
    icon: Megaphone,
    title: "AI Video Creations",
    path: "/services/ai_video_creation",
    description:
      "Turn ideas, products, campaigns, and brand stories into compelling AI-assisted video content for modern digital platforms.",
  },
  {
    icon: Search,
    title: "Business Consultation",
    path: "/services/business_consultation",
    description:
      "Get practical strategic guidance to identify the right digital opportunities, prioritize investments, and create a clear roadmap for growth.",
  },
  {
    icon: Megaphone,
    title: "Custom Digital Marketing",
    path: "/services/custom_digital_marketing",
    description:
      "Build a customized marketing strategy combining the right channels, campaigns, and optimization methods around your specific business goals.",
  },
];

/*
|--------------------------------------------------------------------------
| WHY CHOOSE US
|--------------------------------------------------------------------------
*/

const whyChooseUs = [
  "Customized strategies",
  "Ethical and sustainable practices",
  "Data-driven decision making",
  "Conversion-focused optimization",
  "Transparent reporting",
  "Long-term business growth",
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

function Services() {
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [subServices, setSubServices] = useState([]);

  /*
  |--------------------------------------------------------------------------
  | OPEN POPUP
  |--------------------------------------------------------------------------
  */

  const handleOpenPopUp = (service) => {
    setServiceTitle(service.title);
    setSubServices(service.subServices || []);
    setOpenPopUp(true);
  };

  /*
  |--------------------------------------------------------------------------
  | CLOSE POPUP
  |--------------------------------------------------------------------------
  */

  const handleOnPopUpClosed = () => {
    setOpenPopUp(false);
    setServiceTitle("");
    setSubServices([]);
  };

  const handleReadMore = (service) => {
    navigate(service.path);
  };

  /*
  |--------------------------------------------------------------------------
  | GSAP
  |--------------------------------------------------------------------------
  */

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(".services-intro-label", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".services-title",
          {
            y: 70,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".services-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".services-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35",
        );

      gsap.utils.toArray(".service-card").forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.from(".why-title", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".why-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".services-cta", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 85%",
          once: true,
        },
      });
    },
    {
      scope: pageRef,
    },
  );

  return (
    <div
      ref={pageRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* HEADER */}

      <div className="relative w-full overflow-hidden">
        <NavBar />

        <PageHeading className="relative z-10" title="SERVICES" />

        <img
          src="/Images/Bg_1.png"
          alt=""
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-10
          "
        />

        {/* HERO */}

        <section
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            pb-24
            pt-16
            sm:px-8
            lg:pb-32
            lg:pt-24
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="
                services-intro-label
                mb-5
                text-sm
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/50
              "
            >
              What We Do
            </p>

            <h1
              className="
                services-title
                mx-auto
                max-w-4xl
                bg-gradient-to-b
                from-white
                via-[#D8D8D8]
                to-[#4D4D4D]
                bg-clip-text
                text-4xl
                font-bold
                leading-tight
                text-transparent
                sm:text-5xl
                lg:text-6xl
              "
            >
              DIGITAL SOLUTIONS
              <br />
              BUILT TO GROW
            </h1>

            <p
              className="
                services-description
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/55
                sm:text-lg
              "
            >
              From powerful websites and applications to creative branding, SEO,
              and digital marketing, we build digital solutions that help
              businesses stand out, reach their audience, and grow.
            </p>

            <div className="services-line mx-auto mt-10 w-fit">
              <Line />
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            pb-28
            sm:px-8
            lg:pb-36
          "
        >
          <div
            className="
              mb-12
              flex
              flex-col
              justify-between
              gap-5
              sm:flex-row
              sm:items-end
            "
          >
            <div>
              <p
                className="
                  mb-3
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Our Expertise
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Everything You Need
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-white/45
                sm:text-right
              "
            >
              A complete range of digital services designed to turn ideas into
              meaningful digital experiences and measurable business growth.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <SmServiceCard
                  className="h-full"
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onReadMore={() => handleReadMore(service)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* WHY CHOOSE US */}

      <section
        className="
          why-section
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-[#050505]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]
          "
        >
          <img
            src="/Images/Bg_1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-24
            sm:px-8
            lg:py-32
          "
        >
          <div
            className="
              grid
              gap-16
              lg:grid-cols-2
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  mb-4
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Why Webivifam
              </p>

              <h2
                className="
                  why-title
                  max-w-xl
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                "
              >
                WE DON'T JUST
                <br />
                <span className="text-white/40">DELIVER SERVICES.</span>
                <br />
                WE BUILD GROWTH.
              </h2>

              <p
                className="
                  mt-7
                  max-w-lg
                  text-base
                  leading-7
                  text-white/50
                "
              >
                Every project starts with understanding your goals. We combine
                strategy, creativity, technology, and data to create solutions
                that are built around your business—not generic templates.
              </p>
            </div>

            <div
              className="
                why-grid
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >
              {whyChooseUs.map((item, i) => (
                <div
                  key={i}
                  className="
                    why-item
                    group
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.06]
                  "
                >
                  <CheckCircle2 size={20} className="shrink-0 text-white/70" />

                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          py-24
          sm:px-8
          lg:py-32
        "
      >
        <div
          className="
            services-cta
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.035]
            px-6
            py-16
            text-center
            sm:px-12
            lg:px-20
            lg:py-20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.06]
              blur-3xl
            "
          />

          <div className="relative">
            <p
              className="
                mb-4
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Let's Work Together
            </p>

            <h2
              className="
                mx-auto
                max-w-3xl
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              READY TO GROW
              <br />
              YOUR BUSINESS?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/50
              "
            >
              Whether you need a new website, better search visibility, a
              stronger brand, or a complete digital strategy, we're ready to
              help turn your goals into reality.
            </p>

            <button
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-white/90
              "
            >
              Let's Get Started
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* SERVICE POPUP */}

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
