// "use client";

// import { motion, Variants } from "framer-motion";

// const PROBLEMS = [
//   {
//     emoji: "📦",
//     title: "Stock Mismatch",
//     description:
//       "Manual processes lead to stock errors and overstocking or stockouts.",
//   },
//   {
//     emoji: "⏱️",
//     title: "Slow Billing",
//     description:
//       "Billing takes too much time which affects customer satisfaction.",
//   },
//   {
//     emoji: "📊",
//     title: "Excel Dependency",
//     description:
//       "Important business data stored in Excel leads to errors and data loss.",
//   },
//   {
//     emoji: "🧩",
//     title: "Multiple Software",
//     description:
//       "Using different tools for departments is expensive and complex.",
//   },
//   {
//     emoji: "📉",
//     title: "No Real-Time Reports",
//     description:
//       "Delays in reports lead to poor decision-making and missed opportunities.",
//   },
//   {
//     emoji: "🔓",
//     title: "Data Security Issues",
//     description:
//       "Business data is at risk due to lack of proper security and backup.",
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export function ProblemSection() {
//   return (
//     <section className="w-full bg-white py-18">
//       <div className="section-container flex flex-col items-center">
//         <div className="mb-16 max-w-2xl text-center">
//           <div className="eyebrow mb-5 justify-center">The problem</div>
//           <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">
//             Still Facing These{" "}
//             <span className="text-brand-500">Challenges</span> In Your Business?
//           </h2>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {PROBLEMS.map((problem, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -4 }}
//               className="card-surface group relative overflow-hidden p-6"
//             >
//               <div className="absolute inset-0 bg-linear-to-br from-brand-500/0 via-brand-500/0 to-brand-500/0 transition-colors duration-500 group-hover:from-brand-500/[0.06] group-hover:to-transparent" />

//               <div className="relative">
//                 <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-100 bg-ink-50 text-3xl">
//                   {problem.emoji}
//                 </div>
//                 <h3 className="mb-2 text-lg font-semibold text-ink-900">
//                   {problem.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-ink-500">
//                   {problem.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  PackageX,
  Timer, 
  FileSpreadsheet, 
  Network, 
  TrendingDown, 
  ShieldAlert 
} from "lucide-react";
const PROBLEMS = [
  {
    icon: PackageX,
    title: "Stock Mismatch",
    description: "Manual processes lead to critical stock errors, overstocking, or unexpected stockouts.",
    bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Timer,
    title: "Slow Billing",
    description: "Sluggish billing workflows frustrate customers and bottleneck your daily revenue.",
    // FIXED: Replaced broken image with a reliable, high-quality image representing time/delays
    bgImage: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Dependency",
    description: "Crucial business data trapped in messy spreadsheets leads to human errors and data loss.",
    bgImage: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Network,
    title: "Multiple Software",
    description: "Juggling disjointed tools across departments creates expensive, complex data silos.",
    bgImage: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: TrendingDown,
    title: "No Real-Time Reports",
    description: "Blind spots and delayed reporting lead to poor decision-making and missed opportunities.",
    bgImage: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: ShieldAlert,
    title: "Data Security Issues",
    description: "Your business intelligence is constantly at risk without enterprise-grade security and backups.",
    bgImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function ProblemSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-18">
      <div className="section-container flex flex-col items-center px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 max-w-4xl text-center">
          <div className="eyebrow mb-5 justify-center">The Problem</div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-3xl md:text-[45px]">
            Still Facing These{" "}
            <span className="text-brand-500">Challenges</span> In Your Business?
          </h2>
          <p className="text-lg text-ink-500">
            Outdated systems and manual workflows are silently eating into your margins and stunting your growth.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex min-h-[320px] cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border border-ink-150 bg-ink-900 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/20"
              >
                {/* Background Image - Increased opacity for better visibility */}
                <Image
                  src={problem.bgImage}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="z-0 object-cover opacity-85 saturate-50 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:saturate-150"
                />

                {/* Reduced Gradient Overlay - Now mostly transparent at the top, dark at the very bottom for text */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-20 flex h-full flex-col justify-between p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-500 group-hover:border-brand-400">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-300">
                      {problem.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}