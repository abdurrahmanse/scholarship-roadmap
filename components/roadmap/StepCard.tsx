"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileCheck
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

  const priorityVariants = {
    Crucial: "rose" as const,
    Recommended: "amber" as const,
    Optional: "slate" as const
  };

  return (
    <GlassCard
      borderGlow="indigo"
      className="p-6 sm:p-7 transition-all duration-200"
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
          <h3 className="text-xl font-bold text-white tracking-tight">
            {step.title}
          </h3>
          <div className="text-xs text-indigo-300 mt-0.5 font-medium">
            {step.subtitle}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="self-start sm:self-center p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-400 border border-slate-700 text-xs flex items-center gap-1 transition-all"
        >
          <span>{isExpanded ? "Collapse" : "Expand"}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
        {step.keyObjective}
      </p>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-slate-800/80">
          {/* Interactive Checklist */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Actionable Tasks Checklist:
              </span>
              <span className="text-xs font-mono text-emerald-400">
                {completedCount} of {step.checklist.length} Done
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
                        ? "bg-emerald-950/20 border-emerald-800/40 text-slate-200 line-through opacity-75"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 text-emerald-500 focus:ring-0"
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
              <span className="text-white font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {step.deliverable}
              </span>
            </div>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
