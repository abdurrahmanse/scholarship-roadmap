"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCode,
  Cpu,
  Target,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { csProfileRequirementsMetadata, csProfileRequirementsData } from "@/data/homeData";

export function CsProfileRequirementsSection() {
  const [activeTierId, setActiveTierId] = useState<string>(csProfileRequirementsData[1].id); // default to Direct PhD

  const activeTier =
    csProfileRequirementsData.find((t) => t.id === activeTierId) || csProfileRequirementsData[1];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCode":
        return <FileCode className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Target":
        return <Target className="w-5 h-5 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-amber-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

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
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {csProfileRequirementsData.map((tier) => {
            const isActive = activeTierId === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTierId(tier.id)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/50 font-bold"
                    : "bg-[#0f1422] text-slate-400 hover:text-white hover:bg-slate-800/60 border border-white/10"
                }`}
              >
                <span>{tier.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {tier.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Degree Overview Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1422] border border-white/10 mb-8 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
              Target Degree & Institutional Pathway:
            </span>
            <h3 className="text-xl font-heading font-extrabold text-white break-words">
              {activeTier.targetDegree}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Primary Funding Mechanism: <span className="text-slate-200 font-semibold">{activeTier.fundingModel}</span>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 shrink-0 text-left lg:text-right max-w-full">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Guaranteed Compensation Standard:
            </span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">
              {activeTier.typicalStipend}
            </span>
          </div>
        </div>

        {/* 4 Pillars of the Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {activeTier.pillars.map((pillar) => (
            <GlassCard
              key={pillar.title}
              borderGlow={pillar.variant}
              className="p-6 sm:p-7 bg-[#0f1422] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-[#090d16] border border-white/10 shrink-0">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-bold text-white">
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-400">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>
                  <Badge variant={pillar.variant} size="sm">
                    Verified Metric
                  </Badge>
                </div>

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

              {/* Competitive Advantage Box */}
              <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 text-xs">
                <span className="font-semibold text-cyan-300 mr-1 font-sans">
                  Why this gets you funded:
                </span>
                <span className="text-slate-400 leading-relaxed font-sans">
                  {pillar.competitiveAdvantage}
                </span>
              </div>
            </GlassCard>
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
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <span>Explore Step-by-Step 24-Month Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
