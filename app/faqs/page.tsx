"use client";

import React, { useState } from "react";
import { FaqsHero } from "@/components/faqs/FaqsHero";
import { FaqCategoryPills } from "@/components/faqs/FaqCategoryPills";
import { FaqAccordionItem } from "@/components/faqs/FaqAccordionItem";
import { InteractivePreflightChecklist } from "@/components/faqs/InteractivePreflightChecklist";
import { CommunityHelpSection } from "@/components/faqs/CommunityHelpSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsData } from "@/data/faqs";
import { Search, HelpCircle } from "lucide-react";

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0]?.id || null);

  const categories = ["All", ...Array.from(new Set(faqsData.map((f) => f.category)))];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* 1. Hero Section */}
      <FaqsHero />

      {/* 2. Topic Category Breakdown */}
      <FaqCategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. Comprehensive Searchable FAQ Accordion */}
      <section id="faq-list" className="py-20 border-b border-slate-800/80 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Answers"
            badgeVariant="cyan"
            badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-cyan-400" />}
            title="Comprehensive Answers to Critical Admissions Inquiries"
            subtitle="Authoritative answers backed by institutional policies across North America, Europe, and Asia."
          />

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by keyword (e.g., 'direct PhD', 'low GPA', 'H100', 'GRE', 'TAL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-500 text-xs outline-none transition-all shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                />
              ))
            ) : (
              <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-xs">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Interactive Pre-Flight Checklist */}
      <InteractivePreflightChecklist />

      {/* 5. Launchpad Navigation */}
      <CommunityHelpSection />
    </main>
  );
}
