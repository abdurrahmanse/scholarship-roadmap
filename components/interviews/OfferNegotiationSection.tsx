"use client";

import React, { useState } from "react";
import { DollarSign, Award, ArrowRight, CheckCircle2, ShieldCheck, Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionCard } from "@/components/ui/SectionCard";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { WidgetStatCard } from "@/components/roadmap/widgets/common";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  offerFinancialMetricsData,
  cgsResolutionRightsData,
  negotiationChecklistData
} from "@/data/interviewsSectionData";
import { interviewsPageData } from "@/data/pagesData";

export function OfferNegotiationSection() {
  const [baseOffer, setBaseOffer] = useState(36000);
  const [hasSummerGra, setHasSummerGra] = useState(true);
  const sectionMeta = interviewsPageData.sections[3];

  const effectiveAnnual = hasSummerGra ? baseOffer : Math.round(baseOffer * 0.75);
  const fiveYearValue = (effectiveAnnual * 5) + (55000 * 5); // tuition waiver est $55k/yr

  return (
    <section id="offer-negotiation" className="py-20 border-b border-white/5 bg-[#090d16]">
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
            <WidgetStatCard
              key={f.label}
              label={f.label}
              value={f.value}
              sublabel={f.sub}
              valueColor="text-emerald-400"
            />
          ))}
        </div>

        {/* Interactive Offer Value Simulator */}
        <SectionCard
          variant="default"
          borderGlow="emerald"
          className="mb-12"
          headerClassName="pb-4 mb-6 border-b border-white/5"
          headerRight={
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Total 5-Year Package Value
              </span>
              <span className="text-2xl font-black font-mono text-emerald-400">
                ${fiveYearValue.toLocaleString()}
              </span>
            </div>
          }
          icon={<Calculator className="w-4 h-4 text-emerald-400" />}
          title="Interactive 5-Year Doctoral Package Valuation Slider"
          subtitle="Slide your base stipend offer to compute your true 5-year doctoral package value (tuition remission + health coverage + stipend)."
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Annual Base Living Stipend Offer:</span>
                <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  ${baseOffer.toLocaleString()} / year
                </span>
              </div>
              <input
                type="range"
                min={26000}
                max={55000}
                step={1000}
                value={baseOffer}
                onChange={(e) => setBaseOffer(Number(e.target.value))}
                className="range-slider w-full cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$26,000 (Base)</span>
                <span>$40,000 (Mid-tier)</span>
                <span>$55,000 (Flagship/Zurich)</span>
              </div>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-[#090d16] border border-white/10 space-y-2">
              <div className="text-xs font-semibold text-slate-300">Summer Funding Guarantee:</div>
              <TabsContainer variant="segmented" fullWidth className="p-1">
                <TabItem
                  active={hasSummerGra}
                  onClick={() => setHasSummerGra(true)}
                  label="12-Month GRA"
                  colorTheme="emerald"
                  size="sm"
                />
                <TabItem
                  active={!hasSummerGra}
                  onClick={() => setHasSummerGra(false)}
                  label="9-Month Only"
                  colorTheme="amber"
                  size="sm"
                />
              </TabsContainer>
              {!hasSummerGra && (
                <div className="text-[10px] text-amber-300/90 leading-tight">
                  Warning: 9-month offers require negotiating summer support or landing an industry research internship.
                </div>
              )}
            </div>
          </div>
        </SectionCard>

        {/* Rights and Negotiation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard
            variant="nested"
            title="The Council of Graduate Schools (CGS) Resolution Rights"
            icon={<ShieldCheck className="w-5 h-5 text-emerald-400" />}
            className="p-6 sm:p-8 bg-[#0f1422] border border-white/10"
          >
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Over 400 major universities in the United States and Canada subscribe to the CGS April 15 Resolution. Under this agreement:
            </p>
            <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
              {cgsResolutionRightsData.map((right, idx) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            variant="nested"
            title="Respectful Negotiation Checklist"
            icon={<Award className="w-5 h-5 text-cyan-400" />}
            className="p-6 sm:p-8 flex flex-col justify-between bg-[#0f1422] border border-white/10"
            footer={
              <Button
                href="/toolkit#interactive-email-builder"
                variant="cyan"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                View Negotiation Email Template
              </Button>
            }
          >
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              If your preferred university offers $34,000 while another offers $42,000, you can politely write to your prospective department chair:
            </p>
            <div className="space-y-2 text-xs text-slate-300 mb-6">
              {negotiationChecklistData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
