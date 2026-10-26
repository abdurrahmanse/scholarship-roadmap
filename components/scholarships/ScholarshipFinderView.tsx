"use client";

import React from "react";
import { ScholarshipHeader } from "./ScholarshipHeader";
import { SearchWorkflowSection } from "./SearchWorkflowSection";
import { BooleanFormulasSection } from "./BooleanFormulasSection";
import { PortalsDirectorySection } from "./PortalsDirectorySection";
import { AntiFraudSection } from "./AntiFraudSection";

export function ScholarshipFinderView() {
  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <ScholarshipHeader />

      {/* 2. 11-Step Discovery Workflow */}
      <SearchWorkflowSection />

      {/* 3. Boolean Search Formulas */}
      <BooleanFormulasSection />

      {/* 4. Verified Directory */}
      <PortalsDirectorySection />

      {/* 5. Anti-Fraud Notice */}
      <AntiFraudSection />
    </div>
  );
}

export default ScholarshipFinderView;
