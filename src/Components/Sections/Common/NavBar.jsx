import React, { useState, useRef, forwardRef } from "react";
import { Link } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

// Icons
import {
  FaFacebookF,
  FaThreads,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { Phone, Mail, Copy, Menu, X } from "lucide-react";

// Components
import SmButton from "../../Common/Buttons/SmButton";
import CopyButton from "../../Common/Buttons/CopyButton";

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    path: "https://www.facebook.com/share/19HtqPnYpH/?mibextid=wwXIfr",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/sanjana-verma-46711b203?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/webivi_fam_agency?igsh=MWhrdWg1OXZyejR4MA%3D%3D&utm_source=qr",
  },
  {
    icon: FaYoutube,
    path: "https://youtube.com/@webividmg?si=pZQJT7zMCXNQ6vQh",
  },
  {
    icon: FaThreads,
    path: "https://www.threads.com/@sanjjana_verma?igshid=NTc4MTIwNjQ2YQ==",
  },
];

// Configs
const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about_us",
  },
  {
    label: "Our Services",
    path: "/services",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "Contact Us",
    path: "/contact_us",
  },
];

const NavBar = forwardRef(({ className, ...props }, ref) => {
  const topBarRef = useRef(null);
  const navRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(topBarRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }).from(
      navRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.25",
    );
  });

  return (
    <div
      ref={ref}
      className={`relative w-ful h-fit overflow-hidden ${className}`}
    >
      {/* TOP BAR */}
      <div
        ref={topBarRef}
        className="hidden lg:block relative z-50 w-full border-b border-[#3C4BBF40] backdrop-blur-md"
      >
        <div className="mx-auto flex h-12 items-center justify-between px-14">
          {/* LEFT */}
          <div className="flex items-center gap-6 text-[14px] font-[Poppins] text-gray-300">
            {/* PHONE */}
            {/* <CopyButton icon={Phone}>+91 98765 43210</CopyButton> */}

            {/* EMAIL */}
            <CopyButton icon={Mail} value={"Webividmg@gmail.com"}>
              Webividmg@gmail.com
            </CopyButton>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-[14px] font-[Poppins] text-gray-300">
            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 text-[18px] text-gray-300">
              {SOCIAL_LINKS.map(({ icon: Icon, path }, index) => (
                <Link target="_blank" key={index} to={path}>
                  <SmButton className="cursor-pointer">
                    <div className="p-1">
                      <Icon />
                    </div>
                  </SmButton>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <nav ref={navRef} className="relative z-50 w-full h-fit backdrop-blur-md">
        {/* MAIN */}
        <div className="flex items-center justify-between px-6 lg:px-14 py-5">
          {/* LOGO */}
          <img
            src="/Images/Logo.png"
            alt="Logo"
            className="w-12 lg:w-14 object-contain"
          />

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS?.map(({ label, path }, index) => (
              <Link key={index} to={path}>
                <SmButton className="cursor-pointer">{label}</SmButton>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent opacity-60"></div>
      </nav>

      <div
        className={`
        fixed top-0 right-0 z-[100]
        h-screen w-72
        bg-[#050505]
        border-l border-[#3C4BBF40]
        transition-transform duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between p-6">
          <img src="/Images/Logo.png" className="w-12" alt="" />

          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        <div className="mt-10 flex flex-col">
          {NAV_LINKS?.map(({ label, path }, index) => (
            <Link key={index} to={path}>
              <button
                className="px-8 py-4 text-left text-white hover:bg-[#3C4BBF20] transition"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
        />
      )}
    </div>
  );
});

export default NavBar;
