import React from "react";
import { Layers } from "lucide-react";

export function LevelsHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-3">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
        <Layers className="w-3.5 h-3.5 text-indigo-400" />
        <span>5-Level Career Ladder</span>
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
        The 5 Distinct Levels to Fully Funded Graduate Admission
      </h2>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        A structured modular curriculum dividing the 24-month admissions
        campaign into 5 manageable levels. Click any level to access its
        actionable tasks, checklists, code snippets, and deliverables.
      </p>
    </div>
  );
}

export default LevelsHeader;
