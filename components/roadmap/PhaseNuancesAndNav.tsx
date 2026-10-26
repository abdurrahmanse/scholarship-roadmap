"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseNuancesAndNavProps {
  mastersNuance: string;
  phdNuance: string;
  nextStep?: { slug: string; title: string };
  prevPhaseId?: string;
  onNavigateToPhase: (phaseId: string) => void;
}

export function PhaseNuancesAndNav({
  mastersNuance,
  phdNuance,
  nextStep,
  prevPhaseId,
  onNavigateToPhase
}: PhaseNuancesAndNavProps) {
  const { nuanceMasters, nuancePhd, nextStepLabel, prevStepLabel } = roadmapControlsData.cardLabels;

  return (
    <div className="space-y-5 pt-4 border-t border-white/5">
      {/* Master's vs PhD Nuances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-teal-950/30 border border-teal-500/20 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-teal-400 block">
            {nuanceMasters}
          </span>
          <p className="text-slate-300 leading-relaxed">{mastersNuance}</p>
        </div>
        <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase text-indigo-400 block">
            {nuancePhd}
          </span>
          <p className="text-slate-300 leading-relaxed">{phdNuance}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">
        {prevPhaseId ? (
          <button
            onClick={() => onNavigateToPhase(prevPhaseId)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{prevStepLabel}</span>
          </button>
        ) : (
          <div />
        )}

        {nextStep && (
          <button
            onClick={() => onNavigateToPhase(nextStep.slug)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold transition-all cursor-pointer group"
          >
            <span>
              {nextStepLabel}: {nextStep.title}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-indigo-400" />
          </button>
        )}
      </div>
    </div>
  );
}

export default PhaseNuancesAndNav;
