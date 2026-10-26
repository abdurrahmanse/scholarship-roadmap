import React from "react";
import { Layers } from "lucide-react";
import { roadmapUiData } from "@/data/roadmapUiData";

export function LevelsHeader() {
  const { badge, title, subtitle } = roadmapUiData.levelsHeader;

  return (
    <div className="text-center max-w-3xl mx-auto space-y-3">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
        <Layers className="w-3.5 h-3.5 text-indigo-400" />
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        {subtitle}
      </p>
    </div>
  );
}

export default LevelsHeader;
