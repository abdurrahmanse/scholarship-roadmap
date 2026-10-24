"use client";

import React from "react";
import { Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import { programsPageData } from "@/data/pagesData";
import { programsHeroHighlightsData } from "@/data/programsSectionData";

export function ProgramsHero() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 border-b border-slate-800/80 bg-radial-vignette">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>{programsPageData.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          {programsPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            {programsPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          {programsPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          {programsHeroHighlightsData.map((h) => (
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
