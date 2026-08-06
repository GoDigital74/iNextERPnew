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
    image:
      "https://images.unsplash.com/photo-1749244768351-2726dc23d26c?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-orange-500",
    to: "to-red-500",
  },
  {
    icon: Clock,
    title: "Slow Billing",
    description:
      "Billing takes too much time which affects customer satisfaction.",
    image:
      "https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-amber-500",
    to: "to-yellow-500",
  },
  {
    icon: Database,
    title: "Excel Dependency",
    description:
      "Important business data stored in Excel leads to errors and data loss.",
    image:
      "https://images.unsplash.com/photo-1783115259399-3a5a3e0e4592?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-emerald-500",
    to: "to-green-500",
  },
  {
    icon: Laptop,
    title: "Multiple Software",
    description:
      "Using different tools for departments is expensive and complex.",
    image:
      "https://images.unsplash.com/photo-1742199009963-c028d0c5a603?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-blue-500",
    to: "to-indigo-500",
  },
  {
    icon: LineChart,
    title: "No Real-Time Reports",
    description:
      "Delays in reports lead to poor decision-making and missed opportunities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-purple-500",
    to: "to-fuchsia-500",
  },
  {
    icon: ShieldAlert,
    title: "Data Security Issues",
    description:
      "Business data is at risk due to lack of proper security and backup.",
    image:
      "https://images.unsplash.com/photo-1768839720936-87ce3adf2d08?fm=jpg&q=60&w=600&auto=format&fit=crop",
    from: "from-rose-500",
    to: "to-pink-500",
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
              className="relative overflow-hidden p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300 group"
            >
              {/* Card background image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 opacity-[0.08] dark:opacity-[0.12] group-hover:opacity-[0.14] dark:group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: `url('${problem.image}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-br from-white via-white/95 to-white/85 dark:from-surface-950 dark:via-surface-950/95 dark:to-surface-950/85" />

              {/* Content */}
              <div className="relative">
                <div className="relative w-16 h-16 mb-4">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${problem.from} ${problem.to} opacity-90 group-hover:scale-110 transition-transform duration-300`}
                    style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                  />
                  <div className="relative w-full h-full flex items-center justify-center text-white drop-shadow-sm">
                    <problem.icon className="w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
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
