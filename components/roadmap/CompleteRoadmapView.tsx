"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ListOrdered,
  Layers,
  Sparkles,
  Compass,
  Award,
  Mail,
  FileText
} from "lucide-react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { roadmapLevelsData } from "@/data/levelsData";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapControls } from "./RoadmapControls";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";
import { LevelCard } from "./LevelCard";
import { LevelsComparisonMatrix } from "./LevelsComparisonMatrix";

export function CompleteRoadmapView() {
  // Master Architecture Switcher: 13 Application Phases vs 5 Progressive Levels
  const [activeView, setActiveView] = useState<"phases" | "levels">("phases");

  // State for 13 Phases
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "phase-01": true,
    "phase-02": true
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // State for 5 Levels
  const [selectedLevelId, setSelectedLevelId] = useState<string>("all");

  // Toggle individual phase expansion
  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  // Expand / collapse all phases
  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    roadmapPhasesData.forEach((p) => {
      allExpanded[p.id] = true;
    });
    setExpandedPhases(allExpanded);
  };

  const collapseAll = () => {
    setExpandedPhases({});
  };

  // Toggle client-side interactive checklist items
  const toggleChecklist = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Filter phases by degree and search
  const filteredPhases = roadmapPhasesData.filter((phase) => {
    if (filterDegree === "masters" && phase.degreeScope === "phd") return false;
    if (filterDegree === "phd" && phase.degreeScope === "masters") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = phase.title.toLowerCase().includes(q);
      const inTagline = phase.tagline.toLowerCase().includes(q);
      const inWhat = phase.what.toLowerCase().includes(q);
      const inHow = phase.how.some((h) => h.step.toLowerCase().includes(q) || h.detail.toLowerCase().includes(q));
      return inTitle || inTagline || inWhat || inHow;
    }
    return true;
  });

  // Calculate completed checklist count
  const totalChecklistItems = roadmapPhasesData.reduce(
    (acc, phase) => acc + phase.checklist.length,
    0
  );
  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;

  const navigateToPhase = (phaseSlugOrId: string) => {
    const target = roadmapPhasesData.find(
      (p) => p.slug === phaseSlugOrId || p.id === phaseSlugOrId
    );
    if (target) {
      setExpandedPhases((prev) => ({
        ...prev,
        [target.id]: true
      }));
      const element = document.getElementById(target.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Filter levels for the levels view
  const filteredLevels =
    selectedLevelId === "all"
      ? roadmapLevelsData
      : roadmapLevelsData.filter((l) => l.id === selectedLevelId);

  return (
    <div className="space-y-10">
      {/* 1. MASTER ARCHITECTURE SWITCHER */}
      <div className="p-3 sm:p-4 rounded-2xl bg-[#0f1422] border border-white/10 shadow-2xl space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#090d16] border border-white/5 w-full md:w-auto">
            <button
              onClick={() => setActiveView("phases")}
              className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === "phases"
                  ? "bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg shadow-teal-950/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ListOrdered className="w-4 h-4 text-teal-300" />
              <span>13 Sequential Application Phases</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
                13
              </span>
            </button>

            <button
              onClick={() => setActiveView("levels")}
              className={`flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === "levels"
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-950/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4 text-cyan-300" />
              <span>5 Progressive Career Levels</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white">
                5 Levels · 26 Tasks
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 pl-1 md:pl-0">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              {activeView === "phases"
                ? "Chronological Application Timeline: Diagnostic to Visa Stamp"
                : "Curriculum Career Ladder: Foundational Rigor to Faculty Defense"}
            </span>
          </div>
        </div>
      </div>

      {/* 2. VIEW CONTENT */}
      {activeView === "phases" ? (
        <div className="space-y-8 animate-fadeIn">
          {/* Header */}
          <RoadmapHeader />

          {/* Controls & Progress */}
          <RoadmapControls
            filterDegree={filterDegree}
            onFilterDegreeChange={setFilterDegree}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onExpandAll={expandAll}
            onCollapseAll={collapseAll}
            totalChecklistCount={totalChecklistItems}
            completedChecklistCount={completedChecklistCount}
          />

          {/* Filtered Phase Cards */}
          <div className="space-y-6">
            {filteredPhases.length === 0 ? (
              <div className="text-center py-16 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                <h3 className="text-base font-bold text-white">No phases match your search</h3>
                <p className="text-xs text-slate-400">
                  Try searching with different terms or reset your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setFilterDegree("all");
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredPhases.map((phase, idx) => {
                const prevPhase = idx > 0 ? filteredPhases[idx - 1].id : undefined;
                return (
                  <RoadmapPhaseCard
                    key={phase.id}
                    phase={phase}
                    isExpanded={Boolean(expandedPhases[phase.id])}
                    onToggle={() => togglePhase(phase.id)}
                    checkedItems={checkedItems}
                    onToggleChecklistItem={toggleChecklist}
                    prevPhaseId={prevPhase}
                    onNavigateToPhase={navigateToPhase}
                  />
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-12 animate-fadeIn">
          {/* Levels Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>5-Level Career Ladder</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              The 5 Distinct Levels to Fully Funded Graduate Admission
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              A structured modular curriculum dividing the 24-month admissions campaign into 5 manageable levels. Click any level to access its actionable tasks, checklists, code snippets, and deliverables.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0f1422] border border-white/10 max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedLevelId("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedLevelId === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All 5 Levels (26 Tasks)
            </button>
            {roadmapLevelsData.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevelId(lvl.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedLevelId === lvl.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Level {lvl.levelNumber}: {lvl.shortTitle}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/10">
                  {lvl.totalSteps}
                </span>
              </button>
            ))}
          </div>

          {/* Level Cards */}
          <div className="space-y-8">
            {filteredLevels.map((lvl) => (
              <LevelCard key={lvl.id} level={lvl} />
            ))}
          </div>

          {/* 5-Level Strategy & Evaluation Matrix */}
          <LevelsComparisonMatrix />
        </div>
      )}

      {/* 3. ADMISSIONS SUITE LAUNCHPAD */}
      <section className="pt-12 border-t border-white/10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1422] to-[#090d16] border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
                Integrated Scholarship Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Accompanying Application Toolkits & Databases
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              100% Free & Open-Access
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/countries"
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div>
                <Compass className="w-5 h-5 text-teal-400 mb-2" />
                <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                  Country Guides
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Funding models, supervisor requirements, and official portals for 20+ countries.
                </p>
              </div>
              <div className="pt-3 flex items-center text-[11px] font-mono text-teal-400 font-semibold mt-3">
                <span>Explore Countries &rarr;</span>
              </div>
            </Link>

            <Link
              href="/scholarships"
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div>
                <Award className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Scholarship Finder
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Verified government directories, Boolean formulas, and anti-fraud protocols.
                </p>
              </div>
              <div className="pt-3 flex items-center text-[11px] font-mono text-emerald-400 font-semibold mt-3">
                <span>Search Portals &rarr;</span>
              </div>
            </Link>

            <Link
              href="/professors"
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div>
                <Mail className="w-5 h-5 text-indigo-400 mb-2" />
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Professor Outreach
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Cold email blueprints, subject formulas, and research fit checklist.
                </p>
              </div>
              <div className="pt-3 flex items-center text-[11px] font-mono text-indigo-400 font-semibold mt-3">
                <span>Copy Templates &rarr;</span>
              </div>
            </Link>

            <Link
              href="/documents"
              className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
            >
              <div>
                <FileText className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Document Guidelines
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Full architectures for Academic CV, SOP, Motivation Letter, and Proposals.
                </p>
              </div>
              <div className="pt-3 flex items-center text-[11px] font-mono text-cyan-400 font-semibold mt-3">
                <span>View Guidelines &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompleteRoadmapView;
