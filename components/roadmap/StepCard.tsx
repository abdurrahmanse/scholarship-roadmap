"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Check
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { RoadmapStep } from "@/data/types";

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

  const progressPercent = step.checklist.length > 0
    ? Math.round((completedCount / step.checklist.length) * 100)
    : 0;

  const priorityVariants = {
    Crucial: "rose" as const,
    Recommended: "amber" as const,
    Optional: "slate" as const
  };

  return (
    <GlassCard
      borderGlow="indigo"
      className="p-6 sm:p-7 transition-all duration-200 bg-[#0f1422]/90 border border-white/10 hover:border-indigo-500/30"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60">
              STEP {step.stepNumber}
            </span>
            <Badge variant={priorityVariants[step.priority] || "slate"} size="sm">
              {step.priority} Priority
            </Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {step.duration}
            </span>
          </div>
          <h3 className="text-xl font-heading font-bold text-white tracking-tight">
            {step.title}
          </h3>
          <div className="text-xs text-indigo-300 mt-0.5 font-medium">
            {step.subtitle}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-center p-2 rounded-xl bg-[#090d16] hover:bg-slate-800 text-slate-400 border border-white/10 text-xs flex items-center gap-1 transition-all cursor-pointer"
        >
          <span>{isExpanded ? "Collapse" : "Expand"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
        {step.keyObjective}
      </p>

      {/* Task Progress Bar & Counter */}
      <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 mb-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
            Step Deliverable Progress:
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-300">
              {completedCount} of {step.checklist.length} Tasks
            </span>
            {progressPercent === 100 ? (
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" />
                Done!
              </span>
            ) : (
              <span className="font-mono text-[11px] font-bold text-cyan-400">
                {progressPercent}%
              </span>
            )}
          </div>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-white/5">
          {/* Interactive Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Actionable Tasks Checklist:
              </span>
              <span className="text-[11px] text-slate-500">
                Click any task to check off
              </span>
            </div>

            <div className="space-y-2">
              {step.checklist.map((item, idx) => {
                const isChecked = !!completedItems[`${step.id}-${idx}`];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                      isChecked
                        ? "bg-emerald-950/25 border-emerald-500/40 text-slate-200 line-through opacity-85"
                        : "bg-[#090d16] border-white/5 text-slate-300 hover:border-white/15"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 text-emerald-500 focus:ring-0 cursor-pointer"
                    />
                    <div>
                      <span className="font-semibold text-white mr-1.5">{item.task}:</span>
                      <span className="leading-relaxed text-slate-400">{item.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pro Tips Box */}
          {step.proTips && step.proTips.length > 0 && (
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 space-y-1.5">
              <div className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Pro Tip / Insider Secret:
              </div>
              {step.proTips.map((tip, i) => (
                <p key={i} className="text-xs text-indigo-100/90 leading-relaxed">
                  {tip}
                </p>
              ))}
            </div>
          )}

          {/* Key Deliverable */}
          <div className="flex items-center justify-between pt-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <FileCheck className="w-4 h-4" />
              <span>Deliverable:</span>
              <span className="text-white font-mono bg-[#090d16] px-2 py-0.5 rounded border border-white/10">
                {step.deliverable}
              </span>
            </div>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
