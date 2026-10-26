"use client";

import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
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
            <SectionCard
              key={m.num}
              variant="default"
              borderGlow="purple"
              className="p-6"
              badge={m.num}
              badgeVariant="purple"
              headerRight={
                <Badge variant="purple" size="sm">
                  {m.pct}
                </Badge>
              }
              title={m.title}
              footer={
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-white/5 w-full">
                  {m.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              }
            >
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {m.desc}
              </p>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
