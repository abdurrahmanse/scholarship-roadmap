"use client";

import React, { useState } from "react";
import { ListOrdered, Layers } from "lucide-react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { roadmapLevelsData } from "@/data/levelsData";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapControls } from "./RoadmapControls";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";
import { RoadmapEmptyState } from "./RoadmapEmptyState";
import { LevelCard } from "./LevelCard";
import { LevelsComparisonMatrix } from "./LevelsComparisonMatrix";
import { AdmissionsSuiteLaunchpad } from "./AdmissionsSuiteLaunchpad";

export function CompleteRoadmapView() {
  // Filter state for 13 Phases
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter phases by degree and search
  const filteredPhases = roadmapPhasesData.filter((phase) => {
    if (filterDegree === "masters" && phase.degreeScope === "phd") return false;
    if (filterDegree === "phd" && phase.degreeScope === "masters") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = phase.title.toLowerCase().includes(q);
      const inTagline = phase.tagline.toLowerCase().includes(q);
      const inWhat = phase.what.toLowerCase().includes(q);
      const inHow = phase.how.some(
        (h) =>
          h.step.toLowerCase().includes(q) || h.detail.toLowerCase().includes(q)
      );
      return inTitle || inTagline || inWhat || inHow;
    }
    return true;
  });

  return (
    <div className="space-y-16">
      {/* 1. HERO & COMMAND HEADER */}
      <RoadmapHeader />

      {/* 2. THE 13-PHASE APPLICATION PIPELINE */}
      <section id="phases-pipeline" className="space-y-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold mb-2">
              <ListOrdered className="w-3.5 h-3.5 text-teal-400" />
              <span>13-Phase Chronological Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Sequential Application Phases
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
              From academic diagnostics to official visa issuance: an end-to-end chronological campaign.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-teal-300 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30">
              13 Sequenced Phases
            </span>
          </div>
        </div>

        {/* Clean Controls & Search Bar (No Accordion Actions) */}
        <RoadmapControls
          filterDegree={filterDegree}
          onFilterDegreeChange={setFilterDegree}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          totalCount={roadmapPhasesData.length}
          filteredCount={filteredPhases.length}
        />

        {/* Phase Cards List */}
        <div className="space-y-5">
          {filteredPhases.length === 0 ? (
            <RoadmapEmptyState
              onReset={() => {
                setSearchQuery("");
                setFilterDegree("all");
              }}
            />
          ) : (
            filteredPhases.map((phase) => (
              <RoadmapPhaseCard key={phase.id} phase={phase} />
            ))
          )}
        </div>
      </section>

      {/* 3. THE 5 PROGRESSIVE CAREER LEVELS */}
      <section id="levels-ladder" className="space-y-8 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold mb-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>5-Level Career Ladder</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Curricular Proof-of-Work Levels
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
              A 24-month developmental curriculum dividing graduate preparation into 5 mastery tiers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-indigo-300 px-3 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40">
              5 Levels • 26 Actionable Tasks
            </span>
          </div>
        </div>

        {/* Level Cards Stack */}
        <div className="space-y-6">
          {roadmapLevelsData.map((lvl) => (
            <LevelCard key={lvl.id} level={lvl} />
          ))}
        </div>

        {/* 5-Level Strategy & Evaluation Matrix */}
        <LevelsComparisonMatrix />
      </section>

      {/* 4. ADMISSIONS SUITE LAUNCHPAD */}
      <AdmissionsSuiteLaunchpad />
    </div>
  );
}

export default CompleteRoadmapView;
