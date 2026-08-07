"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Layered background treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-[-20%] left-[-10%] h-[55%] w-[55%] rounded-full bg-brand-300/25 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[45%] w-[45%] rounded-full bg-accent-400/20 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-white" />
      </div>

      {/* Grid container */}
      <div className="section-container relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Left Side: Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-7 text-center lg:col-span-6 lg:items-start lg:text-left xl:col-span-5"
        >
          <div className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            POS · Inventory · Billing · Accounting · CRM
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-ink-900 sm:text-5xl xl:text-6xl">
            Run Your Business.{" "}
            <span className="text-gradient-brand">
              Smarter. Faster. Better.
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
            Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
            more. Built for Retail, Wholesale, Distribution & Growing Businesses.
          </p>

          <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:items-start">
            <button
              onClick={openCalendlyPopup}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 text-base font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.14)_inset,0_16px_32px_-10px_rgba(24,129,196,0.45)] transition-all hover:bg-brand-600 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-4 flex aspect-[4/3] w-full items-center justify-center lg:col-span-6 lg:mt-0 lg:-mr-6 xl:col-span-7 xl:pl-6"
        >
          <div className="glow-brand absolute inset-8 -z-10 opacity-70" />
          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{ y: [-10, -22, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative h-full w-full origin-center scale-100 sm:scale-105 lg:scale-110 xl:scale-[1.15]"
          >
            <Image
              src="/dashboard/iNext hero 1.webp"
              alt="iNextERP Dashboard and Mobile View"
              fill
              unoptimized
              className="object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
