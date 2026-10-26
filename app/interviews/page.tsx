import React from "react";
import type { Metadata } from "next";
import { InterviewsHero } from "@/components/interviews/InterviewsHero";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { FiveSlideDeckSimulator } from "@/components/interviews/FiveSlideDeckSimulator";
import { StarlDefenseSection } from "@/components/interviews/StarlDefenseSection";
import { VisaTalCheckerWidget } from "@/components/interviews/VisaTalCheckerWidget";
import { OfferNegotiationSection } from "@/components/interviews/OfferNegotiationSection";
import { interviewsNavAnchors } from "@/data/interviewsSectionData";

export const metadata: Metadata = {
  title: "Professor Interviews & STAR-L Defense | 100% Fully Funded CS Scholarship Roadmap",
  description:
    "Master PI technical interviews, 5-slide thesis presentation decks, and STAR-L scientific defense scenarios for competitive PhD/MS CS admissions.",
};

export default function InterviewsPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section */}
      <InterviewsHero />

      {/* 2. Quick-Scroll Anchor Bar for Intuitive Scrolling */}
      <div className="my-6">
        <QuickScrollNavigator anchors={interviewsNavAnchors} />
      </div>

      {/* 3. Creative Interactive 5-Slide Presentation Simulator */}
      <FiveSlideDeckSimulator />

      {/* 4. STAR-L Deep Learning Technical Defense Case Studies */}
      <StarlDefenseSection />

      {/* 5. Creative Interactive Visa TAL Export Control Risk Analyzer */}
      <VisaTalCheckerWidget />

      {/* 6. Graduate Funding Offer Evaluation & Counter-Offer Playbook */}
      <OfferNegotiationSection />
    </main>
  );
}
