import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { InteractiveTimelineSlider } from "@/components/home/InteractiveTimelineSlider";
import { FundingStandardSection } from "@/components/home/FundingStandardSection";
import { InteractiveProfileDiagnostic } from "@/components/home/InteractiveProfileDiagnostic";
import { RoadmapPipelinePreview } from "@/components/home/RoadmapPipelinePreview";
import { GlobalModelsComparison } from "@/components/home/GlobalModelsComparison";
import { InteractiveStipendCalculator } from "@/components/home/InteractiveStipendCalculator";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section with Live Stats Ribbon */}
      <HeroSection />

      {/* 2. Innovative 24-Month Chronological Timeline Slider */}
      <InteractiveTimelineSlider />

      {/* 3. The 100% Fully Funded AI Research Standard (4 Pillars) */}
      <FundingStandardSection />

      {/* 4. Creative Interactive Profile Diagnostic & Lab Matcher */}
      <InteractiveProfileDiagnostic />

      {/* 5. The 7-Phase Execution Pipeline */}
      <RoadmapPipelinePreview />

      {/* 6. The 4 Global Graduate Funding Models */}
      <GlobalModelsComparison />

      {/* 7. Creative Interactive Net Stipend & Cost-of-Living Calculator */}
      <InteractiveStipendCalculator />
    </main>
  );
}
