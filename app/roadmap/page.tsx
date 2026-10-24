"use client";

import { useState } from "react";
import Link from "next/link";
import { phasesData } from "@/data/phases";
import { stepsData } from "@/data/steps";
import { roadmapPageData } from "@/data/pagesData";
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Clock, 
  Zap, 
  AlertTriangle, 
  Award, 
  Code, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  Filter
} from "lucide-react";

export default function RoadmapPage() {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>("all");
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const filteredSteps = selectedPhaseId === "all" 
    ? stepsData 
    : stepsData.filter((s) => s.phaseId === selectedPhaseId);

  const selectedPhase = phasesData.find((p) => p.id === selectedPhaseId);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-24">
      {/* ========================================================
          PAGE HERO
         ======================================================== */}
      <section className="pt-14 pb-14 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            {roadmapPageData.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            {roadmapPageData.hero.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {roadmapPageData.hero.highlightWord}
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {roadmapPageData.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* ========================================================
            SECTION 1: PHASE NAVIGATOR & FILTER TABS
           ======================================================== */}
        <section id="phase-navigator" className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-300">Select Roadmap Phase</h2>
            </div>
            <span className="text-xs text-neutral-500">Showing {filteredSteps.length} Actionable Steps</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedPhaseId("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedPhaseId === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800"
              }`}
            >
              All Phases (Full 24 Mo)
            </button>
            {phasesData.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhaseId(phase.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  selectedPhaseId === phase.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <span>Phase {phase.number}</span>
                <span className="text-[10px] opacity-75 hidden sm:inline">({phase.shortTitle})</span>
              </button>
            ))}
          </div>

          {/* Phase Detail Banner if a single phase is selected */}
          {selectedPhase && (
            <div className="mt-6 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
                      Phase {selectedPhase.number} • {selectedPhase.timeline}
                    </span>
                    <span className="text-xs text-neutral-500">{selectedPhase.durationMonths} Duration</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2">{selectedPhase.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-3xl">{selectedPhase.summary}</p>
                </div>
                <div className="text-xs space-y-1 bg-neutral-950 p-3 rounded-xl border border-neutral-800 shrink-0">
                  <div className="text-neutral-400 font-semibold mb-1">Target Deliverables:</div>
                  {selectedPhase.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-neutral-300 text-[11px]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            SECTION 2: ACTIONABLE STEP-BY-STEP MILESTONES
           ======================================================== */}
        <section id="steps-list" className="space-y-8 mb-16">
          {filteredSteps.map((step) => (
            <article
              key={step.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all shadow-sm"
            >
              {/* Step Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                      STEP {step.stepNumber}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        step.priority === "Crucial"
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      }`}
                    >
                      {step.priority} Priority
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{step.subtitle}</p>
                </div>
              </div>

              {/* Key Objective Box */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 mb-6">
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-200">Core Objective</div>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{step.keyObjective}</p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Step Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Actionable Execution Checklist (Click to track progress)</span>
                </h4>
                <div className="space-y-2">
                  {step.checklist.map((item) => {
                    const isDone = !!completedTasks[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleTask(item.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                          isDone
                            ? "bg-emerald-950/20 border-emerald-500/30 text-neutral-400"
                            : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 text-neutral-200"
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 shrink-0 focus:outline-none"
                          aria-label={isDone ? "Mark as uncompleted" : "Mark as completed"}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-neutral-600 hover:text-neutral-400" />
                          )}
                        </button>
                        <div>
                          <span className={`font-semibold ${isDone ? "line-through text-neutral-400" : "text-white"}`}>
                            {item.task}
                          </span>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pro Tips & Pitfalls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-blue-950/10 border border-blue-500/20 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Pro Tips from Admitted Scholars</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-neutral-300">
                    {step.proTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-400">✦</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/10 border border-amber-500/20 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Lethal Mistakes & Pitfalls</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-neutral-300">
                    {step.commonPitfalls.map((pitfall, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400">✕</span>
                        <span>{pitfall}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Code Snippet if present */}
              {step.codeSnippet && (
                <div className="mb-6 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{step.codeSnippet.caption}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase text-neutral-500">{step.codeSnippet.language}</span>
                  </div>
                  <pre className="p-4 text-xs font-mono text-indigo-300 overflow-x-auto leading-relaxed">
                    <code>{step.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Deliverable Footer */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-neutral-200">Required Deliverable:</strong> {step.deliverable}
                  </span>
                </div>

                {step.resources.length > 0 && (
                  <div className="flex items-center gap-2 shrink-0">
                    {step.resources.map((res, rIdx) => (
                      <a
                        key={rIdx}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] transition-colors"
                      >
                        <BookOpen className="w-3 h-3 text-indigo-400" />
                        <span>{res.title.slice(0, 25)}...</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* ========================================================
            SECTION 3: LOW-RESOURCE GPU COMPUTE BLUEPRINT
           ======================================================== */}
        <section id="compute-blueprint" className="py-12 border-t border-neutral-800">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              Compute Laboratory Blueprint
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">
              Low-Resource GPU Compute & Open-Source Artifact Strategy
            </h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              How international applicants from non-wealthy institutions produce competitive machine learning empirical results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-bold text-white">30 hrs/wk</div>
                <div className="text-xs text-blue-400 mt-0.5">Free Kaggle GPU</div>
                <p className="text-[11px] text-neutral-500 mt-1">NVIDIA T4/P100 kernels</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-bold text-white">$10 / mo</div>
                <div className="text-xs text-blue-400 mt-0.5">Google Colab Pro</div>
                <p className="text-[11px] text-neutral-500 mt-1">A100 compute access</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-bold text-white">$0.30 / hr</div>
                <div className="text-xs text-blue-400 mt-0.5">Spot A10G Cloud</div>
                <p className="text-[11px] text-neutral-500 mt-1">RunPod / Lambda Labs</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="text-xl font-bold text-white">5 Seeds</div>
                <div className="text-xs text-blue-400 mt-0.5">Statistical Validity</div>
                <p className="text-[11px] text-neutral-500 mt-1">Controlled variance check</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: DELIVERABLES VERIFICATION AUDIT
           ======================================================== */}
        <section id="deliverables-audit" className="py-12 border-t border-neutral-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Audit Checklist
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">Phase-by-Phase Deliverables Verification</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Verify completion of core proof-of-work items before advancing to subsequent stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phasesData.map((p) => (
              <div key={p.id} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-400">Phase {p.number}: {p.shortTitle}</span>
                  <span className="text-[11px] text-neutral-500">{p.timeline}</span>
                </div>
                <ul className="space-y-1.5 mt-3">
                  {p.deliverables.map((d, didx) => (
                    <li key={didx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/toolkit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-indigo-600/20 hover:scale-102 transition-transform"
            >
              <span>Next Step: Explore Application Dossier & Cold Email Templates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
