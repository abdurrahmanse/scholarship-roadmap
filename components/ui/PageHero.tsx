"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { renderCommonIcon } from "./IconUtils";

export type PageHeroTheme = "indigo" | "cyan" | "purple" | "emerald" | "amber" | "blue";

export interface PageHeroHighlight {
  label: string;
  iconName?: string;
  icon?: React.ReactNode;
}

export interface PageHeroProps {
  badge: string;
  badgeIconName?: string;
  badgeIcon?: React.ReactNode;
  theme?: PageHeroTheme;
  title: string;
  highlightWord?: string;
  subtitle: string;
  highlights?: PageHeroHighlight[];
  gradientText?: string;
  children?: React.ReactNode;
}

const THEME_STYLES: Record<
  PageHeroTheme,
  {
    badgeContainer: string;
    badgeText: string;
    radarPing: string;
    radarDot: string;
    gradient: string;
    defaultHighlightIcon: string;
    spotlight: string;
    orbLeft: string;
    orbRight: string;
  }
> = {
  indigo: {
    badgeContainer: "bg-indigo-950/80 border-indigo-700/60 shadow-indigo-950/50",
    badgeText: "text-indigo-300",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-500",
    gradient: "from-indigo-400 via-cyan-400 to-emerald-400",
    defaultHighlightIcon: "text-emerald-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(99, 102, 241, 0.3) 0%, rgba(20, 184, 166, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-indigo-600/20",
    orbRight: "bg-teal-500/18",
  },
  cyan: {
    badgeContainer: "bg-cyan-950/80 border-cyan-700/60 shadow-cyan-950/50",
    badgeText: "text-cyan-300",
    radarPing: "bg-cyan-400",
    radarDot: "bg-cyan-500",
    gradient: "from-cyan-400 via-blue-400 to-indigo-400",
    defaultHighlightIcon: "text-cyan-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(56, 189, 248, 0.3) 0%, rgba(99, 102, 241, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-cyan-500/20",
    orbRight: "bg-indigo-600/18",
  },
  purple: {
    badgeContainer: "bg-purple-950/80 border-purple-700/60 shadow-purple-950/50",
    badgeText: "text-purple-300",
    radarPing: "bg-purple-400",
    radarDot: "bg-purple-500",
    gradient: "from-purple-400 via-pink-400 to-indigo-400",
    defaultHighlightIcon: "text-purple-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(168, 85, 247, 0.3) 0%, rgba(99, 102, 241, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-purple-600/20",
    orbRight: "bg-pink-500/18",
  },
  emerald: {
    badgeContainer: "bg-emerald-950/80 border-emerald-700/60 shadow-emerald-950/50",
    badgeText: "text-emerald-300",
    radarPing: "bg-emerald-400",
    radarDot: "bg-emerald-500",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    defaultHighlightIcon: "text-emerald-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(16, 185, 129, 0.3) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-emerald-600/20",
    orbRight: "bg-teal-500/18",
  },
  amber: {
    badgeContainer: "bg-amber-950/80 border-amber-700/60 shadow-amber-950/50",
    badgeText: "text-amber-300",
    radarPing: "bg-amber-400",
    radarDot: "bg-amber-500",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    defaultHighlightIcon: "text-amber-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(245, 158, 11, 0.3) 0%, rgba(239, 68, 68, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-amber-500/20",
    orbRight: "bg-rose-500/18",
  },
  blue: {
    badgeContainer: "bg-blue-950/80 border-blue-700/60 shadow-blue-950/50",
    badgeText: "text-blue-300",
    radarPing: "bg-cyan-400",
    radarDot: "bg-cyan-500",
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
    defaultHighlightIcon: "text-cyan-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(59, 130, 246, 0.3) 0%, rgba(20, 184, 166, 0.18) 45%, transparent 75%)",
    orbLeft: "bg-blue-600/20",
    orbRight: "bg-cyan-500/18",
  },
};

/**
 * Universal PageHero component following DRY architecture.
 * Responsive across 5 device categories (mobile, small tablet, tablet, laptop, desktop).
 */
export function PageHero({
  badge,
  badgeIconName,
  badgeIcon,
  theme = "indigo",
  title,
  highlightWord,
  subtitle,
  highlights = [],
  gradientText,
  children,
}: PageHeroProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.indigo;
  const gradient = gradientText || styles.gradient;

  const iconElement =
    badgeIcon ||
    (badgeIconName ? renderCommonIcon(badgeIconName, "w-3.5 h-3.5 " + styles.badgeText) : null);

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b border-white/[0.08] bg-[#060913]">
      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background: styles.spotlight,
        }}
      />

      {/* 2. Delicate Micro-Grid Pattern with Radial Mask Fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
        }}
      />

      {/* 3. Floating Aurora Ambient Glow Orbs */}
      <div
        className={`absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] ${styles.orbLeft} blur-[100px] pointer-events-none rounded-full`}
      />
      <div
        className={`absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] ${styles.orbRight} blur-[110px] pointer-events-none rounded-full`}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(650px,90vw)] h-[220px] bg-cyan-400/10 blur-[85px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Radar Badge Ribbon */}
        <div
          className={`inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-5 sm:mb-6 shadow-xl backdrop-blur-md max-w-[calc(100vw-32px)] ${styles.badgeContainer} ${styles.badgeText}`}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className={`animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.radarPing}`}
            />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${styles.radarDot}`} />
          </span>
          {iconElement}
          <span className="font-mono text-[10px] sm:text-[11px] truncate">{badge}</span>
        </div>

        {/* Hero Title with Gradient Text Accent */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] font-heading break-words px-1">
          {title}{" "}
          {highlightWord && (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {highlightWord}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-sans font-normal px-2">
          {subtitle}
        </p>

        {/* Optional Action Buttons or Custom Children */}
        {children && <div className="mb-6 sm:mb-8">{children}</div>}

        {/* Highlights Telemetry Ribbon */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs">
            {highlights.map((h) => {
              const hIcon =
                h.icon ||
                (h.iconName ? (
                  renderCommonIcon(h.iconName, "w-3.5 h-3.5 " + styles.defaultHighlightIcon)
                ) : (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${styles.defaultHighlightIcon}`} />
                ));

              return (
                <div
                  key={h.label}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#0f1422] border border-white/10 text-slate-300 font-mono text-[10px] sm:text-[11px]"
                >
                  {hIcon}
                  <span>{h.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
