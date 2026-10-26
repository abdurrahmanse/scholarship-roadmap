"use client";

import React, { useState } from "react";
import {
  Server,
  Activity,
  Zap,
  Compass,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ShieldCheck
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { InterviewDefenseCase } from "@/data/types";

interface StarlCaseCardProps {
  defenseCase: InterviewDefenseCase;
  isExpanded: boolean;
  onToggle: () => void;
}

export function StarlCaseCard({ defenseCase, isExpanded, onToggle }: StarlCaseCardProps) {
  const [copied, setCopied] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Systems & Memory":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "Model Training & Convergence":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "Inference & Optimization":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Theory & Foundations":
        return <Compass className="w-5 h-5 text-purple-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(
      `[STAR-L DEFENSE]\nChallenge: ${defenseCase.technicalChallenge}\nContext: ${defenseCase.context}\nTask: ${defenseCase.task}\nAction: ${defenseCase.actionTaken}\nResult: ${defenseCase.quantitativeResult}\nInsight: ${defenseCase.researchInsight}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GlassCard borderGlow="none" className="p-0 overflow-hidden shadow-xl bg-[#0f1422] border border-white/10">
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#090d16] border border-white/10 shrink-0">
            {getCategoryIcon(defenseCase.category)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <Badge variant="cyan" size="sm">
                {defenseCase.category}
              </Badge>
              <span className="text-xs text-slate-500 font-mono">
                {defenseCase.id}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors font-heading">
              {defenseCase.technicalChallenge}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
          <span className="text-xs text-slate-400 hidden sm:inline">
            {isExpanded ? "Collapse" : "Expand STAR-L"}
          </span>
          {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 pt-2 border-t border-white/10 bg-[#090d16]/70 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1 font-mono">
                Situation & Context
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{defenseCase.context}</p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1 font-mono">
                Engineering Task & Goal
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{defenseCase.task}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1 font-mono">
              Action Taken (Mathematical & Code Weaponry)
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-mono">
              {defenseCase.actionTaken}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Quantitative Result
              </span>
              <p className="text-xs text-emerald-200 leading-relaxed font-semibold">
                {defenseCase.quantitativeResult}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                Scientific Insight (Learning)
              </span>
              <p className="text-xs text-purple-200 leading-relaxed">
                {defenseCase.researchInsight}
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              onClick={handleCopy}
              variant={copied ? "emerald" : "secondary"}
              size="xs"
              leftIcon={copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            >
              {copied ? "Copied Script!" : "Copy STAR-L Script"}
            </Button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
