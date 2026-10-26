"use client";

import React, { useState } from "react";
import { documentsData } from "@/data/documentsData";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  ChevronDown,
  ChevronUp,
  FileText
} from "lucide-react";

export function DocumentsGuideView() {
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({
    "academic-cv": true,
    "statement-of-purpose": true,
    "research-proposal": true
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleDoc = (id: string) => {
    setExpandedDocs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    documentsData.forEach((d) => {
      allExp[d.id] = true;
    });
    setExpandedDocs(allExp);
  };

  const collapseAll = () => {
    setExpandedDocs({});
  };

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const filteredDocs = documentsData.filter((doc) => {
    if (filterLevel !== "All" && doc.degreeLevel !== filterLevel) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inName = doc.name.toLowerCase().includes(q);
      const inWhat = doc.what.toLowerCase().includes(q);
      const inWhy = doc.why.toLowerCase().includes(q);
      return inName || inWhat || inWhy;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Control Bar: Degree category filter, search, expand controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Level Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5 text-xs">
            {["All", "Universal", "Master's Heavy", "PhD / Research Master's"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  filterLevel === lvl
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {lvl} {lvl === "All" ? `(${documentsData.length})` : ""}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search documents (e.g. CV, SOP, Proposal, LORs, GRE)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Expand Actions */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Document Dossier List */}
      <div className="space-y-8">
        {filteredDocs.map((doc) => {
          const isExpanded = !!expandedDocs[doc.id];
          const checkedCount = doc.checklistItems.filter((c) => checkedItems[c.id]).length;

          return (
            <article
              key={doc.id}
              id={doc.id}
              className="rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-white/15 transition-all duration-200 shadow-xl overflow-hidden scroll-mt-28"
            >
              {/* Document Header Bar */}
              <div
                onClick={() => toggleDoc(doc.id)}
                className="p-5 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {doc.badge}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Scope: {doc.degreeLevel}
                    </span>
                    {checkedCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                        {checkedCount}/{doc.checklistItems.length} verified
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {doc.name}
                  </h2>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                  <button
                    className="p-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    aria-label="Toggle document guide"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-5 sm:p-8 space-y-8 animate-in fade-in duration-200">
                  {/* WHAT & WHY Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
                        <FileText className="w-4 h-4" />
                        <span>What It Is</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {doc.what}
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
                        <Lightbulb className="w-4 h-4" />
                        <span>Why It Matters</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {doc.why}
                      </p>
                    </div>
                  </div>

                  {/* Structural Architecture / Paragraph Guidance */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-teal-400" />
                      <span>Recommended Structural Architecture</span>
                    </h3>
                    <div className="space-y-3">
                      {doc.structure.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-1"
                        >
                          <h4 className="text-xs sm:text-sm font-semibold text-white">
                            {item.section}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed font-sans">
                            {item.guidance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Pitfalls & Traps Alert */}
                  <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-500/25 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Common Mistakes & Disqualification Traps</span>
                    </div>
                    <ul className="space-y-1.5">
                      {doc.commonMistakes.map((mistake, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-xs text-amber-200/90">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Official Checks & Formatting Guidelines */}
                  <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5 space-y-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Formatting & Official Portal Checks
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.officialChecks.map((chk, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-teal-400">✓</span>
                          <span>{chk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Client-Side Document Readiness Checklist */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                        <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                          {doc.name} Readiness Checklist (Client-Side Only)
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {checkedCount}/{doc.checklistItems.length} verified
                      </span>
                    </div>
                    <div className="space-y-2">
                      {doc.checklistItems.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                          <label
                            key={item.id}
                            onClick={() => toggleCheck(item.id)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg border transition-colors cursor-pointer ${
                              isChecked
                                ? "bg-emerald-950/30 border-emerald-500/30 text-white"
                                : "bg-slate-900/40 border-white/5 text-slate-300 hover:bg-slate-900"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="mt-0.5 rounded border-white/20 bg-slate-950 text-teal-500 focus:ring-0 cursor-pointer"
                            />
                            <div className="text-xs">
                              <span className={isChecked ? "line-through text-slate-400" : ""}>
                                {item.label}
                              </span>
                              {item.tip && (
                                <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
                                  Tip: {item.tip}
                                </span>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
