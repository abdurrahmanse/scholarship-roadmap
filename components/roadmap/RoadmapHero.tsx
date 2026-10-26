"use client";

import React from "react";
import { Compass } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { roadmapPageData } from "@/data/pagesData";
import { roadmapMetricsData } from "@/data/roadmapSectionData";

export function RoadmapHero() {
  return (
    <PageHero
      badge={roadmapPageData.hero.badge}
      badgeIcon={<Compass className="w-3.5 h-3.5 text-indigo-400 shrink-0" />}
      theme="indigo"
      title={roadmapPageData.hero.title}
      highlightWord={roadmapPageData.hero.highlightWord}
      subtitle={roadmapPageData.hero.subtitle}
      highlights={roadmapMetricsData.map((m) => ({ label: m.value }))}
    />
  );
}
