// // // "use client";

// // // import { motion, useReducedMotion, type Variants } from "framer-motion";
// // // import { ArrowRight } from "lucide-react";
// // // import Image from "next/image";
// // // import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// // // /* Orchestrated page-load sequence — items rise, unblur, and settle in turn. */
// // // const container: Variants = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
// // // };

// // // const item: Variants = {
// // //   hidden: { opacity: 0, y: 40, filter: "blur(16px)" },
// // //   show: {
// // //     opacity: 1,
// // //     y: 0,
// // //     filter: "blur(0px)",
// // //     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
// // //   },
// // // };

// // // export function Hero() {
// // //   const reduce = useReducedMotion();

// // //   return (
// // //     <section className="relative w-full overflow-hidden pt-20 lg:pt-32">
// // //       {/* ---------- Background ---------- */}
// // //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// // //         {/* Base gradient: bright brand glow at the top, deep navy at the edges. */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "radial-gradient(130% 95% at 50% -12%, #3cb4f2 0%, #1c8fd6 18%, #1370ad 36%, #0d5180 54%, #083a5c 72%, #05263c 88%, #031824 100%)",
// // //           }}
// // //         />

// // //         {/* Animated grid — drifts diagonally and breathes in brightness */}
// // //         <motion.div
// // //           className="absolute inset-0"
// // //           style={{
// // //             backgroundImage:
// // //               "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
// // //             backgroundSize: "64px 64px",
// // //             maskImage:
// // //               "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
// // //             WebkitMaskImage:
// // //               "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
// // //           }}
// // //           initial={{ opacity: 0 }}
// // //           animate={
// // //             reduce
// // //               ? { opacity: 0.16 }
// // //               : {
// // //                   opacity: [0.12, 0.24, 0.12],
// // //                   backgroundPosition: ["0px 0px", "64px 64px"],
// // //                 }
// // //           }
// // //           transition={{
// // //             opacity: { repeat: Infinity, duration: 7, ease: "easeInOut" },
// // //             backgroundPosition: { repeat: Infinity, duration: 14, ease: "linear" },
// // //           }}
// // //         />

// // //         {/* Ambient aurora — wider travel so the field visibly moves */}
// // //         <motion.div
// // //           className="absolute -top-[18%] left-1/2 h-[60%] w-[68%] -translate-x-1/2 rounded-full bg-[#7fd7ff]/30 blur-[160px]"
// // //           animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.45, 1, 0.45] }}
// // //           transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[8%] left-[10%] h-[46%] w-[42%] rounded-full bg-[#1881c4]/45 blur-[150px]"
// // //           animate={reduce ? undefined : { x: [0, 160, 0], y: [0, -70, 0], scale: [1, 1.18, 1] }}
// // //           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
// // //         />
// // //         <motion.div
// // //           className="absolute bottom-[12%] right-[8%] h-[42%] w-[38%] rounded-full bg-[#38e0d0]/22 blur-[150px]"
// // //           animate={reduce ? undefined : { x: [0, -140, 0], y: [0, 66, 0], scale: [1.12, 1, 1.12] }}
// // //           transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
// // //         />

// // //         {/* Light sweep — brighter and more frequent */}
// // //         {!reduce && (
// // //           <motion.div
// // //             className="absolute inset-y-0 w-[32%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
// // //             initial={{ x: "-40%" }}
// // //             animate={{ x: "280%" }}
// // //             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatDelay: 2.5 }}
// // //           />
// // //         )}

// // //         {/* Vignette — darkens the edges so the centered content holds focus */}
// // //         <div
// // //           className="absolute inset-0"
// // //           style={{
// // //             background:
// // //               "radial-gradient(ellipse 88% 72% at 50% 34%, transparent 42%, rgba(2,14,24,0.58) 100%)",
// // //           }}
// // //         />
// // //       </div>

// // //       {/* ---------- Content ---------- */}
// // //       <motion.div
// // //         variants={container}
// // //         initial="hidden"
// // //         animate="show"
// // //         className="section-container relative z-10 flex flex-col items-center gap-7 text-center"
// // //       >
// // //         <motion.div
// // //           variants={item}
// // //           className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
// // //         >
// // //           <span className="relative flex h-1.5 w-1.5">
// // //             {!reduce && (
// // //               <motion.span
// // //                 className="absolute inline-flex h-full w-full rounded-full bg-accent-300"
// // //                 animate={{ scale: [1, 3.2, 1], opacity: [0.9, 0, 0.9] }}
// // //                 transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
// // //               />
// // //             )}
// // //             <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-300" />
// // //           </span>
// // //           POS · Inventory · Billing · Accounting · CRM
// // //         </motion.div>

// // //         <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(3,24,36,0.55)] sm:text-5xl xl:text-6xl">
// // //           <motion.span variants={item} className="block">
// // //             Run Your Business.
// // //           </motion.span>
// // //           <motion.span
// // //             variants={item}
// // //             className="relative block bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent"
// // //           >
// // //             Smarter. Faster. Better.
// // //             {/* Shimmer that travels across the accent line */}
// // //             {!reduce && (
// // //               <motion.span
// // //                 aria-hidden
// // //                 className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] bg-clip-text text-transparent"
// // //                 style={{ backgroundSize: "220% 100%" }}
// // //                 animate={{ backgroundPosition: ["160% 0%", "-60% 0%"] }}
// // //                 transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", repeatDelay: 2.2 }}
// // //               >
// // //                 Smarter. Faster. Better.
// // //               </motion.span>
// // //             )}
// // //           </motion.span>
// // //         </h1>

// // //         <motion.p
// // //           variants={item}
// // //           className="max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(3,24,36,0.5)] sm:text-lg"
// // //         >
// // //           Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
// // //           more. Built for Retail, Wholesale, Distribution & Growing Businesses.
// // //         </motion.p>

// // //         <motion.div variants={item} className="relative mt-2">
// // //           {/* Soft halo behind the button */}
// // //           {!reduce && (
// // //             <motion.span
// // //               aria-hidden
// // //               className="absolute inset-0 -z-10 rounded-xl bg-white/50 blur-2xl"
// // //               animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.92, 1.18, 0.92] }}
// // //               transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
// // //             />
// // //           )}
// // //           <button
// // //             onClick={openCalendlyPopup}
// // //             className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-brand-700 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:scale-100"
// // //           >
// // //             Book Free Demo
// // //             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// // //           </button>
// // //         </motion.div>
// // //       </motion.div>

// // //       {/* ---------- Product screenshot ---------- */}
// // //       <div
// // //         className="section-container relative z-20 mt-10 -mb-16 sm:-mb-20 lg:mt-12 lg:-mb-28"
// // //         style={{ perspective: 1400 }}
// // //       >
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 110, scale: 0.9, rotateX: 18 }}
// // //           animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
// // //           transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
// // //         >
// // //           <motion.div
// // //             animate={reduce ? undefined : { y: [-6, -30, -6], scale: [1, 1.015, 1] }}
// // //             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
// // //             className="relative mx-auto aspect-[3/2] w-full max-w-5xl"
// // //           >
// // //             <Image
// // //               src="/dashboard/inext hero.png"
// // //               alt="iNextERP Dashboard and Mobile View"
// // //               fill
// // //               unoptimized
// // //               /* Shadow tinted to the background navy so it never reads as gray haze */
// // //               className="object-contain drop-shadow-[0_28px_55px_rgba(2,16,28,0.5)]"
// // //               priority
// // //             />
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>

// // //       {/* ---------- Bottom curve ---------- */}
// // //       <div className="relative z-10">
// // //         <svg
// // //           viewBox="0 0 1440 160"
// // //           preserveAspectRatio="none"
// // //           className="relative block h-24 w-full sm:h-32 lg:h-40"
// // //         >
// // //           <path
// // //             d="M0,64 C240,140 480,150 720,150 C960,150 1200,140 1440,64 L1440,160 L0,160 Z"
// // //             fill="white"
// // //           />
// // //           {/* Hairline highlight along the seam — crisp definition, no blur smear */}
// // //           <path
// // //             d="M0,64 C240,140 480,150 720,150 C960,150 1200,140 1440,64"
// // //             fill="none"
// // //             stroke="rgba(255,255,255,0.28)"
// // //             strokeWidth="1.5"
// // //             vectorEffect="non-scaling-stroke"
// // //           />
// // //         </svg>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { motion, useReducedMotion, type Variants } from "framer-motion";
// // import { ArrowRight } from "lucide-react";
// // import Image from "next/image";
// // import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// // /* Orchestrated page-load sequence — items rise, unblur, and settle in turn. */
// // const container: Variants = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
// // };

// // const item: Variants = {
// //   hidden: { opacity: 0, y: 40, filter: "blur(16px)" },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     filter: "blur(0px)",
// //     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
// //   },
// // };

// // export function Hero() {
// //   const reduce = useReducedMotion();

// //   return (
// //     <section className="relative w-full overflow-hidden pt-20 lg:pt-32">
// //       {/* ---------- Background ---------- */}
// //       <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //         {/* Base gradient: bright brand glow at the top, deep navy at the edges. */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(130% 95% at 50% -12%, #3cb4f2 0%, #1c8fd6 18%, #1370ad 36%, #0d5180 54%, #083a5c 72%, #05263c 88%, #031824 100%)",
// //           }}
// //         />

// //         {/* Animated grid — drifts diagonally and breathes in brightness */}
// //         <motion.div
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
// //             backgroundSize: "64px 64px",
// //             maskImage:
// //               "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
// //             WebkitMaskImage:
// //               "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
// //           }}
// //           initial={{ opacity: 0 }}
// //           animate={
// //             reduce
// //               ? { opacity: 0.16 }
// //               : {
// //                   opacity: [0.12, 0.24, 0.12],
// //                   backgroundPosition: ["0px 0px", "64px 64px"],
// //                 }
// //           }
// //           transition={{
// //             opacity: { repeat: Infinity, duration: 7, ease: "easeInOut" },
// //             backgroundPosition: { repeat: Infinity, duration: 14, ease: "linear" },
// //           }}
// //         />

// //         {/* Ambient aurora — wider travel so the field visibly moves */}
// //         <motion.div
// //           className="absolute -top-[18%] left-1/2 h-[60%] w-[68%] -translate-x-1/2 rounded-full bg-[#7fd7ff]/30 blur-[160px]"
// //           animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.45, 1, 0.45] }}
// //           transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute bottom-[8%] left-[10%] h-[46%] w-[42%] rounded-full bg-[#1881c4]/45 blur-[150px]"
// //           animate={reduce ? undefined : { x: [0, 160, 0], y: [0, -70, 0], scale: [1, 1.18, 1] }}
// //           transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
// //         />
// //         <motion.div
// //           className="absolute bottom-[12%] right-[8%] h-[42%] w-[38%] rounded-full bg-[#38e0d0]/22 blur-[150px]"
// //           animate={reduce ? undefined : { x: [0, -140, 0], y: [0, 66, 0], scale: [1.12, 1, 1.12] }}
// //           transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
// //         />

// //         {/* Light sweep — brighter and more frequent */}
// //         {!reduce && (
// //           <motion.div
// //             className="absolute inset-y-0 w-[32%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
// //             initial={{ x: "-40%" }}
// //             animate={{ x: "280%" }}
// //             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatDelay: 2.5 }}
// //           />
// //         )}

// //         {/* Vignette — darkens the edges so the centered content holds focus */}
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 88% 72% at 50% 34%, transparent 42%, rgba(2,14,24,0.58) 100%)",
// //           }}
// //         />
// //       </div>

// //       {/* ---------- Content ---------- */}
// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         animate="show"
// //         className="section-container relative z-10 flex flex-col items-center gap-7 text-center"
// //       >
// //         <motion.div
// //           variants={item}
// //           className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
// //         >
// //           <span className="relative flex h-1.5 w-1.5">
// //             {!reduce && (
// //               <motion.span
// //                 className="absolute inline-flex h-full w-full rounded-full bg-accent-300"
// //                 animate={{ scale: [1, 3.2, 1], opacity: [0.9, 0, 0.9] }}
// //                 transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
// //               />
// //             )}
// //             <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-300" />
// //           </span>
// //           POS · Inventory · Billing · Accounting · CRM
// //         </motion.div>

// //         <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(3,24,36,0.55)] sm:text-5xl xl:text-6xl">
// //           <motion.span variants={item} className="block">
// //             Run Your Business.
// //           </motion.span>
// //           <motion.span
// //             variants={item}
// //             className="relative block bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent"
// //           >
// //             Smarter. Faster. Better.
// //             {/* Shimmer that travels across the accent line */}
// //             {!reduce && (
// //               <motion.span
// //                 aria-hidden
// //                 className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] bg-clip-text text-transparent"
// //                 style={{ backgroundSize: "220% 100%" }}
// //                 animate={{ backgroundPosition: ["160% 0%", "-60% 0%"] }}
// //                 transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", repeatDelay: 2.2 }}
// //               >
// //                 Smarter. Faster. Better.
// //               </motion.span>
// //             )}
// //           </motion.span>
// //         </h1>

// //         <motion.p
// //           variants={item}
// //           className="max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(3,24,36,0.5)] sm:text-lg"
// //         >
// //           Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
// //           more. Built for Retail, Wholesale, Distribution & Growing Businesses.
// //         </motion.p>

// //         <motion.div variants={item} className="relative mt-2">
// //           {/* Soft halo behind the button */}
// //           {!reduce && (
// //             <motion.span
// //               aria-hidden
// //               className="absolute inset-0 -z-10 rounded-xl bg-white/50 blur-2xl"
// //               animate={{ opacity: [0.3, 0.85, 0.3], scale: [0.92, 1.18, 0.92] }}
// //               transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
// //             />
// //           )}
// //           <button
// //             onClick={openCalendlyPopup}
// //             className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-brand-700 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:scale-100"
// //           >
// //             Book Free Demo
// //             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
// //           </button>
// //         </motion.div>
// //       </motion.div>

// //       {/* ---------- Product screenshot ---------- */}
// //       <div
// //         className="section-container relative z-20 mt-10 -mb-16 sm:-mb-20 lg:mt-12 lg:-mb"
// //         style={{ perspective: 1400 }}
// //       >
// //         <motion.div
// //           initial={{ opacity: 0, y: 110, scale: 0.9, rotateX: 18 }}
// //           animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
// //           transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
// //         >
// //           <motion.div
// //             animate={reduce ? undefined : { y: [-6, -30, -6], scale: [1, 1.015, 1] }}
// //             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
// //             className="relative mx-auto aspect-[3/2] w-full max-w-5xl"
// //           >
// //             <Image
// //               src="/dashboard/inext hero.png"
// //               alt="iNextERP Dashboard and Mobile View"
// //               fill
// //               unoptimized
// //               className="object-contain"
// //               priority
// //             />
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* ---------- Bottom curve ---------- */}
// //       <div className="relative z-10">
// //         <svg
// //           viewBox="0 0 1440 160"
// //           preserveAspectRatio="none"
// //           className="relative block h-24 w-full sm:h-32 lg:h-40"
// //         >
// //           <path
// //             d="M0,64 C240,140 480,150 720,150 C960,150 1200,140 1440,64 L1440,160 L0,160 Z"
// //             fill="white"
// //           />
// //         </svg>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion, useReducedMotion, type Variants } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";
// import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// /* ---------- Animation variants ---------- */

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.13,
//       delayChildren: 0.15,
//     },
//   },
// };

// const item: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     filter: "blur(16px)",
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export function Hero() {
//   const reduce = useReducedMotion();

//   return (
//     <section className="relative overflow-visible bg-[#031824]">
//       {/* ========================================================= */}
//       {/* BACKGROUND                                                */}
//       {/* ========================================================= */}

//       {/* Base gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(130% 95% at 50% -12%, #3cb4f2 0%, #1c8fd6 18%, #1370ad 36%, #0d5180 54%, #083a5c 72%, #05263c 88%, #031824 100%)",
//         }}
//       />

//       {/* Animated grid */}
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
//           backgroundSize: "64px 64px",
//           maskImage:
//             "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
//         }}
//         initial={{ opacity: 0 }}
//         animate={
//           reduce
//             ? { opacity: 0.16 }
//             : {
//                 opacity: [0.12, 0.24, 0.12],
//                 backgroundPosition: ["0px 0px", "64px 64px"],
//               }
//         }
//         transition={{
//           opacity: {
//             repeat: Infinity,
//             duration: 7,
//             ease: "easeInOut",
//           },
//           backgroundPosition: {
//             repeat: Infinity,
//             duration: 14,
//             ease: "linear",
//           },
//         }}
//       />

//       {/* Ambient aurora */}
//       <motion.div
//         className="absolute -top-[18%] left-1/2 h-[60%] w-[68%] -translate-x-1/2 rounded-full bg-[#7fd7ff]/30 blur-[160px]"
//         animate={
//           reduce
//             ? undefined
//             : {
//                 scale: [1, 1.25, 1],
//                 opacity: [0.45, 1, 0.45],
//               }
//         }
//         transition={{
//           repeat: Infinity,
//           duration: 6.5,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-[8%] left-[10%] h-[46%] w-[42%] rounded-full bg-[#1881c4]/45 blur-[150px]"
//         animate={
//           reduce
//             ? undefined
//             : {
//                 x: [0, 160, 0],
//                 y: [0, -70, 0],
//                 scale: [1, 1.18, 1],
//               }
//         }
//         transition={{
//           repeat: Infinity,
//           duration: 12,
//           ease: "easeInOut",
//         }}
//       />

//       <motion.div
//         className="absolute bottom-[12%] right-[8%] h-[42%] w-[38%] rounded-full bg-[#38e0d0]/22 blur-[150px]"
//         animate={
//           reduce
//             ? undefined
//             : {
//                 x: [0, -140, 0],
//                 y: [0, 66, 0],
//                 scale: [1.12, 1, 1.12],
//               }
//         }
//         transition={{
//           repeat: Infinity,
//           duration: 14,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Light sweep */}
//       {!reduce && (
//         <motion.div
//           className="absolute inset-y-0 w-[32%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
//           initial={{ x: "-40%" }}
//           animate={{ x: "280%" }}
//           transition={{
//             repeat: Infinity,
//             duration: 5,
//             ease: "easeInOut",
//             repeatDelay: 2.5,
//           }}
//         />
//       )}

//       {/* Vignette */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 88% 72% at 50% 34%, transparent 42%, rgba(2,14,24,0.58) 100%)",
//         }}
//       />

//       {/* ========================================================= */}
//       {/* HERO CONTENT                                               */}
//       {/* ========================================================= */}

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="section-container relative z-10 flex flex-col items-center gap-7 pt-20 text-center sm:pt-24 lg:pt-28"
//       >
//         {/* Badge */}
//         <motion.div
//           variants={item}
//           className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
//         >
//           <span className="relative flex h-1.5 w-1.5">
//             {!reduce && (
//               <motion.span
//                 className="absolute inline-flex h-full w-full rounded-full bg-accent-300"
//                 animate={{
//                   scale: [1, 3.2, 1],
//                   opacity: [0.9, 0, 0.9],
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2,
//                   ease: "easeOut",
//                 }}
//               />
//             )}

//             <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-300" />
//           </span>

//           POS · Inventory · Billing · Accounting · CRM
//         </motion.div>

//         {/* Heading */}
//         <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(3,24,36,0.55)] sm:text-5xl xl:text-6xl">
//           <motion.span variants={item} className="block">
//             Run Your Business.
//           </motion.span>

//           <motion.span
//             variants={item}
//             className="relative block bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent"
//           >
//             Smarter. Faster. Better.

//             {/* Shimmer */}
//             {!reduce && (
//               <motion.span
//                 aria-hidden
//                 className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] bg-clip-text text-transparent"
//                 style={{
//                   backgroundSize: "220% 100%",
//                 }}
//                 animate={{
//                   backgroundPosition: ["160% 0%", "-60% 0%"],
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 3.2,
//                   ease: "easeInOut",
//                   repeatDelay: 2.2,
//                 }}
//               >
//                 Smarter. Faster. Better.
//               </motion.span>
//             )}
//           </motion.span>
//         </h1>

//         {/* Description */}
//         <motion.p
//           variants={item}
//           className="max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(3,24,36,0.5)] sm:text-lg"
//         >
//           Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
//           more. Built for Retail, Wholesale, Distribution & Growing Businesses.
//         </motion.p>

//         {/* CTA */}
//         <motion.div variants={item} className="relative mt-2">
//           {!reduce && (
//             <motion.span
//               aria-hidden
//               className="absolute inset-0 -z-10 rounded-xl bg-white/50 blur-2xl"
//               animate={{
//                 opacity: [0.3, 0.85, 0.3],
//                 scale: [0.92, 1.18, 0.92],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 2.8,
//                 ease: "easeInOut",
//               }}
//             />
//           )}

//           <button
//             onClick={openCalendlyPopup}
//             className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-brand-700 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:scale-100"
//           >
//             Book Free Demo

//             <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </motion.div>
//       </motion.div>

//       {/* ========================================================= */}
//       {/* PRODUCT IMAGE + CURVE                                      */}
//       {/* ========================================================= */}

//       <div className="relative z-10 mt-10 pb-0 sm:mt-12 lg:mt-14">
//         {/* ------------------------------------------------------- */}
//         {/* WHITE CURVE                                              */}
//         {/* ------------------------------------------------------- */}
//         <div className="pointer-events-none absolute left-0 right-0 top-[43%] z-10">
//           <svg
//             viewBox="0 0 1440 220"
//             preserveAspectRatio="none"
//             className="block h-56 w-full sm:h-64 lg:h-72"
//           >
//             <path
//               d="
//                 M0,30
//                 C180,95 360,135 540,155
//                 C610,163 670,168 720,168
//                 C770,168 830,163 900,155
//                 C1080,135 1260,95 1440,30
//                 L1440,220
//                 L0,220
//                 Z
//               "
//               fill="white"
//             />
//           </svg>
//         </div>

//         {/* ------------------------------------------------------- */}
//         {/* PRODUCT SCREENSHOT                                      */}
//         {/* ------------------------------------------------------- */}
//         <div
//           className="section-container relative z-30"
//           style={{ perspective: 1400 }}
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 110,
//               scale: 0.9,
//               rotateX: 18,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               rotateX: 0,
//             }}
//             transition={{
//               duration: 1.3,
//               delay: 0.5,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//           >
//             <motion.div
//               animate={
//                 reduce
//                   ? undefined
//                   : {
//                       y: [-6, -20, -6],
//                       scale: [1, 1.015, 1],
//                     }
//               }
//               transition={{
//                 repeat: Infinity,
//                 duration: 5,
//                 ease: "easeInOut",
//               }}
//               className="relative mx-auto aspect-[3/2] w-full max-w-5xl"
//             >
//               <Image
//                 src="/dashboard/inext hero.png"
//                 alt="iNextERP Dashboard and Mobile View"
//                 fill
//                 unoptimized
//                 className="object-contain"
//                 priority
//               />
//             </motion.div>
//           </motion.div>
//         </div>

//         <div className="relative z-10 -mt-1 h-32 bg-white sm:h-36 lg:h-48" />
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

/* ---------- Animation variants ---------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(16px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-visible bg-[#031824]">
      {/* ========================================================= */}
      {/* BACKGROUND                                                */}
      {/* ========================================================= */}

      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 95% at 50% -12%, #3cb4f2 0%, #1c8fd6 18%, #1370ad 36%, #0d5180 54%, #083a5c 72%, #05263c 88%, #031824 100%)",
        }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={
          reduce
            ? { opacity: 0.16 }
            : {
                opacity: [0.12, 0.24, 0.12],
                backgroundPosition: ["0px 0px", "64px 64px"],
              }
        }
        transition={{
          opacity: {
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          },
          backgroundPosition: {
            repeat: Infinity,
            duration: 14,
            ease: "linear",
          },
        }}
      />

      {/* Ambient aurora */}
      <motion.div
        className="absolute -top-[18%] left-1/2 h-[60%] w-[68%] -translate-x-1/2 rounded-full bg-[#7fd7ff]/30 blur-[160px]"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.25, 1],
                opacity: [0.45, 1, 0.45],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 6.5,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[8%] left-[10%] h-[46%] w-[42%] rounded-full bg-[#1881c4]/45 blur-[150px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 160, 0],
                y: [0, -70, 0],
                scale: [1, 1.18, 1],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[12%] right-[8%] h-[42%] w-[38%] rounded-full bg-[#38e0d0]/22 blur-[150px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -140, 0],
                y: [0, 66, 0],
                scale: [1.12, 1, 1.12],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
      />

      {/* Light sweep */}
      {!reduce && (
        <motion.div
          className="absolute inset-y-0 w-[32%] -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
          initial={{ x: "-40%" }}
          animate={{ x: "280%" }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            repeatDelay: 2.5,
          }}
        />
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 88% 72% at 50% 34%, transparent 42%, rgba(2,14,24,0.58) 100%)",
        }}
      />

      {/* ========================================================= */}
      {/* HERO CONTENT                                              */}
      {/* ========================================================= */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 flex flex-col items-center gap-7 pt-20 text-center sm:pt-24 lg:pt-28"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.12] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            {!reduce && (
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-accent-300"
                animate={{
                  scale: [1, 3.2, 1],
                  opacity: [0.9, 0, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeOut",
                }}
              />
            )}

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-300" />
          </span>
          POS · Inventory · Billing · Accounting · CRM
        </motion.div>

        {/* Heading */}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(3,24,36,0.55)] sm:text-5xl xl:text-6xl">
          <motion.span variants={item} className="block">
            Run Your Business.
          </motion.span>

          <motion.span
            variants={item}
            className="relative block bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent"
          >
            Smarter. Faster. Better.

            {/* Shimmer */}
            {!reduce && (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "220% 100%",
                }}
                animate={{
                  backgroundPosition: ["160% 0%", "-60% 0%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.2,
                  ease: "easeInOut",
                  repeatDelay: 2.2,
                }}
              >
                Smarter. Faster. Better.
              </motion.span>
            )}
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_16px_rgba(3,24,36,0.5)] sm:text-lg"
        >
          Complete ERP solution for POS, Inventory, Billing, Accounting, CRM &
          more. Built for Retail, Wholesale, Distribution & Growing Businesses.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="relative mt-2">
          {!reduce && (
            <motion.span
              aria-hidden
              className="absolute inset-0 -z-10 rounded-xl bg-white/50 blur-2xl"
              animate={{
                opacity: [0.3, 0.85, 0.3],
                scale: [0.92, 1.18, 0.92],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              }}
            />
          )}

          <button
            onClick={openCalendlyPopup}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-brand-700 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 active:scale-100"
          >
            Book Free Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* PRODUCT IMAGE + CURVE                                      */}
      {/* ========================================================= */}

      <div className="relative z-10 mt-10 pb-0 sm:mt-12 lg:mt-14">
        {/* ------------------------------------------------------- */}
        {/* WHITE CURVE & SOLID BOTTOM FILL                          */}
        {/* ------------------------------------------------------- */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[43%] z-10 flex flex-col">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="block h-56 w-full shrink-0 sm:h-64 lg:h-72"
          >
            <path
              d="
                M0,30
                C180,95 360,135 540,155
                C610,163 670,168 720,168
                C770,168 830,163 900,155
                C1080,135 1260,95 1440,30
                L1440,220
                L0,220
                Z
              "
              fill="white"
            />
          </svg>
          {/* Fills the rest of the space behind the image, preventing the gap */}
          <div className="flex-1 bg-white -mt-[1px]" />
        </div>

        {/* ------------------------------------------------------- */}
        {/* PRODUCT SCREENSHOT                                       */}
        {/* ------------------------------------------------------- */}
        <div
          className="section-container relative z-30"
          style={{ perspective: 1400 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 110,
              scale: 0.9,
              rotateX: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      y: [-6, -20, -6],
                      scale: [1, 1.015, 1],
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative mx-auto aspect-[3/2] w-full max-w-5xl"
            >
              <Image
                src="/dashboard/inext hero.png"
                alt="iNextERP Dashboard and Mobile View"
                fill
                unoptimized
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------- */}
        {/* BOTTOM SPACING BLOCK                                     */}
        {/* ------------------------------------------------------- */}
        <div className="relative z-10 h-12 sm:h-16 lg:h-18" />
      </div>
    </section>
  );
}

