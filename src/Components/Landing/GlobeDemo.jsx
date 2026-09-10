import React from "react";
import Earth from "@/components/ui/globe";

function GlobeDemo() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white flex items-center justify-center p-4">
      <article className="w-full max-w-[580px] mx-auto p-6 text-center border-neutral-900 border rounded-2xl relative overflow-hidden bg-black/60 backdrop-blur-xl shadow-[0_0_80px_rgba(30,58,138,0.25)]">
        {/* Dot Matrix Radial Grid Pattern */}
        <div
          className="absolute top-0 left-0 z-1 h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)]"
          style={{ backgroundSize: "20px 20px" }}
        />

        <div className="relative z-10">
          <span className="inline-block text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-semibold mb-3">
            Global Infrastructure
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter mb-4">
            DESIGN A MASTERPIECE
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto mb-6">
            Real-time interactive 3D WebGL globe with active presence across India HQ, UK, USA, Canada, and Australia.
          </p>
          <Earth />
        </div>
      </article>
    </div>
  );
}

export default GlobeDemo;
