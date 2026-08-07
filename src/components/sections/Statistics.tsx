"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Building2, Factory, LayoutTemplate, Timer, Headset } from "lucide-react";

const STATS = [
  { icon: Building2, value: 100, suffix: "+", label: "Businesses" },
  { icon: Factory, value: 10, suffix: "+", label: "Industries" },
  { icon: LayoutTemplate, value: 15, suffix: "+", label: "ERP Modules" },
  { icon: Timer, value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { icon: Headset, value: 24, suffix: "/7", label: "Support" },
];

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-brand-600 via-brand-500 to-brand-600 py-14"
      ref={ref}
    >
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

      <div className="section-container relative">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-4">
          <div className="lg:w-1/4">
            <h3 className="text-center text-2xl font-bold leading-tight text-white md:text-3xl lg:text-left">
              Our Impact <br className="hidden lg:block" />
              <span className="text-brand-100">In Numbers</span>
            </h3>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:w-3/4 lg:grid-cols-5 lg:gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 text-center lg:items-center"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {isInView ? (
                      <CountUp
                        end={stat.value}
                        decimals={stat.decimals || 0}
                        duration={2.5}
                      />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-brand-100">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
