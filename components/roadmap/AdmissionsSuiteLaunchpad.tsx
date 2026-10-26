import React from "react";
import Link from "next/link";
import { Compass, Award, Mail, FileText } from "lucide-react";

export function AdmissionsSuiteLaunchpad() {
  return (
    <section className="pt-12 border-t border-white/10">
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f1422] to-[#090d16] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 block mb-1">
              Integrated Scholarship Engine
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Accompanying Application Toolkits & Databases
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            100% Free & Open-Access
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/countries"
            className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <Compass className="w-5 h-5 text-teal-400 mb-2" />
              <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                Country Guides
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Funding models, supervisor requirements, and official portals
                for 20+ countries.
              </p>
            </div>
            <div className="pt-3 flex items-center text-[11px] font-mono text-teal-400 font-semibold mt-3">
              <span>Explore Countries &rarr;</span>
            </div>
          </Link>

          <Link
            href="/scholarships"
            className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <Award className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Scholarship Finder
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Verified government directories, Boolean formulas, and
                anti-fraud protocols.
              </p>
            </div>
            <div className="pt-3 flex items-center text-[11px] font-mono text-emerald-400 font-semibold mt-3">
              <span>Search Portals &rarr;</span>
            </div>
          </Link>

          <Link
            href="/professors"
            className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <Mail className="w-5 h-5 text-indigo-400 mb-2" />
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                Professor Outreach
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Cold email blueprints, subject formulas, and research fit
                checklist.
              </p>
            </div>
            <div className="pt-3 flex items-center text-[11px] font-mono text-indigo-400 font-semibold mt-3">
              <span>Copy Templates &rarr;</span>
            </div>
          </Link>

          <Link
            href="/documents"
            className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <FileText className="w-5 h-5 text-cyan-400 mb-2" />
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                Document Guidelines
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Full architectures for Academic CV, SOP, Motivation Letter, and
                Proposals.
              </p>
            </div>
            <div className="pt-3 flex items-center text-[11px] font-mono text-cyan-400 font-semibold mt-3">
              <span>View Guidelines &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSuiteLaunchpad;
