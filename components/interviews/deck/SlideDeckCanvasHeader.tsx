import React from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface SlideDeckCanvasHeaderProps {
  slideNumber: number;
  totalSlides: number;
  timing: string;
  title: string;
  subtitle: string;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Slide viewer canvas header sub-component with badges, timings, titles, and prev/next controls.
 */
export function SlideDeckCanvasHeader({
  slideNumber,
  timing,
  title,
  subtitle,
  canPrev,
  canNext,
  onPrev,
  onNext,
}: SlideDeckCanvasHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <Badge variant="purple" size="sm">
            SLIDE 0{slideNumber} OF 05
          </Badge>
          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Target Timing: {timing}
          </span>
        </div>
        <h3 className="text-2xl font-black text-white font-heading">{title}</h3>
        <p className="text-xs text-slate-400 mt-1 font-sans">{subtitle}</p>
      </div>

      {/* Prev / Next Controls */}
      <div className="flex items-center gap-2 shrink-0">
        <Button
          disabled={!canPrev}
          onClick={onPrev}
          variant="secondary"
          size="sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          disabled={!canNext}
          onClick={onNext}
          variant="secondary"
          size="sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

export default SlideDeckCanvasHeader;
