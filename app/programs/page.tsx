"use client";

import React, { useState } from "react";
import { ProgramsHero } from "@/components/programs/ProgramsHero";
import { ProgramsFilterBar } from "@/components/programs/ProgramsFilterBar";
import { ProgramsDirectorySection } from "@/components/programs/ProgramsDirectorySection";
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

      {/* 3. Program Cards Directory Section */}
      <ProgramsDirectorySection
        programs={filteredPrograms}
        searchQuery={searchQuery}
        selectedDegree={selectedDegree}
        selectedRegion={selectedRegion}
        minStipend={minStipend}
        onReset={handleReset}
      />

      {/* 4. CSRankings Intelligence Protocol */}
      <CsrankingsGuideSection />

      {/* 5. Cost-of-Living vs Net Stipend Matrix */}
      <CostOfLivingMatrixSection />
    </main>
  );
}
