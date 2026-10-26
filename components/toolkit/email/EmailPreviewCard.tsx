"use client";

import React from "react";
import { Mail, Copy, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export interface EmailPreviewCardProps {
  subject: string;
  body: string;
  copied: boolean;
  onCopy: () => void;
}

/**
 * Live email preview and copy card sub-component.
 */
export function EmailPreviewCard({
  subject,
  body,
  copied,
  onCopy,
}: EmailPreviewCardProps) {
  return (
    <GlassCard
      borderGlow="indigo"
      className="p-6 sm:p-7 bg-[#0f1422] border border-white/10 font-mono text-xs"
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-indigo-400 font-bold">
          <Mail className="w-4 h-4" />
          <span>Generated Email Draft (Ready to Send)</span>
        </div>
        <Button
          variant="indigo"
          size="sm"
          onClick={onCopy}
          leftIcon={
            copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-300" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )
          }
        >
          {copied ? "Copied to Clipboard!" : "Copy Email Draft"}
        </Button>
      </div>

      {/* Subject Line */}
      <div className="p-3 rounded-lg bg-[#090d16] border border-white/10 mb-4 text-slate-300 text-xs">
        <span className="text-slate-500 font-bold select-none">Subject: </span>
        <span className="text-white font-semibold">{subject}</span>
      </div>

      {/* Email Content Body */}
      <div className="p-4 rounded-xl bg-[#090d16] border border-white/10 text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[480px] overflow-y-auto">
        {body}
      </div>
    </GlassCard>
  );
}

export default EmailPreviewCard;
