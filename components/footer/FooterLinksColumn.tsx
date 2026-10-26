"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterLinksColumnProps {
  title: string;
  colorClass: string;
  links: readonly FooterLinkItem[];
}

export function FooterLinksColumn({
  title,
  colorClass,
  links,
}: FooterLinksColumnProps) {
  return (
    <div>
      <h4
        className={`font-bold text-xs tracking-wider uppercase mb-3.5 font-mono ${colorClass}`}
      >
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-400 group text-xs"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <Link
                href={link.href}
                className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 inline-block transition-transform duration-150 text-xs"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinksColumn;
