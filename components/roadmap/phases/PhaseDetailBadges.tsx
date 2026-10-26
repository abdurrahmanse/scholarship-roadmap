"use client";

import React from "react";
import { Sparkles, Clock, GraduationCap, Award, Compass, ShieldCheck } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";

export interface PhaseDetailBadgesProps {
  phase: RoadmapPhase;
}

export function PhaseDetailBadges({ phase }: PhaseDetailBadgesProps) {
  const isMastersOnly = phase.degreeScope === "masters";
  const isPhdOnly = phase.degreeScope === "phd";

  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-5">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold shadow-md">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>Phase {String(phase.number).padStart(2, "0")} of 13</span>
      </span>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
        <Clock className="w-3.5 h-3.5 text-teal-400" />
        <span>{phase.estimatedDuration}</span>
      </span>

      {isMastersOnly ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Master&apos;s Specific Pathway</span>
        </span>
      ) : isPhdOnly ? (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-mono font-semibold">
          <Award className="w-3.5 h-3.5" />
          <span>PhD Specific Pathway</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Universal (Master&apos;s & PhD)</span>
        </span>
      )}

      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Verified Blueprint</span>
      </span>
    </div>
  );
}

export default PhaseDetailBadges;
