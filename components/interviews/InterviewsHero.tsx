"use client";

import React from "react";
import { Presentation, ShieldCheck, CheckCircle2 } from "lucide-react";
import { interviewsPageData } from "@/data/pagesData";
import { interviewsHeroHighlightsData } from "@/data/interviewsSectionData";

export function InterviewsHero() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Presentation":
        return <Presentation className="w-4 h-4 text-purple-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xl shadow-purple-950/50 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <Presentation className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-mono text-[11px]">{interviewsPageData.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1] font-heading">
          {interviewsPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            {interviewsPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal">
          {interviewsPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          {interviewsHeroHighlightsData.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/70 border border-white/[0.08] text-slate-300 font-mono text-[11px]"
            >
              {getIcon(h.iconName)}
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

