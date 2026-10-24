"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  Home,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Info
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stipendCitiesData, stipendCalculatorMetadata } from "@/data/homeData";

export function InteractiveStipendCalculator() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [rentAdjustment, setRentAdjustment] = useState(0);

  const city = stipendCitiesData[selectedCityIndex] || stipendCitiesData[0];

  const monthlyGross = Math.round(city.annualGrossStipend / 12);
  const monthlyTax = Math.round(monthlyGross * (city.taxRatePercent / 100));
  const monthlyNet = monthlyGross - monthlyTax;
  const effectiveRent = Math.max(200, city.avgMonthlyRentShared + rentAdjustment);
  const totalExpenses = effectiveRent + city.avgMonthlyFood + city.monthlyHealthInsurance;
  const monthlySavings = monthlyNet - totalExpenses;

  return (
    <section id="stipend-calculator" className="py-20 relative overflow-hidden border-b border-white/[0.06] bg-[#070b14]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={stipendCalculatorMetadata.badge}
          badgeVariant="emerald"
          pulsingBadge={true}
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-emerald-400" />}
          title={stipendCalculatorMetadata.title}
          subtitle={stipendCalculatorMetadata.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* City Selection Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Select Target Graduate AI Hub:
            </label>
            {stipendCitiesData.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => {
                  setSelectedCityIndex(idx);
                  setRentAdjustment(0);
                }}
                className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedCityIndex === idx
                    ? "bg-emerald-950/60 border-emerald-500/80 text-white shadow-xl shadow-emerald-950/50"
                    : "bg-[#0d1322]/80 border-white/[0.08] text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="text-sm font-bold font-heading">{c.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.institution}</div>
                </div>
                <div className="text-xs font-mono font-semibold px-2 py-1 rounded bg-white/[0.06] text-slate-300">
                  {c.symbol} {c.annualGrossStipend.toLocaleString()}/yr
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Calculator Breakdown (8 cols) */}
          <div className="lg:col-span-8">
            <GlassCard borderGlow="emerald" className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
                <div>
                  <Badge variant="emerald" size="sm" className="mb-2">
                    {city.country} • {city.currency}
                  </Badge>
                  <h3 className="text-2xl font-black text-white font-heading">
                    {city.institution}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{city.notes}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs uppercase font-bold text-slate-400 block font-mono">
                    Estimated Net Savings
                  </span>
                  <span className={`text-3xl font-black font-mono ${monthlySavings >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {monthlySavings >= 0 ? "+" : ""}{city.symbol} {monthlySavings.toLocaleString()}
                    <span className="text-xs font-normal text-slate-400">/mo</span>
                  </span>
                </div>
              </div>

              {/* Interactive Housing Budget Slider */}
              <div className="my-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-slate-300 font-bold">
                    {stipendCalculatorMetadata.housingSliderLabel}
                  </span>
                  <span className="font-mono font-bold text-indigo-300">
                    {city.symbol} {effectiveRent.toLocaleString()}/mo ({rentAdjustment > 0 ? `+${rentAdjustment}` : rentAdjustment})
                  </span>
                </div>
                <input
                  type="range"
                  min="-300"
                  max="500"
                  step="50"
                  value={rentAdjustment}
                  onChange={(e) => setRentAdjustment(parseInt(e.target.value, 10))}
                  className="range-slider"
                  aria-label="Housing budget adjustment slider"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
                  <span>{stipendCalculatorMetadata.rentOffsetFrugalLabel}</span>
                  <span>{stipendCalculatorMetadata.rentOffsetStandardLabel}</span>
                  <span>{stipendCalculatorMetadata.rentOffsetStudioLabel}</span>
                </div>
              </div>

              {/* Monthly Ledger Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-[#080d1a] border border-white/[0.08]">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
                    <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                    Monthly Net Inflow
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {city.symbol} {monthlyNet.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    Gross: {city.symbol} {monthlyGross.toLocaleString()} (Tax ~{city.taxRatePercent}%)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#080d1a] border border-white/[0.08]">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
                    <Home className="w-3.5 h-3.5 text-amber-400" />
                    Living Outflow
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {city.symbol} {(effectiveRent + city.avgMonthlyFood).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    Rent: {city.symbol} {effectiveRent} • Food: {city.symbol} {city.avgMonthlyFood}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#080d1a] border border-white/[0.08]">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Tuition Remission
                  </div>
                  <div className="text-xl font-bold text-emerald-300 font-mono">
                    +{city.symbol} {city.tuitionCovered.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    100% Waived by Graduate Assistantship
                  </div>
                </div>
              </div>

              {/* Crucial Context Alert */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 flex items-start gap-3">
                <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-200 leading-relaxed font-sans">
                  {stipendCalculatorMetadata.summerInternshipAlert}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
                <Link
                  href="/programs"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
                >
                  <span>{stipendCalculatorMetadata.exploreCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
