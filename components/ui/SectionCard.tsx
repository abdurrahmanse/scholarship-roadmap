"use client";

import React from "react";

export type SectionCardGlow = "none" | "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose";
export type SectionCardVariant = "default" | "nested" | "bordered" | "subtle";

export interface SectionCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: SectionCardVariant;
  glow?: SectionCardGlow;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const GLOW_CLASSES: Record<SectionCardGlow, string> = {
  none: "border-white/10 hover:border-white/20",
  indigo: "border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10",
  cyan: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
  emerald: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10",
  amber: "border-amber-500/20 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10",
  purple: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10",
  rose: "border-rose-500/20 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10"
};

const VARIANT_CLASSES: Record<SectionCardVariant, string> = {
  default: "bg-[#0f1422] rounded-2xl border shadow-xl shadow-black/30",
  nested: "bg-[#090d16] rounded-xl border border-white/5",
  bordered: "bg-[#0f1422]/60 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl",
  subtle: "bg-white/[0.02] rounded-xl border border-white/5"
};

/**
 * Universal decoupled SectionCard component following DRY principles.
 * Encapsulates panel styling, specular highlights, customizable headers,
 * badge tags, icons, action buttons, and optional footers.
 */
export function SectionCard({
  title,
  subtitle,
  badge,
  icon,
  headerAction,
  footer,
  variant = "default",
  glow = "none",
  className = "",
  bodyClassName = "",
  headerClassName = "",
  children,
  onClick
}: SectionCardProps) {
  const hasHeader = Boolean(title || subtitle || badge || icon || headerAction);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${VARIANT_CLASSES[variant]} ${GLOW_CLASSES[glow]} ${className}`}
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Header section */}
      {hasHeader && (
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 sm:p-6 border-b border-white/10 ${headerClassName}`}
        >
          <div className="flex items-center gap-3 min-w-0">
            {icon && (
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 text-indigo-400">
                {icon}
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                {badge && <div>{badge}</div>}
                {title && (
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight truncate">
                    {title}
                  </h3>
                )}
              </div>
              {subtitle && (
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}

      {/* Body content */}
      <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>

      {/* Footer section */}
      {footer && (
        <div className="px-5 py-4 sm:px-6 bg-black/20 border-t border-white/10 flex items-center justify-between gap-3">
          {footer}
        </div>
      )}
    </div>
  );
}
