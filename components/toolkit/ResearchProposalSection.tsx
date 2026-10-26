"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proposalStructureData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

export function ResearchProposalSection() {
  const sectionMeta = toolkitPageData.sections[3];

  return (
    <section id="proposal-blueprint" className="py-20 border-b border-white/5 bg-[#090d16]">
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
            <SectionCard
              key={item.title}
              variant="default"
              borderGlow="cyan"
              className="p-6"
              badge={`SECTION 0${idx + 1}`}
              badgeVariant="cyan"
              title={item.title}
            >
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
