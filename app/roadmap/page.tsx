import React from "react";
import type { Metadata } from "next";
import { CompleteRoadmapView } from "@/components/roadmap/CompleteRoadmapView";
import { roadmapMetadata } from "@/data/metadata";
import { Compass, CheckCircle2, ShieldCheck, Globe2 } from "lucide-react";

export const metadata: Metadata = roadmapMetadata;

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>Complete 13-Phase Pipeline</span>
            <span className="text-slate-600">|</span>
            <span className="text-teal-400">100% Free Educational Roadmap</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Complete Scholarship Application Roadmap
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A comprehensive, battle-tested 13-phase sequence guiding you from auditing your academic profile through country selection, professor outreach, document drafting, portal submissions, and funding offer evaluation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              <span>WHAT, WHY, HOW, WHERE Structure</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Master&apos;s & PhD Pathways</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Verified Official Portals</span>
            </span>
          </div>
        </div>

        {/* Interactive 13-Phase Vertical Timeline View */}
        <CompleteRoadmapView />
      </div>
    </main>
  );
}
