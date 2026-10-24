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
    <section id="five-slide-simulator" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={sectionMeta?.badge || "Interactive Presentation Simulator"}
          badgeVariant="purple"
          badgeIcon={<Presentation className="w-3.5 h-3.5 text-purple-400" />}
          title={sectionMeta?.title || "The 5-Slide Faculty Technical Research Defense Simulator"}
          subtitle={sectionMeta?.subtitle || "Top AI faculty use screening calls to stress-test your scientific thinking, not your slides. Walk through the 5-slide deck structure, timing, and defensive answers below."}
        />

        {/* Interactive Slide Scrubber Range Slider & Buttons */}
        <div className="max-w-xl mx-auto mb-8 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Slide 1: Problem</span>
            <span className="text-purple-300 font-bold">Slide {currentSlideIndex + 1} of {fiveSlideDeckData.length}</span>
            <span>Slide 5: Horizons</span>
          </div>

          <div className="relative py-2">
            <input
              type="range"
              min="0"
              max={fiveSlideDeckData.length - 1}
              step="1"
              value={currentSlideIndex}
              onChange={(e) => setCurrentSlideIndex(parseInt(e.target.value, 10))}
              className="range-slider"
              aria-label="Slide scrubber slider from Slide 1 to Slide 5"
            />
          </div>

          <div className="grid grid-cols-5 gap-1 sm:gap-2">
            {fiveSlideDeckData.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`py-2 px-1 rounded-xl text-xs font-bold transition-all text-center ${
                  currentSlideIndex === idx
                    ? "bg-purple-600/30 border border-purple-500 text-white shadow-lg shadow-purple-950/60"
                    : "bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="block font-mono text-[11px]">S0{s.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slide Viewer Canvas */}
        <div className="max-w-5xl mx-auto">
          <GlassCard borderGlow="purple" className="p-6 sm:p-10 bg-[#0f1422] border border-white/10 shadow-2xl relative">
            {/* Top Slide Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
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
                <h3 className="text-2xl font-black text-white font-heading">{slide.title}</h3>
                <p className="text-xs text-slate-400 mt-1 font-sans">{slide.subtitle}</p>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  disabled={currentSlideIndex === 0}
                  onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)}
                  className="p-2.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 hover:text-white disabled:opacity-40 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentSlideIndex === fiveSlideDeckData.length - 1}
                  onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)}
                  className="p-2.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 hover:text-white disabled:opacity-40 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Slide Body Visual Mockup */}
            <div className="p-5 rounded-2xl bg-[#090d16] border border-white/10 mb-6">
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
