"use client";

import React from "react";
import { stipendCitiesData } from "@/data/homeData";

export interface StipendCitySelectorProps {
  selectedIndex: number;
  onSelectCity: (index: number) => void;
}

/**
 * City selection button list sub-component for stipend calculations.
 */
export function StipendCitySelector({
  selectedIndex,
  onSelectCity,
}: StipendCitySelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
        Select Target Graduate AI Hub:
      </label>
      {stipendCitiesData.map((c, idx) => (
        <button
          key={c.name}
          onClick={() => onSelectCity(idx)}
          className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
            selectedIndex === idx
              ? "bg-emerald-950/60 border-emerald-500/80 text-white shadow-xl shadow-emerald-950/50"
              : "bg-[#0f1422] border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
          }`}
        >
          <div>
            <div className="text-sm font-bold font-heading">{c.name}</div>
            <div className="text-xs text-slate-400 mt-0.5">{c.institution}</div>
          </div>
          <div className="text-xs font-mono font-semibold px-2 py-1 rounded bg-white/[0.06] text-slate-300">
            {c.symbol} {c.annualGrossStipend.toLocaleString()}/yr
          </div>
        </button>
      ))}
    </div>
  );
}

export default StipendCitySelector;
