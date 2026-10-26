"use client";

import React from "react";
import { GraduationCap, Award, Clock } from "lucide-react";
import { CountryGuide, countryGuidesControlsData } from "@/data/countryGuidesData";

export interface CountryFundingModelsProps {
  country: CountryGuide;
}

export function CountryFundingModels({ country }: CountryFundingModelsProps) {
  const { cardLabels } = countryGuidesControlsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Master's Funding Model */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
        <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>{cardLabels.mastersModel}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{country.mastersFundingModel}</p>
      </div>

      {/* PhD Funding Model */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>{cardLabels.phdModel}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{country.phdFundingModel}</p>
      </div>

      {/* Language Requirements */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
          {cardLabels.language}
        </span>
        <p className="text-xs text-slate-300 leading-relaxed">{country.languageRequirements}</p>
      </div>

      {/* Application Deadlines */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
        <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          <Clock className="w-3.5 h-3.5 text-teal-400" />
          <span>{cardLabels.deadlines}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">{country.typicalApplicationDeadlines}</p>
      </div>
    </div>
  );
}

export default CountryFundingModels;
