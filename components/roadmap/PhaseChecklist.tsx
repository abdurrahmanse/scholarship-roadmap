"use client";

import React from "react";
import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { PhaseChecklistItem, roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseChecklistProps {
  checklist: PhaseChecklistItem[];
  checkedItems: Record<string, boolean>;
  onToggleItem: (id: string) => void;
}

export function PhaseChecklist({ checklist, checkedItems, onToggleItem }: PhaseChecklistProps) {
  const { checklistHeading } = roadmapControlsData.cardLabels;
  const completedCount = checklist.filter((item) => checkedItems[item.id]).length;

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-white/5 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
          <ClipboardCheck className="w-3.5 h-3.5" />
          <span>{checklistHeading}</span>
        </h4>
        <span className="text-[11px] font-mono text-slate-400">
          {completedCount} of {checklist.length} verified
        </span>
      </div>

      <div className="space-y-2">
        {checklist.map((item) => {
          const isChecked = Boolean(checkedItems[item.id]);
          return (
            <label
              key={item.id}
              onClick={() => onToggleItem(item.id)}
              className={`flex items-start gap-3 p-2.5 rounded-lg border transition-all cursor-pointer select-none ${
                isChecked
                  ? "bg-teal-950/40 border-teal-500/40 text-teal-200"
                  : "bg-slate-900/40 border-white/5 text-slate-300 hover:border-white/15"
              }`}
            >
              <div
                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                  isChecked
                    ? "bg-teal-500 text-slate-950 shadow-sm"
                    : "border border-slate-600 hover:border-slate-400"
                }`}
              >
                {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>
              <div className="text-xs space-y-0.5">
                <span className={isChecked ? "line-through text-slate-400 font-normal" : "font-normal"}>
                  {item.label}
                </span>
                {item.tip && <p className="text-[11px] text-slate-500 font-mono">{item.tip}</p>}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default PhaseChecklist;
