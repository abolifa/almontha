"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import "@/i18n";
import I18nProvider from "@/components/i18nProvider";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <I18nProvider>
      <div className="w-full min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default SiteLayout;
