"use client";

import React from "react";
import { SearchX, RotateCcw } from "lucide-react";

interface RoadmapEmptyStateProps {
  onReset: () => void;
}

export function RoadmapEmptyState({ onReset }: RoadmapEmptyStateProps) {
  return (
    <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 max-w-lg mx-auto">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
        <SearchX className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-base font-bold text-white">
          No phases match your search
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Try searching with different terms or reset your degree filters.
        </p>
      </div>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-colors shadow-md"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filters</span>
      </button>
    </div>
  );
}

export default RoadmapEmptyState;
