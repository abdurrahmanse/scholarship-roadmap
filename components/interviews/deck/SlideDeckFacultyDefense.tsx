import React from "react";
import { WidgetCallout } from "@/components/roadmap/widgets/common";

export interface SlideDeckFacultyDefenseProps {
  question: string;
  defenseAnswer: string;
}

/**
 * Anticipated faculty interruption trap and ideal technical defense talking point.
 */
export function SlideDeckFacultyDefense({
  question,
  defenseAnswer,
}: SlideDeckFacultyDefenseProps) {
  return (
    <WidgetCallout
      variant="tip"
      title={`Classic Professor Interruption Trap: "${question}"`}
      message={
        <span>
          <strong className="text-amber-400 font-mono">Your Recommended Defense: </strong>
          <span className="font-mono text-amber-100/90">{defenseAnswer}</span>
        </span>
      }
    />
  );
}

export default SlideDeckFacultyDefense;
