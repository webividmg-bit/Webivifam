import React from "react";

export default function TreeRootsGraphic() {
  return (
    <svg
      className="absolute inset-0 w-full h-[500px] pointer-events-none overflow-visible z-0"
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rootStreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3C54EE" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#2E40B0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1C2668" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id="pulseGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2BB3FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#3C54EE" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Static Base Branches */}
      <path
        d="M 100 20 C 120 75 300 90 435 150 L 435 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.3"
      />
      <path
        d="M 230 20 C 270 90 380 95 442 165 L 442 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.3"
      />
      <path
        d="M 380 20 C 400 70 445 100 448 180 L 448 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.2"
      />
      <path
        d="M 520 20 C 500 70 455 100 452 180 L 452 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.2"
      />
      <path
        d="M 670 20 C 630 90 520 95 458 165 L 458 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.3"
      />
      <path
        d="M 800 20 C 780 75 600 90 465 150 L 465 500"
        fill="none"
        stroke="url(#rootStreamGrad)"
        strokeWidth="1.3"
      />

      {/* Top-to-Bottom Flowing Energy Stream Overlays */}
      <path
        d="M 100 20 C 120 75 300 90 435 150 L 435 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.8"
        className="tree-stream-1"
      />
      <path
        d="M 230 20 C 270 90 380 95 442 165 L 442 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.8"
        className="tree-stream-2"
      />
      <path
        d="M 380 20 C 400 70 445 100 448 180 L 448 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.6"
        className="tree-stream-3"
      />
      <path
        d="M 520 20 C 500 70 455 100 452 180 L 452 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.6"
        className="tree-stream-4"
      />
      <path
        d="M 670 20 C 630 90 520 95 458 165 L 458 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.8"
        className="tree-stream-5"
      />
      <path
        d="M 800 20 C 780 75 600 90 465 150 L 465 500"
        fill="none"
        stroke="url(#pulseGlowGrad)"
        strokeWidth="1.8"
        className="tree-stream-6"
      />
    </svg>
  );
}
