"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  Quote
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { RoadmapLevel } from "@/data/types";
import { getLevelIcon, getLevelDifficultyVariant } from "./roadmapConstants";

interface LevelHeroProps {
  level: RoadmapLevel;
}

export function LevelHero({ level }: LevelHeroProps) {

  return (
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-white/[0.06] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>All 5 Levels Overview</span>
            <span className="text-slate-600">/</span>
            <span className="text-indigo-400 font-bold">Level 0{level.levelNumber}</span>
          </Link>
        </div>

        {/* Level Badge, Timeline, Difficulty */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f1422] border border-white/10 text-white text-xs font-mono font-bold shadow-xl">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            {getLevelIcon(level.iconName)}
            <span>{level.badge}</span>
          </div>

          <Badge variant={getLevelDifficultyVariant(level.difficulty)} size="sm">
            {level.difficulty} Difficulty
          </Badge>

          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {level.timeline}
          </span>
        </div>

        {/* Level Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.12] sm:leading-[1.1] font-heading break-words">
          Level {level.levelNumber}:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            {level.title}
          </span>
        </h1>

        {/* Level Subtitle / Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed font-sans font-normal">
          {level.tagline}
        </p>

        {/* Primary Objective Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1422] border border-white/10 mb-8 max-w-4xl shadow-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
            Level 0{level.levelNumber} Primary Objective:
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            {level.objective}
          </p>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Curriculum Scope
            </span>
            <div className="text-xl font-bold font-mono text-white">
              {level.totalSteps} In-Depth Tasks
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              Granular technical checklists
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Time Commitment
            </span>
            <div className="text-xl font-bold font-mono text-cyan-300">
              {level.estimatedHours}
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              Self-directed research sprint
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Tangible Proof-of-Work
            </span>
            <div className="text-xs font-bold text-emerald-400 font-sans leading-snug line-clamp-2">
              {level.keyDeliverable}
            </div>
            <span className="text-[11px] text-slate-400 font-sans mt-0.5 block">
              Non-negotiable milestone
            </span>
          </div>
        </div>

        {/* Faculty Quote */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 italic flex items-start gap-3 max-w-4xl">
          <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 not-italic" />
          <div>
            <p>&ldquo;{level.facultyInsightQuote.quote}&rdquo;</p>
            <span className="not-italic text-[11px] font-mono text-indigo-400 font-semibold block mt-1">
              — {level.facultyInsightQuote.author}, {level.facultyInsightQuote.affiliation}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
