"use client";

import React from "react";
import { Compass, FileCode, DollarSign, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqCategoryCardsData } from "@/data/faqsSectionData";
import { faqsPageData } from "@/data/pagesData";

interface FaqCategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function FaqCategoryPills({
  selectedCategory,
  onSelectCategory
}: FaqCategoryPillsProps) {
  const sectionMeta = faqsPageData.sections[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-purple-400" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-cyan-400" />;
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Compass className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="faq-categories" className="py-20 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Topic Breakdown"}
          badgeVariant="indigo"
          badgeIcon={<Compass className="w-3.5 h-3.5 text-indigo-400" />}
          title={sectionMeta?.title || "Explore Admissions Intelligence by Category"}
          subtitle={sectionMeta?.subtitle || "Click any category below to immediately filter verified answers from AI admissions committees and faculty."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategoryCardsData.map((c) => {
            const isSelected = selectedCategory === c.name;
            return (
              <GlassCard
                key={c.name}
                borderGlow={isSelected ? c.variant : "none"}
                onClick={() => onSelectCategory(isSelected ? "All" : c.name)}
                className={`cursor-pointer transition-all ${
                  isSelected ? "bg-slate-900 border-indigo-500/80 shadow-lg shadow-indigo-950" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0">
                    {getCategoryIcon(c.iconName)}
                  </div>
                  <Badge variant={c.variant} size="sm">
                    {c.tag}
                  </Badge>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{c.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
