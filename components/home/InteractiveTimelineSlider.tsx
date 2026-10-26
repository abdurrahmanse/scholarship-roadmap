"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { timelineSliderData, timelineSliderMetadata } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import {
  TimelineSliderControls,
  TimelinePhaseHeader,
  TimelineActionTasks,
  TimelineDeliverableBanner,
} from "./timeline";

export function InteractiveTimelineSlider() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const activePhase = timelineSliderData[phaseIndex] || timelineSliderData[0];

  const handlePrev = () => {
    setPhaseIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setPhaseIndex((prev) => Math.min(timelineSliderData.length - 1, prev + 1));
  };

  return (
    <section id="roadmap-timeline-slider" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={timelineSliderMetadata.badge}
          badgeVariant="indigo"
          pulsingBadge={true}
          title={timelineSliderMetadata.title}
          subtitle={timelineSliderMetadata.subtitle}
          align="center"
        />

        {/* 1. Interactive Slider Controller Sub-section */}
        <TimelineSliderControls
          phaseIndex={phaseIndex}
          onSelectPhase={setPhaseIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* 2. Phase Details Card Display */}
        <div className="w-full">
          <GlassCard
            borderGlow={activePhase.accentVariant}
            className="p-5 sm:p-8 transition-all duration-300"
          >
            {/* 2a. Header with Time Window & Badge */}
            <TimelinePhaseHeader
              badge={activePhase.badge}
              accentVariant={activePhase.accentVariant}
              timeWindow={activePhase.timeWindow}
              stageName={activePhase.stageName}
              priorityTitle={activePhase.priorityTitle}
              deadlineTarget={activePhase.deadlineTarget}
            />

            {/* 2b. Action Tasks Bullets Grid */}
            <TimelineActionTasks actionBullets={activePhase.actionBullets} />

            {/* 2c. Non-Negotiable Proof-of-Work Deliverable */}
            <TimelineDeliverableBanner deliverable={activePhase.deliverable} />

            {/* 2d. Direct Link to Deep Dive in Roadmap */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <span className="text-xs text-slate-500 font-mono">
                Step {phaseIndex + 1} of {timelineSliderData.length} in Postgraduate Pipeline
              </span>
              <Button
                href={`/roadmap#phase-${activePhase.phaseNumber}`}
                variant="ghost"
                size="sm"
                className="text-indigo-400 hover:text-indigo-300"
                rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
              >
                {timelineSliderMetadata.viewFullPhaseText}
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default InteractiveTimelineSlider;
