"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { timelineSliderData, timelineSliderMetadata } from "@/data/homeData";

export interface TimelineSliderControlsProps {
  phaseIndex: number;
  onSelectPhase: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Interactive timeline scrubber controls sub-component.
 */
export function TimelineSliderControls({
  phaseIndex,
  onSelectPhase,
  onPrev,
  onNext,
}: TimelineSliderControlsProps) {
  return (
    <div className="w-full mb-10">
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0f1422] border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30">
        {/* Quick Milestone Stepper Pills */}
        <TabsContainer variant="cards" columns={7} className="mb-6">
          {timelineSliderData.map((item, idx) => (
            <TabItem
              key={item.id}
              active={phaseIndex === idx}
              onClick={() => onSelectPhase(idx)}
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
            onClick={onPrev}
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
              onChange={(e) => onSelectPhase(parseInt(e.target.value, 10))}
              className="range-slider"
              aria-label="Timeline slider from Phase 0 to Phase 6"
            />
          </div>

          <button
            onClick={onNext}
            disabled={phaseIndex === timelineSliderData.length - 1}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next roadmap phase"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimelineSliderControls;
