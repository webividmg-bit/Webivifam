import React from "react";

export default function IndustryBlueprintGraphic() {
  return (
    <div className="relative w-full max-w-[960px] mx-auto min-h-[600px] flex items-center justify-center">
      <svg
        viewBox="0 0 950 680"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ======================================================== */}
        {/* BACKGROUND GEOMETRY LAYER: VISIBLE STRUCTURED CHAOS MORPH */}
        {/* ======================================================== */}
        <g className="pointer-events-none">
          {/* Box 1: Gaming (Top-Left) */}
          <rect x="60" y="40" width="240" height="150" rx="28" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="240;256;228;240" dur="11s" repeatCount="indefinite" />
            <animate attributeName="height" values="150;138;158;150" dur="13s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.65;0.75" dur="9s" repeatCount="indefinite" />
          </rect>
          
          {/* Box 2: Vertical connector between Gaming and Startups */}
          <rect x="230" y="140" width="65" height="190" rx="26" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="height" values="190;208;176;190" dur="14s" repeatCount="indefinite" />
            <animate attributeName="width" values="65;72;58;65" dur="12s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.65;0.9;0.6;0.65" dur="11s" repeatCount="indefinite" />
          </rect>

          {/* Box 3: Service Businesses (Top-Center tall) */}
          <rect x="330" y="10" width="195" height="210" rx="32" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="195;182;208;195" dur="15s" repeatCount="indefinite" />
            <animate attributeName="height" values="210;224;198;210" dur="13s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.7;0.75" dur="10s" repeatCount="indefinite" />
          </rect>

          {/* Box 4: Top-Right horizontal link */}
          <rect x="455" y="55" width="270" height="95" rx="28" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="270;288;256;270" dur="12s" repeatCount="indefinite" />
            <animate attributeName="height" values="95;86;104;95" dur="14s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.65;0.88;0.6;0.65" dur="13s" repeatCount="indefinite" />
          </rect>

          {/* Box 5: Cafes & Restaurants (Middle-Right wide) */}
          <rect x="545" y="115" width="330" height="110" rx="30" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="330;314;345;330" dur="16s" repeatCount="indefinite" />
            <animate attributeName="height" values="110;122;100;110" dur="11s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.7;0.75" dur="12s" repeatCount="indefinite" />
          </rect>

          {/* Box 6: Center-Middle intersecting connector */}
          <rect x="455" y="195" width="130" height="135" rx="26" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="130;142;120;130" dur="10s" repeatCount="indefinite" />
            <animate attributeName="height" values="135;124;146;135" dur="13s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.65;0.9;0.6;0.65" dur="15s" repeatCount="indefinite" />
          </rect>

          {/* Box 7: Startups Left (Bottom-Left tall) */}
          <rect x="60" y="235" width="185" height="260" rx="32" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="185;198;174;185" dur="14s" repeatCount="indefinite" />
            <animate attributeName="height" values="260;244;274;260" dur="16s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.65;0.75" dur="11s" repeatCount="indefinite" />
          </rect>

          {/* Box 8: Jewellery (Middle-Bottom Left) */}
          <rect x="270" y="265" width="260" height="175" rx="32" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="260;244;276;260" dur="13s" repeatCount="indefinite" />
            <animate attributeName="height" values="175;188;162;175" dur="15s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.7;0.75" dur="9s" repeatCount="indefinite" />
          </rect>

          {/* Box 9: Healthcare (Middle-Right) */}
          <rect x="560" y="275" width="245" height="100" rx="28" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="245;260;232;245" dur="11s" repeatCount="indefinite" />
            <animate attributeName="height" values="100;90;110;100" dur="14s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.92;0.65;0.75" dur="12s" repeatCount="indefinite" />
          </rect>

          {/* Box 10: Far-Right vertical connector */}
          <rect x="780" y="305" width="125" height="195" rx="28" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="height" values="195;210;182;195" dur="16s" repeatCount="indefinite" />
            <animate attributeName="width" values="125;115;135;125" dur="12s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.65;0.9;0.6;0.65" dur="10s" repeatCount="indefinite" />
          </rect>

          {/* Box 11: Startups Bottom (Bottom-Center) */}
          <rect x="275" y="475" width="245" height="100" rx="28" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="245;232;258;245" dur="15s" repeatCount="indefinite" />
            <animate attributeName="height" values="100;110;90;100" dur="12s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.7;0.75" dur="14s" repeatCount="indefinite" />
          </rect>

          {/* Box 12: Real Estate (Bottom-Right large) */}
          <rect x="560" y="405" width="320" height="190" rx="32" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="320;336;305;320" dur="13s" repeatCount="indefinite" />
            <animate attributeName="height" values="190;178;202;190" dur="15s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.75;0.95;0.65;0.75" dur="11s" repeatCount="indefinite" />
          </rect>

          {/* Box 13: Intersecting link above Real Estate */}
          <rect x="500" y="390" width="80" height="110" rx="24" fill="none" stroke="#2B3E94" strokeWidth="1.3">
            <animate attributeName="width" values="80;90;72;80" dur="11s" repeatCount="indefinite" />
            <animate attributeName="height" values="110;120;100;110" dur="14s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.65;0.88;0.6;0.65" dur="13s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* ======================================================== */}
        {/* STATIC INDEPENDENT TYPOGRAPHY LAYER (PROTECTED FROM MORPH) */}
        {/* ======================================================== */}
        <g className="pointer-events-auto select-none">
          <text x="145" y="130" fill="#FFFFFF" fontSize="21" fontFamily="Poppins, sans-serif" fontWeight="400">
            Gaming
          </text>

          <text x="352" y="115" fill="#FFFFFF" fontSize="19" fontFamily="Poppins, sans-serif" fontWeight="400">
            <tspan x="352" dy="0">Service</tspan>
            <tspan x="352" dy="26">Businesses</tspan>
          </text>

          <text x="560" y="180" fill="#FFFFFF" fontSize="20" fontFamily="Poppins, sans-serif" fontWeight="400">
            Cafés &amp; Restaurants
          </text>

          <text x="90" y="420" fill="#FFFFFF" fontSize="21" fontFamily="Poppins, sans-serif" fontWeight="400">
            Startups
          </text>

          <text x="295" y="375" fill="#FFFFFF" fontSize="20" fontFamily="Poppins, sans-serif" fontWeight="400">
            Jewellery
          </text>

          <text x="575" y="338" fill="#FFFFFF" fontSize="20" fontFamily="Poppins, sans-serif" fontWeight="400">
            Healthcare
          </text>

          <text x="300" y="538" fill="#FFFFFF" fontSize="20" fontFamily="Poppins, sans-serif" fontWeight="400">
            Startups
          </text>

          <text x="590" y="540" fill="#FFFFFF" fontSize="22" fontFamily="Poppins, sans-serif" fontWeight="400">
            Real Estate
          </text>
        </g>
      </svg>
    </div>
  );
}
