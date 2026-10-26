"use client";

import React from "react";
import { DocumentGuideline, documentsGuideControlsData } from "@/data/documentsData";

export interface DocumentBlueprintSectionProps {
  document: DocumentGuideline;
}

export function DocumentBlueprintSection({ document }: DocumentBlueprintSectionProps) {
  const { blueprintTitle } = documentsGuideControlsData.sections;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
        {blueprintTitle}
      </h4>

      <div className="space-y-3">
        {document.structure.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5"
          >
            <h5 className="text-xs font-bold text-teal-300 font-mono">{item.section}</h5>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.guidance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentBlueprintSection;
