import React from "react";

const INFINITY_PATH =
  "M 250,110 C 300,45 440,45 440,110 C 440,175 300,175 250,110 C 200,45 60,45 60,110 C 60,175 200,175 250,110 Z";

export default function InfinityGraphic() {
  return (
    <div className="relative w-full max-w-[460px] h-[210px] flex items-center justify-center">
      <svg
        viewBox="0 0 500 220"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="nodeBlueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Infinity Figure-8 Curve */}
        <path
          d={INFINITY_PATH}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeOpacity="0.85"
        />

        {/* Endless Traveling Glowing Blue Dot */}
        <g>
          <circle cx="0" cy="0" r="11" fill="#2BB3FF" opacity="0.35" filter="url(#nodeBlueGlow)" />
          <circle cx="0" cy="0" r="6.5" fill="#3C4BBF" stroke="#B3E5FF" strokeWidth="1.2" />
          <animateMotion
            path={INFINITY_PATH}
            dur="9s"
            repeatCount="indefinite"
          />
        </g>

        {/* Stationary Text Labels */}
        <text
          x="145"
          y="115"
          fill="#FFFFFF"
          fontSize="17"
          fontFamily="Poppins, sans-serif"
          fontWeight="400"
          textAnchor="middle"
        >
          Your Growth.
        </text>
        <text
          x="355"
          y="115"
          fill="#FFFFFF"
          fontSize="17"
          fontFamily="Poppins, sans-serif"
          fontWeight="400"
          textAnchor="middle"
        >
          Engineered.
        </text>
      </svg>
    </div>
  );
}
