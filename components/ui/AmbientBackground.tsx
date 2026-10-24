import React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Cyber Radial Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Subtle Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />

      {/* Floating Animated Aurora Orb 1: Electric Indigo (Top Center) */}
      <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-gradient-to-b from-indigo-600/25 via-indigo-500/10 to-transparent blur-[120px] animate-pulse-glow" />

      {/* Floating Animated Aurora Orb 2: Cyber Cyan (Top Right) */}
      <div className="absolute top-[10%] -right-[150px] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-cyan-500/18 via-sky-500/8 to-transparent blur-[130px] animate-float-slow" />

      {/* Floating Animated Aurora Orb 3: Radiant Purple / Emerald (Bottom Left) */}
      <div className="absolute top-[45%] -left-[180px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-600/15 via-emerald-500/8 to-transparent blur-[140px] animate-float-reverse" />

      {/* Floating Animated Aurora Orb 4: Neon Emerald (Bottom Center) */}
      <div className="absolute bottom-[5%] left-1/3 w-[500px] h-[400px] rounded-full bg-emerald-500/10 blur-[130px] animate-float-slow" />

      {/* Top Beam Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    </div>
  );
}
