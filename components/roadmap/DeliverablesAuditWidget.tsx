"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliverableAuditData } from "@/data/roadmapSectionData";
import { roadmapPageData } from "@/data/pagesData";

export function DeliverablesAuditWidget() {
  const [checkedAudit, setCheckedAudit] = useState<{ [key: string]: boolean }>({
    "item-0": true,
    "item-1": true
  });

  const sectionMeta = roadmapPageData.sections[3];

  const toggleAudit = (idx: number) => {
    const key = `item-${idx}`;
    setCheckedAudit((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const count = Object.values(checkedAudit).filter(Boolean).length;
  const progressPercent = Math.round((count / deliverableAuditData.length) * 100);

  return (
    <section id="deliverables-audit" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Pre-Submission Audit"}
          badgeVariant="emerald"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Mandatory Application Deliverables Audit"}
          subtitle={sectionMeta?.subtitle || "Before paying university application fees or locking deadlines, verify that all core research assets have been assembled."}
        />

        <GlassCard borderGlow="emerald" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400">Readiness Progress</span>
              <div className="text-2xl font-heading font-bold text-white font-mono mt-0.5">
                {count} of {deliverableAuditData.length} Deliverables Locked
              </div>
            </div>
            <div className="text-right">
              <Badge variant={count === deliverableAuditData.length ? "emerald" : "amber"} size="md">
                {count === deliverableAuditData.length ? "Dossier 100% Ready" : `${progressPercent}% Locked`}
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>Audit Completion</span>
              <span className="font-bold text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#090d16] h-2 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {deliverableAuditData.map((item, idx) => {
              const isChecked = !!checkedAudit[`item-${idx}`];
              return (
                <div
                  key={item.title}
                  onClick={() => toggleAudit(idx)}
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
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isChecked ? "text-white" : "text-slate-300"}`}>
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{item.phase}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need copy-ready templates to accelerate your deliverables?
            </span>
            <Link
              href="/toolkit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Application Toolkit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
