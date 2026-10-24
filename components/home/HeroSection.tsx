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
  Award
} from "lucide-react";
import { homeMetricsData } from "@/data/homeData";
import { homePageData } from "@/data/pagesData";
import { MetricItem } from "@/data/types";

export function HeroSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case "Award":
        return <Award className="w-4 h-4 text-cyan-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 border-b border-slate-800/80 bg-radial-vignette">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[250px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner shadow-indigo-950">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>{homePageData.hero.badge}</span>
        </div>

        {/* Main Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.1]">
          {homePageData.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            {homePageData.hero.highlightWord}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          {homePageData.hero.subtitle}
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <Link
            href={homePageData.hero.primaryCta.href}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2.5 group"
          >
            <span>{homePageData.hero.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          {homePageData.hero.secondaryCta && (
            <Link
              href={homePageData.hero.secondaryCta.href}
              className="px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{homePageData.hero.secondaryCta.label}</span>
            </Link>
          )}
          <Link
            href="/programs"
            className="px-6 py-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-300 font-medium text-sm transition-all flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Funded Labs Directory</span>
          </Link>
        </div>

        {/* Enterprise Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {homeMetricsData.map((m: MetricItem) => (
            <div
              key={m.label}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-left hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {m.label}
                </span>
                {getIcon(m.iconName)}
              </div>
              <div className="text-2xl font-black text-white font-mono tracking-tight">
                {m.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
