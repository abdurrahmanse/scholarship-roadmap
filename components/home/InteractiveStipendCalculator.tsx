"use client";

import React, { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WidgetCallout } from "@/components/roadmap/widgets/common";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stipendCitiesData, stipendCalculatorMetadata } from "@/data/homeData";
import {
  StipendCitySelector,
  StipendSavingsHeader,
  HousingBudgetSlider,
  StipendLedgerCards,
} from "./stipend";

export function InteractiveStipendCalculator() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [rentAdjustment, setRentAdjustment] = useState(0);

  const city = stipendCitiesData[selectedCityIndex] || stipendCitiesData[0];

  const monthlyGross = Math.round(city.annualGrossStipend / 12);
  const monthlyTax = Math.round(monthlyGross * (city.taxRatePercent / 100));
  const monthlyNet = monthlyGross - monthlyTax;
  const effectiveRent = Math.max(200, city.avgMonthlyRentShared + rentAdjustment);
  const totalExpenses = effectiveRent + city.avgMonthlyFood + city.monthlyHealthInsurance;
  const monthlySavings = monthlyNet - totalExpenses;

  const handleSelectCity = (idx: number) => {
    setSelectedCityIndex(idx);
    setRentAdjustment(0);
  };

  return (
    <section id="stipend-calculator" className="py-20 relative overflow-hidden border-b border-white/10 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge={stipendCalculatorMetadata.badge}
          badgeVariant="emerald"
          pulsingBadge={true}
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-emerald-400" />}
          title={stipendCalculatorMetadata.title}
          subtitle={stipendCalculatorMetadata.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* City Selection Buttons (4 cols) */}
          <div className="lg:col-span-4">
            <StipendCitySelector
              selectedIndex={selectedCityIndex}
              onSelectCity={handleSelectCity}
            />
          </div>

          {/* Detailed Calculator Breakdown (8 cols) */}
          <div className="lg:col-span-8">
            <GlassCard borderGlow="emerald" className="p-6 sm:p-8">
              {/* Savings Header */}
              <StipendSavingsHeader
                city={city}
                monthlySavings={monthlySavings}
              />

              {/* Interactive Housing Budget Slider */}
              <HousingBudgetSlider
                symbol={city.symbol}
                effectiveRent={effectiveRent}
                rentAdjustment={rentAdjustment}
                onAdjustmentChange={setRentAdjustment}
              />

              {/* Monthly Ledger Cards */}
              <StipendLedgerCards
                city={city}
                monthlyGross={monthlyGross}
                monthlyNet={monthlyNet}
                effectiveRent={effectiveRent}
              />

              {/* Crucial Context Alert */}
              <div className="mt-4">
                <WidgetCallout
                  variant="accent"
                  title="Summer Internship Strategic Lift:"
                  message={stipendCalculatorMetadata.summerInternshipAlert}
                />
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex justify-end">
                <Button
                  href="/programs"
                  variant="ghost"
                  size="sm"
                  className="text-cyan-400 hover:text-cyan-300"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                >
                  {stipendCalculatorMetadata.exploreCtaText}
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveStipendCalculator;
