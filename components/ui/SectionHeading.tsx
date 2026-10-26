import React from "react";
import { SectionHeader, SectionHeaderProps } from "./SectionHeader";

export interface SectionHeadingProps extends SectionHeaderProps {}

/**
 * Standardized SectionHeading component delegating to SectionHeader.
 */
export function SectionHeading(props: SectionHeadingProps) {
  return <SectionHeader {...props} />;
}

export default SectionHeading;


