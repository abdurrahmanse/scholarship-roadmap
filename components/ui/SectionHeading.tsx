import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose" | "slate";
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "indigo",
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className = ""
}: SectionHeadingProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignStyles} ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
