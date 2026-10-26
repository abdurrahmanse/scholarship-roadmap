"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { headerData } from "@/data/navigationData";

interface HeaderActionsProps {
  mobileOpen: boolean;
  onToggle: () => void;
}

export function HeaderActions({ mobileOpen, onToggle }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
      {/* Quick Search Shortcut (Tablet, Laptop & Desktop) */}
      <Link
        href={headerData.actions.searchButton.href}
        className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-slate-200 text-xs transition-all group"
        aria-label="Search scholarships directory"
      >
        <Search className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
        <span className="hidden xl:inline">{headerData.actions.searchButton.label}</span>
        <span className="xl:hidden">{headerData.actions.searchButton.shortLabel}</span>
        <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
          {headerData.actions.searchButton.shortcut}
        </kbd>
      </Link>

      {/* Primary Action Button (Start Roadmap) */}
      <Link
        href={headerData.actions.ctaButton.href}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all group"
      >
        <span>{headerData.actions.ctaButton.label}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>

      {/* Mobile & Tablet Hamburger Toggle */}
      <button
        onClick={onToggle}
        className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
        aria-label={headerData.actions.menuAriaLabel}
        aria-expanded={mobileOpen}
      >
        <span
          className={`absolute transition-all duration-200 ${
            mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        >
          <X className="w-4 h-4" />
        </span>
        <span
          className={`absolute transition-all duration-200 ${
            mobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <Menu className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}

export default HeaderActions;
