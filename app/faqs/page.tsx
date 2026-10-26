"use client";

import React, { useState } from "react";
import { FaqsHero } from "@/components/faqs/FaqsHero";
import { QuickScrollNavigator } from "@/components/ui/QuickScrollNavigator";
import { InteractivePreflightChecklist } from "@/components/faqs/InteractivePreflightChecklist";
import { FaqAccordionSection } from "@/components/faqs/FaqAccordionSection";
import { FaqCategoryPills } from "@/components/faqs/FaqCategoryPills";
import { CommunityHelpSection } from "@/components/faqs/CommunityHelpSection";
import { faqsNavAnchors } from "@/data/faqsSectionData";

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      {/* 1. Hero Section */}
      <FaqsHero />

      {/* 2. Quick-Scroll Anchor Bar */}
      <div className="my-6">
        <QuickScrollNavigator anchors={faqsNavAnchors} />
      </div>

      {/* 3. Pre-Flight Readiness Checklist */}
      <InteractivePreflightChecklist />

      {/* 4. Comprehensive Searchable FAQ Accordion */}
      <FaqAccordionSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Topic Category Cards */}
      <FaqCategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 6. Launchpad Navigation */}
      <CommunityHelpSection />
    </main>
  );
}
