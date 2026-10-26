"use client";

import React, { useState } from "react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapControls } from "./RoadmapControls";
import { RoadmapPhaseCard } from "./RoadmapPhaseCard";

export function CompleteRoadmapView() {
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "phase-01": true,
    "phase-02": true
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

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

  return (
    <div className="space-y-8">
      {/* 1. Header */}
      <RoadmapHeader />

      {/* 2. Controls & Progress */}
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

      {/* 3. Filtered Phase Cards */}
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
  );
}

export default CompleteRoadmapView;
