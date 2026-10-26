"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  GraduationCap,
  Award,
  ArrowRight,
  Compass,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { RoadmapPhase } from "@/data/roadmapPhasesData";

export interface RoadmapPhaseCardProps {
  phase: RoadmapPhase;
}

export function RoadmapPhaseCard({ phase }: RoadmapPhaseCardProps) {
  const isMastersOnly = phase.degreeScope === "masters";
  const isPhdOnly = phase.degreeScope === "phd";

  return (
    <div
      id={phase.id}
      className="p-5 sm:p-7 rounded-2xl bg-[#0f1422] border border-white/10 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-950/20 flex flex-col justify-between group space-y-6"
    >
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          {/* Phase Number Badge */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500/20 via-indigo-500/20 to-teal-500/10 border border-teal-500/30 flex items-center justify-center text-base font-mono font-black text-teal-300 shrink-0 shadow-sm">
            {String(phase.number).padStart(2, "0")}
          </div>

          <div>
            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider">
                Phase {String(phase.number).padStart(2, "0")} of 13
              </span>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Clock className="w-3 h-3 text-teal-400" />
                <span>{phase.estimatedDuration}</span>
              </span>
              {isMastersOnly && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  <GraduationCap className="w-3 h-3" />
                  <span>Master&apos;s Specific</span>
                </span>
              )}
              {isPhdOnly && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Award className="w-3 h-3" />
                  <span>PhD Specific</span>
                </span>
              )}
              {!isMastersOnly && !isPhdOnly && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-white/5">
                  <Compass className="w-3 h-3 text-teal-400" />
                  <span>Master&apos;s &amp; PhD</span>
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-teal-200 transition-colors">
              <Link href={`/roadmap/phases/${phase.slug}`} className="hover:underline">
                {phase.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-sans">
              {phase.tagline}
            </p>
          </div>
        </div>

        {/* Top Right Direct CTA */}
        <Link
          href={`/roadmap/phases/${phase.slug}`}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/30 text-xs font-bold transition-all shadow-sm shrink-0 self-start sm:self-center group/btn"
        >
          <span>Explore Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Strategic Core Objective */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-white/5 space-y-1.5">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
          Strategic Mandate:
        </span>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {phase.what}
        </p>
      </div>

      {/* Sequenced Milestones Preview Chips */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
            Key Execution Milestones:
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            {phase.how.length} Sequenced Milestones
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {phase.how.map((step, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
            >
              <div className="w-5 h-5 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <span className="font-semibold text-white leading-tight">
                {step.step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Info & Fast Nav */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        {/* Verified Portals Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-slate-400">
            Portals:
          </span>
          {phase.where.map((portal, pIdx) => (
            <a
              key={pIdx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-[11px] font-mono transition-colors"
            >
              <span>{portal.name}</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </a>
          ))}
        </div>

        {/* Checklist Count & Full Blueprint Link */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-teal-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{phase.checklist.length} Verification Checks</span>
          </span>

          <Link
            href={`/roadmap/phases/${phase.slug}`}
            className="text-xs font-mono font-bold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1 group/cta"
          >
            <span>Full Blueprint &amp; Audit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoadmapPhaseCard;
