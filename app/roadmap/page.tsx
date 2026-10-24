"use client";

import React from "react";
import { RoadmapHero } from "@/components/roadmap/RoadmapHero";
import { LevelsOverviewSection } from "@/components/roadmap/LevelsOverviewSection";
import { LevelsComparisonMatrix } from "@/components/roadmap/LevelsComparisonMatrix";
import { GpuComputeBlueprint } from "@/components/roadmap/GpuComputeBlueprint";
import { DeliverablesAuditWidget } from "@/components/roadmap/DeliverablesAuditWidget";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { roadmapNavAnchors } from "@/data/roadmapSectionData";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Executive Hero Header */}
      <RoadmapHero />

      {/* 2. Quick-Scroll Anchor Bar for Clean Navigation */}
      <div className="my-6">
        <QuickScrollNavigator anchors={roadmapNavAnchors} />
      </div>

      {/* 3. The 5 Strategic Levels Showcase (Concise & Clickable) */}
      <LevelsOverviewSection />

      {/* 4. Comparative 5-Level Evaluation & Deliverables Matrix */}
      <LevelsComparisonMatrix />

      {/* 5. Pre-Submission Deliverables Audit Widget */}
      <DeliverablesAuditWidget />

      {/* 6. Low-Resource GPU Compute Blueprint */}
      <GpuComputeBlueprint />
    </main>
  );
}
