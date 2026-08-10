"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  subtitle,
  className,
}: FaqProps) {
  return (
    <section className={cn("relative overflow-hidden py-12 md:py-10", className)}>
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-50 via-white to-ink-50" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-200/30 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-300/25 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-ink-200) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 60% 55% at 50% 35%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 55% at 50% 35%, black, transparent)",
          }}
        />
      </div>

      <div className="section-container relative max-w-5xl">
        <div className="mb-6 text-center md:mb-10">
          <div className="eyebrow mx-auto mb-5 w-fit">{eyebrow}</div>
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl lg:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-500 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        <Accordion className="w-full space-y-4">
          {items.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="card-surface card-surface-hover overflow-hidden"
            >
              <AccordionTrigger className="gap-4 px-6 py-6 text-left text-ink-900 hover:text-brand-600 hover:no-underline sm:px-8">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-semibold md:text-xl">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base leading-relaxed text-ink-500 sm:px-8 md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
