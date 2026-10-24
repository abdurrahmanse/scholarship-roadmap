"use client";

import React, { useState } from "react";
import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ProgramsFilterBar } from "@/components/programs/ProgramsFilterBar";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { CsrankingsGuideSection } from "@/components/programs/CsrankingsGuideSection";
import { CostOfLivingMatrixSection } from "@/components/programs/CostOfLivingMatrixSection";
import { fundedProgramsData } from "@/data/programs";
import { FundedProgram } from "@/data/types";

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries: string[] = Array.from(new Set(fundedProgramsData.map((p: FundedProgram) => p.country)));

  const filteredPrograms = fundedProgramsData.filter((p: FundedProgram) => {
    const matchesSearch =
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

    const matchesCountry = selectedCountry === "All" || p.country === selectedCountry;

    return matchesSearch && matchesDegree && matchesCountry;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* 1. Hero Section */}
      <ProgramsHero />

      {/* 2. Sticky Multi-Parameter Filter Bar */}
      <ProgramsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDegree={selectedDegree}
        onDegreeChange={setSelectedDegree}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
        countries={countries}
      />

      {/* 3. Program Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Showing {filteredPrograms.length} Fully Funded AI Programs
          </span>
          {(searchQuery || selectedDegree !== "All" || selectedCountry !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDegree("All");
                setSelectedCountry("All");
              }}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrograms.map((prog: FundedProgram) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* 4. CSRankings Intelligence Protocol */}
      <CsrankingsGuideSection />

      {/* 5. Cost-of-Living vs Net Stipend Matrix */}
      <CostOfLivingMatrixSection />
    </main>
  );
}
