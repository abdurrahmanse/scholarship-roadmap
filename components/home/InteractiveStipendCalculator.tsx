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
import { stipendCitiesData } from "@/data/homeData";

export function InteractiveStipendCalculator() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const city = stipendCitiesData[selectedCityIndex] || stipendCitiesData[0];

  const monthlyGross = Math.round(city.annualGrossStipend / 12);
  const monthlyTax = Math.round(monthlyGross * (city.taxRatePercent / 100));
  const monthlyNet = monthlyGross - monthlyTax;
  const totalExpenses = city.avgMonthlyRentShared + city.avgMonthlyFood + city.monthlyHealthInsurance;
  const monthlySavings = monthlyNet - totalExpenses;

  return (
    <section id="stipend-calculator" className="py-20 relative overflow-hidden border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Global Financial Reality"
          badgeVariant="emerald"
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-emerald-400" />}
          title="Interactive Net Stipend & Cost-of-Living Calculator"
          subtitle="Compare real monthly purchasing power across world AI hubs: gross stipends, mandatory deductions, housing costs, and actual student savings."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* City Selection Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Target Graduate AI Hub:
            </label>
            {stipendCitiesData.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setSelectedCityIndex(idx)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedCityIndex === idx
                    ? "bg-emerald-950/50 border-emerald-500/80 text-white shadow-lg shadow-emerald-950"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="text-sm font-bold">{c.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.institution}</div>
                </div>
                <div className="text-xs font-mono font-semibold px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {c.symbol} {c.annualGrossStipend.toLocaleString()}/yr
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Calculator Breakdown (8 cols) */}
          <div className="lg:col-span-8">
            <GlassCard borderGlow="emerald" className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div>
                  <Badge variant="emerald" size="sm" className="mb-2">
                    {city.country} • {city.currency}
                  </Badge>
                  <h3 className="text-2xl font-extrabold text-white">
                    {city.institution}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{city.notes}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs uppercase font-bold text-slate-400 block">
                    Estimated Net Savings
                  </span>
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                    +{city.symbol} {monthlySavings.toLocaleString()}
                    <span className="text-xs font-normal text-slate-400">/mo</span>
                  </span>
                </div>
              </div>

              {/* Monthly Ledger Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
                    Monthly Net Inflow
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {city.symbol} {monthlyNet.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Gross: {city.symbol} {monthlyGross.toLocaleString()} (Tax ~{city.taxRatePercent}%)
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <Home className="w-3.5 h-3.5 text-amber-400" />
                    Rent & Food Outflow
                  </div>
                  <div className="text-xl font-bold text-white font-mono">
                    {city.symbol} {(city.avgMonthlyRentShared + city.avgMonthlyFood).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Rent: {city.symbol} {city.avgMonthlyRentShared} • Food: {city.symbol} {city.avgMonthlyFood}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Tuition Remission Benefit
                  </div>
                  <div className="text-xl font-bold text-emerald-300 font-mono">
                    +{city.symbol} {city.tuitionCovered.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    100% Waived by Graduate Assistantship
                  </div>
                </div>
              </div>

              {/* Crucial Context Alert */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 flex items-start gap-3">
                <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-200 leading-relaxed">
                  <strong>The Summer Internship Boost:</strong> AI PhD candidates at top labs routinely take 3-month summer research internships at Meta FAIR, Google DeepMind, OpenAI, or Microsoft Research, earning an additional <strong>$10,000–$15,000/month</strong>, elevating true annual compensation past $65,000–$80,000.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <Link
                  href="/programs"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  View full laboratory details in Programs Directory
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
