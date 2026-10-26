import React from "react";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface DiagnosticScoreHeaderProps {
  score: number;
}

/**
 * Calculated readiness score display sub-component.
 */
export function DiagnosticScoreHeader({ score }: DiagnosticScoreHeaderProps) {
  const badgeVariant = score >= 85 ? "emerald" : score >= 70 ? "cyan" : "amber";
  const badgeLabel =
    score >= 85
      ? "Top Tier Competitive"
      : score >= 70
      ? "Solid Candidate"
      : "Build Focus Required";

  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
      <div>
        <span className="text-xs uppercase font-bold tracking-wider text-slate-400 font-mono">
          Calculated Readiness
        </span>
        <div className="text-3xl font-black text-white font-mono flex items-center gap-2 mt-1">
          <span>{score}</span>
          <span className="text-sm font-normal text-slate-500">/ 100</span>
          <Badge variant={badgeVariant} size="sm">
            {badgeLabel}
          </Badge>
        </div>
      </div>
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
        <TrendingUp className="w-7 h-7" />
      </div>
    </div>
  );
}

export default DiagnosticScoreHeader;
