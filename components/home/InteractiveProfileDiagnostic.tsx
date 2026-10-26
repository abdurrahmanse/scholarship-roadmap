"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  GraduationCap
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { WidgetCallout } from "@/components/roadmap/widgets/common";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  diagnosticDegreeOptions,
  diagnosticGpaOptions,
  diagnosticPaperOptions,
  diagnosticEngineeringOptions
} from "@/data/homeData";
import { homePageData } from "@/data/pagesData";

export function InteractiveProfileDiagnostic() {
  const [degree, setDegree] = useState<string>(diagnosticDegreeOptions[0]?.id || "phd-direct");
  const [gpa, setGpa] = useState<string>(diagnosticGpaOptions[1]?.id || "good");
  const [papers, setPapers] = useState<string>(diagnosticPaperOptions[1]?.id || "workshop");
  const [engineering, setEngineering] = useState<string>(diagnosticEngineeringOptions[0]?.id || "multi-gpu");

  const sectionMeta = homePageData.sections[3];

  const computeAudit = () => {
    let score = 50;

    if (degree === "phd-direct") score += 10;
    if (degree === "phd-postms") score += 12;
    if (degree === "ms-thesis") score += 8;

    if (gpa === "high") score += 15;
    else if (gpa === "good") score += 12;
    else if (gpa === "medium") score += 8;
    else score += 4;

    if (papers === "conf") score += 20;
    else if (papers === "workshop") score += 15;
    else if (papers === "thesis") score += 10;
    else score += 3;

    if (engineering === "multi-gpu") score += 15;
    else if (engineering === "pytorch-colab") score += 10;
    else score += 4;

    let reach = "CMU SCS, Stanford SAIL, UC Berkeley BAIR, MIT CSAIL";
    let target = "Mila, Vector Institute, UT Austin, UW Madison, ETH Zurich AI";
    let safe = "Singapore SINGA (NUS/NTU), Max Planck IMPRS, CSIRO Data61, RIKEN AIP";
    let priorityAction = "Draft your 5-point cold email scripts and target faculty in September.";
    let recommendedPhase = "/roadmap#phase-2";
    let phaseName = "Phase 2: CSRankings & PI Outreach";

    if (score < 75) {
      reach = "Mila, University of Toronto, Georgia Tech, TU Munich";
      target = "SINGA Singapore, RIKEN AIP Japan, Alberta AMII, Edinburgh AI";
      safe = "European TV-L E13 Projects, Australian CSIRO, KAIST AI";
      priorityAction = "Fast-track an empirical NeurIPS/ICLR workshop paper or citable arXiv preprint to solidify research capital.";
      recommendedPhase = "/roadmap#phase-1";
      phaseName = "Phase 1: Workshops & arXiv Fast-Track";
    }

    if (gpa === "low" || gpa === "medium") {
      priorityAction = "Target newly hired Assistant Professors with active NSF/ERC grants who prioritize code velocity and PyTorch skills over raw GPA.";
    }

    return { score: Math.min(score, 99), reach, target, safe, priorityAction, recommendedPhase, phaseName };
  };

  const audit = computeAudit();

  return (
    <section id="profile-diagnostic" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={sectionMeta?.badge || "Interactive Self-Assessment"}
          badgeVariant="indigo"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Applicant Diagnostic & Readiness Scorecard"}
          subtitle={sectionMeta?.subtitle || "Select your current academic profile to generate an instant competitiveness rating, custom lab tier mapping, and high-leverage immediate action steps."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard borderGlow="indigo" className="space-y-6 bg-[#0f1422] border border-white/10 p-6 sm:p-7">
              {/* Question 1: Target Degree */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                  1. Target Postgraduate Path
                </label>
                <TabsContainer variant="cards" columns={3}>
                  {diagnosticDegreeOptions.map((item) => (
                    <TabItem
                      key={item.id}
                      active={degree === item.id}
                      onClick={() => setDegree(item.id)}
                      variant="cards"
                      title={item.label}
                      subtitle={item.sub}
                      theme="indigo"
                    />
                  ))}
                </TabsContainer>
              </div>

              {/* Question 2: Academic GPA */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 font-mono">
                  2. Cumulative Academic GPA (Scale of 4.0)
                </label>
                <TabsContainer variant="cards" columns={4}>
                  {diagnosticGpaOptions.map((item) => (
                    <TabItem
                      key={item.id}
                      active={gpa === item.id}
                      onClick={() => setGpa(item.id)}
                      variant="cards"
                      title={item.label}
                      subtitle={item.sub}
                      theme="cyan"
                    />
                  ))}
                </TabsContainer>
              </div>

              {/* Question 3: Research Capital & Publications */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono">
                  3. Peer-Reviewed Research & Preprints
                </label>
                <TabsContainer variant="cards" columns={2}>
                  {diagnosticPaperOptions.map((item) => (
                    <TabItem
                      key={item.id}
                      active={papers === item.id}
                      onClick={() => setPapers(item.id)}
                      variant="cards"
                      title={item.label}
                      subtitle={item.sub}
                      theme="emerald"
                    />
                  ))}
                </TabsContainer>
              </div>

              {/* Question 4: Technical Stack */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 font-mono">
                  4. Production AI Stack & Compute Experience
                </label>
                <TabsContainer variant="cards" columns={3}>
                  {diagnosticEngineeringOptions.map((item) => (
                    <TabItem
                      key={item.id}
                      active={engineering === item.id}
                      onClick={() => setEngineering(item.id)}
                      variant="cards"
                      title={item.label}
                      subtitle={item.sub}
                      theme="purple"
                    />
                  ))}
                </TabsContainer>
              </div>
            </GlassCard>
          </div>

          {/* Results Diagnostic Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard borderGlow="emerald" className="p-6 sm:p-8 bg-[#0f1422] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 font-mono">
                    Calculated Readiness
                  </span>
                  <div className="text-3xl font-black text-white font-mono flex items-center gap-2 mt-1">
                    <span>{audit.score}</span>
                    <span className="text-sm font-normal text-slate-500">/ 100</span>
                    <Badge
                      variant={audit.score >= 85 ? "emerald" : audit.score >= 70 ? "cyan" : "amber"}
                      size="sm"
                    >
                      {audit.score >= 85 ? "Top Tier Competitive" : audit.score >= 70 ? "Solid Candidate" : "Build Focus Required"}
                    </Badge>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
              </div>

              {/* Lab Tier Breakdown */}
              <div className="space-y-4 mb-6 text-xs">
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1 font-heading">
                    <Target className="w-3.5 h-3.5 text-indigo-400" />
                    Reach Tier Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.reach}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1 font-heading">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Target Tier Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.target}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090d16] border border-white/10">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1 font-heading">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    Solid Foundation Labs:
                  </div>
                  <p className="text-slate-300 leading-relaxed">{audit.safe}</p>
                </div>
              </div>

              {/* Priority Action Recommendation */}
              <div className="mb-6">
                <WidgetCallout
                  variant="warning"
                  title="Immediate High-Leverage Strategic Move:"
                  message={audit.priorityAction}
                />
              </div>

              {/* CTA to Roadmap Phase */}
              <Button
                href={audit.recommendedPhase}
                variant="primary"
                size="md"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Jump to {audit.phaseName}
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
