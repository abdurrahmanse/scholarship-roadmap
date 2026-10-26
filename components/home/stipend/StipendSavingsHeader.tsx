import React from "react";
import { Badge } from "@/components/ui/Badge";
import { CityFinancialProfile } from "@/data/types";

export interface StipendSavingsHeaderProps {
  city: CityFinancialProfile;
  monthlySavings: number;
}

/**
 * Stipend estimated net savings header sub-component.
 */
export function StipendSavingsHeader({
  city,
  monthlySavings,
}: StipendSavingsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
      <div>
        <Badge variant="emerald" size="sm" className="mb-2">
          {city.country} • {city.currency}
        </Badge>
        <h3 className="text-2xl font-black text-white font-heading">
          {city.institution}
        </h3>
        <p className="text-xs text-slate-400 mt-1">{city.notes}</p>
      </div>
      <div className="text-left sm:text-right shrink-0">
        <span className="text-xs uppercase font-bold text-slate-400 block font-mono">
          Estimated Net Savings
        </span>
        <span
          className={`text-3xl font-black font-mono ${
            monthlySavings >= 0 ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {monthlySavings >= 0 ? "+" : ""}
          {city.symbol} {monthlySavings.toLocaleString()}
          <span className="text-xs font-normal text-slate-400">/mo</span>
        </span>
      </div>
    </div>
  );
}

export default StipendSavingsHeader;
