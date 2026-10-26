"use client";

import React from "react";
import { stipendCalculatorMetadata } from "@/data/homeData";

export interface HousingBudgetSliderProps {
  symbol: string;
  effectiveRent: number;
  rentAdjustment: number;
  onAdjustmentChange: (val: number) => void;
}

/**
 * Interactive housing budget adjustment slider sub-component.
 */
export function HousingBudgetSlider({
  symbol,
  effectiveRent,
  rentAdjustment,
  onAdjustmentChange,
}: HousingBudgetSliderProps) {
  return (
    <div className="my-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <div className="flex items-center justify-between text-xs mb-2">
        <span className="font-mono text-slate-300 font-bold">
          {stipendCalculatorMetadata.housingSliderLabel}
        </span>
        <span className="font-mono font-bold text-indigo-300">
          {symbol} {effectiveRent.toLocaleString()}/mo (
          {rentAdjustment > 0 ? `+${rentAdjustment}` : rentAdjustment})
        </span>
      </div>
      <input
        type="range"
        min="-300"
        max="500"
        step="50"
        value={rentAdjustment}
        onChange={(e) => onAdjustmentChange(parseInt(e.target.value, 10))}
        className="range-slider"
        aria-label="Housing budget adjustment slider"
      />
      <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
        <span>{stipendCalculatorMetadata.rentOffsetFrugalLabel}</span>
        <span>{stipendCalculatorMetadata.rentOffsetStandardLabel}</span>
        <span>{stipendCalculatorMetadata.rentOffsetStudioLabel}</span>
      </div>
    </div>
  );
}

export default HousingBudgetSlider;
