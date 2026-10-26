"use client";

import React, { useState } from "react";
import {
  professorOutreachWorkflow,
  coldEmailTemplates,
  supervisorNecessityByCountry,
  researchFitChecklist,
  EmailTemplate
} from "@/data/professorsData";
import {
  Copy,
  Check,
  CheckCircle2,
  XCircle,
  Sparkles,
  Paperclip,
  ShieldCheck
} from "lucide-react";

export function ProfessorOutreachView() {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate>(coldEmailTemplates[0]);
  const [copied, setCopied] = useState<boolean>(false);
  const [checkedFitItems, setCheckedFitItems] = useState<Record<string, boolean>>({});

  const copyTemplate = () => {
    navigator.clipboard.writeText(selectedTemplate.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFitItem = (id: string) => {
    setCheckedFitItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-12">
      {/* SECTION 1: When Supervisor Contact is Required vs Centralized */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Supervisor Necessity Rules by Destination & Degree
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Before sending a single email, verify whether contacting professors is legally mandated, optional, or prohibited by your target program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {supervisorNecessityByCountry.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-bold text-white">{item.country}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {item.degreeLevel}
                  </span>
                </div>
                <div className="mb-2">
                  <span
                    className={`inline-block text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      item.necessity.includes("Strictly")
                        ? "bg-amber-950/60 text-amber-300 border border-amber-500/30"
                        : "bg-teal-950/60 text-teal-300 border border-teal-500/30"
                    }`}
                  >
                    {item.necessity}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {item.rationale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: The 8-Step Practical Outreach Workflow */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          The 8-Step Academic Outreach Workflow
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          A systematic, respectful protocol to connect with prospective advisors without sending annoying mass emails.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {professorOutreachWorkflow.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-xl bg-slate-900/60 border border-white/[0.08] space-y-2 hover:border-white/15 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-teal-950 border border-teal-500/40 text-teal-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {step.stepNumber}
                </span>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-xs text-teal-400 font-medium">
                {step.shortDesc}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                {step.detailedProtocol}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Interactive Email Blueprint Generator */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Academic Cold Email Blueprints
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Copy and customize these concise (150–220 words) tested email templates.
            </p>
          </div>

          {/* Template Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/5 text-xs">
            {coldEmailTemplates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => setSelectedTemplate(tpl)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  selectedTemplate.id === tpl.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tpl.name.split("(")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider font-semibold block mb-1">
                Template Preview: {selectedTemplate.name}
              </span>
              <p className="text-xs text-slate-400">{selectedTemplate.targetAudience}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                Length: <strong className="text-white">{selectedTemplate.wordCount}</strong>
              </span>
              <button
                onClick={copyTemplate}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md ${
                  copied
                    ? "bg-emerald-600 text-white"
                    : "bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white"
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied Email!" : "Copy Template"}</span>
              </button>
            </div>
          </div>

          {/* Subject Line Recommendations */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 block">
              Tested Subject Line Examples
            </span>
            <ul className="space-y-1 text-xs font-mono text-slate-300">
              {selectedTemplate.subjectLines.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-white/5">
                  <span className="text-teal-400">•</span>
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Body Codeblock */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Email Body (Customize the brackets with your actual research):
            </span>
            <pre className="p-5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-indigo-500/30">
              {selectedTemplate.body}
            </pre>
          </div>

          {/* Attachments & Protocol Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Paperclip className="w-3.5 h-3.5 text-teal-400" />
                <span>What to Attach</span>
              </span>
              <ul className="space-y-1 text-xs text-slate-400">
                {selectedTemplate.recommendedAttachments.map((att, aIdx) => (
                  <li key={aIdx}>• {att}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Strategic Tips</span>
              </span>
              <ul className="space-y-1 text-xs text-slate-400">
                {selectedTemplate.tips.map((tip, tIdx) => (
                  <li key={tIdx}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Weak vs Strong Outreach Examples Comparison */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Weak vs. Strong Outreach Comparison
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Learn why 90% of generic cold emails end up in the trash bin within 5 seconds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Weak Outreach Card */}
          <div className="p-6 rounded-2xl bg-red-950/15 border border-red-500/25 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>Weak / Generic Outreach (Immediate Rejection)</span>
            </div>
            <p className="text-xs text-slate-300 italic bg-slate-950/60 p-3.5 rounded-xl border border-red-500/20 leading-relaxed font-mono">
              &ldquo;Dear Respected Professor, I hope this email finds you well. I have visited your website and I am deeply impressed by your world-famous research. I am a hardworking student with a high GPA who wants to study in your university. Please review my attached 15MB certificates and tell me if you have any scholarship for me.&rdquo;
            </p>
            <ul className="space-y-1.5 text-xs text-red-300/90 pt-2">
              <li>• Does not name the professor or any specific paper.</li>
              <li>• Generic flattery that could be copy-pasted to 500 academics.</li>
              <li>• Attaches unrequested giant files triggering spam filters.</li>
              <li>• Demonstrates zero understanding of the professor&apos;s active lab agenda.</li>
            </ul>
          </div>

          {/* Strong Outreach Card */}
          <div className="p-6 rounded-2xl bg-emerald-950/15 border border-emerald-500/25 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Strong / Tailored Outreach (High Response Rate)</span>
            </div>
            <p className="text-xs text-slate-300 italic bg-slate-950/60 p-3.5 rounded-xl border border-emerald-500/20 leading-relaxed font-mono">
              &ldquo;Dear Professor Evans, I read your 2025 Nature Energy paper on catalytic electrolyte degradation with great interest—specifically your use of in-situ Raman spectroscopy to track intermediate phases. In my undergraduate thesis at [University], I built a similar optical cell testing cathode stability. With my background in spectroscopy and electrochemistry, I would love to contribute to your ongoing battery research as a Fall 2026 PhD student. Attached is my 2-page CV.&rdquo;
            </p>
            <ul className="space-y-1.5 text-xs text-emerald-300/90 pt-2">
              <li>• Mentions a specific paper from the last 12 months.</li>
              <li>• Cites exact methodology (Raman spectroscopy) matching their skill.</li>
              <li>• Under 150 words: readable in 30 seconds on a smartphone.</li>
              <li>• Professional, respectful, and cleanly attached PDF CV.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: Research Fit Checklist */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-400" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Pre-Flight Research-Fit Checklist (Client-Side Only)
          </h2>
        </div>
        <p className="text-xs text-slate-300">
          Verify every item before pressing &ldquo;Send&rdquo; on an academic inquiry email.
        </p>

        <div className="space-y-2 pt-2">
          {researchFitChecklist.map((item) => {
            const isChecked = !!checkedFitItems[item.id];
            return (
              <label
                key={item.id}
                onClick={() => toggleFitItem(item.id)}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                  isChecked
                    ? "bg-emerald-950/30 border-emerald-500/30 text-white"
                    : "bg-slate-950/40 border-white/5 text-slate-300 hover:bg-slate-950"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-0.5 rounded border-white/20 bg-slate-950 text-teal-500 focus:ring-0 cursor-pointer"
                />
                <div className="text-xs">
                  <span className={isChecked ? "line-through text-slate-400" : "font-medium"}>
                    {item.label}
                  </span>
                  {item.tip && (
                    <span className="text-[11px] text-slate-400 block mt-0.5 font-sans">
                      Tip: {item.tip}
                    </span>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </section>
    </div>
  );
}
