"use client";

import React, { useState } from "react";
import {
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Check,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Award,
  Layers,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { RoadmapStep } from "@/data/types";
import { StepMathDiagnosticWidget } from "./widgets/StepMathDiagnosticWidget";
import { StepSystemsCodeWidget } from "./widgets/StepSystemsCodeWidget";
import { StepDecisionMatrixWidget } from "./widgets/StepDecisionMatrixWidget";

interface StepCardProps {
  step: RoadmapStep;
}

export function StepCard({ step }: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (idx: number) => {
    const key = `${step.id}-${idx}`;
    setCompletedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const completedCount = step.checklist.filter(
    (_, idx) => !!completedItems[`${step.id}-${idx}`]
  ).length;

  const progressPercent =
    step.checklist.length > 0
      ? Math.round((completedCount / step.checklist.length) * 100)
      : 0;

  const priorityVariants = {
    Crucial: "rose" as const,
    Recommended: "amber" as const,
    Optional: "slate" as const
  };

  return (
    <GlassCard
      borderGlow={step.stepNumber.startsWith("0.1") ? "indigo" : step.stepNumber.startsWith("0.2") ? "cyan" : "emerald"}
      className="p-6 sm:p-8 transition-all duration-300 bg-[#0f1422]/95 border border-white/10 hover:border-white/20 shadow-2xl relative overflow-hidden group"
    >
      {/* Top ambient color sheen */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          step.stepNumber === "0.1"
            ? "from-indigo-500 via-purple-500 to-pink-500"
            : step.stepNumber === "0.2"
            ? "from-cyan-500 via-blue-500 to-indigo-500"
            : "from-emerald-500 via-teal-500 to-cyan-500"
        }`}
      />

      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-indigo-950/90 text-indigo-300 border border-indigo-700/60 shadow-sm shadow-indigo-950 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              STEP {step.stepNumber}
            </span>

            <Badge variant={priorityVariants[step.priority] || "slate"} size="sm">
              {step.priority} Priority
            </Badge>

            <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono px-2.5 py-0.5 rounded-md bg-[#090d16] border border-white/5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {step.duration}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight pt-1">
            {step.title}
          </h3>

          <div className="text-xs sm:text-sm text-indigo-300 font-medium">
            {step.subtitle}
          </div>
        </div>

        {/* Expand / Collapse Control */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-center px-3.5 py-2 rounded-xl bg-[#090d16] hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-md"
        >
          <span>{isExpanded ? "Collapse View" : "Expand Deep-Dive"}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>

      {/* Key Objective Highlight Banner */}
      <div className="p-4 rounded-xl bg-[#090d16] border-l-4 border-l-indigo-500 border-r border-t border-b border-white/5 mb-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 mb-1">
          Executive Admissions Objective
        </div>
        <p className="font-sans text-slate-200">{step.keyObjective}</p>
      </div>

      {/* Task Completion Progress & Status Bar */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-white/10 mb-5 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
              Step Milestone Completion:
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-300">
              {completedCount} of {step.checklist.length} Complete
            </span>
            {progressPercent === 100 ? (
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Check className="w-3 h-3 text-emerald-400" />
                Step Certified!
              </span>
            ) : (
              <span className="font-mono text-[11px] font-bold text-cyan-400">
                {progressPercent}%
              </span>
            )}
          </div>
        </div>

        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-white/5 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 transition-all duration-500 ease-out rounded-full shadow-lg"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Contextual Creative Widgets for Steps 0.1, 0.2, 0.3 */}
      {step.stepNumber === "0.1" && <StepMathDiagnosticWidget />}
      {step.stepNumber === "0.2" && <StepSystemsCodeWidget />}
      {step.stepNumber === "0.3" && <StepDecisionMatrixWidget />}

      {/* Optional Generic Code Snippet (if step has one and is not 0.2) */}
      {step.stepNumber !== "0.2" && step.codeSnippet && (
        <div className="my-5 rounded-xl border border-white/10 bg-[#060910] overflow-hidden">
          <div className="px-4 py-2 bg-[#0f1422] border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300">
              {step.codeSnippet.caption}
            </span>
            <span className="text-[10px] font-mono text-indigo-400 uppercase">
              {step.codeSnippet.language}
            </span>
          </div>
          <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300">
            <pre>
              <code>{step.codeSnippet.code}</code>
            </pre>
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="space-y-6 pt-5 border-t border-white/5">
          {/* Detailed Academic Description */}
          {step.description && (
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#090d16]/60 p-4 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                Context & Academic Expectations:
              </span>
              <p>{step.description}</p>
            </div>
          )}

          {/* Interactive Actionable Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Actionable Tasks Checklist:
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Click any task to mark completed
              </span>
            </div>

            <div className="space-y-2.5">
              {step.checklist.map((item, idx) => {
                const isChecked = !!completedItems[`${step.id}-${idx}`];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                      isChecked
                        ? "bg-emerald-950/25 border-emerald-500/40 text-slate-200 line-through opacity-85 shadow-sm"
                        : "bg-[#090d16] border-white/5 text-slate-300 hover:border-white/20 hover:bg-[#0c111e]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 h-4 w-4 rounded border-white/20 text-emerald-500 focus:ring-0 cursor-pointer shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-bold text-white mb-0.5 text-xs sm:text-sm">
                        {item.task}
                      </div>
                      <div className="leading-relaxed text-slate-400 text-xs">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Faculty Intel: Pro-Tips vs. Rejection Traps (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pro Tips Box */}
            {step.proTips && step.proTips.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <div className="text-xs font-bold text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Faculty Pro-Tips & Insider Secrets:</span>
                </div>
                <div className="space-y-2">
                  {step.proTips.map((tip, i) => (
                    <p
                      key={i}
                      className="text-xs text-emerald-100/90 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-emerald-400 shrink-0 font-bold">•</span>
                      <span>{tip}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Rejection Pitfalls Box */}
            {step.commonPitfalls && step.commonPitfalls.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="text-xs font-bold text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Fatal Rejection Traps To Avoid:</span>
                </div>
                <div className="space-y-2">
                  {step.commonPitfalls.map((pitfall, i) => (
                    <p
                      key={i}
                      className="text-xs text-rose-100/90 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-rose-400 shrink-0 font-bold">•</span>
                      <span>{pitfall}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tangible Proof-of-Work Deliverable Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#090d16] via-[#0f1422] to-[#090d16] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  Tangible Proof-of-Work Requirement
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {step.deliverable}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-700/40 shrink-0 self-start sm:self-center flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" />
              Required for Level Advance
            </span>
          </div>

          {/* Curated Literature & Official Guides */}
          {step.resources && step.resources.length > 0 && (
            <div className="pt-2">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Recommended Literature & Official Documentation:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {step.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#090d16] border border-white/5 hover:border-indigo-500/40 transition-all flex items-start justify-between gap-3 group/link"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                          {resource.type}
                        </span>
                        <span className="text-xs font-semibold text-white group-hover/link:text-indigo-300 transition-colors truncate">
                          {resource.title}
                        </span>
                      </div>
                      {resource.description && (
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {resource.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-indigo-400 shrink-0 mt-1 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
