"use client";

import React, { useState } from "react";
import {
  Presentation,
  Clock,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fiveSlideDeckData } from "@/data/interviewsSectionData";
import { interviewsPageData } from "@/data/pagesData";

export function FiveSlideDeckSimulator() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = fiveSlideDeckData[currentSlideIndex] || fiveSlideDeckData[0];
  const sectionMeta = interviewsPageData.sections[0];

  return (
    <section id="5slide-deck-simulator" className="py-20 border-b border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Interactive Presentation Simulator"}
          badgeVariant="purple"
          badgeIcon={<Presentation className="w-3.5 h-3.5 text-purple-400" />}
          title={sectionMeta?.title || "The 5-Slide Faculty Technical Research Defense Simulator"}
          subtitle={sectionMeta?.subtitle || "Top AI faculty use screening calls to stress-test your scientific thinking, not your slides. Walk through the 5-slide deck structure, timing, and defensive answers below."}
        />

        {/* Slide Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {fiveSlideDeckData.map((s, idx) => (
            <button
              key={s.number}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSlideIndex === idx
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <span className="w-5 h-5 rounded-md bg-slate-950 flex items-center justify-center text-[10px] font-mono">
                {s.number}
              </span>
              <span>Slide {s.number}: {s.title.split("&")[0]?.trim()}</span>
            </button>
          ))}
        </div>

        {/* Interactive Slide Viewer Canvas */}
        <div className="max-w-5xl mx-auto">
          <GlassCard borderGlow="purple" className="p-6 sm:p-10 bg-slate-950/90 shadow-2xl relative">
            {/* Top Slide Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge variant="purple" size="sm">
                    SLIDE 0{slide.number} OF 05
                  </Badge>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Target Timing: {slide.timing}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">{slide.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{slide.subtitle}</p>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  disabled={currentSlideIndex === 0}
                  onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentSlideIndex === fiveSlideDeckData.length - 1}
                  onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Body Visual Mockup */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Recommended Visual Layout on Screen:
              </span>
              <div className="text-xs text-purple-200 font-mono leading-relaxed">
                {slide.visualLayout}
              </div>
            </div>

            {/* Speaking Points Checklist */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Core Scientific Talking Points to Deliver:
              </span>
              <div className="space-y-2">
                {slide.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Stress-Test Question & Defense Answer */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-800/40 space-y-3">
              <div className="flex items-start gap-2 text-xs font-bold text-amber-300">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Classic Professor Interruption Trap: &ldquo;{slide.facultyInterruptionQuestion}&rdquo;</span>
              </div>
              <div className="pl-6 text-xs text-amber-100/90 leading-relaxed font-mono">
                <strong className="text-amber-400">Your Recommended Defense: </strong>
                {slide.defenseAnswer}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
