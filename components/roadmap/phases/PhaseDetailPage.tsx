"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Award,
  Compass,
  Sparkles,
  ListOrdered,
  Globe2,
  AlertTriangle,
  Lightbulb,
  ClipboardCheck,
  ExternalLink,
  ArrowRight,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Check
} from "lucide-react";
import { RoadmapPhase, roadmapPhasesData } from "@/data/roadmapPhasesData";

export interface PhaseDetailPageProps {
  phase: RoadmapPhase;
}

export function PhaseDetailPage({ phase }: PhaseDetailPageProps) {
  // Client-side interactive checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalChecks = phase.checklist.length;
  const completedChecks = phase.checklist.filter((item) => checkedItems[item.id]).length;
  const progressPercent = totalChecks > 0 ? Math.round((completedChecks / totalChecks) * 100) : 0;

  // Previous and next phase lookups
  const currentIndex = roadmapPhasesData.findIndex((p) => p.id === phase.id);
  const prevPhase = currentIndex > 0 ? roadmapPhasesData[currentIndex - 1] : null;
  const nextPhase = currentIndex < roadmapPhasesData.length - 1 ? roadmapPhasesData[currentIndex + 1] : null;

  const isMastersOnly = phase.degreeScope === "masters";
  const isPhdOnly = phase.degreeScope === "phd";

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 pb-24">
      {/* 1. HERO & BREADCRUMB HEADER */}
      <section className="relative overflow-hidden pt-28 pb-14 border-b border-white/[0.08] bg-[#090d16]">
        {/* Radial Ambient Glow */}
        <div
          className="absolute top-0 inset-x-0 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, rgba(20,184,166,0.08) 50%, transparent 80%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono">
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Roadmap Hub</span>
            </Link>
            <span className="text-slate-600">/</span>
            <Link
              href="/roadmap"
              className="text-slate-400 hover:text-white transition-colors"
            >
              13 Application Phases
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-indigo-400 font-bold truncate max-w-[220px] sm:max-w-none">
              Phase {String(phase.number).padStart(2, "0")}: {phase.title}
            </span>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Phase {String(phase.number).padStart(2, "0")} of 13</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{phase.estimatedDuration}</span>
            </span>

            {isMastersOnly ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Master&apos;s Specific Pathway</span>
              </span>
            ) : isPhdOnly ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-mono font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>PhD Specific Pathway</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Universal (Master&apos;s & PhD)</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Blueprint</span>
            </span>
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] mb-5 font-heading">
            {phase.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-4xl leading-relaxed mb-8 font-sans">
            {phase.tagline}
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.08]">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">
              Jump to:
            </span>
            {[
              { href: "#what-why", label: "Overview & Rationale", icon: Sparkles },
              { href: "#how-to-execute", label: "Step-by-Step Action Plan", icon: ListOrdered },
              { href: "#official-resources", label: "Official Portals", icon: Globe2 },
              { href: "#mistakes-example", label: "Pitfalls & Example", icon: AlertTriangle },
              { href: "#degree-nuances", label: "Degree Nuances", icon: GraduationCap },
              { href: "#checklist", label: "Preparation Checklist", icon: ClipboardCheck },
            ].map((anchor) => {
              const Icon = anchor.icon;
              return (
                <a
                  key={anchor.href}
                  href={anchor.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all"
                >
                  <Icon className="w-3 h-3 text-teal-400" />
                  <span>{anchor.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 2. SECTION: WHAT TO DO & WHY IT MATTERS */}
        <section id="what-why" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2.5 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Strategic Core</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What to do Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1422] border border-white/10 shadow-xl relative overflow-hidden group hover:border-teal-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
                    Execution Mandate
                  </span>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    What You Must Do
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {phase.what}
              </p>
            </div>

            {/* Why it matters Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1422] border border-white/10 shadow-xl relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
                    Committee Perspective
                  </span>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Why This Stage Matters
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {phase.why}
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECTION: HOW TO EXECUTE (STEP-BY-STEP ACTION PLAN) */}
        <section id="how-to-execute" className="scroll-mt-24 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <ListOrdered className="w-4 h-4" />
                <span>Action Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How to Execute (Step-by-Step)
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
              {phase.how.length} Sequenced Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {phase.how.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0f1422] border border-white/10 hover:border-white/20 transition-all flex items-start gap-4 shadow-lg group"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 text-white font-mono text-sm font-black flex items-center justify-center shrink-0 shadow-md">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.step}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECTION: OFFICIAL VERIFIED PORTALS & RESOURCES */}
        <section id="official-resources" className="scroll-mt-24 space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Globe2 className="w-4 h-4" />
              <span>Verified Portals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Where to Go: Official Directories & Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Always consult official governmental databases, accredited credential evaluators, and university registers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phase.where.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-[#0f1422] border border-white/10 hover:border-teal-500/40 hover:bg-[#161d30] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-teal-300 transition-colors">
                      <Globe2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{res.name}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-teal-400 font-medium">
                  <span>Open Official Resource</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 5. SECTION: COMMON MISTAKES & REAL-WORLD EXAMPLE */}
        <section id="mistakes-example" className="scroll-mt-24 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fatal Mistakes Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Fatal Mistakes to Avoid</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Common Application Pitfalls
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {phase.commonMistakes.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      ✕
                    </span>
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real-World Example Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Real-World Case Study</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Battle-Tested Application Example
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                  {phase.practicalExample}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Admissions Committee Verified Architecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION: DEGREE-SPECIFIC NUANCES (MASTER'S VS PHD) */}
        <section id="degree-nuances" className="scroll-mt-24 space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Dossier Differentiation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Degree-Level Strategic Nuances
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              How funding expectations and committee evaluations split between Master&apos;s applicants and PhD candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Master's Consideration */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f1422] border border-teal-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
                    Coursework & Pre-Doctoral Focus
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Master&apos;s Degree Consideration
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {phase.mastersNuance}
              </p>
            </div>

            {/* PhD Consideration */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f1422] border border-indigo-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
                    Research Employment & Lab Fit
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    PhD Doctoral Consideration
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {phase.phdNuance}
              </p>
            </div>
          </div>
        </section>

        {/* 7. SECTION: INTERACTIVE PREPARATION CHECKLIST */}
        <section id="checklist" className="scroll-mt-24 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1422] border border-white/10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Phase {String(phase.number).padStart(2, "0")} Preparation Audit</span>
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Verification Checklist
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-300">
                  {completedChecks} of {totalChecks} Verified
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                  {progressPercent}% Complete
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Checkbox Items */}
            <div className="space-y-3">
              {phase.checklist.map((item) => {
                const isChecked = Boolean(checkedItems[item.id]);
                return (
                  <label
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? "bg-teal-950/40 border-teal-500/50 text-teal-100 shadow-md"
                        : "bg-[#090d16] border-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                        isChecked
                          ? "bg-teal-500 text-slate-950 shadow-sm"
                          : "border border-slate-600 hover:border-slate-400 bg-white/5"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-xs sm:text-sm space-y-1">
                      <span className={isChecked ? "line-through text-slate-400 font-normal" : "font-semibold text-white"}>
                        {item.label}
                      </span>
                      {item.tip && (
                        <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                          Pro-Tip: {item.tip}
                        </p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. SECTION: PIPELINE NAVIGATION FOOTER */}
        <section className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Previous Phase */}
            {prevPhase ? (
              <Link
                href={`/roadmap/phases/${prevPhase.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-[#0f1422] hover:bg-[#161d30] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 text-teal-400 group-hover:-translate-x-1 transition-transform shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Previous Phase
                  </span>
                  <span className="text-xs font-bold text-white truncate max-w-[220px] block">
                    Phase {String(prevPhase.number).padStart(2, "0")}: {prevPhase.title}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/roadmap"
                className="w-full sm:w-auto p-4 rounded-xl bg-[#0f1422] hover:bg-[#161d30] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-3 cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 text-teal-400 group-hover:-translate-x-1 transition-transform shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Overview
                  </span>
                  <span className="text-xs font-bold text-white">
                    All 13 Application Phases
                  </span>
                </div>
              </Link>
            )}

            {/* Hub Link */}
            <Link
              href="/roadmap"
              className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>All 13 Phases Pipeline Hub</span>
            </Link>

            {/* Next Phase */}
            {nextPhase ? (
              <Link
                href={`/roadmap/phases/${nextPhase.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-gradient-to-r from-indigo-900/60 to-teal-900/60 hover:from-indigo-900/90 hover:to-teal-900/90 border border-teal-500/40 text-white transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 block">
                    Next Sequential Step
                  </span>
                  <span className="text-xs font-bold text-white truncate max-w-[220px] block">
                    Phase {String(nextPhase.number).padStart(2, "0")}: {nextPhase.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-teal-300 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ) : (
              <Link
                href="/toolkit"
                className="w-full sm:w-auto p-4 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 text-white shadow-xl transition-all flex items-center justify-between sm:justify-end gap-3 cursor-pointer group text-right font-bold"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-200 block">
                    13-Phase Pipeline Complete
                  </span>
                  <span className="text-xs font-heading">
                    Explore Application Toolkit
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PhaseDetailPage;
