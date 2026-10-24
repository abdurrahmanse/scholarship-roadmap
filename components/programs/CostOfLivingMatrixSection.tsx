"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { costOfLivingComparisonData } from "@/data/programsSectionData";
import { programsPageData } from "@/data/pagesData";

export function CostOfLivingMatrixSection() {
  const sectionMeta = programsPageData.sections[3];

  return (
    <section id="col-matrix" className="py-20 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Purchasing Power"}
          badgeVariant="emerald"
          badgeIcon={<TrendingUp className="w-3.5 h-3.5 text-emerald-400" />}
          title={sectionMeta?.title || "Global Cost-of-Living vs. Net Stipend Matrix"}
          subtitle={sectionMeta?.subtitle || "A raw numerical comparison of actual take-home savings across premier international AI institutions."}
        />

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Graduate AI Hub & Institution</th>
                  <th className="py-4 px-6">Annual Gross Stipend</th>
                  <th className="py-4 px-6">Avg Monthly Rent (Shared)</th>
                  <th className="py-4 px-6">Est. Net Monthly Savings</th>
                  <th className="py-4 px-6">Purchasing Power Assessment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {costOfLivingComparisonData.map((row) => (
                  <tr key={row.hub} className="hover:bg-slate-800/40 transition-colors">
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
