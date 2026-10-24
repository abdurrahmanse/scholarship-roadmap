"use client";

import React, { useState } from "react";
import { Layers, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LevelCard } from "@/components/roadmap/LevelCard";
import { roadmapLevelsData } from "@/data/levelsData";

export function LevelsOverviewSection() {
  const [selectedLevelId, setSelectedLevelId] = useState<string>("all");

  const filteredLevels =
    selectedLevelId === "all"
      ? roadmapLevelsData
      : roadmapLevelsData.filter((l) => l.id === selectedLevelId);

  return (
    <section id="levels-overview" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Progression"
          badgeVariant="indigo"
          badgeIcon={<Layers className="w-3.5 h-3.5 text-indigo-400" />}
          title="The 5 Distinct Levels to Fully Funded Graduate Admission"
          subtitle="A structured modular curriculum dividing the 24-month admissions campaign into 5 manageable levels. Click any level to access its actionable tasks, checklists, code snippets, and deliverables."
        />

        {/* Level Quick Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
          <button
            onClick={() => setSelectedLevelId("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedLevelId === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold"
                : "bg-[#0f1422] text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            All 5 Levels (26 Tasks)
          </button>
          {roadmapLevelsData.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLevelId(l.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                selectedLevelId === l.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold"
                  : "bg-[#0f1422] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              <span>Level {l.levelNumber}: {l.shortTitle}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10">
                {l.totalSteps}
              </span>
            </button>
          ))}
        </div>

        {/* Level Cards Stack */}
        <div className="space-y-8">
          {filteredLevels.map((lvl) => (
            <LevelCard key={lvl.id} level={lvl} />
          ))}
        </div>
      </div>
    </section>
  );
}
