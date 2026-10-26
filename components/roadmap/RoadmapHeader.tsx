"use client";

import React from "react";
import { Compass } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { roadmapControlsData } from "@/data/roadmapPhasesData";

export function RoadmapHeader() {
  const { badge, title, subtitle } = roadmapControlsData.header;

  return (
    <SectionHeader
      badge={badge}
      badgeIcon={<Compass className="w-3.5 h-3.5" />}
      badgeVariant="indigo"
      title={title}
      subtitle={subtitle}
      align="center"
      size="lg"
    />
  );
}

export default RoadmapHeader;
