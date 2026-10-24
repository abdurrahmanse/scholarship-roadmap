"use client";

import React, { useState } from "react";
import {
  liveStatusTickerData,
  liveIndicatorData,
  StatusTickerItem
} from "@/data/navigationData";
import { ShieldCheck, Cpu, ChevronRight, Activity } from "lucide-react";

export function LiveStatusTicker() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const getVariantStyles = (variant: StatusTickerItem["variant"]) => {
    switch (variant) {
      case "emerald":
        return "border-emerald-500/40 text-emerald-300 bg-emerald-950/60";
      case "cyan":
        return "border-cyan-500/40 text-cyan-300 bg-cyan-950/60";
      case "amber":
        return "border-amber-500/40 text-amber-300 bg-amber-950/60";
      case "purple":
        return "border-purple-500/40 text-purple-300 bg-purple-950/60";
      case "indigo":
      default:
        return "border-indigo-500/40 text-indigo-300 bg-indigo-950/60";
    }
  };

  const currentItem = liveStatusTickerData[activeItemIndex];

  return (
    <div className="relative z-30 border-b border-white/[0.06] bg-[#05091a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-2 sm:gap-3 text-xs w-full overflow-hidden">
          {/* Live Online Telemetry Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono font-bold text-emerald-400 tracking-wider text-[10px] sm:text-[11px]">
              {liveIndicatorData.status}
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="font-semibold text-slate-300 hidden md:inline text-xs">
              {liveIndicatorData.detail}
            </span>
          </div>

          {/* Dynamic Interactive Ticker Item */}
          <div className="flex items-center gap-2 overflow-hidden flex-1 min-w-0 max-w-2xl justify-start">
            <span
              className={`px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 transition-colors ${getVariantStyles(
                currentItem.variant
              )}`}
            >
              {currentItem.badge}
            </span>
            <span className="text-slate-300 truncate font-medium text-[11px] sm:text-xs">
              {currentItem.text}
            </span>
          </div>

          {/* Fast Navigation Buttons through Ticker Items */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            {liveStatusTickerData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveItemIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeItemIndex === idx
                    ? "w-5 bg-indigo-400 shadow-sm shadow-indigo-400/50"
                    : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Show telemetry ${item.badge}`}
              />
            ))}
            <button
              onClick={() =>
                setActiveItemIndex((prev) => (prev + 1) % liveStatusTickerData.length)
              }
              className="ml-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Next telemetry update"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
