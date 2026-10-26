"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { navLinksData, headerData } from "@/data/navigationData";
import { getIconComponent } from "@/components/ui/iconUtils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2"
            : "py-3"
        }`}
      >
        {/* Floating pill container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div
            className={`flex items-center justify-between gap-3 rounded-2xl px-4 sm:px-5 transition-all duration-500 ${
              scrolled
                ? "h-14 bg-[#07091a]/95 backdrop-blur-2xl border border-white/[0.10] shadow-[0_8px_40px_rgba(0,0,0,0.5)] shadow-black/60"
                : "h-16 bg-[#07091a]/70 backdrop-blur-xl border border-white/[0.07]"
            }`}
          >
            {/* ── Brand ── */}
            <Brand />

            {/* ── Desktop Nav ── */}
            <DesktopNav pathname={pathname} />

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Live pulse badge */}
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>{headerData.actions.statusBadge}</span>
              </div>

              {/* CTA Button */}
              <Link
                href={headerData.actions.ctaButton.href}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 group border border-indigo-400/30"
              >
                {headerData.actions.ctaButton.label}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 text-slate-300 hover:text-white transition-all"
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
          </div>
        </div>
      </header>

      {/* Spacer to compensate for fixed header */}
      <div className="h-[76px]" />

      {/* ── Mobile Drawer ── */}
      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}

/* ──────────────── Sub-components ──────────────── */

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      {/* Icon */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-105 shrink-0">
        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        {/* Glow ring on hover */}
        <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 pointer-events-none" />
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-heading font-extrabold text-sm sm:text-[15px] tracking-tight text-white">
          Scholarship
          <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent ml-1">
            Roadmap
          </span>
        </span>
        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-0.5 hidden sm:block">
          Fully Funded Graduate Guide
        </span>
      </div>
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden lg:flex items-center" aria-label="Main navigation">
      {/* Pill container */}
      <div className="flex items-center gap-0.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
        {navLinksData.map((link) => {
          const Icon = getIconComponent(link.iconName);
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-indigo-600/25 text-indigo-300 shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
              }`}
            >
              <Icon
                className={`w-3 h-3 flex-shrink-0 transition-colors ${
                  isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
                }`}
              />
              {link.label}
              {/* Active underline glow */}
              {isActive && (
                <span className="absolute bottom-0.5 left-3 right-3 h-px bg-gradient-to-r from-indigo-500/0 via-indigo-400 to-indigo-500/0 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[300px] max-w-[90vw] flex flex-col lg:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel bg */}
        <div className="absolute inset-0 bg-[#08101f] border-l border-white/[0.08]" />
        {/* Top gradient accent */}
        <div className="absolute top-0 inset-x-0 h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 120% 60% at 80% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
        />

        <div className="relative flex flex-col h-full overflow-y-auto">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-heading font-bold text-white leading-none">
                  {headerData.mobileDrawer.title}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
                  {headerData.mobileDrawer.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinksData.map((link) => {
              const Icon = getIconComponent(link.iconName);
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 group ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "bg-indigo-500/20 text-indigo-400"
                      : "bg-white/[0.05] text-slate-500 group-hover:text-slate-300"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-opacity ${isActive ? "opacity-70 text-indigo-400" : "opacity-0 group-hover:opacity-40"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Bottom CTA */}
          <div className="px-4 pb-6 pt-3 border-t border-white/[0.07]">
            <Link
              href={headerData.mobileDrawer.ctaButton.href}
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all group border border-indigo-400/30"
            >
              {headerData.mobileDrawer.ctaButton.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <p className="text-center text-[10px] text-slate-600 font-mono mt-3">
              Free · Open Access · No Account Required
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteHeader;
