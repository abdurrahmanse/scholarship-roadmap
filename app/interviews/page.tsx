"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Server,
  Zap,
  Activity,
  Compass,
  CheckCircle2,
  AlertTriangle,
  FileText,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  Presentation,
  Award
} from "lucide-react";
import { interviewsPageData } from "@/data/pagesData";
import { interviewCasesData } from "@/data/interviews";

export default function InterviewsPage() {
  const [selectedCaseCategory, setSelectedCaseCategory] = useState<string>("All");
  const [expandedCase, setExpandedCase] = useState<string>(interviewCasesData[0]?.id || "");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(interviewCasesData.map((c) => c.category)))];

  const filteredCases = selectedCaseCategory === "All"
    ? interviewCasesData
    : interviewCasesData.filter((c) => c.category === selectedCaseCategory);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Systems & Memory":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "Model Training & Convergence":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "Inference & Optimization":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Theory & Foundations":
        return <Compass className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  const buzzwordComparisons = [
    {
      redFlag: "Autonomous drone target recognition & military surveillance",
      safeScientific: "Fundamental computer vision algorithms for non-rigid geometric 3D scene reconstruction",
      dangerLevel: "Extreme (221g Refusal)"
    },
    {
      redFlag: "Dual-use satellite trajectory prediction & defense reconnaissance",
      safeScientific: "Open-source mathematical optimization of spatiotemporal differential equations in climate physics",
      dangerLevel: "High (TAL Scrutiny)"
    },
    {
      redFlag: "Proprietary facial biometric identification & tracking",
      safeScientific: "Basic foundational representation learning on synthetic benchmarks published in open conferences",
      dangerLevel: "High (Export Alert)"
    },
    {
      redFlag: "Offensive cyber vulnerability generation using LLMs",
      safeScientific: "Theoretical formal verification and automated static syntax parsing in programming language design",
      dangerLevel: "Severe (TAL Trigger)"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/0 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Presentation className="w-4 h-4 text-purple-400" />
            {interviewsPageData.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            {interviewsPageData.hero.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              {interviewsPageData.hero.highlightWord}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {interviewsPageData.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={interviewsPageData.hero.primaryCta.href}
              className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
            >
              {interviewsPageData.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
            {interviewsPageData.hero.secondaryCta && (
              <a
                href={interviewsPageData.hero.secondaryCta.href}
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold transition-all flex items-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                {interviewsPageData.hero.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 1: The 5-Slide Faculty Technical Research Defense Blueprint */}
      <section id="5slide-blueprint" className="py-20 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              Section 1 • Presentation Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {interviewsPageData.sections[0]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {interviewsPageData.sections[0]?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {interviewsPageData.sections[0]?.cards?.map((slide, idx) => (
              <div
                key={slide.title}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-700/50 text-purple-300 font-bold text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {slide.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-slate-800">
                  {slide.bulletPoints?.map((bp) => (
                    <div key={bp} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Presentation className="w-5 h-5 text-purple-400" />
                Faculty Interview Defense Golden Rule:
              </h4>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                Professors do not hire students who regurgitate textbook definitions. They look for candidates who can state why an algorithm failed, show their ablation data, and defend mathematical tradeoffs under pressure.
              </p>
            </div>
            <Link
              href="/toolkit#cv-standards"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 font-medium text-sm border border-slate-700 shrink-0"
            >
              Align with LaTeX CV
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: STAR-L Deep Learning Technical Defense Case Studies */}
      <section id="starl-cases" className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              Section 2 • STAR-L Engineering Scenarios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {interviewsPageData.sections[1]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {interviewsPageData.sections[1]?.subtitle}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCaseCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedCaseCategory === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Detailed STAR-L Cards */}
          <div className="space-y-6">
            {filteredCases.map((defenseCase) => {
              const isExpanded = expandedCase === defenseCase.id;
              return (
                <div
                  key={defenseCase.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-xl"
                >
                  <div
                    onClick={() => setExpandedCase(isExpanded ? "" : defenseCase.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-850"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 shrink-0">
                        {getCategoryIcon(defenseCase.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                            {defenseCase.category}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            ID: {defenseCase.id}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white hover:text-cyan-300 transition-colors">
                          {defenseCase.technicalChallenge}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      <span className="text-xs text-slate-400 hidden sm:inline">
                        {isExpanded ? "Collapse Breakdown" : "Expand STAR-L Analysis"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                            Situation & Context
                          </span>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {defenseCase.context}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                            Engineering Task & Goal
                          </span>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {defenseCase.task}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                          Action Taken (Architectural & Mathematical Weaponry)
                        </span>
                        <p className="text-sm text-slate-200 leading-relaxed font-mono">
                          {defenseCase.actionTaken}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                            Quantitative Benchmark Result
                          </span>
                          <p className="text-sm text-emerald-200 leading-relaxed font-semibold">
                            {defenseCase.quantitativeResult}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                            Scientific & Research Insight (The Learning)
                          </span>
                          <p className="text-sm text-purple-200 leading-relaxed">
                            {defenseCase.researchInsight}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() =>
                            handleCopy(
                              `[STAR-L DEFENSE]\nChallenge: ${defenseCase.technicalChallenge}\nContext: ${defenseCase.context}\nTask: ${defenseCase.task}\nAction: ${defenseCase.actionTaken}\nResult: ${defenseCase.quantitativeResult}\nInsight: ${defenseCase.researchInsight}`,
                              defenseCase.id
                            )
                          }
                          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                        >
                          {copiedId === defenseCase.id ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-400" />
                              <span className="text-emerald-400">Copied to Clipboard</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy STAR-L Script</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Technology Alert List (TAL) Consular Defense & Open-Science Advisor Letter */}
      <section id="visa-tal" className="py-20 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40">
              Section 3 • Immigration & Export Controls
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {interviewsPageData.sections[2]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {interviewsPageData.sections[2]?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* TAL Protocol Checklist */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                The 4-Pillar Consular Clearance Protocol
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Artificial Intelligence is listed under sensitive critical technologies in the U.S. Technology Alert List (TAL). Follow these mandatory rules to prevent 221(g) administrative holds:
              </p>
              <div className="space-y-4">
                {interviewsPageData.sections[2]?.highlights?.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisor Defense Letter Preview */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-400" />
                    Advisor Open-Science Support Letter
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                    Crucial Document
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Your visa packet must contain a formal letter signed by your supervising PI on official department letterhead certifying that:
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-6 list-disc list-inside">
                  <li>The research is fundamental, basic computational science without export restrictions.</li>
                  <li>No classified, proprietary, or defense-funded datasets (e.g., DARPA/DoD classified) will be accessed.</li>
                  <li>All models, code, and findings will be published openly at NeurIPS, ICML, ICLR, or CVPR.</li>
                  <li>The student has no access to export-restricted hardware beyond standard academic clusters.</li>
                </ul>
              </div>
              <Link
                href="/toolkit#email-scripts"
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-center text-sm transition-all shadow-md shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                Copy Advisor Letter Template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Red Flag vs Safe Scientific Language Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 bg-slate-850">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Embassy Interview Lexicon: Red-Flag Buzzwords vs. Safe Scientific Terminology
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Never use defense or surveillance buzzwords when talking to consular officers. Stick strictly to basic mathematics and open-source computational algorithms.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-6">Dangerous Phrasing (Triggers 221g)</th>
                    <th className="py-4 px-6">Safe Academic Formulation</th>
                    <th className="py-4 px-6">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {buzzwordComparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-mono text-red-300 text-xs flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        {row.redFlag}
                      </td>
                      <td className="py-4 px-6 font-mono text-emerald-300 text-xs">
                        {row.safeScientific}
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-800/60">
                          {row.dangerLevel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Graduate Funding Offer Evaluation & Counter-Offer Playbook */}
      <section id="offer-negotiation" className="py-20 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
              Section 4 • Financial Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {interviewsPageData.sections[3]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {interviewsPageData.sections[3]?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {interviewsPageData.sections[3]?.dataPoints?.map((item) => (
              <div
                key={item.label}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {item.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block mb-2 font-mono">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400">
                  {item.sublabel}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald-400" />
                The CGS April 15 Resolution Rules
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                In the United States and Canada, hundreds of graduate institutions adhere to the <strong>Council of Graduate Schools (CGS) April 15 Resolution</strong>.
              </p>
              <ul className="text-xs text-slate-400 space-y-3 list-disc list-inside">
                <li>You are legally and ethically entitled to hold all funded offers until <strong>April 15 at 11:59 PM EST</strong>.</li>
                <li>No department may pressure you to accept before this date or threaten to revoke an assistantship.</li>
                <li>Accepting an offer prior to April 15 is binding unless you formally request a written release from the graduate program director.</li>
              </ul>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400" />
                  Stipend Top-Up Negotiation Checklist
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  If your top-choice university offers $34,000/year while another admits you with a $42,000 Dean’s Fellowship, you can politely negotiate:
                </p>
                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Inquire about discretionary Dean’s Research Top-Ups ($3k–$6k/yr)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Confirm whether summer GRA stipend (Months 10–12) is included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Ask about department hardware relocation or conference travel grants ($2,500/yr)</span>
                  </div>
                </div>
              </div>

              <Link
                href="/toolkit#email-scripts"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-center font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                View Negotiation Email Script
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
