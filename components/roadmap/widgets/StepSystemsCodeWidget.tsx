"use client";

import React, { useState } from "react";
import {
  Terminal,
  Copy,
  Check,
  Zap,
  Layers,
  Sparkles,
  Server,
  FileCode,
  Gauge
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import {
  systemsTabsData,
  systemsBenchmarkMetricsData,
  systemsCodeMeta
} from "@/data/stepWidgetsData";

export function StepSystemsCodeWidget() {
  const [activeTabId, setActiveTabId] = useState("ddp");
  const [copied, setCopied] = useState(false);

  const activeTab = systemsTabsData.find((t) => t.id === activeTabId) || systemsTabsData[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-4 h-4" />;
      case "Gauge":
        return <Gauge className="w-4 h-4" />;
      case "Layers":
        return <Layers className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const getMetricVariantStyles = (variant: string) => {
    switch (variant) {
      case "cyan":
        return "bg-cyan-500/10 text-cyan-400";
      case "emerald":
        return "bg-emerald-500/10 text-emerald-400";
      case "purple":
        return "bg-purple-500/10 text-purple-400";
      case "amber":
        return "bg-amber-500/10 text-amber-400";
      default:
        return "bg-slate-500/10 text-slate-400";
    }
  };

  return (
    <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#090d18] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              {systemsCodeMeta.stepBadge}
            </span>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              {systemsCodeMeta.title}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="cyan" size="sm">
            {systemsCodeMeta.headerBadge}
          </Badge>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            {systemsCodeMeta.subBadge}
          </span>
        </div>
      </div>

      {/* Engineering Benchmarks Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5 relative z-10">
        {systemsBenchmarkMetricsData.map((metric) => (
          <div
            key={metric.id}
            className="p-3 rounded-xl bg-[#0f1422] border border-white/5 flex items-center gap-3"
          >
            <div
              className={`p-2 rounded-lg shrink-0 ${getMetricVariantStyles(
                metric.variant
              )}`}
            >
              {getMetricIcon(metric.iconName)}
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                {metric.label}
              </div>
              <div className="text-xs font-bold text-white truncate">
                {metric.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 scrollbar-none relative z-10">
        {systemsTabsData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTabId(tab.id);
              setCopied(false);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
              activeTabId === tab.id
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-950"
                : "bg-[#0f1422] text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code Editor Container */}
      <div className="rounded-xl border border-white/10 bg-[#060910] overflow-hidden relative z-10 shadow-2xl">
        {/* Editor Title Bar */}
        <div className="px-4 py-2.5 bg-[#0f1422] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-300 font-semibold">
              {activeTab.fileName}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#090d16] hover:bg-slate-800 text-slate-300 border border-white/10 text-xs font-mono transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed bg-[#060910]/95">
          <pre className="selection:bg-cyan-900 selection:text-cyan-200">
            <code>{activeTab.code}</code>
          </pre>
        </div>

        {/* Code Sub-footer with Contextual Badges */}
        <div className="px-4 py-2.5 bg-[#0c101d] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <p className="text-slate-400 text-[11px] leading-tight">
            {activeTab.description}
          </p>
          <div className="flex items-center gap-1.5">
            {activeTab.highlights.map((h, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Systems Engineering Standard Callout */}
      <div className="mt-4 p-3.5 rounded-xl bg-[#0f1422] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300 relative z-10">
        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-white">
            {systemsCodeMeta.facultyCallout.title}
          </strong>
          {systemsCodeMeta.facultyCallout.desc}
        </p>
      </div>
    </div>
  );
}
