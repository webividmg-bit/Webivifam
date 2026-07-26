import React, { forwardRef } from "react";
import clsx from "clsx";

// Icons
import { X } from "lucide-react";

const ServicePopUp = forwardRef(
  ({ open, onClose, title, className, subServices = [], ...props }, ref) => {
    if (!open) return null;

    return (
      <div
        className={clsx(
          "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-5",
          className,
        )}
        {...props}
      >
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            w-full
            max-w-2xl
            rounded-[32px]
            border border-white/10
            bg-[#0B1020]
            p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          <button
            onClick={onClose}
            className="
              absolute right-5 top-5
              rounded-full
              bg-white/5
              p-2
              transition
              hover:bg-white/10
              cursor-pointer
            "
          >
            <X size={18} className="text-white" />
          </button>

          <h2 className="text-3xl font-bold text-white">{title}</h2>

          <p className="mt-2 text-gray-400">
            Explore everything included in this service.
          </p>

          <div className="my-8 h-px bg-white/10" />

          <div className="grid gap-4 sm:grid-cols-2">
            {subServices.map((service) => (
              <div
                key={service}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2BB3FF]
                  hover:bg-[#2BB3FF]/10
                "
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default ServicePopUp;
