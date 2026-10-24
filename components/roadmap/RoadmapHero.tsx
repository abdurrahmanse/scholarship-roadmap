"use client";

import React from "react";
import { Compass, CheckCircle2 } from "lucide-react";
import { roadmapPageData } from "@/data/pagesData";
import { roadmapMetricsData } from "@/data/roadmapSectionData";

export function RoadmapHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xl shadow-indigo-950/50 backdrop-blur-md max-w-[calc(100vw-32px)]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <Compass className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="font-mono text-[10px] sm:text-[11px] truncate">{roadmapPageData.hero.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.12] sm:leading-[1.1] font-heading break-words">
          {roadmapPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            {roadmapPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal px-2 sm:px-0">
          {roadmapPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          {roadmapMetricsData.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f1422] border border-white/10 text-slate-300 font-mono text-[11px]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

