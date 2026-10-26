"use client";

import React from "react";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseMistakesAndExampleProps {
  mistakes: string[];
  example: string;
}

export function PhaseMistakesAndExample({ mistakes, example }: PhaseMistakesAndExampleProps) {
  const { mistakesHeading, exampleHeading } = roadmapControlsData.cardLabels;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Common Mistakes */}
      <div className="p-4 sm:p-5 rounded-xl bg-amber-950/30 border border-amber-500/20 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>{mistakesHeading}</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {mistakes.map((m, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-400 font-bold leading-none mt-1">•</span>
              <span className="leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Practical Example */}
      <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 space-y-2.5">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>{exampleHeading}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-sans">{example}</p>
      </div>
    </div>
  );
}

export default PhaseMistakesAndExample;
