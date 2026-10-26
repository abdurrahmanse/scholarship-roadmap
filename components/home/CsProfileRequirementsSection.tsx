"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import { SectionCard } from "@/components/ui/SectionCard";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { renderCommonIcon } from "@/components/ui/iconUtils";
import { csProfileRequirementsMetadata, csProfileRequirementsData } from "@/data/homeData";

const PILLAR_ICON_COLORS: Record<string, string> = {
  FileCode: "text-emerald-400",
  Cpu: "text-indigo-400",
  Target: "text-cyan-400",
  ShieldCheck: "text-purple-400",
  Award: "text-amber-400",
  BookOpen: "text-cyan-400"
};

export function CsProfileRequirementsSection() {
  const [activeTierId, setActiveTierId] = useState<string>(csProfileRequirementsData[1].id); // default to Direct PhD

  const activeTier =
    csProfileRequirementsData.find((t) => t.id === activeTierId) || csProfileRequirementsData[1];

  return (
    <section id="cs-profile-blueprint" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={csProfileRequirementsMetadata.badge}
          badgeVariant="indigo"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5 text-indigo-400" />}
          title={csProfileRequirementsMetadata.title}
          subtitle={csProfileRequirementsMetadata.subtitle}
        />

        {/* Degree Selector Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <TabsContainer variant="pills" className="bg-[#0f1422]/80 border border-white/10 p-1.5">
            {csProfileRequirementsData.map((tier) => (
              <TabItem
                key={tier.id}
                active={activeTierId === tier.id}
                onClick={() => setActiveTierId(tier.id)}
                label={tier.label}
                badge={tier.badge}
                colorTheme="indigo"
                size="md"
              />
            ))}
          </TabsContainer>
        </div>

        {/* Active Degree Overview Banner */}
        <SectionCard
          variant="default"
          borderGlow="indigo"
          className="mb-8 p-5 sm:p-6"
          headerRight={
            <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 shrink-0 text-left lg:text-right max-w-full">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Guaranteed Compensation Standard:
              </span>
              <span className="text-base font-extrabold text-emerald-400 font-mono">
                {activeTier.typicalStipend}
              </span>
            </div>
          }
          title={
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                Target Degree & Institutional Pathway:
              </span>
              <span className="text-xl font-heading font-extrabold text-white break-words block">
                {activeTier.targetDegree}
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Primary Funding Mechanism: <span className="text-slate-200 font-semibold">{activeTier.fundingModel}</span>
              </p>
            </div>
          }
        />

        {/* 4 Pillars of the Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {activeTier.pillars.map((pillar) => (
            <SectionCard
              key={pillar.title}
              variant="default"
              borderGlow={pillar.variant as "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose" | "none"}
              className="p-6 sm:p-7 flex flex-col justify-between"
              icon={renderCommonIcon(pillar.iconName, `w-5 h-5 ${PILLAR_ICON_COLORS[pillar.iconName] || "text-indigo-400"}`)}
              title={pillar.title}
              badge={pillar.badge}
              badgeVariant={pillar.variant as "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose"}
              headerRight={
                <Badge variant={pillar.variant as "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose"} size="sm">
                  Verified Metric
                </Badge>
              }
              footer={
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 text-xs w-full">
                  <span className="font-semibold text-cyan-300 mr-1 font-sans">
                    Why this gets you funded:
                  </span>
                  <span className="text-slate-400 leading-relaxed font-sans">
                    {pillar.competitiveAdvantage}
                  </span>
                </div>
              }
            >
              <div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.summary}
                </p>

                {/* Must Have Checkpoints */}
                <div className="space-y-2 mb-5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Mandatory Proof-of-Work:
                  </span>
                  {pillar.mustHavePoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          ))}
        </div>

        {/* Action Link to Roadmap */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-cyan-950/40 border border-indigo-500/30 text-center space-y-3">
          <h4 className="text-base font-heading font-bold text-white">
            Ready to Build Your Winning CS Research Profile?
          </h4>
          <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Follow our 24-month chronological roadmap from Phase 0 (Math Foundations) to Phase 6 (TAL Visa Defense & Arrival).
          </p>
          <div className="pt-2">
            <Button
              href="/roadmap"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Step-by-Step 24-Month Roadmap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
