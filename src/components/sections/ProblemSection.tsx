"use client";

import { motion, Variants } from "framer-motion";
import {
  AlertCircle,
  Clock,
  Database,
  Laptop,
  LineChart,
  ShieldAlert,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertCircle,
    title: "Stock Mismatch",
    description:
      "Manual processes lead to stock errors and overstocking or stockouts.",
  },
  {
    icon: Clock,
    title: "Slow Billing",
    description:
      "Billing takes too much time which affects customer satisfaction.",
  },
  {
    icon: Database,
    title: "Excel Dependency",
    description:
      "Important business data stored in Excel leads to errors and data loss.",
  },
  {
    icon: Laptop,
    title: "Multiple Software",
    description:
      "Using different tools for departments is expensive and complex.",
  },
  {
    icon: LineChart,
    title: "No Real-Time Reports",
    description:
      "Delays in reports lead to poor decision-making and missed opportunities.",
  },
  {
    icon: ShieldAlert,
    title: "Data Security Issues",
    description:
      "Business data is at risk due to lack of proper security and backup.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ProblemSection() {
  return (
    <section className="py-24 bg-surface-50 dark:bg-surface-900 w-full flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Still Facing These{" "}
            <span className="text-[#1881c4]">Challenges</span> In Your Business?
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-surface-950 p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to Solution */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#1881c4] rounded-xl p-4 md:p-6 flex items-center justify-center shadow-lg shadow-primary-500/20 text-white font-medium text-center md:text-lg">
          iNextERP Solves All These Problems In One Integrated Platform
        </div>
      </div>
    </section>
  );
}
