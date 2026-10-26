"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";

export interface PhaseDetailBreadcrumbProps {
  phase: RoadmapPhase;
}

export function PhaseDetailBreadcrumb({ phase }: PhaseDetailBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono">
      <Link
        href="/roadmap"
        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
      >
        <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span>Roadmap Hub</span>
      </Link>
      <span className="text-slate-600">/</span>
      <Link
        href="/roadmap"
        className="text-slate-400 hover:text-white transition-colors"
      >
        13 Application Phases
      </Link>
      <span className="text-slate-600">/</span>
      <span className="text-indigo-400 font-bold truncate max-w-[220px] sm:max-w-none">
        Phase {String(phase.number).padStart(2, "0")}: {phase.title}
      </span>
    </nav>
  );
}

export default PhaseDetailBreadcrumb;
