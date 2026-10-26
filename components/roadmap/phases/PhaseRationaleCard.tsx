"use client";

import React from "react";
import { Compass } from "lucide-react";

export interface PhaseRationaleCardProps {
  why: string;
}

export function PhaseRationaleCard({ why }: PhaseRationaleCardProps) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1422] border border-white/10 shadow-xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-sm">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
            Committee Perspective
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Why This Stage Matters
          </h3>
        </div>
      </div>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
        {why}
      </p>
    </div>
  );
}

export default PhaseRationaleCard;
