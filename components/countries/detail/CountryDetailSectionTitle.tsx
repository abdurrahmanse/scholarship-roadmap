"use client";

import React from "react";

export interface CountryDetailSectionTitleProps {
  icon: React.ReactNode;
  title: string;
  color: "teal" | "indigo" | "emerald" | "amber" | "violet";
}

export function CountryDetailSectionTitle({
  icon,
  title,
  color,
}: CountryDetailSectionTitleProps) {
  const colorMap: Record<string, string> = {
    teal: "text-teal-400",
    indigo: "text-indigo-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    violet: "text-violet-400",
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <span className={`${colorMap[color]} shrink-0`}>{icon}</span>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
        {title}
      </h2>
    </div>
  );
}

export default CountryDetailSectionTitle;
