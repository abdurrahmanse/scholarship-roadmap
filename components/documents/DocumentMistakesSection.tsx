"use client";

import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { DocumentGuideline, documentsGuideControlsData } from "@/data/documentsData";

export interface DocumentMistakesSectionProps {
  document: DocumentGuideline;
}

export function DocumentMistakesSection({ document }: DocumentMistakesSectionProps) {
  const { mistakesTitle, checksTitle } = documentsGuideControlsData.sections;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Critical Mistakes */}
      <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2.5">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>{mistakesTitle}</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {document.commonMistakes.map((m, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span className="leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Official Checks */}
      <div className="p-4 sm:p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2.5">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{checksTitle}</span>
        </div>
        <ul className="space-y-1.5 text-xs text-slate-300">
          {document.officialChecks.map((check, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-indigo-400 font-bold">•</span>
              <span className="leading-relaxed">{check}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocumentMistakesSection;
