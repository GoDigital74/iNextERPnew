import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Factory,
  Headset,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { getClientLogos } from "@/lib/clientLogos";
import { FlagshipCustomers } from "@/components/sections/FlagshipCustomers";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";

// Revalidate periodically so Trusted Logos edits in Sanity Studio show up
// without a full redeploy (this page is otherwise statically generated).
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Our Customers | iNextERP",
  description:
    "See the retail, wholesale, distribution and manufacturing brands running their business on iNextERP — and why they trust us to power daily operations.",
  alternates: {
    canonical: "https://www.inexterp.com/customers",
  },
  openGraph: {
    title: "Our Customers | iNextERP",
    description:
      "See the retail, wholesale, distribution and manufacturing brands running their business on iNextERP — and why they trust us to power daily operations.",
    url: "https://www.inexterp.com/customers",
    type: "website",
  },
};

const WHY_CUSTOMERS_STAY = [
  {
    icon: ShieldCheck,
    title: "Reliable, Every Single Day",
    desc: "99.9% uptime and offline-ready billing mean operations don't stop, even during peak hours or patchy internet.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale With Them",
    desc: "From a single counter to fifty stores or warehouses, customers add locations and modules without switching platforms.",
  },
  {
    icon: Headset,
    title: "Support That Answers",
    desc: "A dedicated onboarding and support team that stays involved long after go-live, not just during the sales call.",
  },
  {
    icon: Sparkles,
    title: "One Platform, Every Module",
    desc: "POS, Inventory, Accounts, CRM, HRM and Manufacturing on one system, so data never has to be re-entered or reconciled.",
  },
];

const INDUSTRIES_SERVED = [
  {
    icon: Building2,
    name: "Retail",
    href: "/industries/retail-erp-software",
    desc: "Grocery, supermarket, bakery & multi-brand retail chains.",
  },
  {
    icon: Sparkles,
    name: "Fashion & Apparel",
    href: "/industries/apparel-garment-erp-software",
    desc: "Size, color and style-specific garment retail.",
  },
  {
    icon: BadgeCheck,
    name: "Wholesale & Distribution",
    href: "/industries/wholesale-distribution-erp-software",
    desc: "Bulk orders, dealer networks and multi-location stock.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    href: "/industries/manufacturing-erp-software",
    desc: "Production planning, BOM and shop-floor tracking.",
  },
];

export default async function CustomersPage() {
  const logos = await getClientLogos();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-24 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute -top-20 right-0 h-130 w-130 translate-x-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-105 w-105 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent-600/15 blur-[120px]" />

        <div className="relative section-container z-10">
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-white">Customers</span>
          </div>

          <div className="max-w-3xl">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8">
              Our Customers
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
              Businesses That Run on{" "}
              <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                iNextERP
              </span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-lg text-ink-200 max-w-2xl leading-relaxed">
              From single-counter retailers to multi-store chains and
              manufacturers, these are the brands managing their billing,
              inventory, accounts and operations on iNextERP every day.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Customers (logo wall) */}
      <FlagshipCustomers logos={logos} />

      {/* Impact stats */}
      <Statistics />

      {/* Why customers stay */}
      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Why They Stay</div>
            <h2 className="mb-4 text-2xl font-bold text-ink-900 md:text-3xl">
              What Keeps Our Customers With Us
            </h2>
            <p className="text-base leading-relaxed text-ink-500">
              Winning a customer is one thing — keeping them for years is
              another. Here&rsquo;s what our customers consistently point to.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CUSTOMERS_STAY.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-surface card-surface-hover flex flex-col p-5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-md mb-2.5 font-bold text-ink-900">
                  {title}
                </h3>
                <p className="text-md leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Industries served */}
      <section className="bg-ink-50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="eyebrow mx-auto mb-5 w-fit">Across Verticals</div>
            <h2 className="mb-4 text-2xl font-bold text-ink-900 md:text-3xl">
              Trusted Across Retail Verticals
            </h2>
            <p className="text-base leading-relaxed text-ink-500">
              iNextERP customers span every corner of retail, wholesale and
              manufacturing.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES_SERVED.map(({ icon: Icon, name, href, desc }) => (
              <Link
                key={name}
                href={href}
                className="group card-surface card-surface-hover flex flex-col p-5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-md mb-2.5 flex items-center gap-2 font-bold text-ink-900">
                  {name}
                  <ArrowRight className="h-4 w-4 text-ink-400 transition-colors group-hover:text-brand-600" />
                </h3>
                <p className="text-[13px] leading-relaxed text-ink-500">
                  {desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        eyebrow="Customers FAQ"
        title="Questions About Becoming a Customer"
        items={[
          {
            question: "Can I speak to an existing iNextERP customer before signing up?",
            answer:
              "Yes, reach out through our contact page and we'll connect you with a reference customer in a similar industry to yours.",
          },
          {
            question: "How long does it take to onboard a new business?",
            answer:
              "Most single-store retailers are live within days. Multi-location or manufacturing rollouts typically take a few weeks, depending on data migration and integrations.",
          },
          {
            question: "Do customers need to buy every module?",
            answer:
              "No. Customers can start with the modules they need, such as POS or Accounts, and add Inventory, CRM, HRM or Manufacturing as they grow.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-16">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[800px] rounded-full bg-brand-600/25 blur-[100px]" />
        </div>

        <div className="relative z-10 section-container text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Join the Brands Already Running on iNextERP
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-ink-300">
            See how iNextERP fits your business — book a free demo with our
            team.
          </p>

          <div className="flex justify-center">
            <Link
              href="https://www.inexterpsolutions.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-900/20 transition-colors hover:bg-brand-600"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
