"use client";

import React from "react";
import { Compass, Sparkles, ListOrdered, GraduationCap, ShieldCheck } from "lucide-react";
import { roadmapControlsData } from "@/data/roadmapPhasesData";
import { roadmapUiData, RoadmapHeaderChip } from "@/data/roadmapUiData";

function renderChipIcon(iconName: RoadmapHeaderChip["iconName"]) {
  switch (iconName) {
    case "ListOrdered":
      return <ListOrdered className="w-3.5 h-3.5 text-teal-400 shrink-0" />;
    case "GraduationCap":
      return <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />;
    case "Sparkles":
      return <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
  }
}

export function RoadmapHeader() {
  const { badge, title, subtitle } = roadmapControlsData.header;
  const { standardBadge, chips } = roadmapUiData.header;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f1422] to-[#090d16] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl">
      {/* Specular Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      
      {/* Ambient Radial Accent */}
      <div
        className="absolute top-0 right-1/4 w-96 h-48 pointer-events-none -translate-y-1/2 opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(20, 184, 166, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3.5">
          {/* Badge Row with Radar Indicator */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold shadow-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <Compass className="w-3.5 h-3.5 text-teal-400" />
              <span>{badge}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{standardBadge}</span>
            </span>
          </div>

          {/* Clean Modern Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Intelligence Feature Chips */}
        <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
          {chips.map((chip, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
            >
              {renderChipIcon(chip.iconName)}
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapHeader;
