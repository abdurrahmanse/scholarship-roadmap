import React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Obsidian Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),rgba(9,13,22,0.98)_75%,#090d16_100%)]" />

      {/* Subtle Micro-Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Animated Ambient Glow Orb 1: Electric Indigo (Top Center) */}
      <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-gradient-to-b from-indigo-500/15 via-indigo-500/5 to-transparent blur-[110px] animate-pulse-glow" />

      {/* Floating Animated Ambient Glow Orb 2: Cyber Sky (Top Right) */}
      <div className="absolute top-[12%] -right-[120px] w-[450px] h-[450px] rounded-full bg-sky-500/10 blur-[120px] animate-float-slow" />

      {/* Floating Animated Ambient Glow Orb 3: Mint Emerald (Bottom Left) */}
      <div className="absolute top-[48%] -left-[140px] w-[450px] h-[450px] rounded-full bg-emerald-500/8 blur-[130px] animate-float-reverse" />

      {/* Top Beam Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </div>
  );
}
