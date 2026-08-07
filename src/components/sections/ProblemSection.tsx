"use client";

import { motion, Variants } from "framer-motion";

const PROBLEMS = [
  {
    emoji: "📦",
    title: "Stock Mismatch",
    description:
      "Manual processes lead to stock errors and overstocking or stockouts.",
  },
  {
    emoji: "⏱️",
    title: "Slow Billing",
    description:
      "Billing takes too much time which affects customer satisfaction.",
  },
  {
    emoji: "📊",
    title: "Excel Dependency",
    description:
      "Important business data stored in Excel leads to errors and data loss.",
  },
  {
    emoji: "🧩",
    title: "Multiple Software",
    description:
      "Using different tools for departments is expensive and complex.",
  },
  {
    emoji: "📉",
    title: "No Real-Time Reports",
    description:
      "Delays in reports lead to poor decision-making and missed opportunities.",
  },
  {
    emoji: "🔓",
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
    <section className="w-full bg-white py-24">
      <div className="section-container flex flex-col items-center">
        <div className="mb-16 max-w-2xl text-center">
          <div className="eyebrow mb-5 justify-center">The problem</div>
          <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">
            Still Facing These{" "}
            <span className="text-brand-500">Challenges</span> In Your Business?
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="card-surface group relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/0 via-brand-500/0 to-brand-500/0 transition-colors duration-500 group-hover:from-brand-500/[0.06] group-hover:to-transparent" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-100 bg-ink-50 text-3xl">
                  {problem.emoji}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-900">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex max-w-4xl items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 p-5 text-center text-base font-medium text-brand-800 md:p-6 md:text-lg"
        >
          iNextERP Solves All These Problems In One Integrated Platform
        </motion.div>
      </div>
    </section>
  );
}
