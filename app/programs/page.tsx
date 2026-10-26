import React from "react";
import type { Metadata } from "next";
import { ProgramsPageClient } from "@/components/programs/ProgramsPageClient";
import { programsMetadata } from "@/data/metadata";

export const metadata: Metadata = programsMetadata;

export default function ProgramsPage() {
  return <ProgramsPageClient />;
}
