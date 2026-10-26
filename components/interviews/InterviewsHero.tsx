"use client";

import React from "react";
import { Presentation } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { interviewsPageData } from "@/data/pagesData";
import { interviewsHeroHighlightsData } from "@/data/interviewsSectionData";

export function InterviewsHero() {
  return (
    <PageHero
      badge={interviewsPageData.hero.badge}
      badgeIcon={<Presentation className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
      theme="purple"
      title={interviewsPageData.hero.title}
      highlightWord={interviewsPageData.hero.highlightWord}
      subtitle={interviewsPageData.hero.subtitle}
      highlights={interviewsHeroHighlightsData}
    />
  );
}
