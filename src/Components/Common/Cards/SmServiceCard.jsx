import React, { forwardRef } from "react";
import { Link } from "react-router";
import clsx from "clsx";

const SmServiceCard = forwardRef(
  (
    { icon: Icon, title, description, onMoreInfo, className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "group overflow-hidden rounded-3xl border border-[#3C4BBF40] bg-gradient-to-b from-[#121730] via-[#0E1224] to-[#090B15] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#2BB3FF] hover:shadow-[0_15px_60px_rgba(43,179,255,.18)]",
          className,
        )}
        {...props}
      >
        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2BB3FF]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2BB3FF]/20" />

        {/* Icon */}
        <div className="relative z-10 mb-7 flex justify-center">
          <div
            className="
              flex h-20 w-20 items-center justify-center
              rounded-2xl
              border border-[#2BB3FF30]
              bg-gradient-to-br
              from-[#2BB3FF20]
              to-[#3C4BBF20]
              transition-all duration-500
              group-hover:rotate-6
              group-hover:scale-110
              group-hover:border-[#2BB3FF80]
            "
          >
            <Icon className="h-10 w-10 text-[#2BB3FF]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-center font-[Poppins] text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#2BB3FF]">
          {title}
        </h3>

        {/* Divider */}
        <div className="relative z-10 mx-auto my-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#2BB3FF] to-[#3C4BBF] transition-all duration-500 group-hover:w-24" />

        {/* Description */}
        <p className="font-[Poppins] relative z-10 text-center text-[14px] leading-6 text-gray-300">
          {description}
        </p>

        {/* CTA */}
        <div
          className="
          flex
          justify-center
          overflow-hidden
          mt-6
          relative z-10
          gap-2
          "
        >
          <button
            onClick={onMoreInfo}
            className="
            cursor-pointer
            rounded-xl
            border
            border-white/10
            bg-[#0B1020]
            px-5
            py-3
            
            text-sm
            font-semibold
            text-gray-200
            font-[Poppins]
            
            transition-all
            duration-500
            translate-y-6
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            
            hover:border-[#2BB3FF]
            hover:bg-[#131A2F]
            hover:text-white
            hover:shadow-[0_0_20px_rgba(43,179,255,.15)]
            
            focus:outline-none
            focus:ring-2
            focus:ring-[#2BB3FF40]
            "
          >
            More Info
          </button>

          <Link
            to="/contact_us"
            className="
            inline-flex
            items-center
            gap-2
            
            translate-y-6
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            
            cursor-pointer
            rounded-xl
            border
            border-[#2BB3FF50]
            bg-[#121A36]
            px-5
            py-3
            
            text-sm
            font-semibold
            text-[#D8E6FF]
            no-underline
            
            transition-all
            duration-500
            
            hover:border-[#2BB3FF]
            hover:bg-[#162149]
            hover:text-white
            hover:shadow-[0_0_25px_rgba(43,179,255,.18)]
            
            focus:outline-none
            focus:ring-2
            focus:ring-[#2BB3FF40]
            font-[Poppins]
            "
          >
            Contact for Service
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#2BB3FF] to-[#3C4BBF] transition-all duration-500 group-hover:w-full" />
      </div>
    );
  },
);

export default SmServiceCard;
