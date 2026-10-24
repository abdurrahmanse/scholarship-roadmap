"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Cpu,
  Map,
  GraduationCap,
  Wrench,
  ShieldAlert,
  HelpCircle,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import { navLinksData, liveIndicatorData } from "@/data/navigationData";
import { LiveStatusTicker } from "@/components/ui/LiveStatusTicker";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return Cpu;
      case "Map":
        return Map;
      case "GraduationCap":
        return GraduationCap;
      case "Wrench":
        return Wrench;
      case "ShieldAlert":
        return ShieldAlert;
      case "HelpCircle":
        return HelpCircle;
      default:
        return Cpu;
    }
  };

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Live Status Telemetry Ribbon */}
      <LiveStatusTicker />

      {/* Main Glass Navigation Bar */}
      <div className="backdrop-blur-xl bg-[#090d16]/90 border-b border-white/10 shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            {/* Brand Logo with Creative Ambient Halo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-all duration-300 shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 pointer-events-none" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-1 sm:gap-1.5">
                  <span className="text-white">Scholarship</span>
                  <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    AI Roadmap
                  </span>
                </div>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <span className="text-[10px] text-slate-400 font-mono tracking-wide hidden sm:inline">
                    {liveIndicatorData.activePillText}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav Items with Micro-Interactions */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinksData.map((link) => {
                const Icon = getNavIcon(link.iconName);
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 shadow-lg shadow-indigo-950/50"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? "text-indigo-400 scale-110" : "opacity-70"
                      }`}
                    />
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Live Status Pill */}
            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{liveIndicatorData.label}</span>
              </div>

              <Link
                href="/roadmap"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold tracking-wide bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:scale-102 hover:shadow-indigo-500/40"
              >
                <span>Start Roadmap</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#090d16]/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1.5 shadow-2xl">
            {navLinksData.map((link) => {
              const Icon = getNavIcon(link.iconName);
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

