"use client";

import React, { useState } from "react";
import { countryGuidesData } from "@/data/countryGuidesData";
import {
  Search,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  Award,
  Users,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export function CountryGuidesExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [supervisorFilter, setSupervisorFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCountries, setExpandedCountries] = useState<Record<string, boolean>>({
    germany: true,
    sweden: true,
    "united-states": true
  });

  const toggleCountry = (id: string) => {
    setExpandedCountries((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    countryGuidesData.forEach((c) => {
      allExp[c.id] = true;
    });
    setExpandedCountries(allExp);
  };

  const collapseAll = () => {
    setExpandedCountries({});
  };

  // Filter countries
  const filteredCountries = countryGuidesData.filter((country) => {
    if (selectedRegion !== "All" && country.region !== selectedRegion) return false;
    if (supervisorFilter !== "All" && country.supervisorContactRequirement !== supervisorFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = country.name.toLowerCase().includes(q);
      const inHeadline = country.headline.toLowerCase().includes(q);
      const inGov = country.governmentScholarships.some((g) =>
        g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)
      );
      const inRoutes = country.commonFundingRoutes.some((r) => r.toLowerCase().includes(q));
      return inName || inHeadline || inGov || inRoutes;
    }
    return true;
  });

  const regions = ["All", "Europe", "North America", "Asia", "Oceania"];

  return (
    <div className="space-y-8">
      {/* Control Bar: Region tabs, search, supervisor filter */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {reg} {reg === "All" ? `(${countryGuidesData.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by country, scholarship (e.g. DAAD, MEXT, Fulbright)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Expand/Collapse Actions */}
          <div className="flex items-center gap-2 self-end lg:self-auto text-xs">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Sub-Filters: Supervisor Necessity */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs text-slate-400">
          <span className="font-mono text-slate-400">Supervisor Expectation:</span>
          {["All", "Strictly Required Before Application", "Recommended", "Centralized / Not Required"].map((req) => (
            <button
              key={req}
              onClick={() => setSupervisorFilter(req)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                supervisorFilter === req
                  ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 font-semibold"
                  : "bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {req}
            </button>
          ))}
        </div>
      </div>

      {/* Country Cards List */}
      <div className="space-y-8">
        {filteredCountries.map((country) => {
          const isExpanded = !!expandedCountries[country.id];

          return (
            <article
              key={country.id}
              id={country.id}
              className="rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-white/15 transition-all duration-200 shadow-xl overflow-hidden scroll-mt-28"
            >
              {/* Country Header Bar */}
              <div
                onClick={() => toggleCountry(country.id)}
                className="p-5 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl shrink-0 mt-0.5">{country.flag}</span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {country.name}
                      </h2>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-slate-300">
                        {country.code} • {country.region}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                          country.supervisorContactRequirement.includes("Strictly")
                            ? "bg-amber-950/60 text-amber-300 border border-amber-500/30"
                            : "bg-teal-950/60 text-teal-300 border border-teal-500/30"
                        }`}
                      >
                        Supervisor: {country.supervisorContactRequirement}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {country.headline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                  <button
                    className="p-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="Toggle country guide"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-5 sm:p-8 space-y-8 animate-in fade-in duration-200">
                  {/* Summary & Funding Philosophy */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
                      Overview & Funding Philosophy
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {country.summary}
                    </p>
                    <p className="text-xs text-slate-400 italic pt-1">
                      Philosophy: {country.fundingPhilosophy}
                    </p>
                  </div>

                  {/* Common Funding Routes */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Primary Funding Routes</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {country.commonFundingRoutes.map((route, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-slate-950/40 border border-white/[0.04] text-xs text-slate-300 flex items-start gap-2.5"
                        >
                          <span className="text-teal-400 font-bold shrink-0">•</span>
                          <span>{route}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Government Scholarships Directory */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-400" />
                      <span>Official Government & National Scholarships</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {country.governmentScholarships.map((gov, gIdx) => (
                        <div
                          key={gIdx}
                          className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/20 space-y-2 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                              <span>{gov.name}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                {gov.degreeLevel}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed mb-2">
                              {gov.description}
                            </p>
                            <div className="text-xs text-emerald-400 font-medium">
                              <strong>Coverage: </strong>
                              <span>{gov.coverage}</span>
                            </div>
                          </div>
                          <a
                            href={gov.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold pt-2 border-t border-white/5"
                          >
                            <span>Official Scholarship Portal</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Degree Models & Assistantships */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                        <GraduationCap className="w-4 h-4" />
                        <span>Master&apos;s Funding Reality</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {country.mastersFundingModel}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                        <Award className="w-4 h-4" />
                        <span>PhD Funding & Employment Model</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {country.phdFundingModel}
                      </p>
                    </div>
                  </div>

                  {/* Supervisor & Language Expectations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                        <Users className="w-4 h-4" />
                        <span>Supervisor Outreach Protocol</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {country.supervisorContactNotes}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                        <Clock className="w-4 h-4" />
                        <span>Deadlines & Language Rules</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-1">
                        <strong>Language: </strong>{country.languageRequirements}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <strong>Deadlines: </strong>{country.typicalApplicationDeadlines}
                      </p>
                    </div>
                  </div>

                  {/* Important Limitations & Traps */}
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-500/25 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Important Limitations & Critical Warnings</span>
                    </div>
                    <ul className="space-y-1.5">
                      {country.importantLimitations.map((lim, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2 text-xs text-amber-200/90">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Country-Specific Application Sequence */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      <span>Practical Country Application Sequence</span>
                    </h3>
                    <div className="space-y-2">
                      {country.applicationSequence.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/40 border border-white/5 text-xs text-slate-300"
                        >
                          <span className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center font-mono font-bold text-[11px] text-teal-400 shrink-0">
                            {sIdx + 1}
                          </span>
                          <span className="mt-0.5">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official External Portals */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-teal-400" />
                      <span>Official Government & University Portals</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {country.officialPortals.map((portal, pIdx) => (
                        <a
                          key={pIdx}
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 rounded-xl bg-slate-950 border border-white/5 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs font-bold text-teal-300 group-hover:text-teal-200 mb-1">
                              <span>{portal.name}</span>
                              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                            </div>
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                              {portal.description}
                            </p>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 mt-2 block group-hover:text-teal-400">
                            Official National Portal &rarr;
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
