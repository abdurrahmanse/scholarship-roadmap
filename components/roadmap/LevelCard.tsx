"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Sparkles,
  Target,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Clock,
  Layers,
  Award,
  Quote
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { RoadmapLevel } from "@/data/types";

interface LevelCardProps {
  level: RoadmapLevel;
}

export function LevelCard({ level }: LevelCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "Target":
        return <Target className="w-5 h-5 text-emerald-400" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getDifficultyVariant = (difficulty: RoadmapLevel["difficulty"]) => {
    switch (difficulty) {
      case "Fundamental":
        return "indigo" as const;
      case "Intensive":
        return "cyan" as const;
      case "Strategic":
        return "emerald" as const;
      case "Critical":
        return "amber" as const;
      case "Elite":
        return "purple" as const;
      default:
        return "slate" as const;
    }
  };

  return (
    <GlassCard
      borderGlow={level.accentColor}
      className="p-6 sm:p-8 bg-[#0f1422] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl"
    >
      <div>
        {/* Header Ribbon: Level Badge, Timeline, Difficulty */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#090d16] border border-white/10 shrink-0 shadow-md">
              {getIcon(level.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="font-mono text-xs font-black tracking-wider uppercase text-slate-200">
                  {level.badge}
                </span>
                <Badge variant={getDifficultyVariant(level.difficulty)} size="sm">
                  {level.difficulty}
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                {level.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:self-center shrink-0">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {level.timeline}
            </span>
            <span className="text-xs font-mono font-bold text-indigo-300 px-3 py-1.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40">
              {level.totalSteps} Tasks
            </span>
          </div>
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
          {level.tagline}
        </p>

        {/* Core Competencies Pills */}
        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Core Technical Competencies:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {level.coreCompetencies.map((comp) => (
              <span
                key={comp}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-[#090d16] text-slate-300 border border-white/5 font-sans"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Milestone Deliverable Box */}
        <div className="p-4 rounded-xl bg-[#090d16] border border-white/10 mb-6 flex items-start gap-3">
          <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              Non-Negotiable Level Proof-of-Work:
            </span>
            <p className="text-xs text-white font-medium mt-0.5 leading-snug">
              {level.keyDeliverable}
            </p>
          </div>
        </div>

        {/* Faculty Quote Snippet */}
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-slate-400 italic flex items-start gap-2.5">
          <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 not-italic" />
          <div>
            <p className="line-clamp-2">&ldquo;{level.facultyInsightQuote.quote}&rdquo;</p>
            <span className="not-italic text-[10px] font-mono text-slate-500 block mt-1">
              — {level.facultyInsightQuote.affiliation}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Navigation CTA */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs font-mono text-slate-400">
          Estimated Commitment: {level.estimatedHours}
        </span>

        <Link
          href={`/roadmap/${level.slug}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:scale-102 group cursor-pointer"
        >
          <span>Explore Level {level.levelNumber} Detailed Roadmap</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </GlassCard>
  );
}
