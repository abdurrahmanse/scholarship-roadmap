"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Sparkles,
  DollarSign,
  Award,
  Activity
} from "lucide-react";
import { homeMetricsData, heroEqualizerData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";
import { MetricItem } from "@/data/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-emerald-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getGlowVariant = (iconName: string): "indigo" | "cyan" | "emerald" | "purple" => {
    switch (iconName) {
      case "DollarSign":
        return "emerald";
      case "Award":
        return "cyan";
      case "Cpu":
        return "purple";
      default:
        return "indigo";
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Creative Telemetry Pill with Equalizer Visualizer */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0f1422] border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-8 shadow-xl shadow-indigo-950/60 backdrop-blur-xl group hover:border-indigo-400 transition-all duration-300 max-w-[calc(100vw-32px)]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="uppercase tracking-wider font-mono text-[10px] sm:text-[11px] font-bold truncate">
            {homePageData.hero.badge}
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          {/* Animated Equalizer Bars */}
          <div className="hidden md:flex items-center gap-0.5 h-3">
            {heroEqualizerData.bars.slice(0, 7).map((height, idx) => (
              <span
                key={idx}
                className="w-0.5 bg-gradient-to-t from-indigo-500 to-cyan-400 rounded-full animate-pulse"
                style={{
                  height: `${height}%`,
                  animationDuration: `${0.6 + (idx % 4) * 0.25}s`
                }}
              />
            ))}
          </div>
        </div>

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {homeMetricsData.map((m: MetricItem) => (
            <GlassCard
              key={m.label}
              borderGlow={getGlowVariant(m.iconName)}
              className="p-5 sm:p-6 text-left bg-[#0f1422] border border-white/10"
              enableSpotlight={true}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  {m.label}
                </span>
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  {getIcon(m.iconName)}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-slate-400 mt-1.5 font-sans">
                {m.sublabel}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

