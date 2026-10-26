import React from "react";
import { Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "@/components/roadmap/StepCard";
import { RoadmapLevel, RoadmapStep } from "@/data/types";
import { levelDetailUiData } from "@/data/levelDetailUiData";

interface LevelTasksSectionProps {
  level: RoadmapLevel;
  levelSteps: RoadmapStep[];
}

export function LevelTasksSection({ level, levelSteps }: LevelTasksSectionProps) {
  const { tasks } = levelDetailUiData;

  return (
    <section id="level-tasks" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={`Level 0${level.levelNumber} ${tasks.badge}`}
        badgeVariant="indigo"
        badgeIcon={<Layers className="w-4 h-4 text-indigo-400" />}
        title={
          <span>
            Level 0{level.levelNumber} {tasks.title}{" "}
            <span className="text-slate-400 font-normal font-sans text-base">
              ({levelSteps.length} {tasks.tasksSuffix})
            </span>
          </span>
        }
        subtitle={level.objective}
        align="between"
        size="md"
        borderBottom={true}
      />

      {/* Granular Step Cards */}
      <div className="space-y-6">
        {levelSteps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}

export default LevelTasksSection;
