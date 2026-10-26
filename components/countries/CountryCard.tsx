"use client";

import React from "react";
import { ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from "lucide-react";
import { CountryGuide, countryGuidesControlsData } from "@/data/countryGuidesData";
import { CountryFundingModels } from "./CountryFundingModels";
import { CountryApplicationSteps } from "./CountryApplicationSteps";

export interface CountryCardProps {
  country: CountryGuide;
  isExpanded: boolean;
  onToggle: () => void;
}

export function CountryCard({ country, isExpanded, onToggle }: CountryCardProps) {
  const { cardLabels } = countryGuidesControlsData;
  const isStrictSupervisor = country.supervisorContactRequirement.includes("Strictly");

  return (
    <div
      id={country.id}
      className={`rounded-2xl border transition-all duration-300 relative overflow-hidden ${
        isExpanded
          ? "bg-slate-900/90 border-white/15 shadow-2xl"
          : "bg-slate-900/50 border-white/[0.07] hover:border-white/15 hover:bg-slate-900/80"
      }`}
    >
      {/* Country Card Header / Toggle Button */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start sm:items-center gap-4">
          <span className="text-3xl sm:text-4xl p-2 rounded-xl bg-slate-950 border border-white/5 shrink-0">
            {country.flag}
          </span>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {country.name}
              </h3>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                {country.region} • {country.code}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-3xl">
              {country.headline}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] font-mono">
              <span className="text-slate-400">Supervisor Rule:</span>
              <span
                className={`px-2 py-0.5 rounded-md font-semibold border ${
                  isStrictSupervisor
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-teal-500/20 text-teal-300 border-teal-500/40"
                }`}
              >
                {country.supervisorContactRequirement}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <span className="text-xs font-semibold text-slate-400">
            {isExpanded ? "Collapse Guide" : "Expand Dossier"}
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white">
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Country Guide Content */}
      {isExpanded && (
        <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-white/5 space-y-6">
          {/* Summary & Funding Philosophy */}
          <div className="p-4 sm:p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-1.5">
            <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>National Higher Education & Funding Model</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{country.summary}</p>
          </div>

          {/* Common Funding Routes */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              {cardLabels.routes}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {country.commonFundingRoutes.map((route, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    ✓
                  </span>
                  <span className="leading-relaxed">{route}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Scholarships */}
          {country.governmentScholarships.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                {cardLabels.govScholarships}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {country.governmentScholarships.map((sch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-xs font-bold text-white">{sch.name}</h5>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {sch.degreeLevel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-2">{sch.description}</p>
                      <div className="text-[11px] text-teal-300 font-mono">
                        <strong>Coverage:</strong> {sch.coverage}
                      </div>
                    </div>
                    <a
                      href={sch.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-2 border-t border-white/5 mt-2"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Funding Models & Deadlines */}
          <CountryFundingModels country={country} />

          {/* Limitations, Steps & Official Portals */}
          <CountryApplicationSteps country={country} />
        </div>
      )}
    </div>
  );
}

export default CountryCard;
