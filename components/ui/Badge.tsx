import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose" | "slate";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "indigo",
  size = "md",
  className = "",
  icon
}: BadgeProps) {
  const variantStyles = {
    indigo: "bg-indigo-950/70 text-indigo-300 border-indigo-800/60 shadow-indigo-950/50",
    cyan: "bg-cyan-950/70 text-cyan-300 border-cyan-800/60 shadow-cyan-950/50",
    emerald: "bg-emerald-950/70 text-emerald-300 border-emerald-800/60 shadow-emerald-950/50",
    amber: "bg-amber-950/70 text-amber-300 border-amber-800/60 shadow-amber-950/50",
    purple: "bg-purple-950/70 text-purple-300 border-purple-800/60 shadow-purple-950/50",
    rose: "bg-rose-950/70 text-rose-300 border-rose-800/60 shadow-rose-950/50",
    slate: "bg-slate-900/80 text-slate-300 border-slate-700/60 shadow-slate-950/50"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5"
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border shadow-sm transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
