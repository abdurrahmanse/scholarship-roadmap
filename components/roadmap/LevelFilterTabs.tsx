"use client";

import React from "react";
import { RoadmapLevel } from "@/data/types";

interface LevelFilterTabsProps {
  levels: RoadmapLevel[];
  selectedLevelId: string;
  onSelectLevelId: (id: string) => void;
}

export function LevelFilterTabs({
  levels,
  selectedLevelId,
  onSelectLevelId,
}: LevelFilterTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0f1422] border border-white/10 max-w-3xl mx-auto">
      <button
        onClick={() => onSelectLevelId("all")}
        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          selectedLevelId === "all"
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
            : "text-slate-400 hover:text-white"
        }`}
      >
        All 5 Levels (26 Tasks)
      </button>
      {levels.map((lvl) => (
        <button
          key={lvl.id}
          onClick={() => onSelectLevelId(lvl.id)}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            selectedLevelId === lvl.id
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <span>
            Level {lvl.levelNumber}: {lvl.shortTitle}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/10">
            {lvl.totalSteps}
          </span>
        </button>
      ))}
    </div>
  );
}

export default LevelFilterTabs;
