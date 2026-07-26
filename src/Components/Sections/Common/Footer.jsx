import React, { useRef } from "react";
import { Link } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Icons
// Icons
import {
  FaFacebookF,
  FaThreads,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

// Component
import Line from "../../Common/Line";
import Button from "../../Common/Buttons/Button";
import IconButton from "../../Common/Buttons/IconButton";
import CopyButton from "../../Common/Buttons/CopyButton";

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    path: "https://www.facebook.com/share/19HtqPnYpH/?mibextid=wwXIfr",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/company/webivi-agency/",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/webivi_fam_agency?igsh=MWhrdWg1OXZyejR4MA%3D%3D&utm_source=qr",
  },
  {
    icon: FaThreads,
    path: "https://www.threads.com/@sanjjana_verma?igshid=NTc4MTIwNjQ2YQ==",
  },
];

const FOOTER_SECTIONS = [
  {
    title: "Website Designing",
    links: [
      "Static Website Designing",
      "Dynamic Website Designing",
      "Ecommerce Website Designing",
      "Custom Website Designing",
      "WordPress Website Designing",
      "Landing Page Designing",
      "MLM Website Designing",
    ],
  },
  {
    title: "Website Development",
    links: [
      "PHP Website Development",
      "Ecommerce Website Development",
      "Custom Website Development",
      "MLM Software Development",
      "Multi Vendor Ecommerce Website",
    ],
  },
  {
    title: "Mobile App Development",
    links: [
      "Mobile App Development",
      "Android App Development",
      "IOS App Development",
      "Native App Development",
      "Hybrid App Development",
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      "Search Engine Optimization",
      "Google Business Listing SEO",
      "Local SEO",
      "Google Ads",
      "Performance Marketing",
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Promotion",
    ],
  },
];

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about_us" },
  { label: "Our Sercices", path: "/services" },
  // { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blogs" },
  // { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact_us" },
];

function Footer() {
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const companyRef = useRef(null);
  const ctaRef = useRef(null);
  const copyrightRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // Top footer columns
      tl.from(topRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      })

        // Bottom sections
        .from(
          bottomRef.current,
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )

        // Experience circle
        .from(
          ctaRef.current,
          {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )

        // Copyright
        .from(
          copyrightRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        );
    },
    {
      scope: footerRef,
    },
  );
  return (
    <footer
      ref={footerRef}
      className="border-t border-[#3C4BBF30] bg-[#090B15] pt-16 lg:pt-20 pb-10 lg:pb-12"
    >
      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-20">
        {/* TOP */}
        <div
          ref={topRef}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12"
        >
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-[Poppins] text-xl sm:text-2xl font-semibold text-white">
                {section.title}
              </h3>

              <Line className="mb-6" />

              <div className="space-y-3 sm:space-y-4">
                {section.links.map((item) => (
                  <Link
                    to={"/services"}
                    key={item}
                    className="group relative flex w-fit cursor-pointer items-center gap-3 overflow-hidden text-sm sm:text-base lg:text-[17px] text-gray-300 transition hover:text-[#2BB3FF]"
                  >
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                    {item}

                    <hr className="absolute bottom-0 w-full -translate-x-[102%] transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:text-[#2BB3FF]" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          ref={bottomRef}
          className="mt-16 lg:mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1fr] xl:gap-16"
        >
          {/* COMPANY */}
          <div
            ref={companyRef}
            className="rounded-3xl border border-[#3C4BBF30] bg-gradient-to-b from-[#11162E] to-[#090B15] p-6 sm:p-8 shadow-[0_0_35px_rgba(43,179,255,.12)]"
          >
            <h3 className="text-2xl sm:text-[28px] font-semibold text-white">
              Design, Innovation and Growth
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 text-gray-300 break-all">
                {/* EMAIL */}
                <CopyButton
                  size="md"
                  icon={Mail}
                  value={"webividmg@icloud.com"}
                >
                  webividmg@icloud.com
                </CopyButton>
              </div>

              <div className="flex items-center gap-4 text-gray-300 break-all">
                {/* EMAIL */}
                <CopyButton size="md" icon={Mail} value={"Webividmg@gmail.com"}>
                  Webividmg@gmail.com
                </CopyButton>
              </div>

              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-1 shrink-0 text-[#2BB3FF]" />

                <span>Chandpur Highway Yamunanagar</span>
              </div>
            </div>

            <h3 className="mt-10 mb-4 text-2xl sm:text-[28px] font-semibold text-white">
              Follow Us
            </h3>

            <Line className="mb-8" />

            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {SOCIAL_LINKS.map(({ icon, path }, index) => (
                <Link target="_blank" to={path} key={index}>
                  <IconButton icon={icon} className="cursor-pointer" />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-2xl sm:text-[28px] font-semibold text-white">
              Quick Links
            </h3>

            <Line className="mb-7" />

            <div className="space-y-4 sm:space-y-5">
              {QUICK_LINKS?.map(({ label, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="group relative flex w-fit cursor-pointer items-center gap-3 overflow-hidden text-gray-300 transition hover:text-[#2BB3FF]"
                >
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />

                  {label}

                  <hr className="absolute bottom-0 w-full -translate-x-[102%] transition-all duration-200 ease-in-out group-hover:translate-x-0 group-hover:text-[#2BB3FF]" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="flex flex-col items-center justify-center xl:items-center"
          >
            <div className="flex h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56 items-center justify-center rounded-full border-4 border-dashed border-[#2BB3FF40] bg-gradient-to-br from-[#11162E] to-[#090B15] shadow-[0_0_40px_rgba(43,179,255,.2)]">
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#2BB3FF]">
                  4+
                </h2>

                <p className="mt-2 text-base sm:text-lg text-gray-300">
                  Years Experience
                </p>
              </div>
            </div>

            <Link to={"/contact_us"}>
              <Button
                variant="filled"
                className="mt-8 lg:mt-10 w-fit sm:w-auto cursor-pointer text-center"
              >
                LET'S DISCUSS <br /> YOUR PROJECT
              </Button>
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          ref={copyrightRef}
          className="mt-16 lg:mt-20 border-t border-[#3C4BBF30] pt-6 lg:pt-8 text-center text-sm sm:text-base text-gray-500"
        >
          © 2026 WEBEIVI Agency. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
