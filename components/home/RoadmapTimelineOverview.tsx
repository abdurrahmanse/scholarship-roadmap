"use client";

import React, { useState } from "react";
import Link from "next/link";
import { roadmapPhasesData, RoadmapPhase } from "@/data/roadmapPhasesData";
import { ArrowRight, ChevronRight, Clock, CheckCircle2, Compass } from "lucide-react";

export function RoadmapTimelineOverview() {
  const [selectedPhase, setSelectedPhase] = useState<RoadmapPhase>(roadmapPhasesData[0]);

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Complete 13-Phase Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Complete Scholarship Application Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            A logical, beginning-to-end sequence of 13 practical phases. Select any phase to view its summary, requirements, and official pathway instructions.
          </p>
        </div>

        {/* Desktop & Tablet: Connected Timeline Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Phase List Sidebar / Stepper (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 max-h-[680px] overflow-y-auto pr-2 custom-scrollbar">
            {roadmapPhasesData.map((phase) => {
              const isSelected = selectedPhase.id === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-indigo-950/80 border-indigo-500/50 shadow-lg shadow-indigo-950/40"
                      : "bg-slate-900/40 border-white/[0.06] hover:bg-slate-900/80 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                        isSelected
                          ? "bg-gradient-to-tr from-indigo-600 to-teal-500 text-white shadow-md shadow-indigo-500/30"
                          : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      {String(phase.number).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors line-clamp-1 ${
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {phase.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        {phase.estimatedDuration.split("(")[0].trim()}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-teal-400 translate-x-0.5" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-500/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Info */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-bold">
                    Phase {String(selectedPhase.number).padStart(2, "0")} of 13
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3 text-teal-400" />
                    <span>{selectedPhase.estimatedDuration}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedPhase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedPhase.tagline}
                </p>
              </div>

              {/* The 4 Core Questions Grid Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400">1. What to Do</span>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{selectedPhase.what}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">2. Why It Matters</span>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{selectedPhase.why}</p>
                </div>
              </div>

              {/* Step-by-Step Preview */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Action Steps Preview
                </h4>
                <ul className="space-y-2">
                  {selectedPhase.how.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white font-medium">{item.step}:</strong> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Pitfall Alert */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25 text-amber-200/90 text-xs leading-relaxed">
                <span className="font-semibold text-amber-300 block mb-0.5">Frequent Mistake in this Phase:</span>
                <span>{selectedPhase.commonMistakes[0]}</span>
              </div>

              {/* CTA Navigation to Detailed Roadmap Page */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
                <Link
                  href={`/roadmap#${selectedPhase.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-semibold text-xs transition-all shadow-md group"
                >
                  <span>Explore Phase {String(selectedPhase.number).padStart(2, "0")} Full Instructions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/roadmap"
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  View complete 13 phases &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
