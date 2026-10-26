"use client";

import React from "react";
import { Sparkles, ListOrdered, Globe2, AlertTriangle, GraduationCap, ClipboardCheck } from "lucide-react";

const ANCHOR_LINKS = [
  { href: "#what-why", label: "Overview & Rationale", icon: Sparkles },
  { href: "#how-to-execute", label: "Step-by-Step Action Plan", icon: ListOrdered },
  { href: "#official-resources", label: "Official Portals", icon: Globe2 },
  { href: "#mistakes-example", label: "Pitfalls & Example", icon: AlertTriangle },
  { href: "#degree-nuances", label: "Degree Nuances", icon: GraduationCap },
  { href: "#checklist", label: "Preparation Checklist", icon: ClipboardCheck },
];

export function PhaseDetailAnchorNav() {
  return (
    <nav aria-label="Phase section jump links" className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.08]">
      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mr-1">
        Jump to:
      </span>
      {ANCHOR_LINKS.map((anchor) => {
        const Icon = anchor.icon;
        return (
          <a
            key={anchor.href}
            href={anchor.href}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all"
          >
            <Icon className="w-3 h-3 text-teal-400" />
            <span>{anchor.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default PhaseDetailAnchorNav;
