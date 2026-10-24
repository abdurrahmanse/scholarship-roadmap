"use client";

import React from "react";
import Link from "next/link";
import {
  Globe2,
  Building2,
  Award,
  Crown,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { globalFundingModelsData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";

export function GlobalModelsComparison() {
  const sectionMeta = homePageData.sections[2];

  const getModelIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-indigo-400" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-emerald-400" />;
      case "Crown":
        return <Crown className="w-5 h-5 text-amber-400" />;
      default:
        return <Globe2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="funding-models" className="py-20 border-b border-slate-800/80 bg-slate-950">
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
            <GlassCard key={m.title} borderGlow={m.variant} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0">
                      {getModelIcon(m.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{m.title}</h3>
                      <span className="text-xs text-slate-400">{m.region}</span>
                    </div>
                  </div>
                  <Badge variant={m.variant} size="sm">
                    {m.tag}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-5 text-xs">
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

              <div className="pt-4 border-t border-slate-800/80 flex justify-end">
                <Link
                  href="/programs"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  Explore matching universities
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
