"use client";

import React from "react";
import {
  ShieldCheck,
  DollarSign,
  HeartPulse,
  Cpu,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fundingPillarsData, fundingWarningData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";
import { FundingPillar } from "@/data/types";

export function FundingStandardSection() {
  const sectionMeta = homePageData.sections[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="funding-standard" className="py-20 border-b border-slate-800/80 bg-slate-950">
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
            <GlassCard
              key={p.title}
              borderGlow={p.variant}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0">
                    {getIcon(p.iconName)}
                  </div>
                  <Badge variant={p.variant} size="sm">
                    {p.tag}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {p.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Warning Callout: Funded Assistantship vs Partial Discount Trap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{fundingWarningData.legitimate.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {fundingWarningData.legitimate.description}
            </p>
            <div className="text-xs text-emerald-300 font-mono font-semibold">
              {fundingWarningData.legitimate.stats}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-800/40">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>{fundingWarningData.trap.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {fundingWarningData.trap.description}
            </p>
            <div className="text-xs text-rose-300 font-mono font-semibold">
              {fundingWarningData.trap.stats}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
