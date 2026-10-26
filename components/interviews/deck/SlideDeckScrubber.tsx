"use client";

import React from "react";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { fiveSlideDeckData } from "@/data/interviewsSectionData";

export interface SlideDeckScrubberProps {
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

/**
 * Slide scrubber controls sub-component with range slider and quick tabs.
 */
export function SlideDeckScrubber({
  currentIndex,
  onSelectIndex,
}: SlideDeckScrubberProps) {
  return (
    <div className="max-w-xl mx-auto mb-8 space-y-4">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Slide 1: Problem</span>
        <span className="text-purple-300 font-bold">
          Slide {currentIndex + 1} of {fiveSlideDeckData.length}
        </span>
        <span>Slide 5: Horizons</span>
      </div>

      <div className="relative py-2">
        <input
          type="range"
          min="0"
          max={fiveSlideDeckData.length - 1}
          step="1"
          value={currentIndex}
          onChange={(e) => onSelectIndex(parseInt(e.target.value, 10))}
          className="range-slider"
          aria-label="Slide scrubber slider from Slide 1 to Slide 5"
        />
      </div>

      <TabsContainer variant="cards" columns={5}>
        {fiveSlideDeckData.map((s, idx) => (
          <TabItem
            key={s.number}
            active={currentIndex === idx}
            onClick={() => onSelectIndex(idx)}
            variant="cards"
            badge={`S0${s.number}`}
            title={s.title.split(":")[0] || s.title}
            theme="purple"
          />
        ))}
      </TabsContainer>
    </div>
  );
}

export default SlideDeckScrubber;
