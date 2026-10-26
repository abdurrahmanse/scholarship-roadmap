"use client";

import React from "react";
import { phasesData } from "@/data/phases";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";

interface PhaseNavigationTabsProps {
  selectedPhase: number | "all";
  onSelectPhase: (phase: number | "all") => void;
}

export function PhaseNavigationTabs({
  selectedPhase,
  onSelectPhase
}: PhaseNavigationTabsProps) {
  const currentSliderValue = selectedPhase === "all" ? 0 : selectedPhase;

  return (
    <div className="py-4 border-b border-white/[0.08] sticky top-16 z-30 bg-[#090d16]/90 backdrop-blur-2xl shadow-xl shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Phase Filter Tabs */}
          <TabsContainer variant="pills">
            <TabItem
              active={selectedPhase === "all"}
              onClick={() => onSelectPhase("all")}
              title="All 7 Phases"
              theme="indigo"
            />

            {phasesData.map((p) => (
              <TabItem
                key={p.id}
                active={selectedPhase === p.number}
                onClick={() => onSelectPhase(p.number)}
                badge={`P${p.number}`}
                title={p.shortTitle || p.title.split(":")[1]?.trim() || p.title}
                theme="indigo"
              />
            ))}
          </TabsContainer>

          {/* Quick Scrub Range Slider */}
          <div className="hidden lg:flex items-center gap-3 w-56 shrink-0">
            <span className="text-[11px] font-mono text-slate-400">P0</span>
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={currentSliderValue}
              onChange={(e) => onSelectPhase(parseInt(e.target.value, 10))}
              className="range-slider"
              aria-label="Phase navigation scrubber"
            />
            <span className="text-[11px] font-mono text-slate-400">P6</span>
          </div>
        </div>
      </div>
    </div>
  );
}
