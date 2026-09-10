import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Stage 1: Trigger smooth fade-out after the ball rolls and docks (2.2s)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Stage 2: Completely unmount preloader from DOM after fade-out transition (2.9s)
    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-all duration-700 ease-out select-none ${fadeOut
          ? "opacity-0 pointer-events-none scale-105 blur-sm"
          : "opacity-100 pointer-events-auto scale-100"
        }`}
    >
      <style>{`
        @keyframes drawW {
          0% { stroke-dashoffset: 262; opacity: 0; }
          20% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes rollBall {
          0% {
            offset-distance: 0%;
            opacity: 0;
            transform: scale(0.6);
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            offset-distance: 100%;
            transform: scale(1);
          }
          92% {
            offset-distance: 100%;
            transform: scale(1.25);
          }
          100% {
            offset-distance: 100%;
            transform: scale(1);
          }
        }
        @keyframes dockShockwave {
          0%, 65% {
            r: 8px;
            opacity: 0;
          }
          70% {
            r: 10px;
            opacity: 0.9;
            stroke-width: 2px;
          }
          100% {
            r: 36px;
            opacity: 0;
            stroke-width: 0.5px;
          }
        }
        @keyframes textReveal {
          0%, 40% {
            opacity: 0;
            letter-spacing: 0.2em;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            letter-spacing: 0.38em;
            transform: translateY(0px);
          }
        }
      `}</style>

      {/* Deep Atmospheric Neon Backlight */}
      <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.22)_0%,rgba(99,102,241,0.12)_50%,transparent_75%)] blur-[90px] pointer-events-none animate-pulse" />

      {/* Cybernetic Subtle Ambient Ring */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-cyan-500/15 animate-[spin_25s_linear_infinite] pointer-events-none" />

      {/* Centered Logo & Ball Rolling Animation */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        {/* Crisp Vector "Wi" Logo with Physical Ball Roll Path — matched to the real logo's sharp zigzag W, with a shortened final stroke that reads as the "i" */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
          <svg
            viewBox="0 0 200 160"
            className="w-full h-full overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradient for the 'W' Stroke: Cyan -> Blue -> Purple */}
              <linearGradient id="wGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="45%" stopColor="#00B4D8" />
                <stop offset="75%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>

              {/* 3D Radial Gradient for the Glowing Ball */}
              <radialGradient id="ballGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#A5F3FC" />
                <stop offset="40%" stopColor="#00E5FF" />
                <stop offset="85%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0369A1" />
              </radialGradient>
            </defs>

            {/* Glowing Ambient Backdrop Shadow of the 'W' */}
            <path
              d="M 36 55 L 63 118 L 90 55 L 117 118 L 144 72"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="21"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.25"
              filter="blur(8px)"
            />

            {/* Main Crisp 'W' Letter Geometry — sharp zigzag peaks/valleys, last stroke shortened to read as the "i" stem */}
            <path
              d="M 36 55 L 63 118 L 90 55 L 117 118 L 144 72"
              fill="none"
              stroke="url(#wGradient)"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="262"
              style={{ animation: "drawW 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards" }}
            />

            {/* Shockwave Ripple Ring expanding when the ball locks onto the 'i' dot position */}
            <circle
              cx="140"
              cy="45"
              r="12"
              fill="none"
              stroke="#00E5FF"
              style={{ animation: "dockShockwave 2s ease-out forwards" }}
            />

            {/* Satisfying Rolling Ball gliding over the sharp curves of 'W' and docking at the 'i' dot */}
            <g
              style={{
                offsetPath: `path("M 36 40 C 46 68, 53 100, 63 103 C 73 106, 80 68, 90 40 C 100 68, 107 100, 117 103 C 127 106, 132 65, 140 45")`,
                animation: "rollBall 1.6s cubic-bezier(0.25, 1, 0.35, 1) forwards",
              }}
            >
              <circle
                cx="0"
                cy="0"
                r="11"
                fill="url(#ballGrad)"
                filter="drop-shadow(0 0 10px rgba(0, 229, 255, 0.95))"
              />
              <circle cx="-3" cy="-3" r="3" fill="#FFFFFF" opacity="0.8" />
            </g>
          </svg>
        </div>

        {/* Brand Name "WEBIVIFAM" with Glowing Reveal */}
        <div className="mt-2 flex flex-col items-center">
          <span
            className="font-[Poppins] text-[13px] sm:text-[14px] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-300"
            style={{ animation: "textReveal 1.6s ease-out forwards" }}
          >
            WEBIVIFAM
          </span>
          <span
            className="text-[9px] font-mono tracking-[0.25em] text-cyan-400/60 uppercase mt-0.5"
            style={{ animation: "textReveal 1.8s ease-out forwards" }}
          >
            DIGITAL INNOVATION
          </span>
        </div>

      </div>
    </div>
  );
}