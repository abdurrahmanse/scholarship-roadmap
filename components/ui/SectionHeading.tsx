import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose" | "slate";
  badgeIcon?: React.ReactNode;
  pulsingBadge?: boolean;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "indigo",
  badgeIcon,
  pulsingBadge = false,
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 flex flex-col ${alignStyles} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} icon={badgeIcon} size="md" pulsingDot={pulsingBadge} shimmer>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans max-w-2xl">
          {subtitle}
        </p>
      )}
      {/* Subtle tech gradient line accent */}
      <div className={`mt-5 h-[2px] w-20 bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-cyan-500/0 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

