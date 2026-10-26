"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WidgetCallout } from "@/components/roadmap/widgets/common";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visaTalRulesData, sampleTalStatements } from "@/data/interviewsSectionData";
import { interviewsPageData } from "@/data/pagesData";

export function VisaTalCheckerWidget() {
  const [inputText, setInputText] = useState(sampleTalStatements[0].text);

  const sectionMeta = interviewsPageData.sections[2];

  const detectedFlags = visaTalRulesData.filter((rule) =>
    inputText.toLowerCase().includes(rule.term)
  );

  return (
    <section id="visa-tal-checker" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Consular Clearance Intelligence"}
          badgeVariant="rose"
          badgeIcon={<ShieldAlert className="w-3.5 h-3.5 text-rose-400" />}
          title={sectionMeta?.title || "Interactive Visa Technology Alert List (TAL) Risk Analyzer"}
          subtitle={sectionMeta?.subtitle || "Artificial Intelligence is classified as an emerging critical technology. Test your thesis topic, research statement, or project summary for consular export-control red flags."}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Box (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <GlassCard borderGlow="none" className="p-6 bg-[#0f1422] border border-white/10">
              {/* Sample Statement Quick Buttons */}
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Try Pre-loaded Test Phrasings:
                </span>
                <div className="flex flex-wrap gap-2">
                  {sampleTalStatements.map((sample) => (
                    <Button
                      key={sample.id}
                      variant="outline"
                      size="xs"
                      onClick={() => setInputText(sample.text)}
                    >
                      {sample.label}
                    </Button>
                  ))}
                </div>
              </div>

              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Type or Paste Your Proposed Research Summary / Thesis Title:
              </label>
              <textarea
                rows={5}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#090d16] border border-white/10 focus:border-rose-500 text-xs text-white outline-none leading-relaxed font-mono"
                placeholder="e.g. My research focuses on deep reinforcement learning algorithms for robotic manipulation..."
              />

              <div className="flex items-center justify-between pt-3 text-[11px] text-slate-400">
                <span>Try typing &ldquo;drone&rdquo;, &ldquo;surveillance&rdquo;, or &ldquo;biometrics&rdquo;</span>
                <span className="font-mono text-rose-400 font-bold">
                  {detectedFlags.length} Risk Terms Detected
                </span>
              </div>
            </GlassCard>

            {/* Crucial Window Rule */}
            <WidgetCallout
              variant="positive"
              title="The Golden Embassy Formulation:"
              message="When asked at the visa window, state: 'I am conducting fundamental mathematical research on open-source machine learning algorithms, published entirely in public academic conferences like NeurIPS and ICML.'"
            />
          </div>

          {/* Results Analysis (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <GlassCard
              borderGlow={detectedFlags.length > 0 ? "none" : "emerald"}
              className={`p-6 sm:p-7 bg-[#0f1422] ${detectedFlags.length > 0 ? "border-rose-800/60" : "border-emerald-800/60"}`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  {detectedFlags.length > 0 ? (
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  )}
                  <h3 className="text-base font-heading font-bold text-white">
                    {detectedFlags.length > 0 ? "Export Control Alert: High TAL Scrutiny" : "Low Consular Risk: Open Science Compliant"}
                  </h3>
                </div>
                <Badge variant={detectedFlags.length > 0 ? "rose" : "emerald"} size="sm">
                  {detectedFlags.length > 0 ? "221(g) Risk" : "Safe Formulation"}
                </Badge>
              </div>

              {detectedFlags.length > 0 ? (
                <div className="space-y-4">
                  <p className="text-xs text-rose-200/90 leading-relaxed">
                    The highlighted phrasing in your summary triggers export controls under the U.S. Technology Alert List (TAL), likely causing 4–8 weeks of administrative holds:
                  </p>
                  <div className="space-y-3">
                    {detectedFlags.map((flag) => (
                      <div key={flag.term} className="p-3.5 rounded-xl bg-[#090d16] border border-rose-900/50 text-xs space-y-1.5">
                        <div className="flex items-center justify-between font-mono">
                          <span className="text-rose-400 font-bold uppercase">&ldquo;{flag.term}&rdquo;</span>
                          <span className="text-[10px] text-rose-300">{flag.danger}</span>
                        </div>
                        <div className="text-slate-300">
                          <strong className="text-emerald-400">Safe Academic Replacement: </strong>
                          <span className="font-mono text-emerald-200">{flag.safeReplacement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    No export-controlled keywords detected. Your text aligns with standard fundamental mathematical and open-science research.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs">
                <span className="text-slate-400">Need the Advisor Support Letter?</span>
                <Button
                  href="/toolkit#interactive-email-builder"
                  variant="ghost"
                  size="sm"
                  className="text-purple-400 hover:text-purple-300"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Open-Science Template
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
