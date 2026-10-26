"use client";

import React from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { homeHeroData } from "@/data/homeData";
import { HeroValueBadges } from "./HeroValueBadges";

export function HomeHero() {
  const { badge, title, titleGradient, description, primaryCta, secondaryCta, valueBadges } = homeHeroData;

  return (
    <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/[0.06]">
      {/* Ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,90vw)] h-[300px] sm:h-[400px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-0 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-[11px] sm:text-xs font-mono font-medium shadow-lg shadow-indigo-950/40 max-w-full overflow-hidden">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="truncate">{badge.label}</span>
            <span className="text-slate-500 shrink-0">|</span>
            <span className="text-teal-400 font-semibold shrink-0 hidden xs:inline">{badge.sublabel}</span>
          </div>

          {/* Headline — 4 breakpoints */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] px-1">
            {title}{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {titleGradient}
            </span>{" "}
            Master&apos;s or PhD
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto px-2">
            {description}
          </p>

          {/* CTAs — stacked on mobile, row on sm+ */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-2 sm:pt-4 px-2">
            <Button
              href={primaryCta.href}
              variant="primary"
              size="lg"
              className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold shadow-xl shadow-indigo-600/25 group"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full xs:w-auto px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold border-white/15 hover:border-teal-500/40 hover:bg-white/[0.04] text-slate-200"
            >
              <Globe2 className="w-4 h-4 mr-2 text-teal-400" />
              <span>{secondaryCta.label}</span>
            </Button>
          </div>

          {/* Value Badges */}
          <HeroValueBadges badges={valueBadges} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
