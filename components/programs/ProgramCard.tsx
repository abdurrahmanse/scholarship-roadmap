"use client";

import React from "react";
import {
  ExternalLink,
  Cpu,
  Users
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FundedProgram } from "@/data/types";

interface ProgramCardProps {
  program: FundedProgram;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <GlassCard
      borderGlow="cyan"
      className="p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-cyan-950/30 hover:shadow-2xl"
    >
      <div>
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="cyan" size="sm">
                {program.country}
              </Badge>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                {program.degreeType}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                GRE: {program.requirements.grePolicy}
              </span>
            </div>
            <h3 className="text-xl font-heading font-bold text-white tracking-tight break-words">
              {program.institution}
            </h3>
            <div className="text-xs text-cyan-300 font-semibold mt-0.5">
              {program.department}
            </div>
          </div>
          <div className="text-left sm:text-right shrink-0 sm:max-w-[210px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Priority Deadline
            </span>
            <span className="text-xs font-mono font-bold text-amber-400 leading-tight block mt-0.5">
              {program.deadlinePriority}
            </span>
          </div>
        </div>

        {/* Financial Stipend Ribbon */}
        <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="min-w-0 flex-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Guaranteed Annual Living Stipend / Salary
            </span>
            <span className="text-base font-extrabold text-emerald-400 font-mono">
              {program.fundingDetails.stipendAnnualUSD} ({program.fundingDetails.stipendMonthlyLocal})
            </span>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
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
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#090d16] text-slate-300 border border-white/5"
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
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          {program.fundingDetails.tuitionCoverage}
        </span>
        <Button
          href={program.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="cyan"
          size="sm"
          rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
        >
          Official Portal
        </Button>
      </div>
    </GlassCard>
  );
}
