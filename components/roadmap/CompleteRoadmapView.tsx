"use client";

import React from "react";
import { RoadmapHeader } from "./RoadmapHeader";
import {
  RoadmapPhasesPipelineSection,
  RoadmapLevelsLadderSection,
} from "./sections";
import { AdmissionsSuiteLaunchpad } from "./AdmissionsSuiteLaunchpad";

export function CompleteRoadmapView() {
  return (
    <div className="space-y-16">
      <RoadmapHeader />
      <RoadmapPhasesPipelineSection />
      <RoadmapLevelsLadderSection />
      <AdmissionsSuiteLaunchpad />
    </div>
  );
}

export default CompleteRoadmapView;
