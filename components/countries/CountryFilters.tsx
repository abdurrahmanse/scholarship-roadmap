"use client";

import React from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { countryGuidesControlsData } from "@/data/countryGuidesData";

export interface CountryFiltersProps {
  selectedRegion: string;
  onSelectedRegionChange: (region: string) => void;
  supervisorFilter: string;
  onSupervisorFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  /** @deprecated No longer used — cards link to detail pages */
  onExpandAll?: () => void;
  /** @deprecated No longer used — cards link to detail pages */
  onCollapseAll?: () => void;
  totalCount: number;
  filteredCount: number;
}

export function CountryFilters({
  selectedRegion,
  onSelectedRegionChange,
  supervisorFilter,
  onSupervisorFilterChange,
  searchQuery,
  onSearchQueryChange,
  totalCount,
  filteredCount
}: CountryFiltersProps) {
  const { regions, supervisorFilters, searchPlaceholder } = countryGuidesControlsData;

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => onSelectedRegionChange(reg)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {reg} {reg === "All" ? `(${totalCount})` : ""}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex-1 max-w-md">
          <SearchInput
            value={searchQuery}
            onChange={onSearchQueryChange}
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Supervisor Filter Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">Supervisor Outreach:</span>
          <select
            value={supervisorFilter}
            onChange={(e) => onSupervisorFilterChange(e.target.value)}
            className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-teal-500 cursor-pointer"
          >
            {supervisorFilters.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Count */}
        <span className="text-[11px] text-slate-400 font-mono">
          Showing {filteredCount} of {totalCount} countries
        </span>
      </div>
    </div>
  );
}

export default CountryFilters;
