"use client";

import React from "react";
import Link from "next/link";
import { DollarSign, Award, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  offerFinancialMetricsData,
  cgsResolutionRightsData,
  negotiationChecklistData
} from "@/data/interviewsSectionData";
import { interviewsPageData } from "@/data/pagesData";

export function OfferNegotiationSection() {
  const sectionMeta = interviewsPageData.sections[3];

  return (
    <section id="offer-negotiation" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Financial Strategy"}
          badgeVariant="emerald"
          badgeIcon={<DollarSign className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Graduate Funding Offer Evaluation & Counter-Offer Playbook"}
          subtitle={sectionMeta?.subtitle || "How to evaluate competing offers under the Council of Graduate Schools (CGS) April 15 Resolution, negotiate top-ups, and verify 12-month funding."}
        />

        {/* 4 Key Benchmarks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {offerFinancialMetricsData.map((f) => (
            <GlassCard key={f.label} borderGlow="emerald" className="p-5 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {f.label}
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono block mb-1">
                {f.value}
              </span>
              <span className="text-[11px] text-slate-400">{f.sub}</span>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard borderGlow="none" className="p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              The Council of Graduate Schools (CGS) Resolution Rights
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Over 400 major universities in the United States and Canada subscribe to the CGS April 15 Resolution. Under this agreement:
            </p>
            <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
              {cgsResolutionRightsData.map((right, idx) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard borderGlow="none" className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Respectful Negotiation Checklist
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If your preferred university offers $34,000 while another offers $42,000, you can politely write to your top-choice department chair:
              </p>
              <div className="space-y-2 text-xs text-slate-300 mb-6">
                {negotiationChecklistData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/toolkit#interactive-email-builder"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-center font-semibold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>View Negotiation Email Template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
