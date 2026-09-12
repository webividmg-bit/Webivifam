import React, { useState, forwardRef } from "react";
import { Link } from "react-router";
import { Menu, X, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaThreads,
} from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about_us" },
  { label: "Our Service", path: "/services" },
  { label: "Blogs", path: "/blogs" },
];

const TOP_SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    path: "https://www.facebook.com/share/19HtqPnYpH/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/company/webivi-agency/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    path: "https://www.instagram.com/webivi_fam_agency?igsh=MWhrdWg1OXZyejR4MA%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    path: "https://www.youtube.com",
    label: "YouTube",
  },
  {
    icon: FaThreads,
    path: "https://www.threads.com/@sanjjana_verma?igshid=NTc4MTIwNjQ2YQ==",
    label: "Threads",
  },
];

const NavBar = forwardRef(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        ref={ref}
        className={`w-full z-40 relative bg-transparent ${className ?? ""}`}
        {...props}
      >
        {/* Top Info & Social Bar with Hover Micro-Animations */}
        <div className="w-full border-b border-[#2B3E94]/30 bg-black/90 backdrop-blur-md relative z-50">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-16 py-2 sm:py-2.5">
            {/* Left: Email Link */}
            <a
              href="mailto:Webividmg@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-[Poppins] text-slate-300 hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <Mail
                size={14}
                className="text-[#2BB3FF] transition-transform duration-300 ease-out group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_0_8px_rgba(43,179,255,0.8)]"
              />
              <span className="transition-all duration-300 group-hover:text-[#2BB3FF] group-hover:translate-x-0.5">
                Webividmg@gmail.com
              </span>
            </a>

            {/* Right: Social Media Icons with Floating Glow Animation */}
            <div className="flex items-center gap-2 sm:gap-3 text-slate-300">
              {TOP_SOCIAL_LINKS.map(({ icon: Icon, path, label }, i) => (
                <a
                  key={i}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-slate-400 border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-[#2BB3FF] hover:border-cyan-500/40 hover:bg-cyan-950/40 hover:shadow-[0_0_12px_rgba(43,179,255,0.5)] cursor-pointer"
                >
                  <Icon size={13} className="transition-transform duration-300 hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 sm:px-12 lg:px-16 py-5 sm:py-6">
          
          {/* Logo with Spring Pop & Glowing Aura */}
          <Link to="/" className="flex items-center group">
            <img
              src="/Images/Logo.png"
              alt="WEBIVIFAM Logo"
              className="w-10 sm:w-12 object-contain transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:drop-shadow-[0_0_22px_rgba(43,179,255,0.95)] active:scale-95 cursor-pointer select-none"
            />
          </Link>

          {/* Nav Links Desktop with Animated Underline & Glow */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12">
            {NAV_LINKS.map(({ label, path }, i) => (
              <Link key={i} to={path} className="group relative py-1.5 cursor-pointer">
                <span className="font-[Poppins] text-[13px] font-medium tracking-[0.16em] uppercase text-gray-200 transition-all duration-300 ease-out group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(43,179,255,0.7)] inline-block group-hover:-translate-y-0.5">
                  {label}
                </span>

                {/* Animated Electric Cyan Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#2BB3FF] to-[#3C4BBF] rounded-full shadow-[0_0_8px_#2BB3FF] transition-all duration-300 ease-out group-hover:w-full pointer-events-none" />
              </Link>
            ))}

            {/* Outlined Pill Contact Us Button with Glow Sweep */}
            <Link to="/contact_us">
              <button className="group relative font-[Poppins] text-[13px] font-medium tracking-[0.16em] uppercase text-white px-8 py-2.5 rounded-full cursor-pointer border border-[#2BB3FF] overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-[#2BB3FF18] hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(43,179,255,0.5)]">
                <span className="relative z-10 transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                  Contact Us
                </span>
                
                {/* Subtle light sweep reflection */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full pointer-events-none" />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-[#2BB3FF]"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-[300]
          h-screen w-72
          bg-[#050505]
          border-l border-[#3C4BBF40]
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-6">
          <img src="/Images/Logo.png" className="w-10" alt="" />
          <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
            <X size={26} />
          </button>
        </div>

        <div className="mt-8 flex flex-col">
          {[...NAV_LINKS, { label: "Contact Us", path: "/contact_us" }].map(
            ({ label, path }, i) => (
              <Link key={i} to={path}>
                <button
                  className="px-8 py-4 text-left w-full text-white hover:bg-[#3C4BBF20] hover:text-[#2BB3FF] transition font-[Poppins] text-sm tracking-wider uppercase cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </button>
              </Link>
            )
          )}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[250] bg-black/60 lg:hidden"
        />
      )}
    </>
  );
});

export default NavBar;
