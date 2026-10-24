"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClipboardCheck, ArrowRight, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { preflightChecklistData } from "@/data/faqsSectionData";
import { faqsPageData } from "@/data/pagesData";

export function InteractivePreflightChecklist() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    "preflight-0": true,
    "preflight-1": true
  });

  const sectionMeta = faqsPageData.sections[2];

  const toggle = (idx: number) => {
    const key = `preflight-${idx}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const completed = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completed / preflightChecklistData.length) * 100);

  return (
    <section id="readiness-checklist" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Pre-Flight Audit"}
          badgeVariant="emerald"
          badgeIcon={<ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Pre-Flight Application Readiness Checklist"}
          subtitle={sectionMeta?.subtitle || "Audit these 5 mandatory criteria before submitting your final applications on December priority deadlines."}
        />

        <GlassCard borderGlow="emerald" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Pre-Flight Audit</span>
              <div className="text-2xl font-heading font-bold text-white font-mono mt-0.5">
                {completed} of {preflightChecklistData.length} Verified
              </div>
            </div>
            <div className="text-right">
              <Badge variant={completed === preflightChecklistData.length ? "emerald" : "amber"} size="md">
                {completed === preflightChecklistData.length ? "Ready for Submission" : `${progressPercent}% Complete`}
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>Readiness Progress</span>
              <span className="font-bold text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#090d16] h-2.5 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {preflightChecklistData.map((item, idx) => {
              const isChecked = !!checkedItems[`preflight-${idx}`];
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx)}
                  className={`p-4 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                    isChecked
                      ? "bg-emerald-950/20 border-emerald-500/40 text-slate-200"
                      : "bg-[#090d16] border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="mt-0.5 h-4 w-4 rounded border-white/20 text-emerald-500 focus:ring-0 cursor-pointer"
                  />
                  <span className={`leading-relaxed ${isChecked ? "font-semibold text-white" : ""}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-400">
              Need to review the complete application timeline?
            </span>
            <Link
              href="/roadmap"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-md shadow-emerald-600/30 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to Phase 0 in Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
