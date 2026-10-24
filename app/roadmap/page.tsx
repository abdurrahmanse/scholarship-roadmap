"use client";

import React, { useState } from "react";
import { RoadmapHero } from "@/components/roadmap/RoadmapHero";
import { PhaseNavigationTabs } from "@/components/roadmap/PhaseNavigationTabs";
import { StepCard } from "@/components/roadmap/StepCard";
import { GpuComputeBlueprint } from "@/components/roadmap/GpuComputeBlueprint";
import { DeliverablesAuditWidget } from "@/components/roadmap/DeliverablesAuditWidget";
import { stepsData } from "@/data/steps";

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState<number | "all">("all");

  const filteredSteps = selectedPhase === "all"
    ? stepsData
    : stepsData.filter((s) => s.phaseId === `phase-${selectedPhase}`);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* 1. Hero Section */}
      <RoadmapHero />

      {/* 2. Sticky Phase Filter Tabs */}
      <PhaseNavigationTabs
        selectedPhase={selectedPhase}
        onSelectPhase={setSelectedPhase}
      />

      {/* 3. Steps Pipeline Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* 4. Low-Resource GPU Compute Blueprint */}
      <GpuComputeBlueprint />

      {/* 5. Pre-Submission Deliverables Audit Widget */}
      <DeliverablesAuditWidget />
    </main>
  );
}
