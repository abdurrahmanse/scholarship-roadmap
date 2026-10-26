"use client";

import React from "react";
import { FileCode, CheckCircle2, XCircle } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { WidgetStatCard } from "@/components/roadmap/widgets/common";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cvBenchmarksData, xyzExamplesData } from "@/data/toolkitSectionData";
import { toolkitPageData } from "@/data/pagesData";

export function LatexCvStandardsSection() {
  const sectionMeta = toolkitPageData.sections[1];

  return (
    <section id="cv-standards" className="py-20 border-b border-white/10 bg-[#090d16]">
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
            <WidgetStatCard
              key={b.label}
              label={b.label}
              value={b.value}
              sublabel={b.sub}
              valueColor="text-indigo-400"
            />
          ))}
        </div>

        {/* Google XYZ Formula Examples */}
        <SectionCard
          variant="default"
          borderGlow="indigo"
          className="bg-[#0f1422]"
          title="The Google XYZ Formula for Technical Publications & Projects"
          subtitle={
            <span>
              Formula: <strong>&ldquo;Accomplished [X] as measured by [Y] by doing [Z]&rdquo;</strong>
            </span>
          }
        >
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
        </SectionCard>
      </div>
    </section>
  );
}
