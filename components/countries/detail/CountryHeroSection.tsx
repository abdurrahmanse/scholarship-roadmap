"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Globe, MapPin } from "lucide-react";
import { CountryGuide } from "@/data/countryGuidesData";
import { SupervisorBadge } from "./SupervisorBadge";
import { CountryJumpNav } from "./CountryJumpNav";

interface CountryHeroSectionProps {
  country: CountryGuide;
}

export function CountryHeroSection({ country }: CountryHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 relative z-10">
        {/* Back Link */}
        <Link
          href="/countries"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-300 transition-colors mb-6 sm:mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to All Destinations
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex-1 space-y-4 sm:space-y-5">
            {/* Region & Code Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono font-medium">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>
                {country.region} · {country.code}
              </span>
            </div>

            {/* Country Title + Flag */}
            <div className="flex items-center gap-4 sm:gap-5">
              <span
                className="text-5xl sm:text-6xl md:text-7xl shrink-0 p-3 rounded-2xl bg-slate-900 border border-white/10 shadow-xl"
                aria-label={`${country.name} flag`}
              >
                {country.flag}
              </span>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {country.name}
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                  Fully Funded Graduate Scholarship Guide
                </p>
              </div>
            </div>

            {/* Headline */}
            <p className="text-sm sm:text-base md:text-lg text-teal-200 font-medium leading-relaxed max-w-2xl">
              {country.headline}
            </p>

            {/* Supervisor Rule Banner */}
            <div className="flex items-center gap-3 flex-wrap pt-1">
              <span className="text-xs font-mono text-slate-400">Supervisor Contact Rule:</span>
              <SupervisorBadge requirement={country.supervisorContactRequirement} />
            </div>

            {/* Highlights Ribbons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {country.assistantshipsAvailable && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-mono">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Assistantships Available</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-lg font-mono">
                <Award className="w-3.5 h-3.5" />
                <span>
                  {country.governmentScholarships.length} Gov&apos;t Scholarship
                  {country.governmentScholarships.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-lg font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>
                  {country.officialPortals.length} Official Portal
                  {country.officialPortals.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Table of contents Jump Nav (Desktop / Laptop View) */}
          <CountryJumpNav />
        </div>
      </div>
    </section>
  );
}

export default CountryHeroSection;
