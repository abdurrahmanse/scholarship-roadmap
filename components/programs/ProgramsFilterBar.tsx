"use client";

import React from "react";
import { Search, DollarSign, RotateCcw, SlidersHorizontal, MapPin } from "lucide-react";
import { programsRegionOptions, programsStipendSliderConfig, programsNavAnchors } from "@/data/programsSectionData";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";

interface ProgramsFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDegree: string;
  onDegreeChange: (d: string) => void;
  selectedRegion: string;
  onRegionChange: (r: string) => void;
  minStipend: number;
  onMinStipendChange: (val: number) => void;
  totalMatching: number;
  onReset: () => void;
}

export function ProgramsFilterBar({
  searchQuery,
  onSearchChange,
  selectedDegree,
  onDegreeChange,
  selectedRegion,
  onRegionChange,
  minStipend,
  onMinStipendChange,
  totalMatching,
  onReset
}: ProgramsFilterBarProps) {
  const hasActiveFilters =
    searchQuery !== "" ||
    selectedDegree !== "All" ||
    selectedRegion !== "All" ||
    minStipend > programsStipendSliderConfig.min;

  return (
    <div className="space-y-4 my-6">
      {/* 1. Quick-Scroll Anchor Bar for Intuitive Page Navigation */}
      <QuickScrollNavigator
        anchors={programsNavAnchors}
        rightElement={
          <div className="text-xs font-mono text-cyan-400 font-semibold px-2 py-1">
            {totalMatching} Matching Labs
          </div>
        }
      />

      {/* 2. Interactive Filter & Slider Console */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1422]/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-5">
          {/* Top Row: Search & Degree Toggles */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Quick-filter by university, lab, country, faculty (e.g. 'CMU', 'Mila', 'Zurich', 'Finn')..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 focus:border-cyan-500 text-slate-100 placeholder-slate-500 text-xs outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Degree Type Selector */}
            <div className="flex items-center gap-1.5 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 shrink-0 hidden sm:inline">
                Degree:
              </span>
              {["All", "PhD", "MS Thesis"].map((deg) => (
                <button
                  key={deg}
                  onClick={() => onDegreeChange(deg)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedDegree === deg
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25"
                      : "bg-[#090d16] text-slate-400 hover:text-white border border-white/10"
                  }`}
                >
                  {deg}
                </button>
              ))}
            </div>

            {/* Reset Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={onReset}
                className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-medium flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Bottom Row: Region Buttons & Minimum Living Stipend Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4 border-t border-white/5 items-center">
            {/* Region Cluster Buttons (7 Cols) */}
            <div className="lg:col-span-7 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hub:</span>
              </div>
              {programsRegionOptions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => onRegionChange(reg.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedRegion === reg.id
                      ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/50 font-semibold"
                      : "bg-[#090d16] text-slate-400 hover:text-slate-200 border border-white/5"
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>

            {/* Interactive Stipend Range Slider (5 Cols) */}
            <div className="lg:col-span-5 p-3 rounded-xl bg-[#090d16] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{programsStipendSliderConfig.label}:</span>
                </span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  ${minStipend.toLocaleString()}+ / yr
                </span>
              </div>

              <input
                type="range"
                min={programsStipendSliderConfig.min}
                max={programsStipendSliderConfig.max}
                step={programsStipendSliderConfig.step}
                value={minStipend}
                onChange={(e) => onMinStipendChange(Number(e.target.value))}
                className="range-slider w-full cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>${programsStipendSliderConfig.min.toLocaleString()}</span>
                <span>$40,000</span>
                <span>${programsStipendSliderConfig.max.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
