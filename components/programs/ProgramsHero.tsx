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
    <section className="relative overflow-hidden pt-28 pb-16 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xl shadow-cyan-950/50 backdrop-blur-md max-w-[calc(100vw-32px)]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="font-mono text-[10px] sm:text-[11px] truncate">{programsPageData.hero.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.12] sm:leading-[1.1] font-heading break-words">
          {programsPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            {programsPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-sans font-normal px-2 sm:px-0">
          {programsPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          {programsHeroHighlightsData.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f1422] border border-white/10 text-slate-300 font-mono text-[11px]"
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

