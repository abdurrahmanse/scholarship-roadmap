"use client";

import React from "react";
import { FooterContainer, FooterGrid } from "./layout";
import { FooterBrandSection } from "./brand";
import {
  FooterNavigationSection,
  FooterToolsSection,
  FooterDatabasesSection,
} from "./links";
import { FooterBottomBarSection } from "./bottom";

export function Footer() {
  return (
    <FooterContainer>
      {/* 4-Column Responsive Grid across 5 device tiers */}
      <FooterGrid>
        {/* Brand Column Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <FooterBrandSection />
        </div>

        {/* Roadmap Pathways Navigation Section */}
        <FooterNavigationSection />

        {/* Guides & Toolkits Directory Section */}
        <FooterToolsSection />

        {/* Official Portals & Databases Section */}
        <FooterDatabasesSection />
      </FooterGrid>

      {/* Bottom Bar Section (Copyright, Attribution, Status Ping, Back to Top) */}
      <FooterBottomBarSection />
    </FooterContainer>
  );
}

export default Footer;
