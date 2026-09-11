"use client";

import { useState } from "react";
import Image from "next/image";
import type { ClientLogo } from "@/components/sections/TrustedLogos";

const ALL_SEGMENTS = "All";

export function FlagshipCustomers({ logos }: { logos: ClientLogo[] }) {
  const [selectedSegment, setSelectedSegment] = useState(ALL_SEGMENTS);

  if (logos.length === 0) {
    return null;
  }

  const segments = [
    ALL_SEGMENTS,
    ...Array.from(
      new Set(
        logos
          .map((logo) => logo.segment)
          .filter((segment): segment is string => Boolean(segment)),
      ),
    ),
  ];
  const visibleLogos =
    selectedSegment === ALL_SEGMENTS
      ? logos
      : logos.filter((logo) => logo.segment === selectedSegment);

  return (
    <section className="border-y border-ink-150 bg-ink-50 py-16 md:py-20 lg:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto mb-5 w-fit border-0 bg-transparent px-0 py-0 text-brand-600">
            Flagship Customers
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            The brands that trust iNextERP
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-500 md:text-lg">
            A curated selection of our marquee customers across retail
            verticals.
          </p>
        </div>

        {segments.length > 1 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter customers by segment">
            {segments.map((segment) => {
              const isSelected = segment === selectedSegment;

              return (
                <button
                  key={segment}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedSegment(segment)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    isSelected
                      ? "border-brand-900 bg-brand-900 text-white"
                      : "border-ink-200 bg-white text-ink-600 hover:border-brand-300 hover:text-brand-700"
                  }`}
                >
                  {segment}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visibleLogos.map((logo) => (
            <article
              key={logo.id}
              className="flex min-h-65 flex-col rounded-xl border border-ink-150 bg-white px-4 py-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink-900/8"
            >
              <div className="flex h-20 items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width ?? 300}
                  height={logo.height ?? 150}
                  unoptimized={logo.src.startsWith("http")}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-900">
                {logo.name}
              </h3>
              {logo.industry && (
                <p className="mt-3 inline-flex self-center rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                  {logo.industry}
                </p>
              )}
              {logo.tags && logo.tags.length > 0 && (
                <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-4">
                  {logo.tags.map((tag) => (
                    <span
                      key={`${logo.id}-${tag}`}
                      className="rounded-full bg-ink-100 px-2.5 py-1 text-[10px] font-semibold text-ink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}