"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Clock
} from "lucide-react";
import { timelineSliderData, timelineSliderMetadata } from "@/data/homeData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";

export function InteractiveTimelineSlider() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const activePhase = timelineSliderData[phaseIndex] || timelineSliderData[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhaseIndex(parseInt(e.target.value, 10));
  };

  const handlePrev = () => {
    setPhaseIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setPhaseIndex((prev) => Math.min(timelineSliderData.length - 1, prev + 1));
  };

  return (
    <section id="roadmap-timeline-slider" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={timelineSliderMetadata.badge}
          badgeVariant="indigo"
          pulsingBadge={true}
          title={timelineSliderMetadata.title}
          subtitle={timelineSliderMetadata.subtitle}
        />

        {/* Interactive Slider Controller Container */}
        <div className="w-full mb-10">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0f1422] border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30">
            {/* Quick Milestone Stepper Pills */}
            <TabsContainer variant="cards" columns={7} className="mb-6">
              {timelineSliderData.map((item, idx) => (
                <TabItem
                  key={item.id}
                  active={phaseIndex === idx}
                  onClick={() => setPhaseIndex(idx)}
                  variant="cards"
                  badge={`P${item.phaseNumber}`}
                  title={timelineSliderMetadata.sliderLabels[idx]?.label}
                  theme="indigo"
                />
              ))}
            </TabsContainer>

            {/* Range Slider Track with Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={phaseIndex === 0}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous roadmap phase"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="relative flex-1 py-2">
                <input
                  type="range"
                  min="0"
                  max={timelineSliderData.length - 1}
                  step="1"
                  value={phaseIndex}
                  onChange={handleSliderChange}
                  className="range-slider"
                  aria-label="Timeline slider from Phase 0 to Phase 6"
                />
              </div>

              <button
                onClick={handleNext}
                disabled={phaseIndex === timelineSliderData.length - 1}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next roadmap phase"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Phase Details Card Display */}
        <div className="w-full">
          <GlassCard
            borderGlow={activePhase.accentVariant}
            className="p-5 sm:p-8 transition-all duration-300"
          >
            {/* Header with Time Window & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={activePhase.accentVariant} size="sm">
                    {activePhase.badge}
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {activePhase.timeWindow}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                  {activePhase.stageName}
                </h3>
                <p className="text-sm font-medium text-indigo-300 mt-1">
                  {activePhase.priorityTitle}
                </p>
              </div>

              {/* Deadline Target Badge */}
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                  {timelineSliderMetadata.targetWindowLabel}
                </span>
                <span className="text-xs font-mono font-bold text-amber-300 flex items-center sm:justify-end gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {activePhase.deadlineTarget}
                </span>
              </div>
            </div>

            {/* Action Bullets Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                Key Action Items For This Milestone:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activePhase.actionBullets.map((action, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#090d18]/80 border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Negotiable Proof-of-Work Deliverable */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-700/50 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-300 uppercase tracking-wider block">
                    {timelineSliderMetadata.deliverableLabel}
                  </span>
                  <p className="text-xs text-slate-200 font-medium mt-0.5">
                    {activePhase.deliverable}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Link to Deep Dive in Roadmap */}
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
