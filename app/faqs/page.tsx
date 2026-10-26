import React from "react";
import type { Metadata } from "next";
import { FaqsPageClient } from "@/components/faqs/FaqsPageClient";
import { faqsMetadata } from "@/data/metadata";

export const metadata: Metadata = faqsMetadata;

export default function FAQsPage() {
  return <FaqsPageClient />;
}
