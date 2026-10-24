"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proposalStructureData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

export function ResearchProposalSection() {
  const sectionMeta = toolkitPageData.sections[3];

  return (
    <section id="proposal-blueprint" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "European & Asian Format"}
          badgeVariant="cyan"
          badgeIcon={<BookOpen className="w-3.5 h-3.5 text-cyan-400" />}
          title={sectionMeta?.title || "Doctoral Research Proposal Blueprint & Compute Estimator"}
          subtitle={sectionMeta?.subtitle || "Unlike US programs where research topics are decided after lab rotations, European (ELLIS, ETH, Max Planck) and Asian (MEXT, SINGA) programs require a formal 3-to-5 page scientific research plan."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {proposalStructureData.map((item, idx) => (
            <GlassCard key={item.title} borderGlow="cyan" className="p-6">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50 block w-fit mb-3">
                SECTION 0{idx + 1}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
