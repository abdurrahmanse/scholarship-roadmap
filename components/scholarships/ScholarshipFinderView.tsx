"use client";

import React, { useState } from "react";
import {
  searchWorkflowSteps,
  searchQueryFormulas,
  verifiedScholarshipPortals
} from "@/data/scholarshipsSearchData";
import {
  Copy,
  Check,
  ExternalLink,
  ShieldAlert,
  Terminal
} from "lucide-react";

export function ScholarshipFinderView() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [stepCategory, setStepCategory] = useState<"All" | "Discovery" | "Validation" | "Safety">("All");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredSteps = searchWorkflowSteps.filter(
    (s) => stepCategory === "All" || s.category === stepCategory
  );

  return (
    <div className="space-y-12">
      {/* SECTION 1: Copyable Precision Search Formulas */}
      <section className="space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <Terminal className="w-4 h-4" />
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Precision Boolean Search Query Formulas
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
            Bypass commercial agency blogs, paid advertisements, and dead-end aggregators. Copy these verified search formulas into Google, Bing, or DuckDuckGo to pinpoint accredited primary university domains (.edu, .ac.uk, .edu.au, .ca).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchQueryFormulas.map((formula) => {
              const isCopied = copiedId === formula.id;
              return (
                <div
                  key={formula.id}
                  className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-white/5 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-bold text-teal-400 block">
                      {formula.title}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {formula.purpose}
                    </p>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-white/5 font-mono text-xs text-slate-200 break-all select-all">
                      {formula.exampleFilled}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Target: {formula.targetEngines.join(", ")}
                    </span>
                    <button
                      onClick={() => copyToClipboard(formula.exampleFilled, formula.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        isCopied
                          ? "bg-emerald-600 text-white"
                          : "bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/30"
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "Copied Query!" : "Copy Formula"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: The 11-Step Search & Verification Workflow */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The 11-Step Systematic Search Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Methodical discovery and verification protocol to ensure every opportunity is accredited and sustainable.
            </p>
          </div>

          {/* Workflow Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5 text-xs self-start sm:self-auto">
            {(["All", "Discovery", "Validation", "Safety"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setStepCategory(cat)}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  stepCategory === cat
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSteps.map((step) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-white/15 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-teal-950/80 border border-teal-500/40 text-teal-300 font-mono font-bold text-xs flex items-center justify-center">
                  {step.number}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                    step.category === "Safety"
                      ? "bg-amber-950/60 text-amber-300 border border-amber-500/30"
                      : "bg-white/5 text-slate-400 border border-white/10"
                  }`}
                >
                  {step.category}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/5">
                {step.actionableInstructions.map((act, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold shrink-0">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Verified Official National Scholarship Portals Directory */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Accredited Government & National Search Portals
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Always verify scholarship details directly on these legitimate official agency portals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verifiedScholarshipPortals.map((portal) => (
            <a
              key={portal.id}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.08] hover:border-teal-500/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-teal-400 font-semibold">
                    {portal.countryOrRegion}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {portal.coverageType}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors mb-1">
                  {portal.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {portal.notes}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-semibold group-hover:text-teal-300">
                <span>Open Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SECTION 4: Fraud Detection Protocol Banner */}
      <section className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200/90 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span>Strict Anti-Fraud Protection Protocol</span>
        </div>
        <p className="text-xs leading-relaxed">
          No legitimate university scholarship charges an upfront &ldquo;award claim fee&rdquo;, &ldquo;placement deposit&rdquo;, or &ldquo;processing commission&rdquo;. If an agency or individual guarantees 100% scholarship admission in exchange for money, it is a scam. Admissions decisions are made exclusively by academic faculty committees.
        </p>
      </section>
    </div>
  );
}
