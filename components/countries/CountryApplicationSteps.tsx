"use client";

import React from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { CountryGuide, countryGuidesControlsData } from "@/data/countryGuidesData";

export interface CountryApplicationStepsProps {
  country: CountryGuide;
}

export function CountryApplicationSteps({ country }: CountryApplicationStepsProps) {
  const { cardLabels } = countryGuidesControlsData;

  return (
    <div className="space-y-6">
      {/* Important Warnings & Limitations */}
      <div className="p-4 sm:p-5 rounded-xl bg-amber-950/30 border border-amber-500/20 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>{cardLabels.limitations}</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {country.importantLimitations.map((lim, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-400 font-bold leading-none mt-1">•</span>
              <span className="leading-relaxed">{lim}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Application Sequence */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
          {cardLabels.sequence}
        </h4>
        <div className="space-y-2">
          {country.applicationSequence.map((step, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3 text-xs text-slate-300"
            >
              <span className="w-5 h-5 rounded-md bg-teal-500/20 text-teal-300 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Official Portals */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
          {cardLabels.officialPortals}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {country.officialPortals.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-900/90 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-teal-300 transition-colors mb-1">
                  <span>{portal.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">{portal.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryApplicationSteps;
