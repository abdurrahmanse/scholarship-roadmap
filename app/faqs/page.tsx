"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Compass,
  FileCode,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Cpu,
  GraduationCap
} from "lucide-react";
import { faqsPageData } from "@/data/pagesData";
import { faqsData } from "@/data/faqs";

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0]?.id || null);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    "check-0": true,
    "check-1": true
  });

  const categories = ["All", ...Array.from(new Set(faqsData.map((f) => f.category)))];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Admissions & Strategy":
        return <Compass className="w-5 h-5 text-purple-400" />;
      case "Research & Code":
        return <FileCode className="w-5 h-5 text-cyan-400" />;
      case "Funding & Money":
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "Testing & Requirements":
      case "Visa & Relocation":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <HelpCircle className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            {faqsPageData.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            {faqsPageData.hero.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              {faqsPageData.hero.highlightWord}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {faqsPageData.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={faqsPageData.hero.primaryCta.href}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              {faqsPageData.hero.primaryCta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
            {faqsPageData.hero.secondaryCta && (
              <Link
                href={faqsPageData.hero.secondaryCta.href}
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                {faqsPageData.hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 1: Topic Breakdown Cards */}
      <section id="faq-categories" className="py-20 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/40">
              Section 1 • Knowledge Taxonomy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {faqsPageData.sections[0]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {faqsPageData.sections[0]?.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqsPageData.sections[0]?.cards?.map((cat) => (
              <div
                key={cat.title}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {cat.tag}
                    </span>
                    <Sparkles className="w-4 h-4 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  {cat.bulletPoints?.map((bp) => (
                    <div key={bp} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Comprehensive Knowledge Base with Search & Filter */}
      <section id="faq-list" className="py-20 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              Section 2 • Verified Admissions Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {faqsPageData.sections[1]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {faqsPageData.sections[1]?.subtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by topic, keyword (e.g. 'direct PhD', 'low GPA', 'H100', 'GRE', 'TAL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-slate-100 placeholder-slate-500 text-sm outline-none transition-all shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 select-none hover:bg-slate-850 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shrink-0 mt-0.5">
                          {getCategoryIcon(faq.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <div className="p-1 rounded-lg bg-slate-800/80 border border-slate-700 shrink-0 text-slate-400 mt-1">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/60">
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                          {faq.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-slate-850 text-slate-400 border border-slate-800"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: Pre-Flight Application Readiness Checklist */}
      <section id="readiness-checklist" className="py-20 border-b border-slate-800/60 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
              Section 3 • Final Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
              {faqsPageData.sections[2]?.title}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              {faqsPageData.sections[2]?.subtitle}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Pre-Flight Submission Audit</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                {Object.values(checkedItems).filter(Boolean).length} of {faqsPageData.sections[2]?.highlights?.length || 5} Verified
              </span>
            </div>

            <div className="space-y-4">
              {faqsPageData.sections[2]?.highlights?.map((highlight, idx) => {
                const itemKey = `check-${idx}`;
                const isChecked = !!checkedItems[itemKey];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(itemKey)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                      isChecked
                        ? "bg-emerald-950/30 border-emerald-800/50 text-slate-100"
                        : "bg-slate-850/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // controlled by parent div onClick
                      className="mt-1 h-4 w-4 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20"
                    />
                    <div className="text-sm leading-relaxed">
                      <span className={isChecked ? "font-semibold text-white" : ""}>
                        {highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                All 5 items must be confirmed before paying institutional application fees.
              </p>
              <Link
                href="/roadmap"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                Return to Step 0 in Roadmap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 (Bonus): Still Have Questions / Next Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ready to Launch Your Fully Funded AI Research Journey?
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore the complete 7-phase step-by-step roadmap, filter funded graduate laboratories worldwide, or copy battle-tested email templates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/roadmap"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                Step-by-Step Roadmap
              </Link>
              <Link
                href="/programs"
                className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-600/30 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                Funded Labs Directory
              </Link>
              <Link
                href="/toolkit"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2"
              >
                <FileCode className="w-4 h-4" />
                Application Toolkit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
