"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full pt-24 pb-24 lg:pt-32 lg:pb-40 xl:pb-48 bg-surface-50 dark:bg-surface-900">
      
      {/* Background gradients wrapped safely */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent-500/20 blur-[100px] rounded-full" />
      </div>

      {/* Grid container */}
      <div className="container mx-auto px-4 md:px-8 xl:px-12 grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center z-10 relative">
        
        {/* Left Side: Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:col-span-6 xl:col-span-5 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            Run Your Business. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Smarter. Faster. Better.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
            more. Built for Retail, Wholesale, Distribution & Growing Businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4 lg:mt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-primary-500/25 transition-transform hover:scale-105"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 text-base bg-white dark:bg-surface-800 transition-transform hover:scale-105"
            >
              <PlayCircle className="mr-2 h-4 w-4 text-[#1881c4]" />
              Watch Product Tour
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // FIX: Added lg:-ml-8 and xl:-ml-16 to pull the image container to the left toward the text
          className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[1.2/1] flex items-center justify-center lg:col-span-6 xl:col-span-7 mt-12 lg:mt-0 lg:-ml-8 xl:-ml-16 xl:pr-6"
        >
          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{ y: [-10, -25, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            // FIX: Changed scale-120 to scale-[1.2] to ensure the exact scale works, and adjusted origin slightly
            className="relative w-full h-full scale-100 sm:scale-105 lg:scale-110 xl:scale-[1.2] origin-center lg:origin-[30%_50%]"
          >
            <Image
              src="/dashboard/iNext hero 1.webp"
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

