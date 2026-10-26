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
  }
> = {
  indigo: {
    badgeContainer: "bg-indigo-950/80 border-indigo-700/60 shadow-indigo-950/50",
    badgeText: "text-indigo-300",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-500",
    gradient: "from-indigo-400 via-cyan-400 to-emerald-400",
    defaultHighlightIcon: "text-emerald-400",
  },
  cyan: {
    badgeContainer: "bg-cyan-950/80 border-cyan-700/60 shadow-cyan-950/50",
    badgeText: "text-cyan-300",
    radarPing: "bg-cyan-400",
    radarDot: "bg-cyan-500",
    gradient: "from-cyan-400 via-blue-400 to-indigo-400",
    defaultHighlightIcon: "text-cyan-400",
  },
  purple: {
    badgeContainer: "bg-purple-950/80 border-purple-700/60 shadow-purple-950/50",
    badgeText: "text-purple-300",
    radarPing: "bg-purple-400",
    radarDot: "bg-purple-500",
    gradient: "from-purple-400 via-pink-400 to-indigo-400",
    defaultHighlightIcon: "text-purple-400",
  },
  emerald: {
    badgeContainer: "bg-emerald-950/80 border-emerald-700/60 shadow-emerald-950/50",
    badgeText: "text-emerald-300",
    radarPing: "bg-emerald-400",
    radarDot: "bg-emerald-500",
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    defaultHighlightIcon: "text-emerald-400",
  },
  amber: {
    badgeContainer: "bg-amber-950/80 border-amber-700/60 shadow-amber-950/50",
    badgeText: "text-amber-300",
    radarPing: "bg-amber-400",
    radarDot: "bg-amber-500",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    defaultHighlightIcon: "text-amber-400",
  },
  blue: {
    badgeContainer: "bg-blue-950/80 border-blue-700/60 shadow-blue-950/50",
    badgeText: "text-blue-300",
    radarPing: "bg-cyan-400",
    radarDot: "bg-cyan-500",
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
    defaultHighlightIcon: "text-cyan-400",
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
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b border-white/[0.06]">
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
