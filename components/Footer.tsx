"use client";

import Link from "next/link";
import { Cpu, ExternalLink, ShieldCheck, Heart } from "lucide-react";

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
              <span>Scholarship AI Roadmap</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-[12px]">
              The canonical open-access blueprint for Computer Science and Artificial Intelligence researchers securing 100% fully funded graduate positions abroad.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Full-Ride Standard</span>
            </div>
          </div>

          {/* Roadmap Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Roadmap Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Master Overview</Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white transition-colors">7-Phase Step-by-Step Roadmap</Link>
              </li>
              <li>
                <Link href="/roadmap#phase-0" className="hover:text-white transition-colors">Phase 0: Math & Compute</Link>
              </li>
              <li>
                <Link href="/roadmap#phase-1" className="hover:text-white transition-colors">Phase 1: Workshops & arXiv</Link>
              </li>
              <li>
                <Link href="/roadmap#phase-2" className="hover:text-white transition-colors">Phase 2: CSRankings & PI Outreach</Link>
              </li>
            </ul>
          </div>

          {/* Directory & Tools */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Programs & Toolkits</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">Funded AI Programs & Labs</Link>
              </li>
              <li>
                <Link href="/toolkit#email-scripts" className="hover:text-white transition-colors">Cold Email Scripts</Link>
              </li>
              <li>
                <Link href="/toolkit#sop-blueprint" className="hover:text-white transition-colors">Technical SOP Blueprint</Link>
              </li>
              <li>
                <Link href="/interviews" className="hover:text-white transition-colors">STAR-L Technical Defense</Link>
              </li>
              <li>
                <Link href="/interviews#visa-tal" className="hover:text-white transition-colors">Technology Alert List (TAL) Guide</Link>
              </li>
            </ul>
          </div>

          {/* External Authoritative Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3">Key Databases</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://csrankings.org" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>CSRankings.org</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://arxiv.org/corr" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>arXiv Computer Science</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://openreview.net" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>OpenReview.net</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://huggingface.co/spaces" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Hugging Face Spaces</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">Admissions FAQ & Knowledge Base</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Scholarship AI Roadmap. Open-access public good licensed under CC BY-SA 4.0 & MIT.</p>
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
