"use client";

import React from "react";
import Link from "next/link";

export interface FooterNavLinkProps {
  href: string;
  label: string;
}

export function FooterNavLink({ href, label }: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 inline-block transition-transform duration-150 text-xs"
    >
      {label}
    </Link>
  );
}

export default FooterNavLink;
