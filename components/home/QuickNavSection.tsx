"use client";

import React from "react";
import Link from "next/link";
import {
  Map,
  Globe2,
  Search,
  Users,
  FileCheck,
  Send,
  HelpCircle,
  ArrowRight
} from "lucide-react";

export function QuickNavSection() {
  const quickLinks = [
    {
      title: "The Complete Roadmap",
      desc: "13 structured phases covering academic profile assessment through funding offer evaluation and reapplication.",
      href: "/roadmap",
      icon: Map,
      color: "indigo"
    },
    {
      title: "Country Guides",
      desc: "20 detailed country dossiers across Europe, North America, Asia & Oceania with verified government portals.",
      href: "/countries",
      icon: Globe2,
      color: "teal"
    },
    {
      title: "Finding Scholarships",
      desc: "11-step search methodology, boolean search operators, query formulas, and accredited database directory.",
      href: "/scholarships",
      icon: Search,
      color: "emerald"
    },
    {
      title: "Finding Professors",
      desc: "Academic supervisor outreach protocol: research compatibility audit, cold email generator, and follow-up rules.",
      href: "/professors",
      icon: Users,
      color: "cyan"
    },
    {
      title: "Required Documents",
      desc: "Complete dossier guides for Academic CV, 5-part SOP blueprint, Research Proposal, LORs, and interactive checklists.",
      href: "/documents",
      icon: FileCheck,
      color: "purple"
    },
    {
      title: "Application Process",
      desc: "Flawless portal submission instructions, time zone verification, referee monitoring, and interview preparation.",
      href: "/roadmap#phase-09",
      icon: Send,
      color: "amber"
    },
    {
      title: "Frequently Asked Questions",
      desc: "Practical, nuanced answers to 12 critical questions on IELTS waivers, low GPAs, publications, and rejection recovery.",
      href: "/faqs",
      icon: HelpCircle,
      color: "rose"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-2">
            Explore the Platform
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Quick Navigation Hub
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Jump directly to the relevant stage of your scholarship application preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="p-5 rounded-2xl bg-slate-900/50 border border-white/[0.07] hover:border-white/20 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-white mb-3.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 group-hover:text-teal-300 pt-2 border-t border-white/5">
                  <span>Open Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
