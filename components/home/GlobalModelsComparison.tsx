"use client";

import React from "react";
import {
  Globe2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderCommonIcon } from "@/components/ui/iconUtils";
import { globalFundingModelsData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";

const MODEL_ICON_COLORS: Record<string, string> = {
  Globe2: "text-indigo-400",
  Building2: "text-cyan-400",
  Award: "text-emerald-400",
  Crown: "text-amber-400"
};

export function GlobalModelsComparison() {
  const sectionMeta = homePageData.sections[2];

  return (
    <section id="funding-models" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Global Intelligence"}
          badgeVariant="cyan"
          badgeIcon={<Globe2 className="w-3.5 h-3.5 text-cyan-400" />}
          title={sectionMeta?.title || "The 4 Global Graduate Funding Models"}
          subtitle={sectionMeta?.subtitle || "How fully funded research packages operate across North America, Continental Europe, Asia, and the UK. Understand legal structures, salaries, and degree requirements."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {globalFundingModelsData.map((m) => (
            <SectionCard
              key={m.title}
              variant="default"
              borderGlow={m.variant}
              className="flex flex-col justify-between p-6"
              icon={renderCommonIcon(m.iconName, `w-5 h-5 ${MODEL_ICON_COLORS[m.iconName] || "text-indigo-400"}`)}
              title={m.title}
              subtitle={m.region}
              badge={m.tag}
              badgeVariant={m.variant}
              footer={
                <div className="pt-4 border-t border-white/5 flex justify-end w-full">
                  <Button
                    href="/programs"
                    variant="ghost"
                    size="xs"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="text-cyan-400 hover:text-cyan-300 p-0 hover:bg-transparent"
                  >
                    Explore matching laboratories
                  </Button>
                </div>
              }
            >
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#090d16] border border-white/10 mb-5 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Living Stipend / Salary:</span>
                    <span className="font-bold text-white font-mono">{m.stipend}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Tuition Status:</span>
                    <span className="font-bold text-emerald-400 font-mono">{m.tuition}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {m.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
