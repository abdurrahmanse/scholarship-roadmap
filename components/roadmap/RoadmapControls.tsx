"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
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
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Degree Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5">
          <button
            onClick={() => onFilterDegreeChange("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "all"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {filters.all}
          </button>
          <button
            onClick={() => onFilterDegreeChange("masters")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "masters"
                ? "bg-teal-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{filters.masters}</span>
          </button>
          <button
            onClick={() => onFilterDegreeChange("phd")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filterDegree === "phd"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{filters.phd}</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <SearchInput
            value={searchQuery}
            onChange={onSearchQueryChange}
            placeholder={searchPlaceholder}
          />
        </div>

        {/* Expand / Collapse Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onExpandAll}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
          >
            {actions.expandAll}
          </button>
          <button
            onClick={onCollapseAll}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
          >
            {actions.collapseAll}
          </button>
        </div>
      </div>

      {/* Checklist Progress Bar */}
      <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-400" />
          <span className="font-semibold text-white">{progress.label}:</span>
          <span className="text-teal-300 font-mono font-bold">
            {completedChecklistCount} of {totalChecklistCount} tasks completed ({progressPercent}%)
          </span>
        </div>
        <div className="w-full sm:w-48 h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default RoadmapControls;
