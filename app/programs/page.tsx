import React from "react";
import type { Metadata } from "next";
import { ProgramsPageClient } from "@/components/programs/ProgramsPageClient";

export const metadata: Metadata = {
  title: "Fully Funded AI & CS Graduate Programs Directory",
  description:
    "Curated database of fully funded Computer Science and AI postgraduate research positions across North America, Europe, and Asia with guaranteed living stipends.",
};

export default function ProgramsPage() {
  return <ProgramsPageClient />;
}
