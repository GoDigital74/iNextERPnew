"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Handshake,
  Layers3,
  Megaphone,
  Network,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const CONTACT_URL = "https://i-next-er-pnew.vercel.app/contact";

const partnerTypes = [
  {
    icon: Megaphone,
    title: "Sales & Referral Partners",
    description:
      "Introduce growing retailers to a modern ERP and POS platform, and create value from every qualified opportunity.",
    points: ["Simple referral process", "Sales enablement support", "Partner-first communication"],
  },
  {
    icon: Layers3,
    title: "Solution Partners",
    description:
      "Build a stronger offering around iNextERP with integrations, consulting, implementation, and industry expertise.",
    points: ["Connected product ecosystem", "Integration opportunities", "Faster customer adoption"],
  },
];

const benefits = [
  { icon: Network, title: "Reach more businesses", description: "Take your expertise to retailers, distributors, and manufacturers ready to grow." },
  { icon: Sparkles, title: "Create better solutions", description: "Combine your capabilities with a flexible platform built for real-world operations." },
  { icon: Handshake, title: "Grow together", description: "Work with a responsive team that values long-term, practical partnerships." },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function PartnershipClient() {
  return (
    <main className="flex w-full flex-1 flex-col bg-white">
      <section className="relative mt-22 overflow-hidden bg-ink-950 pb-24 pt-14 lg:pb-32 lg:pt-18">
        <div className="pointer-events-none absolute -right-24 -top-28 h-120 w-120 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="section-container relative z-10">
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">&gt;</span>
            <span className="text-white">Partnership</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div initial="hidden" animate="show" variants={reveal} className="lg:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-300" />
                Partner With iNextERP
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl xl:text-6xl">
                Opening up new opportunities,
                <span className="block bg-linear-to-r from-brand-300 via-accent-300 to-white bg-clip-text text-transparent">
                  together.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
                Software partnerships enrich the iNextERP experience. Bring your reach, expertise, or technology and help more businesses run smarter.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={CONTACT_URL}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-700 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Become a Partner
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#partner-types" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10">
                  Explore partnerships
                </a>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={reveal} transition={{ delay: 0.15 }} className="relative lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="relative aspect-[1.18] overflow-hidden rounded-2xl">
                  <Image src="/office.webp" alt="iNextERP team collaborating with partners" fill priority className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-tr from-ink-950/70 via-brand-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-ink-950/70 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3 text-white">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500"><Handshake className="h-5 w-5" /></span>
                      <div>
                        <p className="text-sm font-semibold">Built for shared momentum</p>
                        <p className="mt-1 text-xs text-white/60">One connected experience for every customer.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="partner-types" className="border-b border-ink-150 bg-ink-50 py-20 lg:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto mb-5 w-fit">Find your fit</p>
            <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">A partnership built around your strengths</h2>
            <p className="mt-4 text-lg leading-8 text-ink-500">Whether you open doors or build solutions, there is room to grow with iNextERP.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partnerTypes.map((partner) => {
              const Icon = partner.icon;
              return (
                <article key={partner.title} className="card-surface card-surface-hover p-8 md:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-7 text-2xl font-bold text-ink-900">{partner.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-ink-500">{partner.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                    {partner.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-medium text-ink-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />{point}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5 w-fit">Why iNextERP</p>
              <h2 className="text-3xl font-bold text-ink-900 md:text-4xl">Partnerships that move business forward.</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-ink-500">Our platform connects the essential parts of modern operations, giving every partner a stronger story to take to market.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return <div key={benefit.title} className="border-l-2 border-brand-200 pl-5"><Icon className="h-5 w-5 text-brand-600" /><h3 className="mt-4 text-base font-bold text-ink-900">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-ink-500">{benefit.description}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 py-20 text-center lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(62,147,210,0.28),transparent_55%)]" />
        <div className="section-container relative">
          <BriefcaseBusiness className="mx-auto h-9 w-9 text-accent-300" />
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-white md:text-4xl">Let&apos;s create the next opportunity together.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-brand-100/75">Tell us about your business and how you would like to partner with iNextERP.</p>
          <a href={CONTACT_URL} className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-brand-700 transition-all hover:-translate-y-0.5 hover:bg-brand-50">
            Talk to our team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}