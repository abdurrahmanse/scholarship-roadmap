"use client";

import React, { useState } from "react";
import {
  GitFork,
  DollarSign,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { degreeRoutesData, decisionMatrixMeta } from "@/data/stepWidgetsData";

export function StepDecisionMatrixWidget() {
  const [selectedRouteId, setSelectedRouteId] = useState("phd");
  const selectedRoute =
    degreeRoutesData.find((r) => r.id === selectedRouteId) || degreeRoutesData[0];

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-emerald-500/30 shadow-2xl relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
              {decisionMatrixMeta.stepBadge}
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              {decisionMatrixMeta.title}
            </h4>
          </div>
        </div>
        <Badge variant="emerald" size="sm">
          {decisionMatrixMeta.headerBadge}
        </Badge>
      </div>

      {/* Route Switcher Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 relative z-10">
        {degreeRoutesData.map((route) => {
          const isSelected = selectedRouteId === route.id;
          return (
            <button
              key={route.id}
              onClick={() => setSelectedRouteId(route.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                isSelected
                  ? route.id === "taught-ms"
                    ? "bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/60"
                    : route.id === "thesis-ms"
                    ? "bg-cyan-950/40 border-cyan-500/60 shadow-lg shadow-cyan-950/60"
                    : "bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/60"
                  : "bg-[#0f1422] border-white/5 hover:border-white/15 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {route.shortLabel}
                </span>
                <Badge variant={route.badgeVariant} size="sm">
                  {route.tag}
                </Badge>
              </div>
              <h5 className="text-xs sm:text-sm font-heading font-bold text-white leading-tight">
                {route.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Selected Route Detailed Breakdown Card */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#0f1422] border border-white/10 relative z-10 space-y-5">
        {/* Route Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={selectedRoute.badgeVariant} size="sm">
                {selectedRoute.tag}
              </Badge>
              <span className="text-xs font-mono text-slate-400">
                Timeline: {selectedRoute.timeline}
              </span>
            </div>
            <h4 className="text-lg font-heading font-bold text-white">
              {selectedRoute.title}
            </h4>
          </div>

          <div className="p-3 rounded-xl bg-[#090d16] border border-white/10 text-right">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              {decisionMatrixMeta.netFinancialBalanceLabel}
            </span>
            <span
              className={`text-sm sm:text-base font-mono font-bold ${
                selectedRoute.id === "taught-ms" ? "text-rose-400" : "text-emerald-400"
              }`}
            >
              {selectedRoute.financialOutcome}
            </span>
          </div>
        </div>

        {/* Financial & Operational Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-emerald-400" />
              {decisionMatrixMeta.stipendLabel}
            </div>
            <div className="text-xs font-bold text-slate-200">
              {selectedRoute.stipendAmount}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <GraduationCap className="w-3 h-3 text-cyan-400" />
              {decisionMatrixMeta.tuitionLabel}
            </div>
            <div className="text-xs font-bold text-slate-200">
              {selectedRoute.tuitionStatus}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-indigo-400" />
              {decisionMatrixMeta.undergradLabel}
            </div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {decisionMatrixMeta.undergradEligibleText}
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#090d16] border border-white/5">
            <div className="text-[10px] font-mono text-slate-400 uppercase mb-1 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-400" />
              {decisionMatrixMeta.masterOutLabel}
            </div>
            <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
              {selectedRoute.masterOutOption ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {decisionMatrixMeta.masterOutAvailableText}
                </span>
              ) : (
                <span className="text-slate-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-slate-500" />
                  {decisionMatrixMeta.masterOutNotAvailableText}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Verdict & Faculty Priority Box */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/5 text-xs text-slate-300">
            <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              {decisionMatrixMeta.evaluationHeader}
            </div>
            <p className="leading-relaxed text-slate-300 font-sans">
              {selectedRoute.verdict}
            </p>
          </div>

          {selectedRoute.id === "phd" && (
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>{decisionMatrixMeta.secretMasterOutCallout.title}</strong>
                {decisionMatrixMeta.secretMasterOutCallout.desc}
              </p>
            </div>
          )}

          {selectedRoute.id === "taught-ms" && (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs text-rose-200 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>{decisionMatrixMeta.debtTrapWarningCallout.title}</strong>
                {decisionMatrixMeta.debtTrapWarningCallout.desc}
              </p>
            </div>
          )}
        </div>

        {/* Target Institutions Pills */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {decisionMatrixMeta.globalHubsLabel}
          </span>
          {selectedRoute.targetRegions.map((region, i) => (
            <span
              key={i}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#090d16] text-slate-200 border border-white/10"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Summary Actionable Advice */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#0f1422] border border-white/5 flex items-center justify-between text-xs text-slate-400">
        <span className="text-slate-300 font-medium">
          {decisionMatrixMeta.decisionRuleFooter.rule}
        </span>
        <span className="font-mono text-cyan-400 flex items-center gap-1 font-semibold">
          {decisionMatrixMeta.decisionRuleFooter.badge} <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
