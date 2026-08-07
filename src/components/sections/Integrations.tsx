"use client";

import { motion } from "framer-motion";

const INTEGRATION_TOOLS = [
  { name: "Tally", emoji: "📗" },
  { name: "Razorpay", emoji: "💳" },
  { name: "PhonePe for Business", emoji: "📱" },
  { name: "Shopify", emoji: "🛍️" },
  { name: "WooCommerce", emoji: "🛒" },
  { name: "Shiprocket", emoji: "📦" },
  { name: "E-Way Bill Portal", emoji: "📄" },
  { name: "WhatsApp Business", emoji: "💬" },
  { name: "ICICI / HDFC Bank", emoji: "🏦" },
  { name: "GST Portal", emoji: "🧾" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Integrations() {
  return (
    <section className="w-full overflow-hidden bg-ink-50 py-24">
      <div className="section-container max-w-7xl">
        {/* Header Section */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="eyebrow mb-6">Integrations</div>
          <h2 className="mb-4 text-3xl font-bold text-ink-900 md:text-4xl">
            Works with tools you already use
          </h2>
          <p className="max-w-3xl text-lg text-ink-500">
            Plug NextERP into your existing payments, e-commerce, and
            logistics stack — no switching required.
          </p>
        </div>

        {/* Logos Flex Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          {INTEGRATION_TOOLS.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-ink-150 bg-white px-5 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-50 text-lg transition-transform duration-300 group-hover:scale-110">
                {tool.emoji}
              </div>
              <span className="text-sm font-semibold text-ink-800 md:text-base">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
