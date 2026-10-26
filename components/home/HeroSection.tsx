"use client";

import React from "react";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";
import { homePageData } from "@/data/pagesData";
import { Button } from "@/components/ui/Button";
import { HeroTelemetryPill } from "./HeroTelemetryPill";
import { HeroMetricsRibbon } from "./HeroMetricsRibbon";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Creative Telemetry Pill with Equalizer Visualizer */}
        <HeroTelemetryPill />

        {/* Main Hero Headline with High-Impact Gradient & Font Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.12] sm:leading-[1.08] font-heading break-words">
          {homePageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 drop-shadow-sm">
            {homePageData.hero.highlightWord}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-normal px-2 sm:px-0">
          {homePageData.hero.subtitle}
        </p>

        {/* Primary, Secondary, and Tertiary Action CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <Button
            href={homePageData.hero.primaryCta.href}
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          >
            {homePageData.hero.primaryCta.label}
          </Button>

          {homePageData.hero.secondaryCta && (
            <Button
              href={homePageData.hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              leftIcon={<Sparkles className="w-4 h-4 text-indigo-400" />}
            >
              {homePageData.hero.secondaryCta.label}
            </Button>
          )}

          {homePageData.hero.tertiaryCta && (
            <Button
              href={homePageData.hero.tertiaryCta.href}
              variant="outline"
              size="lg"
              leftIcon={<Cpu className="w-4 h-4 text-cyan-400" />}
            >
              {homePageData.hero.tertiaryCta.label}
            </Button>
          )}
        </div>

        {/* Enterprise Metrics Ribbon Powered by Dynamic Cursor Spotlight GlassCards */}
        <HeroMetricsRibbon />
      </div>
    </section>
  );
}

export default HeroSection;


