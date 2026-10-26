import React from "react";
import type { Metadata } from "next";
import { ProgramsPageClient } from "@/components/programs/ProgramsPageClient";

export const metadata: Metadata = {
  title: "100% Fully Funded AI & CS Graduate Programs Directory | PhD & MS Thesis",
  description:
    "Curated database of fully funded Computer Science and AI postgraduate research positions across North America, Europe, and Asia with guaranteed living stipends.",
};

export default function ProgramsPage() {
  return <ProgramsPageClient />;
}
