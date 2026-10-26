"use client";

import React from "react";
import { ListOrdered, Layers, Sparkles } from "lucide-react";

interface RoadmapViewSwitcherProps {
  activeView: "phases" | "levels";
  onViewChange: (view: "phases" | "levels") => void;
}

export function RoadmapViewSwitcher({
  activeView,
  onViewChange,
}: RoadmapViewSwitcherProps) {
  return (
    <div className="p-3 sm:p-4 rounded-2xl bg-[#0f1422] border border-white/10 shadow-2xl space-y-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#090d16] border border-white/5 w-full md:w-auto">
          <button
            onClick={() => onViewChange("phases")}
            className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeView === "phases"
                ? "bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg shadow-teal-950/50"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ListOrdered className="w-4 h-4 text-teal-300" />
            <span>13 Sequential Application Phases</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
              13
            </span>
          </button>

          <button
            onClick={() => onViewChange("levels")}
            className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeView === "levels"
                ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-950/50"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-300" />
            <span>5 Progressive Career Levels</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
              5 Levels · 26 Tasks
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pl-1 md:pl-0">
          <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>
            {activeView === "phases"
              ? "Chronological Application Timeline: Diagnostic to Visa Stamp"
              : "Curriculum Career Ladder: Foundational Rigor to Faculty Defense"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RoadmapViewSwitcher;
