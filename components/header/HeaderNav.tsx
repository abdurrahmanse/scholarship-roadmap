"use client";

import React from "react";
import Link from "next/link";
import { navLinksData } from "@/data/navigationData";

interface HeaderNavProps {
  pathname: string;
}

export function HeaderNav({ pathname }: HeaderNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5" aria-label="Main navigation">
      {navLinksData.map((link) => {
        const isActive =
          pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold transition-all duration-150 flex items-center gap-1.5 ${
              isActive
                ? "text-white bg-white/[0.08] border border-white/[0.08] shadow-sm"
                : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            <span>{link.label}</span>
            {link.badge && (
              <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {link.badge}
              </span>
            )}
            {/* Subtle active indicator dot */}
            {isActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-400" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default HeaderNav;
