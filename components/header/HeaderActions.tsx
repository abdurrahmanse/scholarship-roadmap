"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { liveIndicatorData } from "@/data/navigationData";
import { Button } from "@/components/ui/Button";

interface HeaderActionsProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export function HeaderActions({
  mobileMenuOpen,
  onToggleMobileMenu
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Live Status Ping Pill */}
      <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>{liveIndicatorData.label}</span>
      </div>

      {/* Primary Action Button */}
      <Button
        href="/roadmap"
        variant="primary"
        size="sm"
        className="hidden sm:inline-flex"
      >
        Start Roadmap
      </Button>

      {/* Mobile Menu Hamburger Button */}
      <button
        onClick={onToggleMobileMenu}
        className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
    </div>
  );
}
