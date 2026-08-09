"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TABS = [ "Reports & Analytics", "POS Billing","Inventory Management"];

// Map the tabs to their respective images verbatim
const TAB_IMAGES: Record<string, string> = {
  "POS Billing": "/dashboard/iNext Bill 1.png",
  "Inventory Management": "/dashboard/iNext Inventory 1.png",
  "Reports & Analytics": "/dashboard/iNext Report 1.png",
};

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-ink-50 py-4 sm:py-8 lg:py-10">
      <div className="glow-brand pointer-events-none absolute left-1/2 top-0 -z-0 h-96 w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="section-container relative mb-6 text-center">
        <div className="eyebrow mb-5 justify-center">Product tour</div>
        <h2 className="text-3xl font-bold text-ink-900 md:text-5xl">
          Everything You Need.
          <br />
          <span className="text-brand-500">All In One Dashboard.</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="relative mb-6 flex flex-wrap justify-center gap-y-2 rounded-full border border-ink-150 bg-white p-1.5 shadow-sm">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:px-6",
              activeTab === tab
                ? "text-white"
                : "text-ink-500 hover:text-ink-800"
            )}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-brand-500 shadow-[0_4px_16px_-4px_rgba(24,129,196,0.5)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Content Window */}
      <div className="section-container relative">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-ink-900/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full overflow-hidden rounded-xl bg-ink-50"
            >
              <Image
                src={TAB_IMAGES[activeTab]}
                alt={`${activeTab} Interface`}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
