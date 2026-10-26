import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LevelHero } from "@/components/roadmap/LevelHero";
import { LevelInteractiveTracker } from "@/components/roadmap/LevelInteractiveTracker";
import { LevelTasksSection } from "@/components/roadmap/LevelTasksSection";
import { LevelNavigationFooter } from "@/components/roadmap/LevelNavigationFooter";
import { GpuComputeBlueprint } from "@/components/roadmap/GpuComputeBlueprint";
import { DeliverablesAuditWidget } from "@/components/roadmap/DeliverablesAuditWidget";
import { roadmapLevelsData } from "@/data/levelsData";
import { stepsData } from "@/data/steps";

interface LevelPageProps {
  params: Promise<{
    level: string;
  }>;
}


export async function generateStaticParams() {
  return roadmapLevelsData.map((lvl) => ({
    level: lvl.slug,
  }));
}

export async function generateMetadata({ params }: LevelPageProps): Promise<Metadata> {
  const { level: levelSlug } = await params;
  const level = roadmapLevelsData.find((l) => l.slug === levelSlug);

  if (!level) {
    return {
      title: "Roadmap Level Not Found",
      description: "The requested roadmap level could not be found.",
    };
  }

  return {
    title: `Level ${level.levelNumber}: ${level.shortTitle}`,
    description: level.tagline,
  };
}

export default async function LevelDetailPage({ params }: LevelPageProps) {
  const { level: levelSlug } = await params;
  const level = roadmapLevelsData.find((l) => l.slug === levelSlug);

  if (!level) {
    notFound();
  }

  // Filter granular steps belonging to this level
  const levelSteps = stepsData.filter(
    (step) =>
      level.stepIds.includes(step.id) ||
      level.phasesIncluded.includes(step.phaseId)
  );

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Dedicated Level Executive Hero Header */}
      <LevelHero level={level} />

      {/* 2. Interactive Milestone Completion Tracker */}
      <LevelInteractiveTracker level={level} />

      {/* 3. Detailed Step-by-Step Task Cards for this Level */}
      <LevelTasksSection level={level} levelSteps={levelSteps} />

      {/* 4. Specialized Level Context Blueprint */}
      {level.levelNumber === 1 && <GpuComputeBlueprint />}
      {level.levelNumber === 4 && <DeliverablesAuditWidget />}

      {/* 5. Seamless Level-to-Level Navigation Footer */}
      <LevelNavigationFooter currentLevel={level} />
    </main>
  );
}
