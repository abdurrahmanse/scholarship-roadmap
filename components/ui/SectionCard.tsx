"use client";

import React from "react";
import { BadgeVariant } from "./Badge";
import { CardHeader } from "./CardHeader";

export type SectionCardGlow = "none" | "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose";
export type SectionCardVariant = "default" | "nested" | "bordered" | "subtle";

export interface SectionCardProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  badgeVariant?: BadgeVariant | string;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: SectionCardVariant;
  glow?: SectionCardGlow | string;
  borderGlow?: SectionCardGlow | string;
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
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
  badgeVariant,
  icon,
  headerAction,
  headerRight,
  footer,
  variant = "default",
  glow,
  borderGlow,
  className = "",
  bodyClassName = "",
  headerClassName = "",
  children,
  onClick
}: SectionCardProps) {
  const effectiveGlowKey = (borderGlow || glow || "none") as SectionCardGlow;
  const glowClass = GLOW_CLASSES[effectiveGlowKey] || GLOW_CLASSES.none;
  const effectiveAction = headerRight || headerAction;

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${VARIANT_CLASSES[variant]} ${glowClass} ${className}`}
    >
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Individual Card Header */}
      <CardHeader
        title={title}
        subtitle={subtitle}
        badge={badge}
        badgeVariant={badgeVariant}
        icon={icon}
        action={effectiveAction}
        className={headerClassName}
        borderBottom={true}
      />

      {/* Body content */}
      {children && <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>}

      {/* Footer section */}
      {footer && (
        <div className="px-5 py-4 sm:px-6 bg-black/20 border-t border-white/10 flex items-center justify-between gap-3">
          {footer}
        </div>
      )}
    </div>
  );
}
