"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface-50 dark:bg-surface-900">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Left Side: Typography & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium w-fit">
            <span>#1 Cloud ERP Software</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Run Your Business. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
              Smarter. Faster. Better.
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more. 
            Built for Retail, Wholesale, Distribution & Growing Businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary-500/25 transition-transform hover:scale-105">
              Book Free Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white dark:bg-surface-800 transition-transform hover:scale-105">
              <PlayCircle className="mr-2 h-4 w-4 text-primary-600" />
              Watch Product Tour
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Floating Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] lg:aspect-square"
        >
          {/* Main Dashboard Window */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 right-0 w-[90%] h-[80%] glass-panel rounded-2xl overflow-hidden border border-white/40 shadow-2xl z-20 flex flex-col"
          >
            {/* Mockup Header */}
            <div className="h-12 border-b border-border/50 bg-surface-50/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            {/* Mockup Body (Abstracted data shapes) */}
            <div className="flex-1 p-6 flex flex-col gap-4 bg-white/50 dark:bg-surface-900/50">
              <div className="flex justify-between gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 w-1/3 rounded-xl bg-primary-50 dark:bg-surface-800 border border-primary-100 dark:border-surface-700" />
                ))}
              </div>
              <div className="flex-1 rounded-xl bg-surface-100 dark:bg-surface-800 border border-border/50 flex items-end p-4 gap-2">
                {/* Bar chart mockup */}
                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="flex-1 bg-primary-500 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Mobile Mockup */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[30%] h-[55%] glass-panel rounded-3xl border-4 border-surface-800 dark:border-surface-100 shadow-2xl z-30 bg-white dark:bg-surface-900"
          >
             <div className="w-full h-full rounded-2xl overflow-hidden p-4 flex flex-col gap-3">
               <div className="h-10 w-full bg-surface-100 dark:bg-surface-800 rounded-lg" />
               <div className="h-24 w-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 rounded-lg" />
               <div className="flex-1 w-full bg-surface-100 dark:bg-surface-800 rounded-lg" />
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}