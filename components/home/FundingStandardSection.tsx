"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderCommonIcon } from "@/components/ui/iconUtils";
import { fundingPillarsData, fundingWarningData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";
import { FundingPillar } from "@/data/types";

const PILLAR_ICON_COLORS: Record<string, string> = {
  DollarSign: "text-emerald-400",
  ShieldCheck: "text-cyan-400",
  HeartPulse: "text-rose-400",
  Cpu: "text-purple-400"
};

export function FundingStandardSection() {
  const sectionMeta = homePageData.sections[0];

  return (
    <section id="funding-standard" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Non-Negotiable Rule"}
          badgeVariant="emerald"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "The 100% Fully Funded AI Research Standard"}
          subtitle={sectionMeta?.subtitle || "In Computer Science and Artificial Intelligence, graduate students generate high-value intellectual property and research publications. Legitimate programs pay you; you never pay them."}
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fundingPillarsData.map((p: FundingPillar) => (
            <SectionCard
              key={p.title}
              variant="default"
              borderGlow={p.variant}
              className="flex flex-col justify-between p-6"
              icon={renderCommonIcon(p.iconName, `w-5 h-5 ${PILLAR_ICON_COLORS[p.iconName] || "text-emerald-400"}`)}
              title={p.title}
              badge={p.tag}
              badgeVariant={p.variant}
              footer={
                <div className="space-y-2 pt-4 border-t border-white/5 w-full">
                  {p.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              }
            >
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {p.description}
              </p>
            </SectionCard>
          ))}
        </div>

        {/* Warning Callout: Funded Assistantship vs Partial Discount Trap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard
            variant="default"
            borderGlow="emerald"
            className="p-6"
            icon={<CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            title={fundingWarningData.legitimate.title}
            footer={
              <div className="text-xs text-emerald-300 font-mono font-semibold bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-800/40 w-fit">
                {fundingWarningData.legitimate.stats}
              </div>
            }
          >
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {fundingWarningData.legitimate.description}
            </p>
          </SectionCard>

          <SectionCard
            variant="default"
            borderGlow="rose"
            className="p-6"
            icon={<AlertTriangle className="w-5 h-5 text-rose-400" />}
            title={fundingWarningData.trap.title}
            footer={
              <div className="text-xs text-rose-300 font-mono font-semibold bg-rose-950/40 px-3 py-1.5 rounded-lg border border-rose-800/40 w-fit">
                {fundingWarningData.trap.stats}
              </div>
            }
          >
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {fundingWarningData.trap.description}
            </p>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
