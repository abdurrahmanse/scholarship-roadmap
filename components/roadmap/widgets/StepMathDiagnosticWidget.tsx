"use client";

import React, { useState } from "react";
import { Sigma, CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { mathTopicsData, mathDiagnosticMeta } from "@/data/stepWidgetsData";

export function StepMathDiagnosticWidget() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const activeTopic = mathTopicsData[activeTopicIndex] || mathTopicsData[0];

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-indigo-500/30 shadow-2xl relative overflow-hidden">
      {/* Ambient background highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-400">
            <Sigma className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">
              {mathDiagnosticMeta.stepBadge}
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              {mathDiagnosticMeta.title}
            </h4>
          </div>
        </div>
        <Badge variant="indigo" size="sm">
          {mathDiagnosticMeta.headerBadge}
        </Badge>
      </div>

      {/* Domain Selection Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6 relative z-10">
        {mathTopicsData.map((topic, idx) => (
          <button
            key={topic.id}
            onClick={() => setActiveTopicIndex(idx)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              activeTopicIndex === idx
                ? "bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-950/60 font-semibold"
                : "bg-[#0f1422] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10"
            }`}
          >
            <span className="font-mono text-[10px] text-indigo-400 block mb-0.5 font-bold">
              PILLAR 0{idx + 1}
            </span>
            <span className="text-xs font-heading font-bold block truncate">
              {topic.name.split("&")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Domain Deep-Dive Card */}
      <div className="p-5 rounded-xl bg-[#0f1422] border border-white/10 relative z-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              {activeTopic.badge}
            </span>
            <h5 className="text-base font-heading font-bold text-white">
              {activeTopic.name}
            </h5>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Topic {activeTopicIndex + 1} of {mathTopicsData.length}
          </span>
        </div>

        {/* Core Mathematical Concepts Checklist */}
        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            {mathDiagnosticMeta.conceptsHeader}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeTopic.concepts.map((concept, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-[#090d16] border border-white/5 flex items-start gap-2 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-sans">{concept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Proof Challenge */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-700/50">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-bold mb-1.5">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>{mathDiagnosticMeta.proofChallengeHeader}</span>
          </div>
          <p className="text-xs text-slate-200 font-mono italic leading-relaxed">
            &ldquo;{activeTopic.sampleProof}&rdquo;
          </p>
        </div>

        {/* Faculty Expectation Callout */}
        <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-sans">
            <strong className="text-slate-200">{mathDiagnosticMeta.realityHeader}</strong>
            {activeTopic.admissionsExpectation}
          </p>
        </div>
      </div>
    </div>
  );
}
