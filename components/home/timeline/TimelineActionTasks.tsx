import React from "react";
import { CheckCircle2 } from "lucide-react";

export interface TimelineActionTasksProps {
  actionBullets: string[];
}

/**
 * Key action items / tasks grid for the selected roadmap milestone.
 */
export function TimelineActionTasks({ actionBullets }: TimelineActionTasksProps) {
  return (
    <div className="mb-6">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
        Key Action Items For This Milestone:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actionBullets.map((action, i) => (
          <div
            key={i}
            className="p-3.5 rounded-xl bg-[#090d18]/80 border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineActionTasks;
