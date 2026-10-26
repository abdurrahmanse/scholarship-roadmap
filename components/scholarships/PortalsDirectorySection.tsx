"use client";

import React from "react";
import { Globe2, ExternalLink } from "lucide-react";
import { verifiedScholarshipPortals, scholarshipFinderControlsData } from "@/data/scholarshipsSearchData";

export function PortalsDirectorySection() {
  const { portalsTitle, portalsSubtitle } = scholarshipFinderControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Globe2 className="w-4 h-4" />
          <span>Verified Directory</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {portalsTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {portalsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {verifiedScholarshipPortals.map((portal) => (
          <a
            key={portal.id}
            href={portal.url}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  {portal.countryOrRegion}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {portal.coverageType}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                {portal.name}
              </h4>
              <p className="text-[11px] text-slate-400 mb-2 font-mono">{portal.governingBody}</p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{portal.notes}</p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400 font-semibold group-hover:text-emerald-300">
              <span>Open Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortalsDirectorySection;
