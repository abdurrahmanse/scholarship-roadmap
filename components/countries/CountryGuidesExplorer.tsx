"use client";

import React, { useState } from "react";
import { countryGuidesData } from "@/data/countryGuidesData";
import { CountryHeader } from "./CountryHeader";
import { CountryFilters } from "./CountryFilters";
import { CountryCard } from "./CountryCard";

export function CountryGuidesExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [supervisorFilter, setSupervisorFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({
    germany: true,
    sweden: true,
    "united-states": true
  });

  const toggleCountry = (id: string) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    countryGuidesData.forEach((c) => {
      allExp[c.id] = true;
    });
    setExpandedCountries(allExp);
  };

  const collapseAll = () => {
    setExpandedCountries({});
  };

  // Filter countries
  const filteredCountries = countryGuidesData.filter((country) => {
    if (selectedRegion !== "All" && country.region !== selectedRegion) return false;
    if (supervisorFilter !== "All" && country.supervisorContactRequirement !== supervisorFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = country.name.toLowerCase().includes(q);
      const inHeadline = country.headline.toLowerCase().includes(q);
      const inGov = country.governmentScholarships.some((g) =>
        g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)
      );
      const inRoutes = country.commonFundingRoutes.some((r) => r.toLowerCase().includes(q));
      return inName || inHeadline || inGov || inRoutes;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* 1. Page Header */}
      <CountryHeader />

      {/* 2. Control Bar: Region tabs, search, supervisor filter */}
      <CountryFilters
        selectedRegion={selectedRegion}
        onSelectedRegionChange={setSelectedRegion}
        supervisorFilter={supervisorFilter}
        onSupervisorFilterChange={setSupervisorFilter}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
        totalCount={countryGuidesData.length}
        filteredCount={filteredCountries.length}
      />

      {/* 3. Filtered Countries List */}
      <div className="space-y-6">
        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
            <h3 className="text-base font-bold text-white">No countries match your search</h3>
            <p className="text-xs text-slate-400">
              Try searching with different keywords or reset your filters.
            </p>
            <button
              onClick={() => {
                setSelectedRegion("All");
                setSupervisorFilter("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCountries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              isExpanded={Boolean(expandedCountries[country.id])}
              onToggle={() => toggleCountry(country.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CountryGuidesExplorer;
