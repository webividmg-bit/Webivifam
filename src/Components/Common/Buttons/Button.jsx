import { forwardRef } from "react";
import clsx from "clsx";

const sizes = {
  sm: {
    wrapper: "p-[1px]",
    inner: "px-6 py-2 text-sm",
  },

  md: {
    wrapper: "p-[1px]",
    inner: "px-8 py-3 text-base",
  },

  lg: {
    wrapper: "p-[1px]",
    inner: "px-10 py-4 text-lg",
  },
};

const variants = {
  default: {
    wrapper:
      "bg-gradient-to-b from-[#2BB3FF] to-[#3C4BBF] shadow-[0_0_18px_rgba(43,179,255,.18)] hover:shadow-[0_0_35px_rgba(43,179,255,.35)]",
    inner: "text-white",
    overlay: "bg-black",
  },

  filled: {
    wrapper:
      "bg-black shadow-[0_0_18px_rgba(43,179,255,.18)] hover:shadow-[0_0_35px_rgba(43,179,255,.35)]",
    inner: "text-white",
    overlay: "bg-gradient-to-b from-[#2BB3FF] to-[#3C4BBF]",
  },

  outline: {
    wrapper: "border border-[#2BB3FF] hover:border-[#54C4FF]",
    inner: "text-white",
    overlay: "bg-[#2BB3FF]",
  },

  ghost: {
    wrapper: "",
    inner: "text-white",
    overlay: "bg-white/10",
  },
};

const Button = forwardRef(
  (
    {
      children,
      size = "md",
      variant = "default",
      uppercase = true,
      leftIcon,
      rightIcon,
      onClick,
      className,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const currentSize = sizes[size];
    const currentVariant = variants[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          "group relative inline-flex overflow-hidden rounded-full transition-all duration-300 hover:-translate-y-[2px] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.9]",
          currentSize.wrapper,
          currentVariant.wrapper,
          className,
        )}
        {...props}
      >
        {/* CONTENT */}
        <span
          className={clsx(
            "relative z-20 inline-flex items-center justify-center gap-2 rounded-full font-[Poppins] tracking-wide",
            uppercase && "uppercase",
            currentSize.inner,
            currentVariant.inner,
          )}
        >
          {leftIcon && (
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              {leftIcon}
            </span>
          )}

          {children}

          {rightIcon && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {rightIcon}
            </span>
          )}
        </span>

        {/* SLIDING LAYER */}
        <div
          className={clsx(
            "absolute left-1/2 top-1/2 z-10 h-[94%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[170%] group-hover:rounded-none",
            currentVariant.overlay,
          )}
        />
      </button>
    );
  },
);

export default Button;
