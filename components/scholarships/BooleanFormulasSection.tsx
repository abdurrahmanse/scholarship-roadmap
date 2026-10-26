"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { searchQueryFormulas, scholarshipFinderControlsData } from "@/data/scholarshipsSearchData";
import { CopyButton } from "@/components/ui/CopyButton";

export function BooleanFormulasSection() {
  const { booleanTitle, booleanSubtitle } = scholarshipFinderControlsData.sections;

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
          <Terminal className="w-4 h-4" />
          <span>Advanced Discovery</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {booleanTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          {booleanSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {searchQueryFormulas.map((formula) => (
          <div
            key={formula.id}
            className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">{formula.title}</h4>
                <div className="flex gap-1">
                  {formula.targetEngines.map((eng, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      {eng}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300">{formula.purpose}</p>

              {/* Code Box */}
              <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-teal-300 border border-white/5 break-all select-all">
                {formula.query}
              </div>

              <div className="text-[11px] text-slate-400">
                <strong className="text-slate-300 font-mono">Example:</strong> {formula.exampleFilled}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-end">
              <CopyButton textToCopy={formula.query} label="Copy Query" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooleanFormulasSection;
