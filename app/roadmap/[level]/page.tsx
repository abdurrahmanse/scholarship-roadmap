import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LevelHero } from "@/components/roadmap/LevelHero";
import { LevelInteractiveTracker } from "@/components/roadmap/LevelInteractiveTracker";
import { LevelNavigationFooter } from "@/components/roadmap/LevelNavigationFooter";
import { StepCard } from "@/components/roadmap/StepCard";
import { GpuComputeBlueprint } from "@/components/roadmap/GpuComputeBlueprint";
import { DeliverablesAuditWidget } from "@/components/roadmap/DeliverablesAuditWidget";
import { roadmapLevelsData } from "@/data/levelsData";
import { stepsData } from "@/data/steps";
import { RoadmapLevel } from "@/data/types";
import { Layers, CheckCircle2 } from "lucide-react";

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
      title: "Roadmap Level Not Found | Scholarship AI Roadmap",
      description: "The requested roadmap level could not be found.",
    };
  }

  return {
    title: `Level ${level.levelNumber}: ${level.shortTitle} | 100% Fully Funded CS Scholarship Roadmap`,
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
      <section id="level-tasks" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <h2 className="text-base sm:text-lg font-heading font-bold text-white">
              Level 0{level.levelNumber} Actionable Tasks ({levelSteps.length} Detailed Steps)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Self-Paced Research Sprint
          </span>
        </div>

        {/* Granular Step Cards */}
        <div className="space-y-6">
          {levelSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* 4. Specialized Level Context Blueprint */}
      {level.levelNumber === 1 && <GpuComputeBlueprint />}
      {level.levelNumber === 4 && <DeliverablesAuditWidget />}

      {/* 5. Seamless Level-to-Level Navigation Footer */}
      <LevelNavigationFooter currentLevel={level} />
    </main>
  );
}
