import React, { forwardRef } from "react";
import clsx from "clsx";

// Icons
import { X, Plus, Minus } from "lucide-react";

const ServicePopUp = forwardRef(
  (
    {
      open,
      onClose,
      title,
      className,
      subServices = [],
      ...props
    },
    ref,
  ) => {
    if (!open) return null;

    return (
      <div
        className={clsx(
          `
            fixed
            inset-0
            z-[999]
            flex
            h-screen
            w-screen
            items-center
            justify-center
            bg-black/70
            p-5
            backdrop-blur-md
          `,
          className,
        )}
        {...props}
      >
        {/* Popup */}
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            max-h-[85vh]
            w-full
            max-w-2xl
            overflow-y-auto
            rounded-[32px]
            border
            border-white/10
            bg-[#0B1020]
            p-6
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            sm:p-8
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="
              absolute
              right-5
              top-5
              z-10
              cursor-pointer
              rounded-full
              bg-white/5
              p-2
              transition
              duration-300
              hover:bg-white/10
            "
          >
            <X
              size={18}
              className="text-white"
            />
          </button>

          {/* Heading */}
          <h2 className="pr-12 text-3xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-2 text-gray-400">
            Explore everything included in this service.
          </p>

          {/* Divider */}
          <div className="my-8 h-px bg-white/10" />

          {/* Sub Services */}
          <div className="divide-y divide-white/10">
            {subServices.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                className="
                  group
                  cursor-pointer
                  py-5
                "
              >
                {/* Service Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span className="w-6 text-xs text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        text-base
                        font-medium
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-[#2BB3FF]
                      "
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Plus / Minus */}
                  <div className="relative h-5 w-5 shrink-0">
                    <Plus
                      size={18}
                      className="
                        absolute
                        text-white/50
                        transition-all
                        duration-300
                        group-hover:rotate-90
                        group-hover:opacity-0
                      "
                    />

                    <Minus
                      size={18}
                      className="
                        absolute
                        text-[#2BB3FF]
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </div>

                {/* Description */}
                <div
                  className="
                    grid
                    grid-rows-[0fr]
                    opacity-0
                    transition-all
                    duration-300
                    ease-out
                    group-hover:mt-3
                    group-hover:grid-rows-[1fr]
                    group-hover:opacity-100
                  "
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-xl
                        pl-10
                        text-sm
                        leading-6
                        text-white/45
                      "
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default ServicePopUp;