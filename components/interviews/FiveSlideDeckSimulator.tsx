"use client";

import React, { useState } from "react";
import { Presentation } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fiveSlideDeckData } from "@/data/interviewsSectionData";
import { interviewsPageData } from "@/data/pagesData";
import {
  SlideDeckScrubber,
  SlideDeckCanvasHeader,
  SlideDeckVisualLayout,
  SlideDeckSpeakingTasks,
  SlideDeckFacultyDefense,
} from "./deck";

export function FiveSlideDeckSimulator() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = fiveSlideDeckData[currentSlideIndex] || fiveSlideDeckData[0];
  const sectionMeta = interviewsPageData.sections[0];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => Math.min(fiveSlideDeckData.length - 1, prev + 1));
  };

  return (
    <section id="five-slide-simulator" className="py-20 border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={sectionMeta?.badge || "Interactive Presentation Simulator"}
          badgeVariant="purple"
          badgeIcon={<Presentation className="w-3.5 h-3.5 text-purple-400" />}
          title={sectionMeta?.title || "The 5-Slide Faculty Technical Research Defense Simulator"}
          subtitle={sectionMeta?.subtitle || "Top AI faculty use screening calls to stress-test your scientific thinking, not your slides. Walk through the 5-slide deck structure, timing, and defensive answers below."}
          align="center"
        />

        {/* 1. Slide Scrubber Range Slider & Stepper Tabs */}
        <SlideDeckScrubber
          currentIndex={currentSlideIndex}
          onSelectIndex={setCurrentSlideIndex}
        />

        {/* 2. Interactive Slide Viewer Canvas */}
        <div className="w-full">
          <GlassCard borderGlow="purple" className="p-6 sm:p-10 bg-[#0f1422] border border-white/10 shadow-2xl relative">
            {/* 2a. Slide Header with Timings & Controls */}
            <SlideDeckCanvasHeader
              slideNumber={slide.number}
              totalSlides={fiveSlideDeckData.length}
              timing={slide.timing}
              title={slide.title}
              subtitle={slide.subtitle}
              canPrev={currentSlideIndex > 0}
              canNext={currentSlideIndex < fiveSlideDeckData.length - 1}
              onPrev={handlePrev}
              onNext={handleNext}
            />

            {/* 2b. Slide Visual Layout on Screen */}
            <SlideDeckVisualLayout visualLayout={slide.visualLayout} />

            {/* 2c. Speaking Tasks Checklist */}
            <SlideDeckSpeakingTasks keyPoints={slide.keyPoints} />

            {/* 2d. Faculty Stress-Test Question & Defense Answer */}
            <SlideDeckFacultyDefense
              question={slide.facultyInterruptionQuestion}
              defenseAnswer={slide.defenseAnswer}
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default FiveSlideDeckSimulator;
