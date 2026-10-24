"use client";

import React from "react";
import Link from "next/link";
import { Compass, Cpu, FileCode, Presentation, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communityLaunchpadData } from "@/data/faqsSectionData";

export function CommunityHelpSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-purple-400" />;
      case "Presentation":
        return <Presentation className="w-5 h-5 text-pink-400" />;
      default:
        return <Compass className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Launchpad"
          badgeVariant="indigo"
          title="Ready to Secure Your 100% Fully Funded Position?"
          subtitle="Continue exploring the complete end-to-end knowledge base for prospective AI graduate researchers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityLaunchpadData.map((c) => (
            <GlassCard key={c.title} borderGlow="none" className="p-6 flex flex-col justify-between group hover:border-slate-700">
              <div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 w-fit mb-4">
                  {getIcon(c.iconName)}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{c.desc}</p>
              </div>

              <Link
                href={c.href}
                className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                <span>Explore section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
