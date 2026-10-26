"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, DollarSign, Award, Briefcase, AlertTriangle, ArrowRight } from "lucide-react";

export function FundingPillarsSection() {
  const pillars = [
    {
      title: "1. Government Bilateral Scholarships",
      icon: Award,
      badge: "Full-Ride Awards",
      badgeColor: "emerald",
      desc: "Administered by national ministries of foreign affairs and academic exchange agencies.",
      features: [
        "100% full tuition coverage",
        "Monthly tax-free living stipend ($1,000–$2,000/mo)",
        "Round-trip international airfare & arrival grant",
        "Comprehensive health & accident insurance"
      ],
      examples: "DAAD (Germany), Eiffel (France), Chevening (UK), Fulbright (USA), MEXT (Japan), GKS (Korea), Vanier (Canada)."
    },
    {
      title: "2. European Salaried PhD Employment",
      icon: Briefcase,
      badge: "Salaried Contracts",
      badgeColor: "cyan",
      desc: "Doctoral candidates are hired as university research staff under statutory collective labor agreements.",
      features: [
        "Full statutory monthly salary (€2,200–€4,000+ net/mo)",
        "Zero tuition fees (PhD is a job, not student enrollment)",
        "Social security, public pension & paid annual leave (25–30 days)",
        "Union-backed collective wage bargaining"
      ],
      examples: "Sweden (SULF), Netherlands (CAO Promovendi), Norway (Stipendiat), Denmark, Switzerland (SNSF), Germany (TV-L E13)."
    },
    {
      title: "3. Graduate Assistantships (GRA / GTA)",
      icon: DollarSign,
      badge: "North American Standard",
      badgeColor: "indigo",
      desc: "Universities fund graduate researchers in exchange for 20 hours per week of research or laboratory teaching.",
      features: [
        "100% out-of-state/international tuition remission",
        "Guaranteed 9–12 month living stipend ($28,000–$45,000/yr)",
        "Subsidized institutional health insurance",
        "Laboratory mentorship with senior faculty"
      ],
      examples: "United States (R1 Doctoral Institutions: MIT, Michigan, UIUC, Texas), Canada (U15 minimum funding packages)."
    },
    {
      title: "4. The Partial Waiver Reality Check",
      icon: AlertTriangle,
      badge: "Critical Distinction",
      badgeColor: "amber",
      desc: "Understanding why partial scholarships and tuition waivers are not genuinely fully funded packages.",
      features: [
        "Tuition waivers only discount institutional bills",
        "Zero food, rent, or flight funding provided",
        "Requires $15,000–$30,000/yr in personal cash deposits",
        "Often triggers visa denials if self-funding is inadequate"
      ],
      examples: "50% merit waivers, Dean's tuition discounts, partial fee offsets lacking living stipends."
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The 100% Full-Ride Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 4 Global Graduate Funding Models
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Never confuse a partial tuition discount with a sustainable, fully funded graduate offer. Learn how international funding actually works across different continents.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-teal-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2 mb-4 text-xs text-slate-300">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300">Flagship Examples: </span>
                  <span>{pillar.examples}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Callout Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-teal-950/40 border border-indigo-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Wondering if an offer is genuinely sustainable?</h4>
            <p className="text-xs text-slate-300">Phase 11 walks you through a comprehensive line-by-line financial audit before you sign an offer.</p>
          </div>
          <Link
            href="/roadmap#phase-11"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors shrink-0"
          >
            <span>Read Phase 11 Offer Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
