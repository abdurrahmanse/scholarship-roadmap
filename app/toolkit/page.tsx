import React from "react";
import type { Metadata } from "next";
import { ToolkitHero } from "@/components/toolkit/ToolkitHero";
import { SopBlueprintSection } from "@/components/toolkit/SopBlueprintSection";
import { LatexCvStandardsSection } from "@/components/toolkit/LatexCvStandardsSection";
import { InteractiveEmailBuilder } from "@/components/toolkit/InteractiveEmailBuilder";
import { ResearchProposalSection } from "@/components/toolkit/ResearchProposalSection";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { toolkitNavAnchors } from "@/data/toolkitSectionData";

export const metadata: Metadata = {
  title: "AI Researcher Application Toolkit | SOP, CV & Cold Email Generator",
  description:
    "Open-access templates for 5-movement Statement of Purpose (SOP), academic LaTeX CV with Google XYZ metrics, interactive cold outreach email builder, and research proposals.",
};

export default function ToolkitPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section */}
      <ToolkitHero />

      {/* 2. Quick-Scroll Anchor Bar for Intuitive Scrolling */}
      <div className="my-6">
        <QuickScrollNavigator anchors={toolkitNavAnchors} />
      </div>

      {/* 3. Technical SOP 5-Movement Blueprint */}
      <SopBlueprintSection />

      {/* 4. Academic LaTeX CV Standards & Google XYZ Bullets */}
      <LatexCvStandardsSection />

      {/* 5. Creative Interactive Live Cold Email Customizer */}
      <InteractiveEmailBuilder />

      {/* 6. European & Asian Doctoral Research Proposal Blueprint */}
      <ResearchProposalSection />
    </main>
  );
}
