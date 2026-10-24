"use client";

import React from "react";
import { FileCode, CheckCircle2 } from "lucide-react";
import { toolkitPageData } from "@/data/pagesData";
import { toolkitHeroHighlightsData } from "@/data/toolkitSectionData";

export function ToolkitHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 border-b border-slate-800/80 bg-radial-vignette">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <FileCode className="w-4 h-4 text-purple-400" />
          <span>{toolkitPageData.hero.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          {toolkitPageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            {toolkitPageData.hero.highlightWord}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          {toolkitPageData.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          {toolkitHeroHighlightsData.map((h) => (
            <div key={h.label} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
