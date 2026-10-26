"use client";

import React, { useState } from "react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { roadmapLevelsData } from "@/data/levelsData";
import { RoadmapViewSwitcher } from "./RoadmapViewSwitcher";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapControls } from "./RoadmapControls";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";
import { RoadmapEmptyState } from "./RoadmapEmptyState";
import { LevelsHeader } from "./LevelsHeader";
import { LevelFilterTabs } from "./LevelFilterTabs";
import { LevelCard } from "./LevelCard";
import { LevelsComparisonMatrix } from "./LevelsComparisonMatrix";
import { AdmissionsSuiteLaunchpad } from "./AdmissionsSuiteLaunchpad";

export function CompleteRoadmapView() {
  // Master Architecture Switcher: 13 Application Phases vs 5 Progressive Levels
  const [activeView, setActiveView] = useState<"phases" | "levels">("phases");

  // State for 13 Phases
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "phase-01": true,
    "phase-02": true,
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // State for 5 Levels
  const [selectedLevelId, setSelectedLevelId] = useState<string>("all");

  // Toggle individual phase expansion
  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
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
      [itemId]: !prev[itemId],
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
      const inHow = phase.how.some(
        (h) =>
          h.step.toLowerCase().includes(q) || h.detail.toLowerCase().includes(q)
      );
      return inTitle || inTagline || inWhat || inHow;
    }
    return true;
  });

  // Calculate completed checklist count
  const totalChecklistItems = roadmapPhasesData.reduce(
    (acc, phase) => acc + phase.checklist.length,
    0
  );
  const completedChecklistCount =
    Object.values(checkedItems).filter(Boolean).length;

  const navigateToPhase = (phaseSlugOrId: string) => {
    const target = roadmapPhasesData.find(
      (p) => p.slug === phaseSlugOrId || p.id === phaseSlugOrId
    );
    if (target) {
      setExpandedPhases((prev) => ({
        ...prev,
        [target.id]: true,
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
      <RoadmapViewSwitcher
        activeView={activeView}
        onViewChange={setActiveView}
      />

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
              <RoadmapEmptyState
                onReset={() => {
                  setSearchQuery("");
                  setFilterDegree("all");
                }}
              />
            ) : (
              filteredPhases.map((phase, idx) => {
                const prevPhase =
                  idx > 0 ? filteredPhases[idx - 1].id : undefined;
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
          <LevelsHeader />

          {/* Level Filter Tabs */}
          <LevelFilterTabs
            levels={roadmapLevelsData}
            selectedLevelId={selectedLevelId}
            onSelectLevelId={setSelectedLevelId}
          />

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
      <AdmissionsSuiteLaunchpad />
    </div>
  );
}

export default CompleteRoadmapView;
