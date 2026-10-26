"use client";

import React from "react";
import { FileCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { documentsGuideControlsData } from "@/data/documentsData";

export function DocumentsHeader() {
  const { badge, title, subtitle } = documentsGuideControlsData.header;

  return (
    <SectionHeader
      badge={badge}
      badgeIcon={<FileCheck className="w-3.5 h-3.5" />}
      badgeVariant="purple"
      title={title}
      subtitle={subtitle}
      align="center"
      size="lg"
    />
  );
}

export default DocumentsHeader;
