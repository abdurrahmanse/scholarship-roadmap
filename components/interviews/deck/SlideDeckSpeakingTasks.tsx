import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface SlideDeckSpeakingTasksProps {
  keyPoints: string[];
}

/**
 * Core scientific talking points to deliver checklist sub-component.
 */
export function SlideDeckSpeakingTasks({
  keyPoints,
}: SlideDeckSpeakingTasksProps) {
  return (
    <div className="mb-6">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
        Core Scientific Talking Points to Deliver:
      </span>
      <div className="space-y-2">
        {keyPoints.map((pt, i) => (
          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{pt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideDeckSpeakingTasks;
