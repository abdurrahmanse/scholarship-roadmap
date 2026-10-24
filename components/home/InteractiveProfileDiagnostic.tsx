"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  GraduationCap
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  diagnosticDegreeOptions,
  diagnosticGpaOptions,
  diagnosticPaperOptions,
  diagnosticEngineeringOptions
} from "@/data/homeData";
import { homePageData } from "@/data/pagesData";

export function InteractiveProfileDiagnostic() {
  const [degree, setDegree] = useState<string>(diagnosticDegreeOptions[0]?.id || "phd-direct");
  const [gpa, setGpa] = useState<string>(diagnosticGpaOptions[1]?.id || "good");
  const [papers, setPapers] = useState<string>(diagnosticPaperOptions[1]?.id || "workshop");
  const [engineering, setEngineering] = useState<string>(diagnosticEngineeringOptions[0]?.id || "multi-gpu");

  const sectionMeta = homePageData.sections[3];

  const computeAudit = () => {
    let score = 50;

    if (degree === "phd-direct") score += 10;
    if (degree === "phd-postms") score += 12;
    if (degree === "ms-thesis") score += 8;

    if (gpa === "high") score += 15;
    else if (gpa === "good") score += 12;
    else if (gpa === "medium") score += 8;
    else score += 4;

    if (papers === "conf") score += 20;
    else if (papers === "workshop") score += 15;
    else if (papers === "thesis") score += 10;
    else score += 3;

    if (engineering === "multi-gpu") score += 15;
    else if (engineering === "pytorch-colab") score += 10;
    else score += 4;

    let reach = "CMU SCS, Stanford SAIL, UC Berkeley BAIR, MIT CSAIL";
    let target = "Mila, Vector Institute, UT Austin, UW Madison, ETH Zurich AI";
    let safe = "Singapore SINGA (NUS/NTU), Max Planck IMPRS, CSIRO Data61, RIKEN AIP";
    let priorityAction = "Draft your 5-point cold email scripts and target faculty in September.";
    let recommendedPhase = "/roadmap#phase-2";
    let phaseName = "Phase 2: CSRankings & PI Outreach";

    if (score < 75) {
      reach = "Mila, University of Toronto, Georgia Tech, TU Munich";
      target = "SINGA Singapore, RIKEN AIP Japan, Alberta AMII, Edinburgh AI";
      safe = "European TV-L E13 Projects, Australian CSIRO, KAIST AI";
      priorityAction = "Fast-track an empirical NeurIPS/ICLR workshop paper or citable arXiv preprint to solidify research capital.";
      recommendedPhase = "/roadmap#phase-1";
      phaseName = "Phase 1: Workshops & arXiv Fast-Track";
    }

    if (gpa === "low" || gpa === "medium") {
      priorityAction = "Target newly hired Assistant Professors with active NSF/ERC grants who prioritize code velocity and PyTorch skills over raw GPA.";
    }

    return { score: Math.min(score, 99), reach, target, safe, priorityAction, recommendedPhase, phaseName };
  };

  const audit = computeAudit();

  return (
    <section id="profile-diagnostic" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={sectionMeta?.badge || "Interactive Self-Assessment"}
          badgeVariant="indigo"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Applicant Diagnostic & Readiness Scorecard"}
          subtitle={sectionMeta?.subtitle || "Select your current academic profile to generate an instant competitiveness rating, custom lab tier mapping, and high-leverage immediate action steps."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard borderGlow="indigo" className="space-y-6 bg-[#0f1422] border border-white/10 p-6 sm:p-7">
              {/* Question 1: Target Degree */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                  1. Target Postgraduate Path
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {diagnosticDegreeOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setDegree(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        degree === item.id
                          ? "bg-indigo-600/30 border-indigo-400 text-white shadow-md shadow-indigo-950 font-semibold"
                          : "bg-[#090d16] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold font-heading">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Academic GPA */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  2. Cumulative Academic GPA (Scale of 4.0)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {diagnosticGpaOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGpa(item.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        gpa === item.id
                          ? "bg-cyan-600/30 border-cyan-400 text-white shadow-md shadow-cyan-950 font-semibold"
                          : "bg-[#090d16] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold font-heading">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Research Capital & Publications */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono">
                  3. Peer-Reviewed Research & Preprints
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {diagnosticPaperOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPapers(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        papers === item.id
                          ? "bg-emerald-600/30 border-emerald-400 text-white shadow-md shadow-emerald-950 font-semibold"
                          : "bg-[#090d16] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold font-heading">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Technical Stack */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 font-mono">
                  4. Production AI Stack & Compute Experience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {diagnosticEngineeringOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEngineering(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        engineering === item.id
                          ? "bg-purple-600/30 border-purple-400 text-white shadow-md shadow-purple-950 font-semibold"
                          : "bg-[#090d16] border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-xs font-bold font-heading">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Results Diagnostic Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard borderGlow="emerald" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 font-mono">
                    Calculated Readiness
                  </span>
                  <div className="text-3xl font-black text-white font-mono flex items-center gap-2 mt-1">
                    <span>{audit.score}</span>
                    <span className="text-sm font-normal text-slate-500">/ 100</span>
                    <Badge
                      variant={audit.score >= 85 ? "emerald" : audit.score >= 70 ? "cyan" : "amber"}
                      size="sm"
                    >
                      {audit.score >= 85 ? "Top Tier Competitive" : audit.score >= 70 ? "Solid Candidate" : "Build Focus Required"}
                    </Badge>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
              </div>

              {/* Lab Tier Breakdown */}
              <div className="space-y-4 mb-6 text-xs">
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1 font-heading">
                    <Target className="w-3.5 h-3.5 text-indigo-400" />
                    Reach Tier Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.reach}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1 font-heading">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Target Tier Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.target}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1 font-heading">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    Solid Foundation Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.safe}</p>
                </div>
              </div>

              {/* Priority Action Recommendation */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 mb-6">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-1 font-heading">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  Immediate High-Leverage Strategic Move:
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {audit.priorityAction}
                </p>
              </div>

              {/* CTA to Roadmap Phase */}
              <Link
                href={audit.recommendedPhase}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Jump to {audit.phaseName}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
