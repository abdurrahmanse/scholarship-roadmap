"use client";

import React from "react";
import { Award, GraduationCap } from "lucide-react";
import { CountryDetailSectionTitle } from "./CountryDetailSectionTitle";

interface CountryDegreeModelsSectionProps {
  mastersFundingModel: string;
  phdFundingModel: string;
}

export function CountryDegreeModelsSection({
  mastersFundingModel,
  phdFundingModel,
}: CountryDegreeModelsSectionProps) {
  return (
    <section id="phd-masters" className="scroll-mt-24">
      <CountryDetailSectionTitle
        icon={<GraduationCap className="w-5 h-5" />}
        title="PhD & Master's Funding Models"
        color="violet"
      />
      <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-teal-500/20 space-y-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Master&apos;s Funding Model</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{mastersFundingModel}</p>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-indigo-500/20 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>PhD Funding Model</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">{phdFundingModel}</p>
        </div>
      </div>
    </section>
  );
}

export default CountryDegreeModelsSection;
