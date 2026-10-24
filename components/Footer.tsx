"use client";

import Link from "next/link";
import { Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import { footerData } from "@/data/navigationData";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-800/80 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span>{footerData.brand.name}</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-[12px]">
              {footerData.brand.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{footerData.brand.badge}</span>
            </div>
          </div>

          {/* Roadmap Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Roadmap Navigation</h4>
            <ul className="space-y-2">
              {footerData.roadmapNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory & Tools */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Programs & Toolkits</h4>
            <ul className="space-y-2">
              {footerData.directoryAndTools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Authoritative Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Key Databases</h4>
            <ul className="space-y-2">
              {footerData.keyDatabases.map((db) => (
                <li key={db.href}>
                  {db.external ? (
                    <a
                      href={db.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <span>{db.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <Link href={db.href} className="hover:text-white transition-colors">
                      {db.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-neutral-400">
              Crafted for ambitious AI researchers worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
