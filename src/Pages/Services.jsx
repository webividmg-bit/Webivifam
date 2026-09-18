import React, { useRef, useState } from "react";

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
    icon: Palette,
    title: "Creative Graphic Design",
    description:
      "Build a memorable visual identity with creative designs that make your brand look professional, consistent, and unique.",

    subServices: [
      {
        title: "Logo Design",
        description:
          "Create distinctive and memorable logos that represent your brand and establish a strong visual identity.",
      },
      {
        title: "Brand Identity",
        description:
          "Develop a consistent visual language for your business across colors, typography, graphics, and other brand elements.",
      },
      {
        title: "Business Cards",
        description:
          "Professional business card designs that create a strong first impression and keep your brand memorable.",
      },
      {
        title: "Brochures",
        description:
          "Informative and visually engaging brochures designed to communicate your products, services, and brand effectively.",
      },
      {
        title: "Social Media Creatives",
        description:
          "Eye-catching social media graphics designed to improve engagement and maintain a consistent brand presence.",
      },
      {
        title: "Packaging Design",
        description:
          "Creative packaging designs that make your products visually appealing while maintaining your brand identity.",
      },
      {
        title: "Banners & Posters",
        description:
          "Attention-grabbing banners and posters designed for promotions, campaigns, events, and business communication.",
      },
      {
        title: "Presentation Design",
        description:
          "Professional presentations that organize information clearly and communicate your ideas with strong visual impact.",
      },
    ],
  },

  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built to deliver smooth user experiences and help your business grow online.",

    subServices: [
      {
        title: "Business Websites",
        description:
          "Professional websites designed to establish your online presence, showcase your services, and generate business enquiries.",
      },
      {
        title: "Landing Pages",
        description:
          "Focused landing pages designed around a specific goal such as lead generation, product promotion, or conversions.",
      },
      {
        title: "Portfolio Websites",
        description:
          "Modern portfolio websites that present your work, skills, projects, and achievements in a professional way.",
      },
      {
        title: "E-Commerce Development",
        description:
          "Scalable online stores with product management, shopping experiences, payments, and essential e-commerce functionality.",
      },
      {
        title: "Custom Web Applications",
        description:
          "Custom-built web applications designed around your unique business workflows, features, and requirements.",
      },
      {
        title: "CMS Development",
        description:
          "Flexible content management systems that make it easier to create, update, and manage website content.",
      },
      {
        title: "Website Maintenance",
        description:
          "Ongoing website updates, improvements, bug fixes, security checks, and technical maintenance.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve loading speed, responsiveness, and overall website performance for a smoother user experience.",
      },
    ],
  },

  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Turn your ideas into powerful Android and iOS applications designed for performance, usability, and long-term scalability.",

    subServices: [
      {
        title: "Android Apps",
        description:
          "Build reliable Android applications focused on performance, usability, and a smooth experience across devices.",
      },
      {
        title: "iOS Apps",
        description:
          "Develop polished iOS applications with intuitive interfaces and functionality tailored to Apple devices.",
      },
      {
        title: "Cross-Platform Apps",
        description:
          "Build applications that work across multiple platforms while reducing development time and maintenance complexity.",
      },
      {
        title: "Flutter Development",
        description:
          "Create modern cross-platform applications using Flutter with a shared codebase and consistent user experience.",
      },
      {
        title: "React Native Development",
        description:
          "Develop mobile applications using React Native while leveraging reusable components and modern development practices.",
      },
      {
        title: "App UI/UX Design",
        description:
          "Design intuitive mobile interfaces and user experiences that make applications easy and enjoyable to use.",
      },
      {
        title: "API Integration",
        description:
          "Connect applications with APIs and external services to provide dynamic data and advanced functionality.",
      },
      {
        title: "App Maintenance",
        description:
          "Keep applications updated, secure, compatible, and optimized through ongoing improvements and maintenance.",
      },
    ],
  },

  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search visibility, attract qualified visitors, and turn organic traffic into consistent leads and business growth.",

    subServices: [
      {
        title: "Technical SEO",
        description:
          "Improve crawling, indexing, site structure, Core Web Vitals, and technical performance so search engines can better understand your website.",
      },
      {
        title: "On-Page SEO",
        description:
          "Optimize website content, headings, metadata, internal links, and keyword targeting to better match search intent.",
      },
      {
        title: "Off-Page SEO",
        description:
          "Improve website authority through ethical white-hat SEO strategies, relevant backlinks, and external optimization efforts.",
      },
      {
        title: "Local SEO",
        description:
          "Improve visibility in local searches and Google Maps through local keywords, business profile optimization, citations, and location-based content.",
      },
      {
        title: "E-Commerce SEO",
        description:
          "Optimize product and category pages to increase organic visibility and attract customers with high purchase intent.",
      },
      {
        title: "Enterprise SEO",
        description:
          "Scalable SEO strategies for large websites with complex structures and thousands of pages.",
      },
      {
        title: "SEO Content Marketing",
        description:
          "Create useful, search-optimized content that satisfies search intent, attracts qualified visitors, and builds long-term authority.",
      },
      {
        title: "SEO Audits",
        description:
          "Identify technical, content, performance, indexing, and optimization issues that may be limiting your organic growth.",
      },
      {
        title: "Keyword Research",
        description:
          "Discover relevant and high-intent search terms based on your audience, competition, and business goals.",
      },
      {
        title: "Link Building",
        description:
          "Build relevant, high-quality backlinks that strengthen website authority and improve its overall search presence.",
      },
    ],
  },

  {
    icon: PenTool,
    title: "UI / UX Design",
    description:
      "Create intuitive and engaging digital experiences that are visually appealing, easy to use, and focused on your customers.",

    subServices: [
      {
        title: "Wireframing",
        description:
          "Create clear structural layouts that define the content, functionality, and flow of a digital product before visual design.",
      },
      {
        title: "User Research",
        description:
          "Understand your users, their needs, behaviors, and problems to create experiences that solve real-world requirements.",
      },
      {
        title: "User Journey Mapping",
        description:
          "Visualize the steps users take while interacting with your product and identify opportunities to improve their experience.",
      },
      {
        title: "Prototype Design",
        description:
          "Create interactive prototypes that allow ideas and user flows to be tested before development begins.",
      },
      {
        title: "Website UI Design",
        description:
          "Design modern and visually engaging website interfaces that balance aesthetics, usability, and business goals.",
      },
      {
        title: "Mobile App UI",
        description:
          "Create intuitive mobile interfaces designed specifically for touch interactions, smaller screens, and mobile users.",
      },
      {
        title: "Dashboard Design",
        description:
          "Design clear and functional dashboards that make complex information easier to understand and interact with.",
      },
      {
        title: "Design Systems",
        description:
          "Build reusable design components and guidelines that maintain consistency across digital products.",
      },
    ],
  },

  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Reach the right audience with data-driven marketing campaigns designed to increase awareness, generate leads, and drive conversions.",

    subServices: [
      {
        title: "Social Media Marketing",
        description:
          "Build your social presence through strategic content, audience engagement, and consistent brand communication.",
      },
      {
        title: "Google Ads",
        description:
          "Create targeted paid search campaigns designed to reach people actively searching for relevant products and services.",
      },
      {
        title: "Facebook & Instagram Ads",
        description:
          "Run targeted social advertising campaigns to increase awareness, generate leads, and reach relevant audiences.",
      },
      {
        title: "Content Marketing",
        description:
          "Create useful and engaging content that attracts your target audience and supports long-term brand growth.",
      },
      {
        title: "Email Marketing",
        description:
          "Use targeted email campaigns to communicate with customers, nurture leads, and maintain long-term relationships.",
      },
      {
        title: "Lead Generation",
        description:
          "Attract potential customers through targeted campaigns and conversion-focused strategies designed around qualified leads.",
      },
      {
        title: "Brand Strategy",
        description:
          "Develop a clear brand direction that defines your positioning, messaging, audience, and overall market presence.",
      },
      {
        title: "Marketing Analytics",
        description:
          "Track campaign performance and customer behavior to understand what is working and make data-driven improvements.",
      },
    ],
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

        <PageHeading
          className="relative z-10"
          title="SERVICES"
        />

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
              From powerful websites and applications to creative branding,
              SEO, and digital marketing, we build digital solutions that
              help businesses stand out, reach their audience, and grow.
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
              <div
                key={i}
                className="service-card"
              >
                <SmServiceCard
                  className="h-full"
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onMoreInfo={() => handleOpenPopUp(service)}
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

                <span className="text-white/40">
                  DELIVER SERVICES.
                </span>

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
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-white/70"
                  />

                  <span className="text-sm text-white/70">
                    {item}
                  </span>
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