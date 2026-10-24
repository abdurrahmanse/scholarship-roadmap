"use client";

import React from "react";
import { Globe, Filter, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { csrankingsStepsData } from "@/data/programsSectionData";
import { programsPageData } from "@/data/pagesData";

export function CsrankingsGuideSection() {
  const sectionMeta = programsPageData.sections[2];

  return (
    <section id="csrankings-guide" className="py-20 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Faculty Intelligence"}
          badgeVariant="indigo"
          badgeIcon={<Filter className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "The CSRankings & PI Intelligence Mapping Protocol"}
          subtitle={sectionMeta?.subtitle || "How to bypass brand-name prestige bias and scientifically identify funded faculty who have active grants and open research assistantship lines."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {csrankingsStepsData.map((s) => (
            <GlassCard key={s.num} borderGlow="indigo" className="p-6">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/50 block w-fit mb-3">
                STEP {s.num}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://csrankings.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-indigo-300 font-semibold text-xs border border-indigo-800/60 shadow-lg shadow-indigo-950 transition-all"
          >
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>Launch CSRankings.org Live Database</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
