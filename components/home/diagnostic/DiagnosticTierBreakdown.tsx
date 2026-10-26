import React from "react";
import { Target, CheckCircle2, GraduationCap } from "lucide-react";

export interface DiagnosticTierBreakdownProps {
  reach: string;
  target: string;
  safe: string;
}

/**
 * Lab tier breakdown list: Reach, Target, and Solid Foundation Labs sub-component.
 */
export function DiagnosticTierBreakdown({
  reach,
  target,
  safe,
}: DiagnosticTierBreakdownProps) {
  return (
    <div className="space-y-4 mb-6 text-xs">
      <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
        <div className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1 font-heading">
          <Target className="w-3.5 h-3.5 text-indigo-400" />
          Reach Tier Labs:
        </div>
        <p className="text-slate-300 leading-relaxed">{reach}</p>
      </div>

      <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
        <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1 font-heading">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          Target Tier Labs:
        </div>
        <p className="text-slate-300 leading-relaxed">{target}</p>
      </div>

      <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
        <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1 font-heading">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
          Solid Foundation Labs:
        </div>
        <p className="text-slate-300 leading-relaxed">{safe}</p>
      </div>
    </div>
  );
}

export default DiagnosticTierBreakdown;
