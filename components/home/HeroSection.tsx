"use client";

import React from "react";
import Link from "next/link";
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
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-8 shadow-xl shadow-indigo-950/60 backdrop-blur-xl group hover:border-indigo-400 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="uppercase tracking-wider font-mono text-[11px] font-bold">
            {homePageData.hero.badge}
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          {/* Animated Equalizer Bars */}
          <div className="hidden sm:flex items-center gap-0.5 h-3">
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
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.08] font-heading">
          {homePageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 drop-shadow-sm">
            {homePageData.hero.highlightWord}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans font-normal">
          {homePageData.hero.subtitle}
        </p>

        {/* Primary, Secondary, and Tertiary Action CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <Link
            href={homePageData.hero.primaryCta.href}
            className="relative group px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm tracking-wide shadow-2xl shadow-indigo-600/35 transition-all duration-300 hover:scale-103 hover:shadow-indigo-500/50 flex items-center gap-2.5 overflow-hidden"
          >
            <span className="relative z-10">{homePageData.hero.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          {homePageData.hero.secondaryCta && (
            <Link
              href={homePageData.hero.secondaryCta.href}
              className="px-7 py-4 rounded-xl bg-[#0f1422] hover:bg-slate-800 border border-white/10 hover:border-indigo-500/50 text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{homePageData.hero.secondaryCta.label}</span>
            </Link>
          )}

          {homePageData.hero.tertiaryCta && (
            <Link
              href={homePageData.hero.tertiaryCta.href}
              className="px-6 py-4 rounded-xl bg-[#0f1422] hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{homePageData.hero.tertiaryCta.label}</span>
            </Link>
          )}
        </div>

        {/* Enterprise Metrics Ribbon Powered by Dynamic Cursor Spotlight GlassCards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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

