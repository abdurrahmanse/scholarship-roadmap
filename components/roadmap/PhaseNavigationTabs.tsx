"use client";

import React from "react";
import { phasesData } from "@/data/phases";

interface PhaseNavigationTabsProps {
  selectedPhase: number | "all";
  onSelectPhase: (phase: number | "all") => void;
}

export function PhaseNavigationTabs({
  selectedPhase,
  onSelectPhase
}: PhaseNavigationTabsProps) {
  const currentSliderValue = selectedPhase === "all" ? 0 : selectedPhase;

  return (
    <div className="py-4 border-b border-white/[0.08] sticky top-16 z-30 bg-[#090d16]/90 backdrop-blur-2xl shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => onSelectPhase("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedPhase === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              All 7 Phases
            </button>

            {phasesData.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectPhase(p.number)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedPhase === p.number
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">P{p.number}</span>
                <span className="hidden md:inline">{p.shortTitle || p.title.split(":")[1]?.trim() || p.title}</span>
              </button>
            ))}
          </div>

          {/* Quick Scrub Range Slider */}
          <div className="hidden lg:flex items-center gap-3 w-56 shrink-0">
            <span className="text-[11px] font-mono text-slate-400">P0</span>
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={currentSliderValue}
              onChange={(e) => onSelectPhase(parseInt(e.target.value, 10))}
              className="range-slider"
              aria-label="Phase navigation scrubber"
            />
            <span className="text-[11px] font-mono text-slate-400">P6</span>
          </div>
        </div>
      </div>
    </div>
  );
}
