"use client";

import React, { useState, useRef } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGlow?: "none" | "indigo" | "cyan" | "emerald" | "purple" | "amber" | "rose";
  onClick?: () => void;
  enableSpotlight?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  borderGlow = "none",
  onClick,
  enableSpotlight = true
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableSpotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const glowStyles = {
    none: "border-white/[0.08] hover:border-white/[0.16]",
    indigo: "border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10",
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10",
    purple: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10",
    amber: "border-amber-500/20 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10",
    rose: "border-rose-500/20 hover:border-rose-500/50 hover:shadow-xl hover:shadow-rose-500/10"
  };

  const spotlightGlows = {
    none: "rgba(255, 255, 255, 0.06)",
    indigo: "rgba(99, 102, 241, 0.15)",
    cyan: "rgba(6, 182, 212, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)"
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-300 ease-out hover:-translate-y-1.5"
    : "";

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl bg-[#090e24]/70 backdrop-blur-xl border p-6 sm:p-7 shadow-2xl shadow-black/40 ${glowStyles[borderGlow]} ${hoverClass} ${className}`}
    >
      {/* Top Specular Line Accent */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Dynamic Cursor Spotlight Layer */}
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightGlows[borderGlow]}, transparent 70%)`
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

