import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Badge, BadgeVariant } from "@/components/ui/Badge";
import { timelineSliderMetadata } from "@/data/homeData";

export interface TimelinePhaseHeaderProps {
  badge: string;
  accentVariant: BadgeVariant;
  timeWindow: string;
  stageName: string;
  priorityTitle: string;
  deadlineTarget: string;
}

/**
 * Phase timeline header sub-component showing phase metadata, timing, and deadline badge.
 */
export function TimelinePhaseHeader({
  badge,
  accentVariant,
  timeWindow,
  stageName,
  priorityTitle,
  deadlineTarget,
}: TimelinePhaseHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant={accentVariant} size="sm">
            {badge}
          </Badge>
          <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {timeWindow}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
          {stageName}
        </h3>
        <p className="text-sm font-medium text-indigo-300 mt-1">
          {priorityTitle}
        </p>
      </div>

      {/* Deadline Target Badge */}
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] sm:text-right shrink-0">
        <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
          {timelineSliderMetadata.targetWindowLabel}
        </span>
        <span className="text-xs font-mono font-bold text-amber-300 flex items-center sm:justify-end gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {deadlineTarget}
        </span>
      </div>
    </div>
  );
}

export default TimelinePhaseHeader;
