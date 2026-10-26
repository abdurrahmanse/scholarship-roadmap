"use client";

import React from "react";
import { FileCode } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { toolkitPageData } from "@/data/pagesData";
import { toolkitHeroHighlightsData } from "@/data/toolkitSectionData";

export function ToolkitHero() {
  return (
    <PageHero
      badge={toolkitPageData.hero.badge}
      badgeIcon={<FileCode className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
      theme="purple"
      title={toolkitPageData.hero.title}
      highlightWord={toolkitPageData.hero.highlightWord}
      subtitle={toolkitPageData.hero.subtitle}
      highlights={toolkitHeroHighlightsData}
    />
  );
}
