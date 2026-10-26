import React from "react";
import { FileCheck } from "lucide-react";
import { timelineSliderMetadata } from "@/data/homeData";

export interface TimelineDeliverableBannerProps {
  deliverable: string;
}

/**
 * Proof-of-work deliverable banner for the active timeline milestone.
 */
export function TimelineDeliverableBanner({
  deliverable,
}: TimelineDeliverableBannerProps) {
  return (
    <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-700/50 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-start gap-3">
        <FileCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-[11px] font-mono font-bold text-indigo-300 uppercase tracking-wider block">
            {timelineSliderMetadata.deliverableLabel}
          </span>
          <p className="text-xs text-slate-200 font-medium mt-0.5">
            {deliverable}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineDeliverableBanner;
