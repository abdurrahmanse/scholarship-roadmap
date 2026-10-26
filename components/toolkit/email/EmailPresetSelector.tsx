"use client";

import React from "react";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import { emailPresetsData } from "@/data/toolkitSectionData";

export interface EmailPresetSelectorProps {
  selectedPresetId: string;
  onSelectPreset: (preset: typeof emailPresetsData[0]) => void;
}

/**
 * High-response email preset scenario selector sub-component.
 */
export function EmailPresetSelector({
  selectedPresetId,
  onSelectPreset,
}: EmailPresetSelectorProps) {
  return (
    <div>
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
        Select High-Response Preset Scenario:
      </span>
      <TabsContainer variant="cards" columns={3}>
        {emailPresetsData.map((preset) => (
          <TabItem
            key={preset.id}
            active={selectedPresetId === preset.id}
            onClick={() => onSelectPreset(preset)}
            variant="cards"
            badge={preset.badge}
            title={preset.name}
            theme="indigo"
          />
        ))}
      </TabsContainer>
    </div>
  );
}

export default EmailPresetSelector;
