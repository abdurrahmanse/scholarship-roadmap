"use client";

import React from "react";
import { documentsData } from "@/data/documentsData";

export interface DocumentTabsNavProps {
  selectedDocumentId: string;
  onSelectDocument: (id: string) => void;
}

export function DocumentTabsNav({ selectedDocumentId, onSelectDocument }: DocumentTabsNavProps) {
  return (
    <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl sticky top-20 z-30 shadow-xl">
      {documentsData.map((doc) => (
        <button
          key={doc.id}
          onClick={() => onSelectDocument(doc.id)}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            selectedDocumentId === doc.id
              ? "bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-md shadow-indigo-600/30"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          {doc.name.split("(")[0].trim()}
        </button>
      ))}
    </div>
  );
}

export default DocumentTabsNav;
