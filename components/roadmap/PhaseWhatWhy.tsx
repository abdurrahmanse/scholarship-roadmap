"use client";

import React from "react";
import { Sparkles, Compass } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseWhatWhyProps {
  what: string;
  why: string;
}

export function PhaseWhatWhy({ what, why }: PhaseWhatWhyProps) {
  const { whatHeading, whyHeading } = roadmapControlsData.cardLabels;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* WHAT to do */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{whatHeading}</span>
        </span>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{what}</p>
      </div>

      {/* WHY it matters */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
          <Compass className="w-3.5 h-3.5" />
          <span>{whyHeading}</span>
        </span>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{why}</p>
      </div>
    </div>
  );
}

export default PhaseWhatWhy;
