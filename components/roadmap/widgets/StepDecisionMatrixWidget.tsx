"use client";

import React, { useState } from "react";
import {
  GitFork,
  DollarSign,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface RouteOption {
  id: string;
  title: string;
  shortLabel: string;
  tag: string;
  badgeVariant: "emerald" | "cyan" | "rose";
  financialOutcome: string;
  fundingGuarantee: string;
  stipendAmount: string;
  tuitionStatus: string;
  timeline: string;
  undergradDirectEntry: boolean;
  masterOutOption: boolean;
  facultyPriority: string;
  verdict: string;
  targetRegions: string[];
}

const routesData: RouteOption[] = [
  {
    id: "phd",
    title: "Direct-Entry PhD (Recommended)",
    shortLabel: "Direct PhD",
    tag: "100% Fully Funded Flagship",
    badgeVariant: "emerald",
    financialOutcome: "+$180,000 to +$250,000 Net Positive (5-Year)",
    fundingGuarantee: "Guaranteed 4–5 Years (RA/TA Contract)",
    stipendAmount: "$34,000 – $52,000 / year (Tax-advantaged)",
    tuitionStatus: "100% Waived + Health Insurance Covered",
    timeline: "4–5 Years (Direct from Bachelor's)",
    undergradDirectEntry: true,
    masterOutOption: true,
    facultyPriority: "Maximum: Faculty invest multi-year grants in doctoral candidates.",
    verdict: "Top choice for CS graduates with at least one research project or thesis experience. Zero debt, guaranteed income, and the golden master-out safety net.",
    targetRegions: ["United States (NSF/DARPA Grants)", "Canada (Direct PhD)", "Singapore (A*STAR/SINGA)"]
  },
  {
    id: "thesis-ms",
    title: "Funded Thesis Master's (MSc / MASc)",
    shortLabel: "Thesis Master's",
    tag: "Funded Research Runway",
    badgeVariant: "cyan",
    financialOutcome: "$0 Debt / Small Positive Net ($15k–$25k/yr)",
    fundingGuarantee: "Guaranteed 2 Years with Formal Advisor",
    stipendAmount: "$20,000 – $32,000 CAD/EUR / year",
    tuitionStatus: "Fully Reimbursed or Nominal ($500–$2,000/yr)",
    timeline: "2 Years (Thesis Defense Mandatory)",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "High: Faculty need motivated master's students for specific grant deliverables.",
    verdict: "Ideal stepping stone if your undergraduate profile lacks published preprints. Gives you 2 years of top-tier lab compute to launch into a Top 10 PhD.",
    targetRegions: ["Canada (Mila, Vector Institute, UBC, Toronto)", "Germany (TUM, MPI - Free Tuition)", "Switzerland (ETH/EPFL - Paid Assistantships)"]
  },
  {
    id: "taught-ms",
    title: "Coursework / Taught MS (Avoid for Research)",
    shortLabel: "Taught MS Trap",
    tag: "High Debt Warning ⚠️",
    badgeVariant: "rose",
    financialOutcome: "-$80,000 to -$120,000 Net Loss (Student Loans)",
    fundingGuarantee: "0% Funding (Tuition is paid entirely by student)",
    stipendAmount: "$0 (Living expenses not covered)",
    tuitionStatus: "Full Out-of-State / International Rates ($50k–$80k)",
    timeline: "1–1.5 Years (Classroom Only)",
    undergradDirectEntry: true,
    masterOutOption: false,
    facultyPriority: "Very Low: Professors rarely hire taught master's students into funded AI labs.",
    verdict: "Cash-cow program designed for university revenue. You will NOT receive lab funding, and your chances of obtaining a publication are minimal due to heavy course loads.",
    targetRegions: ["US Professional MS", "UK 1-Year Taught MSc", "Australian Coursework MS"]
  }
];

export function StepDecisionMatrixWidget() {
  const [selectedRouteId, setSelectedRouteId] = useState("phd");
  const selectedRoute = routesData.find((r) => r.id === selectedRouteId) || routesData[0];

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
              Step 0.3 Interactive Strategic Matrix
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              Direct PhD vs. Thesis Master&apos;s vs. Coursework Traps
            </h4>
          </div>
        </div>
        <Badge variant="emerald" size="sm">
          Admissions Economics
        </Badge>
      </div>

      {/* Route Switcher Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 relative z-10">
        {routesData.map((route) => {
          const isSelected = selectedRouteId === route.id;
          return (
            <button
              key={route.id}
              onClick={() => setSelectedRouteId(route.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? route.id === "taught-ms"
                    ? "bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/60"
                    : route.id === "thesis-ms"
                    ? "bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/60"
                    : "bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/60"
                  : "bg-[#0f1422] border-white/5 hover:border-white/15 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {route.shortLabel}
                </span>
                <Badge variant={route.badgeVariant} size="sm">
                  {route.tag}
                </Badge>
              </div>
              <h5 className="text-xs sm:text-sm font-heading font-bold text-white leading-tight">
                {route.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Selected Route Detailed Breakdown Card */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#0f1422] border border-white/10 relative z-10 space-y-5">
        {/* Route Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={selectedRoute.badgeVariant} size="sm">
                {selectedRoute.tag}
              </Badge>
              <span className="text-xs font-mono text-slate-400">
                Timeline: {selectedRoute.timeline}
              </span>
            </div>
            <h4 className="text-lg font-heading font-bold text-white">
              {selectedRoute.title}
            </h4>
          </div>

          <div className="p-3 rounded-xl bg-[#090d16] border border-white/10 text-right">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Estimated Net Financial Balance
            </span>
            <span
              className={`text-sm sm:text-base font-mono font-bold ${
                selectedRoute.id === "taught-ms" ? "text-rose-400" : "text-emerald-400"
              }`}
            >
              {selectedRoute.financialOutcome}
            </span>
          </div>
        </div>

        {/* Financial & Operational Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-emerald-400" />
              Stipend / Income
            </div>
            <div className="text-xs font-bold text-slate-200">
              {selectedRoute.stipendAmount}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-cyan-400" />
              Tuition Status
            </div>
            <div className="text-xs font-bold text-slate-200">
              {selectedRoute.tuitionStatus}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-indigo-400" />
              Direct Entry from BS?
            </div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Yes, 100% Eligible
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-400" />
              Master-Out Escape Hatch?
            </div>
            <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
              {selectedRoute.masterOutOption ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Yes (Funded MS Exit)
                </span>
              ) : (
                <span className="text-slate-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-slate-500" />
                  Not Applicable
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Verdict & Faculty Priority Box */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/5 text-xs text-slate-300">
            <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Strategic Evaluation & Recommendation:
            </div>
            <p className="leading-relaxed text-slate-300 font-sans">
              {selectedRoute.verdict}
            </p>
          </div>

          {selectedRoute.id === "phd" && (
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>The Secret &ldquo;Master-Out&rdquo; Strategy: </strong>
                Many students do not realize that in top US universities, direct-entry PhD students who decide after 2 years that they prefer industry over research can legally &ldquo;master out&rdquo;. They receive their Master&apos;s degree completely free, having been paid \$80k+ in stipends with zero tuition debt.
              </p>
            </div>
          )}

          {selectedRoute.id === "taught-ms" && (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-200 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>The Rejection / Debt Danger: </strong>
                Over 70% of international applicants falsely believe they can &ldquo;enter an unfunded MS and find an RA position once on campus&rdquo;. In reality, professors have strict grant obligations and reserve almost 100% of their RA funding for incoming doctoral students.
              </p>
            </div>
          )}
        </div>

        {/* Target Institutions Pills */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            Top Global Hubs:
          </span>
          {selectedRoute.targetRegions.map((region, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#090d16] text-slate-200 border border-white/10"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Summary Actionable Advice */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#0f1422] border border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span className="text-slate-300 font-medium">
          Summary Decision Rule: If you have ANY prior research experience, apply directly to PhD programs.
        </span>
        <span className="font-mono text-cyan-400 flex items-center gap-1 font-semibold">
          Step 0.3 Locked <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
