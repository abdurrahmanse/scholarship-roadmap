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
  return (
    <div className="py-8 border-b border-slate-800/80 sticky top-16 z-30 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectPhase("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedPhase === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All 7 Phases
          </button>

          {phasesData.map((p) => (
            <button
              key={p.id}
              onClick={() => onSelectPhase(p.number)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedPhase === p.number
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">P{p.number}</span>
              <span>{p.shortTitle || p.title.split(":")[1]?.trim() || p.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
