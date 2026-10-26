"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, Award, ArrowRight, CheckCircle2, BookOpen, Layers, Users, DollarSign } from "lucide-react";

export function DegreePathwaySelector() {
  const [activeTab, setActiveTab] = useState<"masters" | "phd">("masters");

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Informational Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Postgraduate Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Master&apos;s scholarships and PhD funding operate on fundamentally different mechanisms. Select a pathway to understand the key differences in research expectations, funding models, and supervisor requirements.
          </p>
        </div>

        {/* Pathway Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Master's Card */}
          <div
            onClick={() => setActiveTab("masters")}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
              activeTab === "masters"
                ? "bg-slate-900/90 border-teal-500/50 shadow-2xl shadow-teal-950/30 ring-1 ring-teal-500/30"
                : "bg-slate-900/40 border-white/[0.08] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-teal-400">Pathway 01</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Master&apos;s Scholarship Roadmap</h3>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${
                activeTab === "masters" ? "bg-teal-500/20 text-teal-300 border border-teal-500/40" : "bg-white/5 text-slate-400"
              }`}>
                1–2 Years
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Tailored for students pursuing coursework or research Master&apos;s degrees abroad, focusing on tuition-free European systems, bilateral government awards (DAAD, Eiffel, Chevening), and Graduate Teaching Assistantships.
            </p>

            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Funding Model:</strong> Government awards, tuition waivers, or tuition-free universities with part-time student jobs.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Supervisor Contact:</strong> Rarely required for taught degrees; required only for thesis-based programs (e.g. Canada).</div>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Key Admissions Weight:</strong> Undergraduate GPA, course prerequisites (ECTS alignment), Motivation Letter / SOP.</div>
              </div>
            </div>

            <Link
              href="/roadmap?degree=masters"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group"
            >
              <span>Explore Master&apos;s Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* PhD Card */}
          <div
            onClick={() => setActiveTab("phd")}
            className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
              activeTab === "phd"
                ? "bg-slate-900/90 border-indigo-500/50 shadow-2xl shadow-indigo-950/30 ring-1 ring-indigo-500/30"
                : "bg-slate-900/40 border-white/[0.08] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-400">Pathway 02</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">PhD Funding Roadmap</h3>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium ${
                activeTab === "phd" ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40" : "bg-white/5 text-slate-400"
              }`}>
                3–5 Years
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Tailored for scholars seeking full-ride doctoral research positions: salaried employment contracts in Europe, Graduate Research/Teaching Assistantships in North America, or national doctoral fellowships.
            </p>

            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Funding Model:</strong> 100% full-ride standard (tuition remission + monthly stipend) or formal employment salary.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Supervisor Contact:</strong> Mandatory in Canada, Australia, and individual European PhDs; centralized in US rotations.</div>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div><strong className="text-white">Key Admissions Weight:</strong> Research experience, methodology maturity, proposal quality, academic references.</div>
              </div>
            </div>

            <Link
              href="/roadmap?degree=phd"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span>Explore PhD Funding Roadmap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Shared Steps & Nuance Deep Dive */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/[0.08]">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 text-indigo-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Shared Foundation Across Both Degrees</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Both pathways share critical milestones: transcript evaluation (Phase 01), country selection based on statutory funding laws (Phase 02), document drafting rigor (Phase 06), and careful funding offer verification (Phase 11). The Complete Roadmap connects all 13 phases into a unified journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <span className="font-semibold text-white block mb-0.5">Application Process</span>
              <span className="text-slate-400">Master&apos;s relies on centralized university portals; PhDs often require finding a supervisor or applying to advertised research jobs.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <span className="font-semibold text-white block mb-0.5">Research Expectations</span>
              <span className="text-slate-400">Master&apos;s tests coursework foundation; PhDs demand evidence of independent inquiry, experimental design, and academic writing.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
              <span className="font-semibold text-white block mb-0.5">Funding Availability</span>
              <span className="text-slate-400">PhDs in STEM/quantitative disciplines are universally funded; Master&apos;s full funding requires specific bilateral scholarships or tuition-free nations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
