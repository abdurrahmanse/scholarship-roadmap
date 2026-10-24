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
    <section id="gpu-blueprint" className="py-20 border-b border-slate-800/80 bg-slate-900/30">
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
            <GlassCard key={t.title} borderGlow="cyan" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="cyan" size="sm">
                    {t.benefit}
                  </Badge>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{t.desc}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-cyan-300 border border-slate-800 overflow-x-auto whitespace-pre">
                {t.code}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
