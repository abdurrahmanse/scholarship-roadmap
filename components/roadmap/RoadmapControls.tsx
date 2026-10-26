"use client";

import React from "react";
import { GraduationCap, Award, Compass, Search, X } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export interface RoadmapControlsProps {
  filterDegree: "all" | "masters" | "phd";
  onFilterDegreeChange: (degree: "all" | "masters" | "phd") => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export function RoadmapControls({
  filterDegree,
  onFilterDegreeChange,
  searchQuery,
  onSearchQueryChange,
  totalCount,
  filteredCount,
}: RoadmapControlsProps) {
  const { filters, searchPlaceholder } = roadmapControlsData;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1422]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Search Input Bar */}
        <div className="relative flex-1 max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-teal-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchQueryChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Pathway Filter Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
            Scope:
          </span>

          <button
            onClick={() => onFilterDegreeChange("all")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
              filterDegree === "all"
                ? "bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-sm"
                : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{filters.all}</span>
          </button>

          <button
            onClick={() => onFilterDegreeChange("masters")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
              filterDegree === "masters"
                ? "bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-sm"
                : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{filters.masters}</span>
          </button>

          <button
            onClick={() => onFilterDegreeChange("phd")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
              filterDegree === "phd"
                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-sm"
                : "bg-white/[0.03] text-slate-400 border-white/5 hover:text-white hover:border-white/15"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{filters.phd}</span>
          </button>

          {/* Result Counter Badge */}
          <div className="ml-auto lg:ml-2 pl-3 lg:border-l border-white/10">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5">
              {filteredCount} of {totalCount} Phases
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapControls;
