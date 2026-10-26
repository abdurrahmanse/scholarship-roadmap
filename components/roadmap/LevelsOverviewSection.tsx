"use client";

import React, { useState } from "react";
import { Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
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
        <div className="flex justify-start lg:justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <TabsContainer variant="pills" className="bg-[#0f1422]/80 border border-white/10 p-1.5">
            <TabItem
              active={selectedLevelId === "all"}
              onClick={() => setSelectedLevelId("all")}
              label="All 5 Levels (26 Tasks)"
              colorTheme="indigo"
              size="md"
            />
            {roadmapLevelsData.map((l) => (
              <TabItem
                key={l.id}
                active={selectedLevelId === l.id}
                onClick={() => setSelectedLevelId(l.id)}
                label={`Level ${l.levelNumber}: ${l.shortTitle}`}
                badge={l.totalSteps}
                colorTheme="indigo"
                size="md"
              />
            ))}
          </TabsContainer>
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
