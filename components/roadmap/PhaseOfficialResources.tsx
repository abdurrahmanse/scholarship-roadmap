"use client";

import React from "react";
import { ExternalLink, Globe2 } from "lucide-react";
import { PhaseOfficialResource, roadmapControlsData } from "@/data/roadmapPhasesData";

export interface PhaseOfficialResourcesProps {
  resources: PhaseOfficialResource[];
}

export function PhaseOfficialResources({ resources }: PhaseOfficialResourcesProps) {
  const { whereHeading } = roadmapControlsData.cardLabels;

  return (
    <div className="space-y-3">
      <h4 className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
        <Globe2 className="w-3.5 h-3.5" />
        <span>{whereHeading}</span>
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {resources.map((res, idx) => (
          <a
            key={idx}
            href={res.url}
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-teal-500/40 hover:bg-slate-900/90 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-teal-300 transition-colors mb-1">
                <span>{res.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">{res.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PhaseOfficialResources;
