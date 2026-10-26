"use client";

import React, { useState } from "react";
import { documentsData } from "@/data/documentsData";
import { DocumentsHeader } from "./DocumentsHeader";
import { DocumentTabsNav } from "./DocumentTabsNav";
import { DocumentOverviewCard } from "./DocumentOverviewCard";
import { DocumentBlueprintSection } from "./DocumentBlueprintSection";
import { DocumentMistakesSection } from "./DocumentMistakesSection";
import { DocumentChecklistSection } from "./DocumentChecklistSection";

export function DocumentsGuideView() {
  const [selectedDocId, setSelectedDocId] = useState(documentsData[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const selectedDoc = documentsData.find((d) => d.id === selectedDocId) || documentsData[0];

  return (
    <div className="space-y-10">
      {/* 1. Header */}
      <DocumentsHeader />

      {/* 2. Document Selection Tabs */}
      <DocumentTabsNav
        selectedDocumentId={selectedDocId}
        onSelectDocument={setSelectedDocId}
      />

      {/* 3. Selected Document Dossier View */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-8">
        {/* Document Overview */}
        <DocumentOverviewCard document={selectedDoc} />

        {/* Blueprint & Structure */}
        <DocumentBlueprintSection document={selectedDoc} />

        {/* Common Mistakes & Official Compliance */}
        <DocumentMistakesSection document={selectedDoc} />

        {/* Readiness Checklist */}
        <DocumentChecklistSection
          document={selectedDoc}
          checkedItems={checkedItems}
          onToggleItem={toggleChecklist}
        />
      </div>
    </div>
  );
}

export default DocumentsGuideView;
