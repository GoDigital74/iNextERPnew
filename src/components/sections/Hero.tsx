"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";
import WarpText from "@/components/ui/WarpText";

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
  const sectionRef = useRef<HTMLElement>(null);

  const [isWideViewport, setIsWideViewport] = useState(false);


  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle("hero-paused", !entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsWideViewport(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden sm:overflow-visible bg-[#031824]">
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

      <div
        className="hero-ambient hero-anim-grid absolute inset-0 overflow-hidden opacity-[0.12]"
        style={{
          maskImage:
            "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 78% at 50% 6%, black 25%, rgba(0,0,0,0.35) 62%, transparent 100%)",
        }}
      >
        <div
          className="hero-ambient hero-anim-grid-drift absolute -inset-16"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.95) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Ambient aurora */}
      <div className="hero-ambient hero-anim-aurora absolute -top-[18%] left-1/2 h-[60%] w-[68%] -translate-x-1/2 rounded-full bg-[#7fd7ff]/30 opacity-45 blur-[160px]" />

      <div className="hero-ambient hero-anim-drift-left absolute bottom-[8%] left-[10%] h-[46%] w-[42%] rounded-full bg-[#1881c4]/45 blur-[150px]" />

      <div className="hero-ambient hero-anim-drift-right absolute bottom-[12%] right-[8%] h-[42%] w-[38%] rounded-full bg-[#38e0d0]/22 blur-[150px]" />

      {/* Light sweep */}
      <div className="hero-ambient hero-anim-sweep absolute inset-y-0 w-[32%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />

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
        className="section-container relative z-10 flex flex-col items-center gap-7 pt-22 text-center sm:pt-24 lg:pt-24"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.12] px-3 py-2 text-[11px] sm:text-[17px] lg:text-[13px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-1.5">
            <span className="hero-ambient hero-anim-ping absolute inline-flex h-full w-full rounded-full bg-accent-300" />

            <span className="relative inline-flex h-2.5 w-2 rounded-full bg-accent-300" />
          </span>
          POS · Inventory · Billing · Accounting · CRM
        </motion.div>

        {/* Heading */}
        <h1 className="w-full max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_28px_rgba(3,24,36,0.55)] sm:text-5xl xl:text-6xl">
          <motion.span variants={item} className="relative block">
            <WarpText
              text="Run Your Business."
              color="#ffffff"
              warpStrength={0.07}
              warpScale={1.6}
              speed={0.5}
              pointerInfluence={0.4}
              pointerStrength={0.35}
              refraction={0.016}
              ripple
              fontSize="clamp(2.25rem, 6vw, 3.75rem)"
              fontWeight={700}
              fontFamily="inherit"
              letterSpacing="-0.025em"
              lineHeight={1.12}
              className="min-h-0! h-16 sm:h-20 xl:h-24"
            />
          </motion.span>

          <motion.span variants={item} className="relative block">
            <WarpText
              text="Smarter. Faster. Better."
              color="#eaf6ff"
              warpStrength={0.07}
              warpScale={1.6}
              speed={0.5}
              pointerInfluence={0.4}
              pointerStrength={0.35}
              refraction={0.016}
              ripple
              fontSize="clamp(2.25rem, 6vw, 3.75rem)"
              fontWeight={700}
              fontFamily="inherit"
              letterSpacing="-0.025em"
              lineHeight={1.12}
              className="min-h-0! h-16 sm:h-20 xl:h-24"
            />
          </motion.span>
        </h1>

        {/* Description */}
        <motion.div variants={item} className="relative block w-full">
          <WarpText
            text={
              isWideViewport
                ? "Complete ERP solution for POS, Inventory, Billing, Accounting, CRM & more.\nBuilt for Retail, Wholesale, Distribution & Growing Businesses."
                : "Complete ERP solution for POS,\nInventory, Billing, Accounting, CRM\n& more. Built for Retail, Wholesale,\nDistribution & Growing Businesses."
            }
            color="rgba(255,255,255,0.88)"
            warpStrength={0.05}
            warpScale={1.6}
            speed={0.4}
            pointerInfluence={0.35}
            pointerStrength={0.25}
            refraction={0.012}
            ripple
            fontSize="clamp(1.0625rem, 2.7vw, 1.25rem)"
            fontWeight={400}
            fontFamily="inherit"
            letterSpacing="0"
            lineHeight={1.625}
            className="min-h-0! mx-auto h-40 max-w-3xl sm:h-24"
          />
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="relative mt-0">
          <span
            aria-hidden
            className="hero-ambient hero-anim-glow absolute inset-0 -z-10 rounded-xl bg-white/50 blur-2xl"
          />

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
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[43%] z-10 hidden flex-col sm:flex">
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
            <div className="hero-ambient hero-anim-float relative mx-auto aspect-[3/2] w-full max-w-5xl">
              <Image
                src="/dashboard/inext hero.png"
                alt="iNextERP Dashboard and Mobile View"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
                priority
              />
            </div>
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

