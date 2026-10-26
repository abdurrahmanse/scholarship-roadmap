"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { PhaseDegreeCard } from "./PhaseDegreeCard";

export interface PhaseDegreeNuancesSectionProps {
  mastersNuance: string;
  phdNuance: string;
}

export function PhaseDegreeNuancesSection({ mastersNuance, phdNuance }: PhaseDegreeNuancesSectionProps) {
  return (
    <section id="degree-nuances" className="scroll-mt-24 space-y-6">
      <div className="border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <GraduationCap className="w-4 h-4" />
          <span>Dossier Differentiation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
          Degree-Level Strategic Nuances
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          How funding expectations and committee evaluations split between Master&apos;s applicants and PhD candidates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PhaseDegreeCard type="masters" nuance={mastersNuance} />
        <PhaseDegreeCard type="phd" nuance={phdNuance} />
      </div>
    </section>
  );
}

export default PhaseDegreeNuancesSection;
