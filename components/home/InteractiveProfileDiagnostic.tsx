"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  diagnosticDegreeOptions,
  diagnosticGpaOptions,
  diagnosticPaperOptions,
  diagnosticEngineeringOptions,
} from "@/data/homeData";
import { homePageData } from "@/data/pagesData";
import {
  DiagnosticControls,
  DiagnosticScorecard,
  DiagnosticAuditResult,
} from "./diagnostic";

export function InteractiveProfileDiagnostic() {
  const [degree, setDegree] = useState<string>(diagnosticDegreeOptions[0]?.id || "phd-direct");
  const [gpa, setGpa] = useState<string>(diagnosticGpaOptions[1]?.id || "good");
  const [papers, setPapers] = useState<string>(diagnosticPaperOptions[1]?.id || "workshop");
  const [engineering, setEngineering] = useState<string>(diagnosticEngineeringOptions[0]?.id || "multi-gpu");

  const sectionMeta = homePageData.sections[3];

  const computeAudit = (): DiagnosticAuditResult => {
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

    return {
      score: Math.min(score, 99),
      reach,
      target,
      safe,
      priorityAction,
      recommendedPhase,
      phaseName,
    };
  };

  const audit = computeAudit();

  return (
    <section id="profile-diagnostic" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={sectionMeta?.badge || "Interactive Self-Assessment"}
          badgeVariant="indigo"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Applicant Diagnostic & Readiness Scorecard"}
          subtitle={sectionMeta?.subtitle || "Select your current academic profile to generate an instant competitiveness rating, custom lab tier mapping, and high-leverage immediate action steps."}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <DiagnosticControls
              degree={degree}
              setDegree={setDegree}
              gpa={gpa}
              setGpa={setGpa}
              papers={papers}
              setPapers={setPapers}
              engineering={engineering}
              setEngineering={setEngineering}
            />
          </div>

          {/* Results Diagnostic Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <DiagnosticScorecard audit={audit} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveProfileDiagnostic;
