"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { liveIndicatorData } from "@/data/navigationData";

export function HeaderBrand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-all duration-300 shrink-0">
        <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300 pointer-events-none" />
      </div>
      <div>
        <div className="font-heading font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-1 sm:gap-1.5">
          <span className="text-white">Scholarship</span>
          <span className="bg-gradient-to-r from-indigo-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Roadmap
          </span>
        </div>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span className="text-[10px] text-slate-400 font-mono tracking-wide hidden sm:inline">
            {liveIndicatorData.activePillText}
          </span>
        </div>
      </div>
    </Link>
  );
}
