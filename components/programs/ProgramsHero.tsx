"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { programsPageData } from "@/data/pagesData";
import { programsHeroHighlightsData } from "@/data/programsSectionData";

export function ProgramsHero() {
  return (
    <PageHero
      badge={programsPageData.hero.badge}
      badgeIcon={<Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
      theme="cyan"
      title={programsPageData.hero.title}
      highlightWord={programsPageData.hero.highlightWord}
      subtitle={programsPageData.hero.subtitle}
      highlights={programsHeroHighlightsData}
    />
  );
}
