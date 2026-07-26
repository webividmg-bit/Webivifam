import React, { forwardRef } from "react";
import clsx from "clsx";

// Components
import Badge from "../Badge";

const TeamCard = forwardRef(
  ({ image, name, role, description, className, ...props }, ref) => {
    {
      return (
        <div
          ref={ref}
          className={clsx(
            "group relative h-full overflow-hidden rounded-[24px] lg:rounded-[28px] border border-[#3C4BBF40] bg-gradient-to-b from-[#10142B] to-[#090B15] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#2BB3FF] hover:shadow-[0_0_45px_rgba(43,179,255,.15)]",
            className,
          )}
          {...props}
        >
          {/* Background Glow */}
          <div
            className="
            absolute
            -top-24
            left-1/2
            h-56
            w-56
            -translate-x-1/2
            rounded-full
            bg-[#2BB3FF]/10
            blur-[90px]
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            "
          />

          <div className="relative z-10">
            {/* Profile */}
            <div className="mb-6 flex justify-center">
              <div
                className="
                rounded-full
                bg-gradient-to-b
                from-[#2BB3FF20]
                to-[#3C4BBF20]
                p-2
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:shadow-[0_0_40px_rgba(43,179,255,.35)]
                "
              >
                <img
                  src={image}
                  alt={name}
                  className="
                  w-32
                  h-32
                  rounded-full
                  border-2
                  border-[#2BB3FF30]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "
                />
              </div>
            </div>

            {/* Name */}
            <h3
              className="
              text-center
              font-[Poppins]
              text-2xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-[#2BB3FF]
              "
            >
              {name}
            </h3>

            <div className="w-ull flex justify-center items-center mt-2">
              <Badge label={role} />
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#3C4BBF] to-transparent transition-all duration-300 group-hover:via-[#2BB3FF]" />

            {/* Description */}
            <p
              className="
              font-[Poppins]
              text-center
              text-[14px] 
              leading-6
              text-gray-300
              transition-colors
              duration-300
              group-hover:text-white
              "
            >
              {description}
            </p>

            {/* Bottom Accent */}
            <div className="mt-8 flex justify-center">
              <div
                className="
                h-1
                w-12
                rounded-full
                bg-[#2BB3FF]
                transition-all
                duration-300
                group-hover:w-24
                "
              />
            </div>
          </div>
        </div>
      );
    }
  },
);

export default TeamCard;
