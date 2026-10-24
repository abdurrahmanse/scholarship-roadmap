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
    <section className="relative overflow-hidden pt-32 pb-20 border-b border-slate-800/80 bg-radial-vignette">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Presentation className="w-4 h-4 text-purple-400" />
          <span>{interviewsPageData.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          {interviewsPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            {interviewsPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          {interviewsPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          {interviewsHeroHighlightsData.map((h) => (
            <div key={h.label} className="flex items-center gap-2">
              {getIcon(h.iconName)}
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
