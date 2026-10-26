import React from "react";
import type { Metadata } from "next";
import { FaqsPageClient } from "@/components/faqs/FaqsPageClient";

export const metadata: Metadata = {
  title: "Admissions FAQs & Pre-Flight Checklist",
  description:
    "Authoritative answers to critical questions on fully funded AI/ML admissions, GRE waiver policies, cold outreach response rates, and consular TAL clearance.",
};

export default function FAQsPage() {
  return <FaqsPageClient />;
}
