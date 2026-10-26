"use client";

import React from "react";
import { Globe, Filter, ExternalLink } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { csrankingsStepsData } from "@/data/programsSectionData";
import { programsPageData } from "@/data/pagesData";

export function CsrankingsGuideSection() {
  const sectionMeta = programsPageData.sections[2];

  return (
    <section id="csrankings-guide" className="py-20 border-b border-white/10 bg-[#090d16]">
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
            <SectionCard
              key={s.num}
              variant="default"
              borderGlow="indigo"
              className="p-6 flex flex-col justify-between"
              badge={`STEP ${s.num}`}
              badgeVariant="indigo"
              title={s.title}
            >
              <p className="text-xs text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </SectionCard>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="https://csrankings.org"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            leftIcon={<Globe className="w-4 h-4 text-indigo-400" />}
            rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
          >
            Launch CSRankings.org Live Database
          </Button>
        </div>
      </div>
    </section>
  );
}
