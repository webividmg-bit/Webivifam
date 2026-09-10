import React, { useState, forwardRef } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about_us" },
  { label: "Our Service", path: "/services" },
  { label: "Blogs", path: "/blogs" },
];

const NavBar = forwardRef(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`w-full z-40 relative bg-transparent ${className ?? ""}`}
        {...props}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 sm:px-12 lg:px-16 py-7">
          
          {/* Cyan/Blue Logo with Spring Pop & Glowing Aura on Hover */}
          <Link to="/" className="flex items-center group">
            <img
              src="/Images/Logo.png"
              alt="WEBIVIFAM Logo"
              className="w-10 sm:w-12 object-contain transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-125 group-hover:drop-shadow-[0_0_22px_rgba(43,179,255,0.95)] active:scale-95 cursor-pointer select-none"
            />
          </Link>

          {/* Nav Links Desktop matching Image 1 */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map(({ label, path }, i) => (
              <Link key={i} to={path}>
                <span className="font-[Poppins] text-[13px] font-medium tracking-[0.16em] uppercase text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer">
                  {label}
                </span>
              </Link>
            ))}

            {/* Outlined Pill Contact Us Button matching Image 1 */}
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
