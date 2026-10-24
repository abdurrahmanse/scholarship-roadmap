"use client";

import React, { useState } from "react";
import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ProgramsFilterBar } from "@/components/programs/ProgramsFilterBar";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { CsrankingsGuideSection } from "@/components/programs/CsrankingsGuideSection";
import { CostOfLivingMatrixSection } from "@/components/programs/CostOfLivingMatrixSection";
import { fundedProgramsData } from "@/data/programs";
import { FundedProgram } from "@/data/types";
import { programsStipendSliderConfig } from "@/data/programsSectionData";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [minStipend, setMinStipend] = useState(programsStipendSliderConfig.defaultMin);

  const parseAnnualStipend = (val: string): number => {
    const num = parseInt(val.replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  const filteredPrograms = fundedProgramsData.filter((p: FundedProgram) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((r: string) => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.keyFacultyOrLabs.some((f: string) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDegree =
      selectedDegree === "All" ||
      (selectedDegree === "PhD" && (p.degreeType === "PhD" || p.degreeType === "Both")) ||
      (selectedDegree === "MS Thesis" && (p.degreeType === "MS Thesis" || p.degreeType === "Both"));

    const matchesRegion =
      selectedRegion === "All" || p.region === selectedRegion;

    const stipendNum = parseAnnualStipend(p.fundingDetails.stipendAnnualUSD);
    const matchesStipend = stipendNum >= minStipend;

    return matchesSearch && matchesDegree && matchesRegion && matchesStipend;
  });

  const handleReset = () => {
    setSearchQuery("");
    setSelectedDegree("All");
    setSelectedRegion("All");
    setMinStipend(programsStipendSliderConfig.defaultMin);
  };

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section */}
      <ProgramsHero />

      {/* 2. Sticky Multi-Parameter Filter & Slider Bar with Integrated Quick-Scroll Navigator */}
      <ProgramsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDegree={selectedDegree}
        onDegreeChange={setSelectedDegree}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        minStipend={minStipend}
        onMinStipendChange={setMinStipend}
        totalMatching={filteredPrograms.length}
        onReset={handleReset}
      />

      {/* 3. Program Cards Grid */}
      <section id="programs-directory" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Showing {filteredPrograms.length} Fully Funded AI Laboratories
            </span>
            {minStipend > programsStipendSliderConfig.defaultMin && (
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                &ge; ${minStipend.toLocaleString()}/yr
              </span>
            )}
          </div>
          {(searchQuery || selectedDegree !== "All" || selectedRegion !== "All" || minStipend > programsStipendSliderConfig.defaultMin) && (
            <button
              onClick={handleReset}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="p-12 rounded-2xl bg-[#0f1422] border border-white/10 text-center space-y-4">
            <p className="text-sm text-slate-400">
              No programs match the selected filter criteria. Try lowering the minimum stipend slider or clearing the search keywords.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPrograms.map((prog: FundedProgram) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        )}
      </section>

      {/* 4. CSRankings Intelligence Protocol */}
      <CsrankingsGuideSection />

      {/* 5. Cost-of-Living vs Net Stipend Matrix */}
      <CostOfLivingMatrixSection />
    </main>
  );
}
