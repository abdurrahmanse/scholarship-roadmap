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
    <GlassCard borderGlow="none" className="p-0 overflow-hidden shadow-xl">
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-850/60 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 shrink-0">
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
            <h3 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors">
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
        <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Situation & Context
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{defenseCase.context}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Engineering Task & Goal
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{defenseCase.task}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
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
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Script!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy STAR-L Script</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
