import React, { forwardRef } from "react";

// Components
import Button from "../Buttons/Button";
import clsx from "clsx";

const BlogCard = forwardRef(
  (
    { image, day, month, author, title, description, onReadNow, className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "overflow-hidden rounded-2xl border border-[#3C4BBF30] bg-[#0C101F] transition-all duration-300 hover:-translate-y-2 hover:border-[#2BB3FF80]",
          className,
        )}
        {...props}
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
            h-[220px]
            sm:h-[240px]
            lg:h-[230px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="relative px-6 pt-10 pb-8 sm:px-8">
          {/* Timeline */}
          <div className="absolute left-10 top-0 h-full w-[2px] bg-[#2BB3FF20] sm:left-12" />

          {/* Date */}
          <div
            className="
            absolute
            left-4
            top-6
            z-10
            flex
            h-14
            w-14
            flex-col
            items-center
            justify-center
            rounded-full
            bg-gradient-to-b
            from-[#2BB3FF]
            to-[#3C4BBF]
            text-white
            shadow-lg
            sm:left-6
            sm:h-16
            sm:w-16
            "
          >
            <span className="text-lg font-bold leading-none sm:text-xl">
              {day}
            </span>

            <span className="text-[10px] uppercase sm:text-xs">{month}</span>
          </div>

          {/* Dot */}
          <div className="absolute bottom-6 left-[34px] h-4 w-4 rounded-full bg-[#2BB3FF] sm:left-[42px]" />

          <div className="ml-16 sm:ml-20">
            <p className="font-[Poppins] text-sm text-gray-400 sm:text-[15px]">
              Posted by <span className="text-white">{author}</span>
            </p>

            <h3
              className="
              mt-4
              font-[Poppins]
              text-2xl
              font-bold
              text-white
              line-clamp-2
              leading-tight
              lg:text-[30px]
              "
            >
              {title}
            </h3>

            <p
              className="
              mt-5
              overflow-hidden
              font-[Poppins]
              text-base
              leading-7
              text-gray-400
              line-clamp-3
              "
            >
              {description}
            </p>

            <Button onClick={onReadNow} uppercase={false} className="mt-8 cursor-pointer">
              Read Now
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

export default BlogCard;
