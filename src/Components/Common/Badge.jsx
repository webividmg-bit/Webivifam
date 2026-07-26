import clsx from "clsx";
import React, { forwardRef } from "react";

const Badge = forwardRef(({ label, className, ...props }, ref) => {
  {
    return (
      <div
        ref={ref}
        className={clsx(
          "inline-flex rounded-full font-[Poppins] border border-[#3C4BBF40] bg-[#10142B] px-4 py-2 text-sm font-semibold text-[#2BB3FF]",
          className,
        )}
        {...props}
      >
        {label}
      </div>
    );
  }
});

export default Badge;
