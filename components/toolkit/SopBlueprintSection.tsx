"use client";

import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sopMovementsData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

export function SopBlueprintSection() {
  const sectionMeta = toolkitPageData.sections[0];

  return (
    <section id="sop-blueprint" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Statement of Purpose"}
          badgeVariant="purple"
          badgeIcon={<FileText className="w-3.5 h-3.5 text-purple-400" />}
          title={sectionMeta?.title || "The Technical SOP 5-Movement Blueprint"}
          subtitle={sectionMeta?.subtitle || "Top AI admissions committees review 3,000+ SOPs. Ditch generic narratives and follow this 1,000-word empirical research architecture."}
        />

        <div className="space-y-4 mb-10">
          {sopMovementsData.map((m) => (
            <GlassCard key={m.num} borderGlow="purple" className="p-6 bg-[#0f1422] border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60">
                    {m.num}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">{m.title}</h3>
                </div>
                <Badge variant="purple" size="sm">
                  {m.pct}
                </Badge>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {m.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-white/5">
                {m.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
