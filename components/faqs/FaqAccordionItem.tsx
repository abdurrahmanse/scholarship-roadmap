"use client";

import React from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { FAQItem } from "@/data/types";

interface FaqAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({ faq, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <GlassCard borderGlow="none" className="p-0 overflow-hidden shadow-md">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start justify-between gap-4 select-none hover:bg-slate-850/60 transition-colors"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shrink-0 mt-0.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <Badge variant="cyan" size="sm">
                {faq.category}
              </Badge>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {faq.question}
            </h3>
          </div>
        </div>
        <div className="p-1 rounded-lg bg-slate-800/80 border border-slate-700 shrink-0 text-slate-400 mt-1">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/60">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {faq.answer}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
            {faq.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  );
}
