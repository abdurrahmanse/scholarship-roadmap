"use client";

import React, { useState } from "react";
import { roadmapPhasesData } from "@/data/roadmapPhasesData";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Award,
  Search
} from "lucide-react";

export function CompleteRoadmapView() {
  const [filterDegree, setFilterDegree] = useState<"all" | "masters" | "phd">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "phase-01": true,
    "phase-02": true
  });
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Toggle individual phase expansion
  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  // Expand or collapse all phases
  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    roadmapPhasesData.forEach((p) => {
      allExpanded[p.id] = true;
    });
    setExpandedPhases(allExpanded);
  };

  const collapseAll = () => {
    setExpandedPhases({});
  };

  // Toggle client-side interactive checklist items
  const toggleChecklist = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Filter phases by degree and search
  const filteredPhases = roadmapPhasesData.filter((phase) => {
    if (filterDegree === "masters" && phase.degreeScope === "phd") return false;
    if (filterDegree === "phd" && phase.degreeScope === "masters") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = phase.title.toLowerCase().includes(q);
      const inTagline = phase.tagline.toLowerCase().includes(q);
      const inWhat = phase.what.toLowerCase().includes(q);
      const inHow = phase.how.some((h) => h.step.toLowerCase().includes(q) || h.detail.toLowerCase().includes(q));
      return inTitle || inTagline || inWhat || inHow;
    }
    return true;
  });

  // Calculate completed checklist count
  const totalChecklistItems = roadmapPhasesData.reduce(
    (acc, phase) => acc + phase.checklist.length,
    0
  );
  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedChecklistCount / totalChecklistItems) * 100);

  return (
    <div className="space-y-8">
      {/* Control Bar: Filter by Degree, Search & Expand Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl sticky top-20 z-30 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Degree Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5">
            <button
              onClick={() => setFilterDegree("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterDegree === "all"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All 13 Phases
            </button>
            <button
              onClick={() => setFilterDegree("masters")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterDegree === "masters"
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Master&apos;s Focus</span>
            </button>
            <button
              onClick={() => setFilterDegree("phd")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterDegree === "phd"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>PhD Focus</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search phases, topics (e.g. GRE, professor, visa, SOP)..."
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

          {/* Expand/Collapse Actions */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
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

        {/* Client-Side Optional Progress Indicator */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-mono">
              Optional Self-Assessment Progress:
            </span>
            <span className="text-teal-400 font-bold font-mono">
              {completedChecklistCount} / {totalChecklistItems} items verified ({progressPercent}%)
            </span>
          </div>
          <div className="w-full sm:w-48 h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Vertical Connected Timeline Container */}
      <div className="relative border-l-2 border-indigo-900/40 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        {filteredPhases.map((phase) => {
          const isExpanded = !!expandedPhases[phase.id];
          const phaseChecklistCompleted = phase.checklist.filter(
            (c) => checkedItems[c.id]
          ).length;

          return (
            <article
              key={phase.id}
              id={phase.id}
              className="relative scroll-mt-36 group"
            >
              {/* Timeline Numbered Node on the Vertical Line */}
              <div
                onClick={() => togglePhase(phase.id)}
                className={`absolute -left-[37px] sm:-left-[53px] top-4 w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm border-2 cursor-pointer transition-all duration-200 z-10 ${
                  isExpanded
                    ? "bg-gradient-to-tr from-indigo-600 to-teal-500 border-white text-white shadow-lg shadow-indigo-600/30 scale-105"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:border-teal-400 hover:text-white"
                }`}
                title={`Click to expand Phase ${phase.number}`}
              >
                {String(phase.number).padStart(2, "0")}
              </div>

              {/* Phase Card */}
              <div className="rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-white/15 transition-all duration-200 shadow-xl overflow-hidden">
                {/* Phase Header / Clickable Toggle */}
                <div
                  onClick={() => togglePhase(phase.id)}
                  className="p-5 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-teal-400">
                        Phase {String(phase.number).padStart(2, "0")}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                        <Clock className="w-3 h-3 text-indigo-400" />
                        <span>{phase.estimatedDuration}</span>
                      </span>
                      {phaseChecklistCompleted > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          {phaseChecklistCompleted}/{phase.checklist.length} verified
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {phase.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
                      {phase.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                    <button
                      className="p-2 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Collapsible Phase Body */}
                {isExpanded && (
                  <div className="p-5 sm:p-8 space-y-8 animate-in fade-in duration-200">
                    {/* The 4 Mandated Pillars: WHAT, WHY, HOW, WHERE */}

                    {/* Pillar 1 & 2: WHAT to do & WHY it matters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>1. WHAT to do</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {phase.what}
                        </p>
                      </div>

                      <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
                        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
                          <Lightbulb className="w-4 h-4" />
                          <span>2. WHY it matters</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {phase.why}
                        </p>
                      </div>
                    </div>

                    {/* Pillar 3: HOW to do it (Step-by-step instructions) */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                        <span>3. HOW to do it — Step-by-Step Instructions</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {phase.how.map((stepItem, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-slate-950/40 border border-white/[0.04] space-y-1.5"
                          >
                            <span className="text-[10px] font-mono font-semibold text-teal-400">
                              Step {idx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-semibold text-white">
                              {stepItem.step}
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {stepItem.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pillar 4: WHERE to find official information / resources */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                        <span>4. WHERE to find official resources</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {phase.where.map((resource, rIdx) => (
                          <a
                            key={rIdx}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-teal-500/40 hover:bg-slate-950 transition-all duration-150 flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between text-xs font-semibold text-teal-300 group-hover:text-teal-200 mb-1">
                                <span>{resource.name}</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[11px] text-slate-400 leading-relaxed">
                                {resource.description}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 mt-2 block group-hover:text-teal-400">
                              Official External Source &rarr;
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Master's vs PhD Nuance Callouts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-teal-950/15 border border-teal-500/20 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-teal-300 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>Master&apos;s Specific Nuance</span>
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {phase.mastersNuance}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-indigo-950/15 border border-indigo-500/20 space-y-1">
                        <span className="text-[11px] font-mono font-bold text-indigo-300 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          <span>PhD Specific Nuance</span>
                        </span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {phase.phdNuance}
                        </p>
                      </div>
                    </div>

                    {/* Common Pitfalls & Traps Alert */}
                    <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-500/25 space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Common Mistakes in Phase {phase.number}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.commonMistakes.map((mistake, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-2 text-xs text-amber-200/90">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Practical Real-World Example */}
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-white/5 space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Practical Real-World Example
                      </span>
                      <p className="text-xs text-slate-300 italic leading-relaxed">
                        &ldquo;{phase.practicalExample}&rdquo;
                      </p>
                    </div>

                    {/* Interactive Client-Side Phase Readiness Checklist */}
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-white/[0.08] space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-400" />
                          <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                            Phase {phase.number} Readiness Checklist (Client-Side Only)
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {phaseChecklistCompleted}/{phase.checklist.length} verified
                        </span>
                      </div>
                      <div className="space-y-2">
                        {phase.checklist.map((item) => {
                          const isChecked = !!checkedItems[item.id];
                          return (
                            <label
                              key={item.id}
                              onClick={() => toggleChecklist(item.id)}
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

                    {/* Next Phase Pointer Navigation */}
                    <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      {phase.number > 1 ? (
                        <a
                          href={`#phase-${String(phase.number - 1).padStart(2, "0")}`}
                          className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Previous: Phase {String(phase.number - 1).padStart(2, "0")}</span>
                        </a>
                      ) : (
                        <div />
                      )}

                      {phase.number < 13 ? (
                        <a
                          href={`#phase-${String(phase.number + 1).padStart(2, "0")}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white font-semibold transition-all border border-indigo-500/30"
                        >
                          <span>Proceed to {phase.nextStep.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <a
                          href="#phase-01"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-600/30 hover:bg-teal-600/50 text-teal-300 hover:text-white font-semibold transition-all border border-teal-500/30"
                        >
                          <span>Review from Phase 01</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
