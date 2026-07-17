"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TABS = ["POS Billing", "Inventory Management", "Reports & Analytics"];

// Map the tabs to their respective images verbatim
const TAB_IMAGES: Record<string, string> = {
  "POS Billing": "/dashboard/iNext Bill 1.png",
  "Inventory Management": "/dashboard/iNext Inventory 1.png",
  "Reports & Analytics": "/dashboard/iNext Report 1.png",
};

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="py-24 bg-white dark:bg-surface-950 w-full flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Everything You Need.<br />
          <span className="text-[#1881c4]">All In One Dashboard.</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 bg-surface-100 dark:bg-surface-900 p-1 rounded-full mb-12 flex-wrap justify-center gap-y-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors",
              activeTab === tab ? "text-[#1881c4] dark:text-primary-400" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white dark:bg-surface-800 shadow-sm rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Content Window */}
      <div className="w-full max-w-6xl aspect-video glass-panel rounded-2xl relative overflow-hidden flex items-center justify-center p-4 md:p-8 bg-surface-50 dark:bg-surface-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative border border-border/50 rounded-xl bg-white dark:bg-surface-950 shadow-inner overflow-hidden"
          >
            <Image
              src={TAB_IMAGES[activeTab]}
              alt={`${activeTab} Interface`}
              fill
              unoptimized
              // FIX: Changed from "object-cover object-top" to "object-contain p-2"
              className="object-contain p-2 md:p-4" 
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
