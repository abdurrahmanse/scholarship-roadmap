"use client";

import React from "react";
import { Compass, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { HomeHeroBadge } from "@/data/homeData";

const ICON_MAP = {
  Compass,
  Globe2,
  ShieldCheck,
  Sparkles
};

const COLOR_MAP = {
  indigo: "text-indigo-400 border-indigo-500/20",
  teal: "text-teal-400 border-teal-500/20",
  emerald: "text-emerald-400 border-emerald-500/20",
  amber: "text-amber-400 border-amber-500/20"
};

export interface HeroValueBadgesProps {
  badges: HomeHeroBadge[];
}

export function HeroValueBadges({ badges }: HeroValueBadgesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 text-left max-w-4xl mx-auto">
      {badges.map((badge, idx) => {
        const Icon = ICON_MAP[badge.iconName as keyof typeof ICON_MAP] || Compass;
        const colorClass = COLOR_MAP[badge.color] || COLOR_MAP.indigo;

        return (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all duration-200"
          >
            <div className={`flex items-center gap-2 text-xs font-mono font-bold mb-1 ${colorClass.split(" ")[0]}`}>
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{badge.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-snug">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HeroValueBadges;
