"use client";

import React from "react";
import { Cpu, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gpuTacticsData } from "@/data/roadmapSectionData";
import { roadmapPageData } from "@/data/pagesData";

export function GpuComputeBlueprint() {
  const sectionMeta = roadmapPageData.sections[2];

  return (
    <section id="gpu-blueprint" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Zero-Budget Engineering"}
          badgeVariant="cyan"
          badgeIcon={<Cpu className="w-3.5 h-3.5 text-cyan-400" />}
          title={sectionMeta?.title || "The Low-Resource GPU Compute Blueprint"}
          subtitle={sectionMeta?.subtitle || "How to produce publishable, empirical machine learning research without owning a multi-GPU cluster or spending your personal savings on cloud bills."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {gpuTacticsData.map((t) => (
            <GlassCard key={t.title} borderGlow="cyan" className="flex flex-col justify-between bg-[#0f1422] border border-white/10 hover:border-cyan-500/30 transition-all p-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="cyan" size="sm">
                    {t.benefit}
                  </Badge>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{t.desc}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090d16] font-mono text-[11px] text-cyan-300 border border-white/10 overflow-x-auto whitespace-pre">
                {t.code}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
