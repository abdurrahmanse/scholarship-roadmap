"use client";

import React from "react";
import { Search, Filter } from "lucide-react";

interface ProgramsFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDegree: string;
  onDegreeChange: (d: string) => void;
  selectedCountry: string;
  onCountryChange: (c: string) => void;
  countries: string[];
}

export function ProgramsFilterBar({
  searchQuery,
  onSearchChange,
  selectedDegree,
  onDegreeChange,
  selectedCountry,
  onCountryChange,
  countries
}: ProgramsFilterBarProps) {
  return (
    <div className="py-6 border-b border-slate-800/80 sticky top-16 z-30 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by university, lab, country, faculty (e.g., 'CMU', 'Mila', 'Zurich', 'Singa')..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-500 text-xs outline-none transition-all"
            />
          </div>

          {/* Degree Filter Buttons */}
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {["All", "PhD", "MS Thesis"].map((deg) => (
              <button
                key={deg}
                onClick={() => onDegreeChange(deg)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedDegree === deg
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {deg}
              </button>
            ))}
          </div>

          {/* Country Selector */}
          <div className="w-full md:w-auto">
            <select
              value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}
              className="w-full md:w-auto px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs outline-none focus:border-cyan-500 transition-all cursor-pointer"
            >
              <option value="All">All Countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
