import React from "react";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WidgetCallout } from "@/components/roadmap/widgets/common";
import { DiagnosticScoreHeader } from "./DiagnosticScoreHeader";
import { DiagnosticTierBreakdown } from "./DiagnosticTierBreakdown";

export interface DiagnosticAuditResult {
  score: number;
  reach: string;
  target: string;
  safe: string;
  priorityAction: string;
  recommendedPhase: string;
  phaseName: string;
}

export interface DiagnosticScorecardProps {
  audit: DiagnosticAuditResult;
}

/**
 * Diagnostic scorecard results sub-section.
 */
export function DiagnosticScorecard({ audit }: DiagnosticScorecardProps) {
  return (
    <GlassCard borderGlow="emerald" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10 shadow-2xl">
      {/* Score Header */}
      <DiagnosticScoreHeader score={audit.score} />

      {/* Lab Tier Breakdown */}
      <DiagnosticTierBreakdown
        reach={audit.reach}
        target={audit.target}
        safe={audit.safe}
      />

      {/* Priority Action Recommendation */}
      <div className="mb-6">
        <WidgetCallout
          variant="warning"
          title="Immediate High-Leverage Strategic Move:"
          message={audit.priorityAction}
        />
      </div>

      {/* CTA to Roadmap Phase */}
      <Button
        href={audit.recommendedPhase}
        variant="primary"
        size="md"
        className="w-full"
        rightIcon={<ArrowRight className="w-4 h-4" />}
      >
        Jump to {audit.phaseName}
      </Button>
    </GlassCard>
  );
}

export default DiagnosticScorecard;
