"use client";

import React from "react";
import { PhaseHowToStep, roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseHowStepsProps {
  steps: PhaseHowToStep[];
}

export function PhaseHowSteps({ steps }: PhaseHowStepsProps) {
  const { howHeading } = roadmapControlsData.cardLabels;

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
        {howHeading}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3"
          >
            <span className="w-6 h-6 rounded-lg bg-teal-500/15 border border-teal-500/30 text-teal-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="space-y-1 text-xs">
              <strong className="text-white block font-medium">{item.step}</strong>
              <p className="text-slate-300 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhaseHowSteps;
