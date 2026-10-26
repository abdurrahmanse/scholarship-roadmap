"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinksData } from "@/data/navigationData";
import { getIconComponent } from "@/components/ui/iconUtils";

interface HeaderMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HeaderMobileDrawer({ isOpen, onClose }: HeaderMobileDrawerProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-white/10 bg-[#090d16]/95 backdrop-blur-2xl px-4 pt-3 pb-5 space-y-1.5 shadow-2xl">
      {navLinksData.map((link) => {
        const Icon = getIconComponent(link.iconName);
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 font-semibold"
                : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Icon className="w-4 h-4 text-indigo-400" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
