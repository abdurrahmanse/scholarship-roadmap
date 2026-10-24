"use client";

import React, { useState } from "react";
import { InterviewsHero } from "@/components/interviews/InterviewsHero";
import { FiveSlideDeckSimulator } from "@/components/interviews/FiveSlideDeckSimulator";
import { StarlCaseCard } from "@/components/interviews/StarlCaseCard";
import { VisaTalCheckerWidget } from "@/components/interviews/VisaTalCheckerWidget";
import { OfferNegotiationSection } from "@/components/interviews/OfferNegotiationSection";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { interviewCasesData } from "@/data/interviews";
import { interviewsNavAnchors } from "@/data/interviewsSectionData";
import { Activity } from "lucide-react";

export default function InterviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string>(interviewCasesData[0]?.id || "");

  const categories = ["All", ...Array.from(new Set(interviewCasesData.map((c) => c.category)))];

  const filteredCases = selectedCategory === "All"
    ? interviewCasesData
    : interviewCasesData.filter((c) => c.category === selectedCategory);

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
      <section id="starl-cases" className="py-20 border-b border-white/5 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="STAR-L Defense Cases"
            badgeVariant="cyan"
            badgeIcon={<Activity className="w-3.5 h-3.5 text-cyan-400" />}
            title="STAR-L Deep Learning Technical Defense Scenarios"
            subtitle="Real-world engineering challenges across memory bottlenecks, representation collapse, and real-time robotic latency with copyable talking points."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                    : "bg-[#0f1422] text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* STAR-L Cards */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {filteredCases.map((c) => (
              <StarlCaseCard
                key={c.id}
                defenseCase={c}
                isExpanded={expandedId === c.id}
                onToggle={() => setExpandedId(expandedId === c.id ? "" : c.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Creative Interactive Visa TAL Export Control Risk Analyzer */}
      <VisaTalCheckerWidget />

      {/* 6. Graduate Funding Offer Evaluation & Counter-Offer Playbook */}
      <OfferNegotiationSection />
    </main>
  );
}
