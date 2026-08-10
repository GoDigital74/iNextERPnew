"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, BookOpen, Mail, ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { openCalendlyPopup } from "@/components/sections/CalendlyPopup";

export interface LegalSection {
  id: string;
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: string;
  sections: LegalSection[];
  crossLink: { label: string; description: string; href: string };
}

export function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated,
  readTime,
  sections,
  crossLink,
}: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-112px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="relative mt-22 overflow-hidden bg-ink-950 pb-20 pt-14 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="section-container relative z-10">
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-white">{title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {eyebrow}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.12] text-white sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-ink-200">
                <Clock className="h-4 w-4 text-accent-300" />
                Last Updated: {lastUpdated}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-ink-200">
                <BookOpen className="h-4 w-4 text-accent-300" />
                {readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-ink-50 py-16 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex max-h-[calc(100vh-8rem)] flex-col gap-5 overflow-y-auto">
                <div className="card-surface p-5">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-ink-400">
                    On This Page
                  </h4>
                  <nav className="flex flex-col gap-1">
                    {sections.map((section, idx) => {
                      const isActive = activeId === section.id;
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={cn(
                            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                            isActive
                              ? "bg-brand-50 text-brand-700"
                              : "text-ink-500 hover:bg-ink-50 hover:text-ink-900"
                          )}
                        >
                          <span
                            className={cn(
                              "text-xs font-bold tabular-nums",
                              isActive ? "text-brand-500" : "text-ink-300"
                            )}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="line-clamp-1">{section.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>

                <div className="card-surface bg-gradient-to-br from-brand-600 via-brand-500 to-accent-600 p-6 text-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-base font-bold">Have Questions?</h4>
                  <p className="mb-5 text-sm leading-relaxed text-brand-50">
                    Our team is happy to help clarify anything in this document.
                  </p>
                  <a
                    href="mailto:info@inexterpsolutions.com"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Email Us
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Section Cards */}
            <div className="flex flex-col gap-6">
              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="card-surface scroll-mt-28 p-7 sm:p-8"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                      <section.icon className="h-5.5 w-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold tabular-nums text-brand-400">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-ink-600 [&_a]:font-medium [&_a]:text-brand-600 [&_a]:underline-offset-4 [&_a:hover]:underline [&_strong]:font-semibold [&_strong]:text-ink-900 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="card-surface card-surface-hover group flex flex-col justify-between p-8">
              <div>
                <h3 className="mb-2 text-lg font-bold text-ink-900">
                  {crossLink.label}
                </h3>
                <p className="text-sm leading-relaxed text-ink-500">
                  {crossLink.description}
                </p>
              </div>
              <Link
                href={crossLink.href}
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
              >
                Read now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-600 p-8 text-white shadow-xl shadow-brand-900/20">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-[60px]" />
              <h3 className="mb-2 text-lg font-bold">Ready to talk to our team?</h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-50">
                Book a free demo and see how iNextERP fits your business.
              </p>
              <button
                onClick={openCalendlyPopup}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50"
              >
                Book Free Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
