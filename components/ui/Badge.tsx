import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
  pulsingDot?: boolean;
  shimmer?: boolean;
}

export function Badge({
  children,
  variant = "indigo",
  size = "md",
  className = "",
  icon,
  pulsingDot = false,
  shimmer = false
}: BadgeProps) {
  const variantStyles = {
    indigo: "bg-indigo-950/70 text-indigo-300 border-indigo-700/60 shadow-indigo-950/50",
    cyan: "bg-cyan-950/70 text-cyan-300 border-cyan-700/60 shadow-cyan-950/50",
    emerald: "bg-emerald-950/70 text-emerald-300 border-emerald-700/60 shadow-emerald-950/50",
    amber: "bg-amber-950/70 text-amber-300 border-amber-700/60 shadow-amber-950/50",
    purple: "bg-purple-950/70 text-purple-300 border-purple-700/60 shadow-purple-950/50",
    rose: "bg-rose-950/70 text-rose-300 border-rose-700/60 shadow-rose-950/50",
    slate: "bg-slate-900/80 text-slate-300 border-slate-700/60 shadow-slate-950/50"
  };

  const dotColors = {
    indigo: "bg-indigo-400",
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    rose: "bg-rose-400",
    slate: "bg-slate-400"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 gap-1.5 font-mono",
    md: "text-xs px-3 py-1 gap-1.5 font-medium"
  };

  const shimmerClass = shimmer ? "shimmer-badge" : "";

  return (
    <span
      className={`relative inline-flex items-center rounded-full border shadow-sm transition-all duration-200 overflow-hidden ${variantStyles[variant]} ${sizeStyles[size]} ${shimmerClass} ${className}`}
    >
      {pulsingDot && (
        <span className="relative flex h-2 w-2 mr-0.5 shrink-0">
          <span
            className={`animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </span>
  );
}

