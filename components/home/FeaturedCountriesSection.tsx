"use client";

import React from "react";
import Link from "next/link";
import { countryGuidesData } from "@/data/countryGuidesData";
import { Globe2, ArrowRight } from "lucide-react";

export function FeaturedCountriesSection() {
  // Select 6 premier featured countries across different regions
  const featured = countryGuidesData.filter((c) =>
    ["germany", "sweden", "netherlands", "united-states", "canada", "japan"].includes(c.id)
  );

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.06] bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium mb-3">
              <Globe2 className="w-3.5 h-3.5" />
              <span>20 Destinations Covered</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Scholarship Destinations
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Explore country-specific funding models, statutory doctoral salaries, government scholarship programs, and supervisor outreach expectations.
            </p>
          </div>

          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors shrink-0 group"
          >
            <span>Explore all 20 country guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((country) => (
            <Link
              key={country.id}
              href={`/countries#${country.id}`}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-teal-500/40 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                        {country.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">{country.region}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {country.code}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {country.headline}
                </p>

                <div className="space-y-1.5 text-[11px] text-slate-400 mb-4 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <strong className="text-slate-300">Supervisor:</strong>
                    <span className={country.supervisorContactRequirement.includes("Strictly") ? "text-amber-400" : "text-teal-400"}>
                      {country.supervisorContactRequirement}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <strong className="text-slate-300">PhD Model:</strong>
                    <span className="text-slate-400 truncate">{country.phdFundingModel.split(".")[0]}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-teal-400 font-semibold group-hover:text-teal-300">
                <span>View Country Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
