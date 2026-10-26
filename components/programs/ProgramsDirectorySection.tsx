"use client";

import React from "react";
import { ProgramCard } from "./ProgramCard";
import { FundedProgram } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { programsStipendSliderConfig } from "@/data/programsSectionData";

interface ProgramsDirectorySectionProps {
  programs: FundedProgram[];
  searchQuery: string;
  selectedDegree: string;
  selectedRegion: string;
  minStipend: number;
  onReset: () => void;
}

export function ProgramsDirectorySection({
  programs,
  searchQuery,
  selectedDegree,
  selectedRegion,
  minStipend,
  onReset
}: ProgramsDirectorySectionProps) {
  const hasActiveFilters =
    Boolean(searchQuery) ||
    selectedDegree !== "All" ||
    selectedRegion !== "All" ||
    minStipend > programsStipendSliderConfig.defaultMin;

  return (
    <section id="programs-directory" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Individual Section Header */}
      <SectionHeader
        align="between"
        size="sm"
        borderBottom
        title={
          <div className="flex items-center gap-2">
            <span>Showing {programs.length} Fully Funded AI Laboratories</span>
            {minStipend > programsStipendSliderConfig.defaultMin && (
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                &ge; ${minStipend.toLocaleString()}/yr
              </span>
            )}
          </div>
        }
        action={
          hasActiveFilters ? (
            <Button
              onClick={onReset}
              variant="ghost"
              size="xs"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Reset All Filters
            </Button>
          ) : undefined
        }
      />

      {programs.length === 0 ? (
        <div className="p-12 rounded-2xl bg-[#0f1422] border border-white/10 text-center space-y-4">
          <p className="text-sm text-slate-400">
            No programs match the selected filter criteria. Try lowering the minimum stipend slider or clearing the search keywords.
          </p>
          <Button
            onClick={onReset}
            variant="cyan"
            size="sm"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((prog: FundedProgram) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProgramsDirectorySection;
