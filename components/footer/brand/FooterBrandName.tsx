"use client";

import React from "react";
import Link from "next/link";
import { footerData } from "@/data/navigationData";
import { FooterLogo } from "./FooterLogo";

export function FooterBrandName() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-white font-bold text-sm group"
      aria-label="Scholarship Roadmap Home"
    >
      <FooterLogo />
      <span className="font-heading font-extrabold text-base tracking-tight text-white group-hover:text-teal-300 transition-colors">
        {footerData.brand.name}
      </span>
    </Link>
  );
}

export default FooterBrandName;
