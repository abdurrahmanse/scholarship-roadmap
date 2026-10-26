"use client";

import React from "react";
import { ProfessorsHeader } from "./ProfessorsHeader";
import { OutreachWorkflowSection } from "./OutreachWorkflowSection";
import { EmailBlueprintsSection } from "./EmailBlueprintsSection";
import { OutreachComparisonSection } from "./OutreachComparisonSection";
import { SupervisorNecessityTable } from "./SupervisorNecessityTable";
import { ResearchFitChecklistSection } from "./ResearchFitChecklistSection";

export function ProfessorOutreachView() {
  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <ProfessorsHeader />

      {/* 2. 8-Step Outreach Protocol */}
      <OutreachWorkflowSection />

      {/* 3. Copyable Cold Email Blueprints */}
      <EmailBlueprintsSection />

      {/* 4. Weak vs. Strong Outreach Comparison */}
      <OutreachComparisonSection />

      {/* 5. Supervisor Necessity Rules by Country */}
      <SupervisorNecessityTable />

      {/* 6. Research Compatibility Checklist */}
      <ResearchFitChecklistSection />
    </div>
  );
}

export default ProfessorOutreachView;
