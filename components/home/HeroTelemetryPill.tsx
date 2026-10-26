"use client";

import React from "react";
import { heroEqualizerData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";

export function HeroTelemetryPill() {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0f1422] border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-8 shadow-xl shadow-indigo-950/60 backdrop-blur-xl group hover:border-indigo-400 transition-all duration-300 max-w-[calc(100vw-32px)]">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
      </span>
      <span className="uppercase tracking-wider font-mono text-[10px] sm:text-[11px] font-bold truncate">
        {homePageData.hero.badge}
      </span>
      <span className="text-slate-600 hidden md:inline">|</span>
      {/* Animated Equalizer Bars */}
      <div className="hidden md:flex items-center gap-0.5 h-3" aria-hidden="true">
        {heroEqualizerData.bars.slice(0, 7).map((height, idx) => (
          <span
            key={idx}
            className="w-0.5 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-full animate-pulse"
            style={{
              height: `${height}%`,
              animationDuration: `${0.6 + (idx % 4) * 0.25}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroTelemetryPill;
