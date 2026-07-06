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
<section className="bg-primary-900 text-white py-12" ref={ref}>
        <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          <div className="lg:w-1/4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Our Impact <br className="hidden lg:block" />
              <span className="text-primary-400">In Numbers</span>
            </h3>
          </div>

          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 w-full">
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 lg:justify-center"
              >
                <stat.icon className="w-8 h-8 text-primary-400 shrink-0" />
                <div className="flex flex-col">
                  <div className="text-2xl md:text-3xl font-bold tracking-tight">
                    {isInView ? (
                      <CountUp 
                        end={stat.value} 
                        decimals={stat.decimals || 0} 
                        duration={2.5} 
                      />
                    ) : "0"}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-primary-200 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
