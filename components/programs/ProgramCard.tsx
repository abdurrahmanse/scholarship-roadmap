"use client";

import React from "react";
import {
  ExternalLink,
  ShieldCheck,
  Cpu,
  Calendar,
  Users,
  Award,
  Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { FundedProgram } from "@/data/types";

interface ProgramCardProps {
  program: FundedProgram;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <GlassCard borderGlow="cyan" className="p-6 sm:p-7 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <Badge variant="cyan" size="sm">
                {program.country}
              </Badge>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {program.degreeType}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                GRE: {program.requirements.grePolicy}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {program.institution}
            </h3>
            <div className="text-xs text-cyan-300 font-semibold mt-0.5">
              {program.department}
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Priority Deadline
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">
              {program.deadlinePriority}
            </span>
          </div>
        </div>

        {/* Financial Stipend Ribbon */}
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Guaranteed Annual Living Stipend / Salary
            </span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">
              {program.fundingDetails.stipendAnnualUSD} ({program.fundingDetails.stipendMonthlyLocal})
            </span>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Funding Mechanism
            </span>
            <span className="text-xs font-semibold text-slate-300">
              {program.fundingModel}
            </span>
          </div>
        </div>

        {/* Research Focus Areas / Tags */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Frontier AI Specializations:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {program.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Notable Faculty & Compute Specs */}
        <div className="space-y-2 mb-6 text-xs text-slate-300">
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Key Faculty & Labs: </strong>
              <span className="text-slate-400">{program.keyFacultyOrLabs.join(", ")}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Cpu className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Lab Compute Cluster: </strong>
              <span className="text-slate-400">{program.fundingDetails.computeAccess}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Application Button */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          {program.fundingDetails.tuitionCoverage}
        </span>
        <a
          href={program.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-600/20 flex items-center gap-1.5"
        >
          <span>Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </GlassCard>
  );
}
