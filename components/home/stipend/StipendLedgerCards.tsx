import React from "react";
import { DollarSign, Home, ShieldCheck } from "lucide-react";
import { CityFinancialProfile } from "@/data/types";

export interface StipendLedgerCardsProps {
  city: CityFinancialProfile;
  monthlyGross: number;
  monthlyNet: number;
  effectiveRent: number;
}

/**
 * Monthly cashflow ledger cards sub-component: Inflow, Living Outflow, and Tuition Remission.
 */
export function StipendLedgerCards({
  city,
  monthlyGross,
  monthlyNet,
  effectiveRent,
}: StipendLedgerCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {/* Monthly Net Inflow */}
      <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
        <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
          <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
          Monthly Net Inflow
        </div>
        <div className="text-xl font-bold text-white font-mono">
          {city.symbol} {monthlyNet.toLocaleString()}
        </div>
        <div className="text-[11px] text-slate-500 mt-1 font-mono">
          Gross: {city.symbol} {monthlyGross.toLocaleString()} (Tax ~
          {city.taxRatePercent}%)
        </div>
      </div>

      {/* Living Outflow */}
      <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
        <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
          <Home className="w-3.5 h-3.5 text-amber-400" />
          Living Outflow
        </div>
        <div className="text-xl font-bold text-white font-mono">
          {city.symbol} {(effectiveRent + city.avgMonthlyFood).toLocaleString()}
        </div>
        <div className="text-[11px] text-slate-500 mt-1 font-mono">
          Rent: {city.symbol} {effectiveRent} • Food: {city.symbol}{" "}
          {city.avgMonthlyFood}
        </div>
      </div>

      {/* Tuition Remission */}
      <div className="p-4 rounded-xl bg-[#0f1422] border border-white/10">
        <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-1 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Tuition Remission
        </div>
        <div className="text-xl font-bold text-emerald-300 font-mono">
          +{city.symbol} {city.tuitionCovered.toLocaleString()}
        </div>
        <div className="text-[11px] text-slate-500 mt-1 font-mono">
          100% Waived by Graduate Assistantship
        </div>
      </div>
    </div>
  );
}

export default StipendLedgerCards;
