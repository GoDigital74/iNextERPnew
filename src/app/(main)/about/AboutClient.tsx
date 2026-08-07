"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  Eye,
  Target,
  Package,
  ShieldCheck,
  TrendingUp,
  Headphones,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

// --- CUSTOM SVG COMPONENTS ---
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// --- DATA ARRAYS (content unchanged from the previous version) ---
const STATS = [
  { value: 100, suffix: "+", label: "Businesses" },
  { value: 10, suffix: "+", label: "Industries" },
  { value: 15, suffix: "+", label: "Modules" },
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
];

const FEATURES = [
  { icon: Package, title: "All-in-One Platform", desc: "Everything your business needs in one integrated solution." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security with 99.9% uptime guarantee." },
  { icon: TrendingUp, title: "Built for Growth", desc: "Scalable, flexible, and designed to grow with your business." },
  { icon: Headphones, title: "24/7 Support", desc: "Our experts are always available to support your success." },
  { icon: Lightbulb, title: "Continuous Innovation", desc: "We keep evolving to bring you the latest technology." },
];

const TEAM = [
  { name: "Vikram Sharma", role: "Co-Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Rahul Gupta", role: "Co-Founder & CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Neha Bansal", role: "Head of Product", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
];

// --- ANIMATION VARIANTS ---
const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutClient() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <main className="flex-1 flex flex-col w-full bg-white">
      {/* 1. HERO */}
      <section className="relative mt-20 overflow-hidden bg-ink-950 pb-24 pt-12 lg:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute -top-20 right-0 h-130 w-130 translate-x-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-105 w-105 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>&gt;</span>
            <span className="text-white">About</span>
          </div>

          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"
          >
            <div className="flex flex-col gap-6 lg:col-span-6">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                About iNextERP
              </motion.div>

              <motion.h1 variants={heroItem} className="text-4xl font-bold leading-[1.12] text-white sm:text-5xl xl:text-6xl">
                Empowering Businesses.<br />
                <span className="bg-gradient-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  Simplifying Growth.
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="max-w-lg text-lg leading-relaxed text-ink-300">
                NextERP was built with a simple belief — businesses deserve powerful software that is easy to use, affordable to scale, and built to grow with them.
              </motion.p>

              <motion.div variants={heroItem} className="mt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={openCalendlyPopup}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Book Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="#team"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Meet The Team
                </a>
              </motion.div>
            </div>

            <motion.div variants={heroItem} className="relative lg:col-span-6">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 sm:h-96 lg:h-104">
                <Image src="/office.webp" alt="Modern Office" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating stats bridge */}
      <section className="relative z-20 -mt-14 lg:-mt-16">
        <div className="section-container">
          <div
            ref={statsRef}
            className="card-surface grid grid-cols-2 gap-6 rounded-3xl p-6 shadow-2xl shadow-ink-900/10 sm:grid-cols-4 sm:p-8"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span className="text-3xl font-bold text-ink-900 sm:text-4xl">
                  {statsInView ? <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2} /> : "0"}
                  {stat.suffix}
                </span>
                <span className="mt-1 text-sm text-ink-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="eyebrow mx-auto w-fit">Our Story</div>
            <h2 className="mt-5 text-3xl font-bold text-ink-900 md:text-4xl">Built From Experience. Designed For Impact.</h2>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col gap-6 text-lg leading-relaxed text-ink-500"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-3 -top-14 select-none font-serif text-[130px] leading-none text-brand-100"
              >
                &ldquo;
              </span>
              <p className="relative">
                NextERP was founded by a team of industry experts who understood firsthand the challenges businesses face every day — from disconnected systems and manual processes to data silos and limited visibility.
              </p>
              <p className="relative">
                We set out to build an ERP that is modern, integrated, intelligent, and truly easy to use. Today, NextERP powers businesses across industries, helping them streamline operations and unlock their full potential.
              </p>
            </motion.div>

            {/* Right Image with Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-87.5 w-full overflow-hidden rounded-3xl border border-ink-150 shadow-2xl shadow-ink-900/12 md:h-112.5">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="City Skyline"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Quote Card */}
              <div className="card-surface absolute -left-4 bottom-12 max-w-70 p-6 shadow-2xl shadow-ink-900/15 md:-left-12">
                <span className="text-brand-500 text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-ink-800 font-medium italic mb-4 text-sm">
                  Our mission is to transform the way businesses operate through innovation, simplicity, and technology.
                </p>
                <p className="text-ink-400 text-xs font-bold">— NextERP Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-600/25 blur-[120px]" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 text-white shadow-lg shadow-brand-900/40">
                <Eye className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">Our Vision</span>
              <h3 className="mb-4 mt-3 text-2xl font-bold text-white sm:text-3xl">
                A Smarter Future<br />For Every Business
              </h3>
              <p className="leading-relaxed text-ink-300">
                To become the most trusted ERP platform for businesses around the world by delivering innovation, reliability, and exceptional value.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/40 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-600 text-white shadow-lg shadow-brand-900/40">
                <Target className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">Our Mission</span>
              <h3 className="mb-4 mt-3 text-2xl font-bold text-white sm:text-3xl">
                Simplify. Automate.<br />Empower.
              </h3>
              <p className="leading-relaxed text-ink-300">
                To simplify business operations with an all-in-one ERP solution that drives efficiency, transparency, and sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto w-fit">Why Businesses Choose Us</div>
            <h2 className="mt-5 text-3xl font-bold text-ink-900 md:text-4xl">More Than Software. A True Growth Partner.</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {FEATURES.map((feature, idx) => {
              const featured = idx === 0;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={cn(
                    "card-surface card-surface-hover group relative overflow-hidden p-8",
                    featured && "md:col-span-2 md:flex md:items-center md:gap-10"
                  )}
                >
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white",
                      featured ? "mb-6 h-16 w-16 md:mb-0" : "mb-6 h-14 w-14"
                    )}
                  >
                    <feature.icon className={featured ? "h-8 w-8" : "h-6 w-6"} />
                  </div>
                  <div>
                    <h4 className={cn("font-bold text-ink-900", featured ? "mb-3 text-2xl" : "mb-3 text-lg")}>
                      {feature.title}
                    </h4>
                    <p className={cn("leading-relaxed text-ink-500", featured ? "max-w-md text-base" : "text-sm")}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section id="team" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container">
          <div className="mb-16 text-center">
            <div className="eyebrow mx-auto w-fit">Meet Our Leaders</div>
            <h2 className="mt-5 text-3xl font-bold text-ink-900 md:text-4xl">The Minds Behind iNextERP</h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group card-surface card-surface-hover flex flex-col overflow-hidden p-0"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale-[35%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-600 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-col items-center p-6 text-center">
                  <h4 className="text-lg font-bold text-ink-900">{member.name}</h4>
                  <p className="mt-1 text-sm font-medium text-brand-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-600 px-8 py-16 text-center shadow-2xl shadow-brand-900/25 sm:px-16 sm:py-20"
          >
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-ink-950/20 blur-[100px]" />

            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready To Grow With iNextERP?</h2>
              <p className="text-lg text-brand-50">
                Our mission is to transform the way businesses operate through innovation, simplicity, and technology.
              </p>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={openCalendlyPopup}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Book Free Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-8 text-base font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
