"use client";

import React, { useState } from "react";
import { TrendingUp, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { costOfLivingComparisonData } from "@/data/programsSectionData";
import { programsPageData } from "@/data/pagesData";

export function CostOfLivingMatrixSection() {
  const [sortBySavings, setSortBySavings] = useState(false);
  const sectionMeta = programsPageData.sections[3];

  const sortedRows = sortBySavings
    ? [...costOfLivingComparisonData].sort((a, b) => {
        // extract digits
        const numA = parseInt(a.savings.replace(/[^0-9]/g, ""), 10) || 0;
        const numB = parseInt(b.savings.replace(/[^0-9]/g, ""), 10) || 0;
        return numB - numA;
      })
    : costOfLivingComparisonData;

  return (
    <section id="col-matrix" className="py-20 border-b border-white/5 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Purchasing Power"}
          badgeVariant="emerald"
          badgeIcon={<TrendingUp className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Global Cost-of-Living vs. Net Stipend Matrix"}
          subtitle={sectionMeta?.subtitle || "A raw numerical comparison of actual take-home savings across premier international AI institutions."}
        />

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setSortBySavings(!sortBySavings)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              sortBySavings
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-[#0f1422] text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>{sortBySavings ? "Sorted by Highest Savings" : "Sort by Net Savings"}</span>
          </button>
        </div>

        <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-end gap-1 md:hidden">
          <span>Scroll table horizontally &rarr;</span>
        </div>

        <div className="bg-[#0f1422] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-xs text-slate-300">
              <thead className="bg-[#090d16] text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6">Graduate AI Hub & Institution</th>
                  <th className="py-4 px-6">Annual Gross Stipend</th>
                  <th className="py-4 px-6">Avg Monthly Rent (Shared)</th>
                  <th className="py-4 px-6">Est. Net Monthly Savings</th>
                  <th className="py-4 px-6">Purchasing Power Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {sortedRows.map((row) => (
                  <tr key={row.hub} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-sans text-xs">
                      {row.hub}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.gross}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.rent}
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-400">
                      {row.savings}
                    </td>
                    <td className="py-4 px-6 font-sans">
                      <Badge variant={row.variant} size="sm">
                        {row.tier}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
