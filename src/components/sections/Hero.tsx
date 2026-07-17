"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full pt-10 pb-12 lg:pt-32 lg:pb-36 overflow-hidden bg-surface-50 dark:bg-surface-900">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Changed to a 12-column grid to give the image more space */}
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center z-10 relative">
        
        {/* Left Side: Typography & CTA (Takes up 5 columns on large screens) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:col-span-5"
        >
          <h1 className="text-2xl lg:text-6xl font-bold tracking-tight text-foreground">
            Run Your Business. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Smarter. Faster. Better.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
            more. Built for Retail, Wholesale, Distribution & Growing
            Businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-16">
            <Button
              size="lg"
              className="h-12 px-8 text-base shadow-lg shadow-primary-500/25 transition-transform hover:scale-105"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-white dark:bg-surface-800 transition-transform hover:scale-105"
            >
              <PlayCircle className="mr-2 h-4 w-4 text-[#1881c4]" />
              Watch Product Tour
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Hero Image (Takes up 7 columns on large screens) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] lg:aspect-[1.1/1] flex items-center justify-center lg:col-span-7 mt-8 lg:mt-0"
        >
          {/* Floating Animation Wrapper with Added Scaling */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            // Added scale-110 (mobile) and scale-125 (desktop) to increase size
            className="relative w-full h-full scale-110 lg:scale-125 origin-center"
          >
            <Image
              src="/dashboard/iNext hero 1.png"
              alt="iNextERP Dashboard and Mobile View"
              fill
              unoptimized
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
