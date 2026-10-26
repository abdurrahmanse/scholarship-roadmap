"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinksData } from "@/data/navigationData";
import { getIconComponent } from "@/components/ui/iconUtils";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
      {navLinksData.map((link) => {
        const Icon = getIconComponent(link.iconName);
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
              isActive
                ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 shadow-lg shadow-indigo-950/50"
                : "text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent"
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isActive ? "text-indigo-400 scale-110" : "opacity-70"
              }`}
            />
            <span>{link.label}</span>
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
