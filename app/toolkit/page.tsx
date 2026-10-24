"use client";

import { useState } from "react";
import Link from "next/link";
import { emailTemplatesData } from "@/data/templates";
import { toolkitPageData } from "@/data/pagesData";
import { 
  Copy, 
  Check, 
  FileText, 
  Code, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  DollarSign, 
  ArrowRight,
  FileSpreadsheet
} from "lucide-react";

export default function ToolkitPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedTemplateCategory, setSelectedTemplateCategory] = useState<string>("All");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories = ["All", "Cold Outreach", "Follow-Up", "Recommendation", "Negotiation", "Visa Defense"];

  const filteredTemplates = selectedTemplateCategory === "All"
    ? emailTemplatesData
    : emailTemplatesData.filter((t) => t.category === selectedTemplateCategory);

  const sopBlueprint = toolkitPageData.sections.find((s) => s.id === "sop-blueprint");
  const cvStandards = toolkitPageData.sections.find((s) => s.id === "cv-standards");
  const proposal = toolkitPageData.sections.find((s) => s.id === "proposal-calculator");

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pb-24">
      {/* ========================================================
          PAGE HERO
         ======================================================== */}
      <section className="pt-14 pb-14 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
            {toolkitPageData.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            {toolkitPageData.hero.title}{" "}
            <span className="bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              {toolkitPageData.hero.highlightWord}
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {toolkitPageData.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-16">
        {/* ========================================================
            SECTION 1: THE TECHNICAL SOP 5-MOVEMENT BLUEPRINT
           ======================================================== */}
        {sopBlueprint && (
          <section id="sop-blueprint" className="pt-4">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                {sopBlueprint.badge}
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-3">
                {sopBlueprint.title}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">{sopBlueprint.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {sopBlueprint.cards?.map((card, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                      {card.tag}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-2.5">{card.title}</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{card.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1">
                    {card.bulletPoints?.map((bp, bidx) => (
                      <div key={bidx} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-pink-400 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 2: LATEX ACADEMIC CV STANDARDS & GOOGLE XYZ
           ======================================================== */}
        {cvStandards && (
          <section id="cv-standards" className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-neutral-800 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  {cvStandards.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{cvStandards.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{cvStandards.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
                {cvStandards.dataPoints?.map((dp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400 font-medium">{dp.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{dp.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
                <p>
                  In Computer Science and Machine Learning, formatting your CV in LaTeX (using templates like Awesome-CV or ModernCV) is standard. It conveys professionalism, precision, and adherence to scientific publishing standards.
                </p>
                <div className="space-y-2 mt-4">
                  {cvStandards.highlights?.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Google XYZ Example Box */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                  <Code className="w-4 h-4" />
                  <span>The Google XYZ Action-Bullet Framework</span>
                </div>
                <div className="text-xs font-mono text-neutral-400 bg-neutral-900 p-2.5 rounded border border-neutral-800">
                  Accomplished [X], as measured by [Y], by doing [Z]
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-neutral-300">
                    <div className="text-[11px] font-bold text-rose-400">❌ Weak / Generic Bullet:</div>
                    <p className="mt-1 text-neutral-400">"Trained a convolutional neural network on medical images for classification."</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-neutral-300">
                    <div className="text-[11px] font-bold text-emerald-400">✅ Competitive AI Research Bullet:</div>
                    <p className="mt-1 text-neutral-200">
                      "Engineered a self-supervised contrastive pre-training framework [Z], improving diabetic retinopathy diagnostic sensitivity by 8.4% [X] over ResNet-50 baselines [Y], resulting in a spotlight paper at NeurIPS Medical Imaging Workshop."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            SECTION 3: COPY-READY HIGH-YIELD EMAIL SCRIPTS
           ======================================================== */}
        <section id="email-scripts">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              Communication Arsenal
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-3">
              Copy-Ready High-Yield Email Scripts & Templates
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Select a template below to view instructions, copy formatted text, and customize placeholders.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTemplateCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedTemplateCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredTemplates.map((template) => (
              <article
                key={template.id}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {template.category}
                      </span>
                      <span className="text-xs text-neutral-400">{template.targetAudience}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{template.title}</h3>
                  </div>

                  <button
                    onClick={() => copyToClipboard(template.body, template.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all self-start sm:self-auto"
                  >
                    {copiedId === template.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Template Text</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-neutral-400 mb-4">{template.description}</p>

                {/* Subject Line */}
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 mb-4 text-xs font-mono">
                  <span className="text-neutral-500 font-bold">Subject: </span>
                  <span className="text-indigo-300">{template.subject}</span>
                </div>

                {/* Email Body */}
                <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-300 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {template.body}
                </pre>

                {/* Instructions & Guidelines */}
                <div className="mt-4 pt-4 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-neutral-300 block mb-1">Key Placeholders:</span>
                    <div className="flex flex-wrap gap-1">
                      {template.placeholders.map((ph, pidx) => (
                        <span key={pidx} className="px-1.5 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-400 font-mono">
                          {`{{${ph}}}`}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-neutral-300 block mb-1">Execution Guidelines:</span>
                    <ul className="space-y-1 text-[11px] text-neutral-400">
                      {template.instructions.map((inst, iidx) => (
                        <li key={iidx} className="flex items-center gap-1.5">
                          <span className="text-indigo-400">✦</span>
                          <span>{inst}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECTION 4: DOCTORAL PROPOSAL & COMPUTE ESTIMATOR
           ======================================================== */}
        {proposal && (
          <section id="proposal-blueprint" className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              {proposal.badge}
            </span>
            <h3 className="text-2xl font-bold text-white mt-3">{proposal.title}</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">{proposal.subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-6">
              {proposal.highlights?.map((hl, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xs mb-2">
                    {idx + 1}
                  </div>
                  <p className="text-neutral-300 text-[11px] leading-relaxed">{hl}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Ready to prepare for your faculty technical interviews and visa defense?
              </span>
              <Link
                href="/interviews"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all"
              >
                <span>Advance to Interview Defense & Visa Clearance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
