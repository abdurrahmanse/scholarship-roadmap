"use client";

import React from "react";
import {
  ArrowRight,
  Calendar,
  Layers
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { phasesData } from "@/data/phases";
import { homePageData } from "@/data/pagesData";

export function RoadmapPipelinePreview() {
  const sectionMeta = homePageData.sections[1];

  return (
    <section id="pipeline-preview" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "End-to-End Pipeline"}
          badgeVariant="purple"
          pulsingBadge={true}
          badgeIcon={<Layers className="w-3.5 h-3.5 text-purple-400" />}
          title={sectionMeta?.title || "The 7-Phase Execution Timeline"}
          subtitle={sectionMeta?.subtitle || "A battle-tested zero-to-landing sequence designed to systematically build your research capital, contact faculty, and secure fully funded offers."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {phasesData.map((phase) => (
            <SectionCard
              key={phase.id}
              variant="default"
              borderGlow="indigo"
              className="flex flex-col justify-between group p-6"
              icon={
                <span className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-bold text-xs flex items-center justify-center font-mono">
                  0{phase.number}
                </span>
              }
              headerRight={
                <Badge variant="slate" size="sm">
                  <Calendar className="w-3 h-3 text-slate-400 mr-1" />
                  {phase.timeline}
                </Badge>
              }
              title={phase.title}
              footer={
                <div className="pt-4 border-t border-white/5 w-full">
                  <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider font-mono">
                    Key Output Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {phase.deliverables.map((d: string) => (
                      <span
                        key={d}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-[#090d16] text-slate-300 border border-white/5"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button
                    href={`/roadmap#phase-${phase.number}`}
                    variant="ghost"
                    size="xs"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                    className="text-indigo-400 hover:text-indigo-300 p-0 hover:bg-transparent"
                  >
                    Inspect Phase {phase.number} steps
                  </Button>
                </div>
              }
            >
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {phase.summary}
              </p>
            </SectionCard>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="/roadmap"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Open Complete 7-Phase Interactive Roadmap
          </Button>
        </div>
      </div>
    </section>
  );
}
