"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Headphones,
  Rocket,
  Globe,
  LineChart,
  Cloud,
  Box,
  Database,
  ShieldAlert,
  Network,
  Activity,
  CheckCircle2,
  Calendar,
  Maximize,
  Lock,
  XCircle,
} from "lucide-react";
import { Faq } from "@/components/sections/Faq";

// --- DATA CONFIGURATION ---
const HERO_STATS = [
  { icon: ShieldCheck, title: "99.99%", desc: "Uptime SLA" },
  { icon: ShieldCheck, title: "Enterprise Grade", desc: "Security" },
  { icon: Maximize, title: "Scalable", desc: "Infrastructure" },
  { icon: Headphones, title: "24/7", desc: "Expert Support" },
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "99.99% Guaranteed SLA" },
  { icon: Lock, label: "256-bit SSL Encryption" },
  { icon: Database, label: "Automated Daily Snapshots" },
  { icon: Globe, label: "Multi-Region Failover" },
];

const SERVER_COMPARISON = [
  {
    risk: "High risk of permanent data loss from hard drive crash or ransomware",
    solution: "Automated multi-region cloud snapshots with 1-click disaster recovery",
  },
  {
    risk: "Requires expensive server hardware, UPS backup, and AC room setup",
    solution: "Zero physical hardware maintenance or electricity costs",
  },
  {
    risk: "Billing stops completely if the office server shuts down or loses power",
    solution: "99.99% SLA uptime guarantee with automated failover servers",
  },
  {
    risk: "Restricted local access — impossible to track sales while travelling",
    solution: "100% secure remote access from any mobile, tablet, or PC worldwide",
  },
];

const FEATURES = [
  {
    icon: Rocket,
    title: "High Performance",
    desc: "Fast, reliable infrastructure designed for mission-critical workloads — including the ERP systems your operations depend on.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security",
    desc: "Multi-layer security protecting your data and applications, with the same standards used to secure your iNextERP instance.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    desc: "Data centers positioned for low latency and high availability, keeping your ERP and business applications responsive.",
  },
  {
    icon: LineChart,
    title: "Cost Optimized",
    desc: "Flexible pricing and right-sizing so your infrastructure spend matches your actual usage, not guesswork.",
  },
];

const CLOUD_SERVICES = [
  { icon: Cloud, title: "Cloud Hosting", desc: "High-speed SSD-powered instances fine-tuned specifically for SQL database queries and multi-branch transaction sync." },
  { icon: Box, title: "Cloud Compute", desc: "High-performance virtual machines sized to your workload, from single apps to enterprise deployments." },
  { icon: Database, title: "Cloud Storage", desc: "Secure, durable, and scalable storage for your business data, documents, and backups." },
  { icon: ShieldAlert, title: "Cloud Backup", desc: "Automated daily off-site snapshots with point-in-time database restoration. Zero risk of ransomware data loss." },
  { icon: Network, title: "Cloud Networking", desc: "Private networks, load balancing, and CDN for seamless, secure connectivity across your business locations." },
  { icon: Activity, title: "Cloud Monitoring", desc: "24/7 proactive automated health tracking that catches memory leaks and network latency before it slows down your billing counters." },
];

const WHY_CHOOSE_POINTS = [
  "Enterprise-grade infrastructure",
  "99.99% uptime guarantee",
  "24/7 expert support",
  "Compliant with global standards",
  "Seamless scalability on demand",
];

// Safely removed AWS/VMware to avoid unauthorized trademark usage/misrepresentation
const BRANDS = ["DELL", "HP", "Lenovo", "Microsoft", "CISCO", "VERTIV"];

const FAQ_DATA = [
  {
    q: "Is iNextERP Cloud only for hosting iNextERP software, or can we host other business apps too?",
    a: "While it is pre-configured and fine-tuned for peak ERP database performance, you can also host connected business tools, custom web portals, e-commerce databases, and API middleware seamlessly.",
  },
  {
    q: "Where is our business data physically hosted, and is it secure?",
    a: "Your data is hosted on Tier-3 and Tier-4 datacenters located within India, protected by 256-bit SSL encryption, hardware firewalls, automated anti-DDoS protection, and strict IP-whitelisting options.",
  },
  {
    q: "How does iNextERP Cloud handle server failures or power outages?",
    a: "We maintain a redundant, failover infrastructure with a 99.99% Uptime SLA. If a primary cloud node experiences an anomaly, secondary backup nodes take over automatically without interrupting your billing or database access.",
  },
  {
    q: "How frequently are cloud backups taken, and can we restore data if deleted by mistake?",
    a: "Automated cloud snapshots run daily in the background with continuous incremental database logging. You can request a point-in-time data restoration to any previous snapshot with zero data corruption.",
  },
  {
    q: "What happens to counter billing if our retail outlet loses internet connection?",
    a: "Your POS billing counters will NOT stop working. iNextERP features a Hybrid Offline Mode that lets cashiers keep printing invoices locally. Once internet connectivity restores, data automatically syncs to your central cloud database.",
  },
  {
    q: "Do we need an internal IT manager or server engineer to manage this cloud?",
    a: "No! iNextERP Cloud is a Fully Managed Service. Our dedicated DevOps team manages server provisioning, security patches, performance tuning, and backup health monitoring 24/7.",
  },
  {
    q: "Can we upgrade RAM, Storage, or CPU as our business opens new branches?",
    a: "Yes, absolutely. Resources can be scaled up or down on-demand with zero system downtime, ensuring you only pay for the exact compute infrastructure your business requires.",
  },
  {
    q: "How does iNextERP Cloud protect against Ransomware and cyber threats?",
    a: "We utilize isolated database containerization, multi-factor authentication (MFA), automated threat scanning, and read-only off-site backup copies that ransomware cannot encrypt or destroy.",
  },
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

export default function CloudServiceClient() {
  const [marqueeBrands] = useState([...BRANDS, ...BRANDS]);

  return (
    <main className="w-full bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-ink-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-brand-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-accent-600/20 blur-[120px]" />

        <div className="section-container relative z-10 max-w-350">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-5 lg:col-span-6">
              <motion.div
                variants={heroItem}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Enterprise Cloud Hosting
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="text-3xl font-semibold leading-[1.15] text-white sm:text-4xl"
              >
                Enterprise Cloud Hosting Optimized for{" "}
                <span className="bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  Zero-Downtime ERP Performance
                </span>
              </motion.h1>

              <motion.p variants={heroItem} className="max-w-lg text-sm leading-relaxed text-ink-300 md:text-base">
                Stop suffering from local server drive crashes, ransomware
                risks, and slow database queries. Get sub-second billing
                speed, automated daily backups, and 99.99% uptime.
              </motion.p>

              <motion.div variants={heroItem} className="mt-3 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#cloud-services"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
                >
                  Explore Cloud Solutions <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
                >
                  Chat on WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Stats / Trust Badges */}
              <motion.div variants={heroItem} className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <stat.icon className="h-5 w-5 text-brand-300" />
                    <div>
                      <div className="text-xs font-bold text-white">{stat.title}</div>
                      <div className="text-[10px] text-ink-400">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div variants={heroItem} className="relative mt-6 lg:col-span-6 lg:mt-0">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-500/25 via-accent-500/10 to-transparent blur-3xl" />
              <div className="relative h-75 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-112.5 lg:h-125">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
                  alt="enterprise cloud infrastructure dashboard powering iNextERP"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-transparent to-transparent opacity-80" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BADGES STRIP */}
      <section className="border-b border-ink-150 bg-white py-6">
        <div className="section-container max-w-350">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-bold text-ink-600 md:text-sm">
                <badge.icon className="h-4 w-4 shrink-0 text-brand-600" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOCAL SERVER VS INEXTERP CLOUD COMPARISON */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 text-center">
            <div className="eyebrow mx-auto mb-4 w-fit">Local Server vs Cloud</div>
            <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-ink-900 md:text-3xl">
              Why Traditional Office Servers Put Your Business at Risk
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-ink-150 bg-white shadow-xl"
          >
            {/* Column Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center gap-3 bg-ink-950 px-6 py-5">
                <ShieldAlert className="h-5 w-5 shrink-0 text-red-400" />
                <span className="text-xs font-bold text-white sm:text-sm">
                  Local Office Server
                  <span className="ml-2 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-400">
                    High Cost &amp; Risk
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 bg-brand-600 px-6 py-5">
                <ShieldCheck className="h-5 w-5 shrink-0 text-white" />
                <span className="text-xs font-bold text-white sm:text-sm">
                  iNextERP Managed Cloud
                  <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                    Zero Overhead
                  </span>
                </span>
              </div>
            </div>

            {/* Comparison Rows */}
            {SERVER_COMPARISON.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  i !== SERVER_COMPARISON.length - 1 ? "border-b border-ink-150" : ""
                }`}
              >
                <div className="flex items-start gap-3 border-b border-ink-150 px-6 py-5 md:border-b-0 md:border-r">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <p className="text-xs leading-relaxed text-ink-600 md:text-sm">{row.risk}</p>
                </div>
                <div className="flex items-start gap-3 bg-brand-50/50 px-6 py-5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <p className="text-xs font-medium leading-relaxed text-ink-800 md:text-sm">{row.solution}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURES BANNER */}
      <section className="border-b border-ink-150 bg-ink-50 py-16 md:py-20">
        <div className="section-container max-w-350">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/4">
              <div className="eyebrow mb-4">Why iNextERP Cloud</div>
              <h2 className="mb-2 text-2xl font-bold leading-tight text-ink-900 md:text-3xl">
                Cloud That Powers Your Possibilities
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:w-3/4"
            >
              {FEATURES.map((feat, i) => (
                <motion.div key={i} variants={itemVariants} className="card-surface card-surface-hover flex flex-col p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-ink-900">{feat.title}</h3>
                  <p className="text-[11px] leading-relaxed text-ink-500">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. EVERYTHING YOU NEED (SERVICES GRID) */}
      <section id="cloud-services" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">Everything You Need. All in One Cloud.</h2>
              <p className="mt-2 text-sm text-ink-500">
                Enterprise-grade cloud services designed to support your entire business ecosystem.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700">
              <Cloud className="h-4 w-4" /> Custom pricing, sized to your workload
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {CLOUD_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group card-surface card-surface-hover flex cursor-pointer flex-col items-center p-6 text-center"
              >
                <div className="mb-4 h-12 w-12 text-ink-300 transition-colors group-hover:text-brand-500">
                  <service.icon className="h-full w-full stroke-[1.5]" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-ink-900">{service.title}</h3>
                <p className="mb-4 flex-1 text-[10px] leading-relaxed text-ink-500">{service.desc}</p>
                <Link href="#" className="mt-auto flex items-center text-[10px] font-bold text-ink-400 group-hover:text-brand-600">
                  Learn More <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TRUSTED INFRASTRUCTURE PARTNERS (marquee) */}
      <section className="overflow-hidden border-y border-ink-150 bg-ink-50 py-10">
        <div className="section-container max-w-350">
          <h3 className="mb-6 text-center text-[10px] font-bold uppercase tracking-widest text-ink-400">
            Trusted Infrastructure Partners
          </h3>
        </div>
        <div className="relative mx-auto w-full max-w-[100vw] overflow-hidden mask-fade-x">
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={`${brand}-${idx}`}
                className="flex shrink-0 items-center justify-center px-8 text-lg font-bold tracking-tighter text-ink-400 opacity-70 md:px-12 md:text-xl"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. WHY BUSINESSES CHOOSE INEXTERP CLOUD */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-stretch overflow-hidden rounded-4xl bg-ink-950 shadow-2xl md:flex-row md:items-center"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-600/25 blur-[110px]" />

            {/* Left Content */}
            <div className="relative z-10 p-10 text-white md:w-1/2 md:p-16">
              <h2 className="mb-6 text-2xl font-bold leading-tight md:text-4xl">
                Why Businesses Choose iNextERP Cloud
              </h2>
              <ul className="space-y-4">
                {WHY_CHOOSE_POINTS.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink-300 md:text-base">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-300" /> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image Background */}
            <div className="relative h-75 md:absolute md:right-0 md:top-0 md:bottom-0 md:h-full md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&q=80&w=1000"
                alt="Enterprise Data Center Infrastructure"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <Faq
        eyebrow="FAQs"
        items={FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))}
      />

      {/* 9. BOTTOM CTA SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="section-container max-w-350">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col overflow-hidden rounded-4xl shadow-2xl md:flex-row md:items-stretch"
          >
            <div className="relative z-10 flex flex-col justify-center bg-linear-to-br from-brand-600 via-brand-500 to-accent-600 p-10 text-white md:w-1/2 lg:p-16">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />
              <div className="relative mb-2 text-[10px] font-bold uppercase tracking-widest text-brand-100">
                Ready to Modernize Your Business?
              </div>
              <h2 className="relative mb-4 text-2xl font-bold leading-tight md:text-4xl">
                Let&rsquo;s Build Your Cloud Advantage.
              </h2>
              <p className="relative mb-8 max-w-md text-sm text-brand-50">
                Migrate, modernize and scale with iNextERP Cloud. Our experts
                are ready to help you every step of the way.
              </p>

              <div className="relative flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919211995156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Chat on WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                >
                  <Calendar className="h-4 w-4" /> Schedule a Demo
                </a>
              </div>
            </div>

            <div className="relative min-h-75 w-full border-t border-white/5 md:w-1/2 md:border-l md:border-t-0">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Cloud infrastructure servers"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/50 to-transparent md:bg-linear-to-r" />
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/products/erp-software"
              className="text-[10px] font-semibold uppercase tracking-wider text-ink-400 transition-colors hover:text-brand-600"
            >
              Return to iNextERP Core Software
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
