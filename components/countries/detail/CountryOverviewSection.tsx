"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";

interface CountryOverviewSectionProps {
  summary: string;
  fundingPhilosophy: string;
}

export function CountryOverviewSection({
  summary,
  fundingPhilosophy,
}: CountryOverviewSectionProps) {
  return (
    <section id="overview" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<ShieldCheck className="w-5 h-5" />}
        title="Overview & Funding Philosophy"
        color="indigo"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        <div className="p-5 sm:p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
            Country Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{summary}</p>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Funding Philosophy
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{fundingPhilosophy}</p>
        </div>
      </div>
    </section>
  );
}

export default CountryOverviewSection;
