import React from "react";
import { ToolkitHero } from "@/components/toolkit/ToolkitHero";
import { SopBlueprintSection } from "@/components/toolkit/SopBlueprintSection";
import { LatexCvStandardsSection } from "@/components/toolkit/LatexCvStandardsSection";
import { InteractiveEmailBuilder } from "@/components/toolkit/InteractiveEmailBuilder";
import { ResearchProposalSection } from "@/components/toolkit/ResearchProposalSection";

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* 1. Hero Section */}
      <ToolkitHero />

      {/* 2. Technical SOP 5-Movement Blueprint */}
      <SopBlueprintSection />

      {/* 3. Academic LaTeX CV Standards & Google XYZ Bullets */}
      <LatexCvStandardsSection />

      {/* 4. Creative Interactive Live Cold Email Customizer */}
      <InteractiveEmailBuilder />

      {/* 5. European & Asian Doctoral Research Proposal Blueprint */}
      <ResearchProposalSection />
    </main>
  );
}
