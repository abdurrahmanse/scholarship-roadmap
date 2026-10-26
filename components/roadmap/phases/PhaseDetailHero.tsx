"use client";

import React from "react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";
import { PhaseDetailBreadcrumb } from "./PhaseDetailBreadcrumb";
import { PhaseDetailBadges } from "./PhaseDetailBadges";
import { PhaseDetailAnchorNav } from "./PhaseDetailAnchorNav";

export interface PhaseDetailHeroProps {
  phase: RoadmapPhase;
}

export function PhaseDetailHero({ phase }: PhaseDetailHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 border-b border-white/[0.08] bg-[#090d16]">
      {/* Radial Ambient Glow */}
      <div
        className="absolute top-0 inset-x-0 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(20,184,166,0.08) 50%, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <PhaseDetailBreadcrumb phase={phase} />

        {/* Badges Row */}
        <PhaseDetailBadges phase={phase} />

        {/* Title & Tagline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5 font-heading">
          {phase.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-4xl leading-relaxed mb-8 font-sans">
          {phase.tagline}
        </p>

        {/* Quick Anchor Navigation */}
        <PhaseDetailAnchorNav />
      </div>
    </section>
  );
}

export default PhaseDetailHero;
