"use client";

import React, { useState } from "react";
import { LiveStatusTicker } from "@/components/ui/LiveStatusTicker";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";
import { HeaderMobileDrawer } from "./HeaderMobileDrawer";

/**
 * Universal SiteHeader component.
 * Composes decoupled sub-components: HeaderBrand, HeaderNav, HeaderActions,
 * HeaderMobileDrawer, and LiveStatusTicker.
 */
export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Live Status Telemetry Ribbon */}
      <LiveStatusTicker />

      {/* Main Glass Navigation Bar */}
      <div className="backdrop-blur-xl bg-[#090d16]/90 border-b border-white/10 shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
            <HeaderBrand />
            <HeaderNav />
            <HeaderActions
              mobileMenuOpen={mobileMenuOpen}
              onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <HeaderMobileDrawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

export default SiteHeader;
