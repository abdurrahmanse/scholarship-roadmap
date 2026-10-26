"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle2, Compass, ChevronsUpDown, Minus } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export interface RoadmapControlsProps {
  filterDegree: "all" | "masters" | "phd";
  onFilterDegreeChange: (degree: "all" | "masters" | "phd") => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  totalChecklistCount: number;
  completedChecklistCount: number;
}

export function RoadmapControls({
  filterDegree,
  onFilterDegreeChange,
  searchQuery,
  onSearchQueryChange,
  onExpandAll,
  onCollapseAll,
  totalChecklistCount,
  completedChecklistCount
}: RoadmapControlsProps) {
  const { filters, searchPlaceholder, actions, progress } = roadmapControlsData;
  const progressPercent = Math.round((completedChecklistCount / totalChecklistCount) * 100) || 0;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1422]/90 border border-white/10 backdrop-blur-xl sticky top-20 z-30 shadow-2xl space-y-4">
      {/* Top Controls Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Degree Pathway Segmented Filter */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090d16] border border-white/10 shrink-0">
          <button
            onClick={() => onFilterDegreeChange("all")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "all"
                ? "bg-gradient-to-r from-indigo-600 to-teal-600 text-white shadow-md shadow-indigo-950/60"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{filters.all}</span>
          </button>

          <button
            onClick={() => onFilterDegreeChange("masters")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "masters"
                ? "bg-teal-600 text-white shadow-md shadow-teal-950/60"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{filters.masters}</span>
          </button>

          <button
            onClick={() => onFilterDegreeChange("phd")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "phd"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-950/60"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{filters.phd}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-md w-full">
          <SearchInput
            value={searchQuery}
            onChange={onSearchQueryChange}
            placeholder={searchPlaceholder}
          />
        </div>

        {/* Expand / Collapse Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onExpandAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <ChevronsUpDown className="w-3.5 h-3.5 text-teal-400" />
            <span>{actions.expandAll}</span>
          </button>

          <button
            onClick={onCollapseAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5 text-slate-400" />
            <span>{actions.collapseAll}</span>
          </button>
        </div>
      </div>

      {/* Checklist Progress Bar & Metrics */}
      <div className="pt-3 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-white">{progress.label}:</span>
            <span className="text-teal-300 font-mono font-bold">
              {completedChecklistCount} of {totalChecklistCount} tasks completed
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
            {progressPercent}% Complete
          </span>
          <div className="w-full sm:w-52 h-2.5 bg-slate-950 rounded-full overflow-hidden border border-white/10 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-indigo-500 to-cyan-400 transition-all duration-500 rounded-full shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapControls;
