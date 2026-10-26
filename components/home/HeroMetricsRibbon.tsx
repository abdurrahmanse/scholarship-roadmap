"use client";

import React from "react";
import { homeMetricsData } from "@/data/homeData";
import { MetricItem } from "@/data/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { renderCommonIcon } from "@/components/ui/iconUtils";

const ICON_THEMES: Record<string, { glow: "emerald" | "cyan" | "purple" | "indigo"; color: string }> = {
  DollarSign: { glow: "emerald", color: "text-emerald-400" },
  Award: { glow: "cyan", color: "text-cyan-400" },
  Cpu: { glow: "purple", color: "text-purple-400" },
  GraduationCap: { glow: "indigo", color: "text-indigo-400" }
};

export function HeroMetricsRibbon() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {homeMetricsData.map((m: MetricItem) => {
        const theme = ICON_THEMES[m.iconName] || { glow: "indigo", color: "text-indigo-400" };
        return (
          <GlassCard
            key={m.label}
            borderGlow={theme.glow}
            className="p-5 sm:p-6 text-left bg-[#0f1422] border border-white/10"
            enableSpotlight={true}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                {m.label}
              </span>
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                {renderCommonIcon(m.iconName, `w-5 h-5 ${theme.color}`)}
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
              {m.value}
            </div>
            <div className="text-xs text-slate-400 mt-1.5 font-sans">
              {m.sublabel}
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}

export default HeroMetricsRibbon;
