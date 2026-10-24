"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { phasesData } from "@/data/phases";

export function RoadmapPipelinePreview() {
  return (
    <section id="pipeline-preview" className="py-20 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="End-to-End Pipeline"
          badgeVariant="purple"
          badgeIcon={<Layers className="w-3.5 h-3.5 text-purple-400" />}
          title="The 7-Phase Execution Timeline"
          subtitle="A battle-tested zero-to-landing sequence designed to systematically build your research capital, contact faculty, and secure fully funded offers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {phasesData.map((phase) => (
            <GlassCard
              key={phase.id}
              borderGlow="indigo"
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-bold text-xs flex items-center justify-center font-mono">
                    0{phase.number}
                  </span>
                  <Badge variant="slate" size="sm">
                    <Calendar className="w-3 h-3 text-slate-400 mr-1" />
                    {phase.timeline}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {phase.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Key Output Deliverables:
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {phase.deliverables.map((d: string) => (
                    <span
                      key={d}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800/80"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/roadmap#phase-${phase.number}`}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  Inspect Phase {phase.number} steps
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/20 transition-all"
          >
            <span>Open Complete 7-Phase Interactive Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
