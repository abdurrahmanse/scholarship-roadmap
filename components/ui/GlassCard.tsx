import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGlow?: "none" | "indigo" | "cyan" | "emerald" | "purple" | "amber" | "rose";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  borderGlow = "none",
  onClick
}: GlassCardProps) {
  const glowStyles = {
    none: "border-slate-800/80 hover:border-slate-700",
    indigo: "border-slate-800/80 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10",
    cyan: "border-slate-800/80 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10",
    emerald: "border-slate-800/80 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10",
    purple: "border-slate-800/80 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10",
    amber: "border-slate-800/80 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10",
    rose: "border-slate-800/80 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10"
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-300 ease-out hover:-translate-y-1"
    : "";

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-slate-900/70 backdrop-blur-xl border p-6 sm:p-7 ${glowStyles[borderGlow]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
