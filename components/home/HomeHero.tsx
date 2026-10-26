"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe2, Compass, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-teal-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-10 w-96 h-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Subtle Verified Standard Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shadow-lg shadow-indigo-950/40">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span>13-Phase International Postgraduate Roadmap</span>
            <span className="text-slate-500">|</span>
            <span className="text-teal-400 font-semibold">100% Free & Open Access</span>
          </div>

          {/* Master Headline as specified */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Your Step-by-Step Roadmap to a{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Fully Funded
            </span>{" "}
            Master&apos;s or PhD
          </h1>

          {/* Exact Supporting Description */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
            From finding the right country and scholarship to contacting professors, preparing documents, and submitting applications—follow a clear roadmap to navigate the entire process.
          </p>

          {/* Primary and Secondary CTAs as specified */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Button
              href="/roadmap"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold shadow-xl shadow-indigo-600/25 group"
            >
              <span>Explore the Roadmap</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              href="/countries"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold border-white/15 hover:border-teal-500/40 hover:bg-white/[0.04] text-slate-200"
            >
              <Globe2 className="w-4 h-4 mr-2 text-teal-400" />
              <span>Explore Countries</span>
            </Button>
          </div>

          {/* Value Badges Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left max-w-4xl mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>13 Sequential Phases</span>
              </div>
              <p className="text-xs text-slate-300">From academic profile assessment to visa issuance and funding defense.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold mb-1">
                <Globe2 className="w-3.5 h-3.5" />
                <span>20 Country Guides</span>
              </div>
              <p className="text-xs text-slate-300">Europe, North America, Asia & Oceania with verified government portals.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Full-Ride Focus</span>
              </div>
              <p className="text-xs text-slate-300">Zero tuition + monthly living stipends or salaried research contracts.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Account Needed</span>
              </div>
              <p className="text-xs text-slate-300">Informational, open-access education. No paywalls, no login, no trackers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
