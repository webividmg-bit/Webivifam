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
        {/* Top Info & Social Bar (Matching Image Reference) */}
        <div className="w-full border-b border-[#2B3E94]/30 bg-black/90 backdrop-blur-md relative z-50">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-16 py-2 sm:py-2.5">
            {/* Left: Email */}
            <a
              href="mailto:Webividmg@gmail.com"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-[Poppins] text-slate-300 hover:text-white transition-colors group cursor-pointer"
            >
              <Mail size={14} className="text-[#2BB3FF] group-hover:scale-110 transition-transform" />
              <span>Webividmg@gmail.com</span>
            </a>

            {/* Right: Social Media Icons */}
            <div className="flex items-center gap-3.5 sm:gap-5 text-slate-300">
              {TOP_SOCIAL_LINKS.map(({ icon: Icon, path, label }, i) => (
                <a
                  key={i}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xs sm:text-sm text-slate-400 hover:text-[#2BB3FF] hover:scale-115 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 sm:px-12 lg:px-16 py-5 sm:py-6">
          
          {/* Cyan/Blue Logo with Spring Pop & Glowing Aura on Hover */}
          <Link to="/" className="flex items-center group">
            <img
              src="/Images/Logo.png"
              alt="WEBIVIFAM Logo"
              className="w-10 sm:w-12 object-contain transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:drop-shadow-[0_0_22px_rgba(43,179,255,0.95)] active:scale-95 cursor-pointer select-none"
            />
          </Link>

          {/* Nav Links Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map(({ label, path }, i) => (
              <Link key={i} to={path}>
                <span className="font-[Poppins] text-[13px] font-medium tracking-[0.16em] uppercase text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer">
                  {label}
                </span>
              </Link>
            ))}

            {/* Outlined Pill Contact Us Button */}
            <Link to="/contact_us">
              <button className="font-[Poppins] text-[13px] font-medium tracking-[0.16em] uppercase text-white px-8 py-2.5 rounded-full cursor-pointer border border-[#2BB3FF] transition-all duration-300 hover:bg-[#2BB3FF18] hover:shadow-[0_0_24px_rgba(43,179,255,0.4)]">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white cursor-pointer"
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
                  className="px-8 py-4 text-left w-full text-white hover:bg-[#3C4BBF20] transition font-[Poppins] text-sm tracking-wider uppercase cursor-pointer"
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
