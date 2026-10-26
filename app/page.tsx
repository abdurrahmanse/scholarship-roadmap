import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { InteractiveTimelineSlider } from "@/components/home/InteractiveTimelineSlider";
import { CsProfileRequirementsSection } from "@/components/home/CsProfileRequirementsSection";
import { FundingStandardSection } from "@/components/home/FundingStandardSection";
import { InteractiveProfileDiagnostic } from "@/components/home/InteractiveProfileDiagnostic";
import { RoadmapPipelinePreview } from "@/components/home/RoadmapPipelinePreview";
import { GlobalModelsComparison } from "@/components/home/GlobalModelsComparison";
import { InteractiveStipendCalculator } from "@/components/home/InteractiveStipendCalculator";

export const metadata: Metadata = {
  title: "100% Fully Funded AI & Machine Learning Postgraduate Roadmap",
  description:
    "The canonical zero-to-landing blueprint for Computer Science, AI, and Machine Learning students securing 100% fully funded PhD and Master's research assistantships abroad.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section with Live Stats Ribbon */}
      <HeroSection />

      {/* 2. Innovative 24-Month Chronological Timeline Slider */}
      <InteractiveTimelineSlider />

      {/* 3. Explicit Profile Standards: What Your CS Profile Must Look Like */}
      <CsProfileRequirementsSection />

      {/* 4. The 100% Fully Funded AI Research Standard (4 Pillars & Traps) */}
      <FundingStandardSection />

      {/* 5. Creative Interactive Profile Diagnostic & Lab Matcher */}
      <InteractiveProfileDiagnostic />

      {/* 6. The 7-Phase Execution Pipeline */}
      <RoadmapPipelinePreview />

      {/* 7. The 4 Global Graduate Funding Models */}
      <GlobalModelsComparison />

      {/* 8. Creative Interactive Net Stipend & Cost-of-Living Calculator */}
      <InteractiveStipendCalculator />
    </main>
  );
}
