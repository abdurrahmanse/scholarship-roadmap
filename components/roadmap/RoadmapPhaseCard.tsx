"use client";

import React from "react";
import { ChevronDown, ChevronUp, Clock, GraduationCap, Award } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { PhaseWhatWhy } from "./PhaseWhatWhy";
import { PhaseHowSteps } from "./PhaseHowSteps";
import { PhaseOfficialResources } from "./PhaseOfficialResources";
import { PhaseMistakesAndExample } from "./PhaseMistakesAndExample";
import { PhaseChecklist } from "./PhaseChecklist";
import { PhaseNuancesAndNav } from "./PhaseNuancesAndNav";

export interface RoadmapPhaseCardProps {
  phase: RoadmapPhase;
  isExpanded: boolean;
  onToggle: () => void;
  checkedItems: Record<string, boolean>;
  onToggleChecklistItem: (id: string) => void;
  prevPhaseId?: string;
  onNavigateToPhase: (phaseId: string) => void;
}

export function RoadmapPhaseCard({
  phase,
  isExpanded,
  onToggle,
  checkedItems,
  onToggleChecklistItem,
  prevPhaseId,
  onNavigateToPhase
}: RoadmapPhaseCardProps) {
  const isMastersOnly = phase.degreeScope === "masters";
  const isPhdOnly = phase.degreeScope === "phd";

  return (
    <div
      id={phase.id}
      className={`rounded-2xl border transition-all duration-300 relative overflow-hidden ${
        isExpanded
          ? "bg-slate-900/90 border-white/15 shadow-2xl"
          : "bg-slate-900/50 border-white/[0.07] hover:border-white/15 hover:bg-slate-900/80"
      }`}
    >
      {/* Phase Card Header / Toggle Button */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start sm:items-center gap-4">
          <span
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-base font-mono font-black shrink-0 ${
              isExpanded
                ? "bg-gradient-to-tr from-indigo-600 to-teal-500 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-800 text-slate-300 border border-white/10"
            }`}
          >
            {String(phase.number).padStart(2, "0")}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                Phase {String(phase.number).padStart(2, "0")} of 13
              </span>
              <span className="text-slate-500">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Clock className="w-3 h-3 text-teal-400" />
                <span>{phase.estimatedDuration}</span>
              </span>
              {isMastersOnly && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <GraduationCap className="w-3 h-3" />
                  <span>Master&apos;s Specific</span>
                </span>
              )}
              {isPhdOnly && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Award className="w-3 h-3" />
                  <span>PhD Specific</span>
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {phase.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-3xl">
              {phase.tagline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <span className="text-xs font-semibold text-slate-400">
            {isExpanded ? "Collapse Phase" : "Expand Instructions"}
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Step-by-Step Instructions */}
      {isExpanded && (
        <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-white/5 space-y-6">
          {/* 1. What to do & Why it matters */}
          <PhaseWhatWhy what={phase.what} why={phase.why} />

          {/* 2. Step-by-Step Instructions */}
          <PhaseHowSteps steps={phase.how} />

          {/* 3. Official External Portals & Links */}
          <PhaseOfficialResources resources={phase.where} />

          {/* 4. Common Mistakes & Practical Example */}
          <PhaseMistakesAndExample mistakes={phase.commonMistakes} example={phase.practicalExample} />

          {/* 5. Phase Preparation Checklist */}
          <PhaseChecklist
            checklist={phase.checklist}
            checkedItems={checkedItems}
            onToggleItem={onToggleChecklistItem}
          />

          {/* 6. Nuances and Next Step Navigation */}
          <PhaseNuancesAndNav
            mastersNuance={phase.mastersNuance}
            phdNuance={phase.phdNuance}
            nextStep={phase.nextStep}
            prevPhaseId={prevPhaseId}
            onNavigateToPhase={onNavigateToPhase}
          />
        </div>
      )}
    </div>
  );
}

export default RoadmapPhaseCard;
