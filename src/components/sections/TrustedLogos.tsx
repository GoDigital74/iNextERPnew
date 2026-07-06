"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Command,
  Hexagon,
  Component,
  Layers,
  Box,
} from "lucide-react";

// In production, these would be Next.js <Image /> components with actual logos
const LOGOS = [
  { icon: Building2, name: "Spykar" },
  { icon: Hexagon, name: "Campus" },
  { icon: Command, name: "Wildcraft" },
  { icon: Component, name: "Raymond" },
  { icon: Layers, name: "Van Heusen" },
  { icon: Box, name: "Jockey" },
];

export function TrustedLogos() {
  // Duplicate array to create the seamless loop effect
  const marqueeItems = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 bg-white dark:bg-surface-950 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
        Trusted by 1000+ Businesses Across India
      </div>

      <div className="relative flex w-full max-w-7xl mx-auto overflow-hidden group mask-horizontal-fades">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex whitespace-nowrap gap-16 md:gap-24 group-hover:[animation-play-state:paused]"
        >
          {marqueeItems.map((Logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer grayscale hover:grayscale-0"
            >
              <Logo.icon className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight">
                {Logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
