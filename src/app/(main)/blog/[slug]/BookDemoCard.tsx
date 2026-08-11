"use client";

import { ArrowRight, Rocket } from "lucide-react";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

export function BookDemoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-xl shadow-brand-900/25">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-[60px]" />
      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
          <Rocket className="h-5 w-5" />
        </div>
        <h3 className="mb-2 text-lg font-bold leading-snug">
          Want to Grow Your Business 4× Faster?
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-brand-100">
          Run your entire business with one smart, AI-driven business
          management platform.
        </p>
        <button
          onClick={openCalendlyPopup}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-700 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
        >
          Book a Free Demo Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
