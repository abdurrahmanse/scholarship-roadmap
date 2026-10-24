"use client";

import React from "react";
import { FileCode, CheckCircle2, XCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cvBenchmarksData, xyzExamplesData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

export function LatexCvStandardsSection() {
  const sectionMeta = toolkitPageData.sections[1];

  return (
    <section id="cv-standards" className="py-20 border-b border-white/5 bg-[#0b101c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "LaTeX Standard"}
          badgeVariant="indigo"
          badgeIcon={<FileCode className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Academic LaTeX CV Standards & Google XYZ Action Bullets"}
          subtitle={sectionMeta?.subtitle || "Top faculty discard graphical multi-column Canva resumes in 5 seconds. Academic Computer Science requires clean LaTeX typography and quantitative impact metrics."}
        />

        {/* 4 Benchmarks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cvBenchmarksData.map((b) => (
            <GlassCard key={b.label} borderGlow="indigo" className="p-5 text-center bg-[#0f1422] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {b.label}
              </span>
              <span className="text-xl sm:text-2xl font-black text-white font-mono block mb-1">
                {b.value}
              </span>
              <span className="text-[11px] text-slate-400">{b.sub}</span>
            </GlassCard>
          ))}
        </div>

        {/* Google XYZ Formula Examples */}
        <GlassCard borderGlow="none" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10">
          <div className="mb-6">
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              The Google XYZ Formula for Technical Publications & Projects
            </h3>
            <p className="text-xs text-slate-400">
              Formula: <strong>&ldquo;Accomplished [X] as measured by [Y] by doing [Z]&rdquo;</strong>
            </p>
          </div>

          <div className="space-y-4">
            {xyzExamplesData.map((ex, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#090d16] border border-white/10 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-rose-400">
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="font-mono line-through opacity-80">{ex.bad}</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span className="font-bold">{ex.good}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
