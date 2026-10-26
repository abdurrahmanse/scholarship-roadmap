"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "#overview", label: "Overview & Philosophy" },
  { href: "#funding-routes", label: "Funding Routes" },
  { href: "#gov-scholarships", label: "Government Scholarships" },
  { href: "#phd-masters", label: "PhD & Master’s Models" },
  { href: "#assistantships", label: "Assistantships" },
  { href: "#supervisor", label: "Supervisor Contact" },
  { href: "#language", label: "Language & Deadlines" },
  { href: "#sequence", label: "Application Sequence" },
  { href: "#warnings", label: "Warnings & Limitations" },
  { href: "#portals", label: "Official Portals" },
];

export function CountryJumpNav() {
  return (
    <div className="hidden lg:block w-72 xl:w-80 shrink-0">
      <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 sticky top-24 shadow-xl backdrop-blur-xl">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
          <span>Page Sections</span>
          <span className="text-[10px] text-teal-400 font-normal">Quick Jump</span>
        </h2>
        <nav className="space-y-1.5" aria-label="Country detail page sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-teal-300 hover:bg-white/5 transition-all group"
            >
              <ChevronRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default CountryJumpNav;
