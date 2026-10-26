import React from "react";
import type { Metadata } from "next";
import { CompleteRoadmapView } from "@/components/roadmap/CompleteRoadmapView";
import { roadmapMetadata } from "@/data/metadata";
import { CheckCircle2, ShieldCheck, Sparkles, Layers, ListOrdered, Award } from "lucide-react";

export const metadata: Metadata = roadmapMetadata;

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 pb-20">
      {/* Dynamic Ambient Background Glow */}
      <div className="relative overflow-hidden pt-28 pb-14 border-b border-white/[0.08] bg-[#090d16]">
        <div
          className="absolute top-0 inset-x-0 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, rgba(20,184,166,0.1) 45%, transparent 75%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Pill Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs font-mono font-bold shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Full-Ride Admissions Architecture</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Free & Verified Educational Standard</span>
            </span>
          </div>

          {/* Hero Headline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12] font-heading">
              The Complete Master&apos;s & PhD{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
                Scholarship Application Roadmap
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl">
              An exhaustive, battle-tested blueprint bridging technical research capital with procedural admissions execution. Navigate between the <strong className="text-white">13 Sequential Application Phases</strong> and the <strong className="text-white">5 Progressive Career Levels</strong> with dedicated deep-dive pages for every stage.
            </p>
          </div>

          {/* 4 Metric Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-5xl">
            <div className="p-4 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-teal-400 mb-1">
                <ListOrdered className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Sequential Flow
                </span>
              </div>
              <div className="text-2xl font-bold font-heading text-white">
                13 Phases
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Profile audit to visa stamp
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Curriculum Ladder
                </span>
              </div>
              <div className="text-2xl font-bold font-heading text-white">
                5 Levels
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Math rigor to faculty defense
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Granular Checklist
                </span>
              </div>
              <div className="text-2xl font-bold font-heading text-white">
                26 Tasks
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Proof-of-work deliverables
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f1422]/90 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Target Coverage
                </span>
              </div>
              <div className="text-2xl font-bold font-heading text-emerald-400">
                100% Full-Ride
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                Tuition + stipend contracts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Roadmap View (13 Phases + 5 Levels Switcher) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <CompleteRoadmapView />
      </div>
    </main>
  );
}
