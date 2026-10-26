"use client";

import React from "react";
import { Clock, GraduationCap, Award, Compass, ShieldCheck } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { phaseDetailUiData } from "@/data/phaseDetailUiData";

export interface PhaseDetailBadgesProps {
  phase: RoadmapPhase;
}

export function PhaseDetailBadges({ phase }: PhaseDetailBadgesProps) {
  const isMastersOnly = phase.degreeScope === "masters";
  const isPhdOnly = phase.degreeScope === "phd";
  const { badges } = phaseDetailUiData;

  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-5">
      {/* Phase Index Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <span>
          {badges.phasePrefix} {String(phase.number).padStart(2, "0")} {badges.totalPhasesSuffix}
        </span>
      </span>

      {/* Duration Badge */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
        <Clock className="w-3.5 h-3.5 text-teal-400" />
        <span>{phase.estimatedDuration}</span>
      </span>

      {/* Degree Scope Badge */}
      {isMastersOnly && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{badges.mastersSpecific}</span>
        </span>
      )}

      {isPhdOnly && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-mono font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>{badges.phdSpecific}</span>
        </span>
      )}

      {!isMastersOnly && !isPhdOnly && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono">
          <Compass className="w-3.5 h-3.5 text-teal-400" />
          <span>{badges.bothScope}</span>
        </span>
      )}

      {/* Verification Standard */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>{badges.freeStandard}</span>
      </span>
    </div>
  );
}

export default PhaseDetailBadges;
