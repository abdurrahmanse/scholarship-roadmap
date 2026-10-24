"use client";

import Link from "next/link";
import { Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import { footerData } from "@/data/navigationData";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#090d16]/95 text-slate-400 text-xs backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-sm">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-base tracking-tight">{footerData.brand.name}</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[12px] font-sans">
              {footerData.brand.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{footerData.brand.badge}</span>
            </div>
          </div>

          {/* Roadmap Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3.5 font-mono text-indigo-400">
              {footerData.sections.roadmap}
            </h4>
            <ul className="space-y-2.5">
              {footerData.roadmapNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 inline-block transition-transform duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory & Tools */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3.5 font-mono text-cyan-400">
              {footerData.sections.tools}
            </h4>
            <ul className="space-y-2.5">
              {footerData.directoryAndTools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 inline-block transition-transform duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Authoritative Resources */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-3.5 font-mono text-purple-400">
              {footerData.sections.databases}
            </h4>
            <ul className="space-y-2.5">
              {footerData.keyDatabases.map((db) => (
                <li key={db.href}>
                  {db.external ? (
                    <a
                      href={db.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-400 group"
                    >
                      <span>{db.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link href={db.href} className="hover:text-white transition-colors text-slate-400">
                      {db.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400 font-sans">
              {footerData.subtext}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
