// Single source of truth for the bundled plan tiers — rendered both on the
// home page (PricingPlans) and the full /pricing page (PricingClient), so the
// numbers can only ever be changed in one place.

export type Tier = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  minimum: string;
  featured?: boolean;
  cta: string;
  features: string[];
};

export const ANNUAL_DISCOUNT = 0.15;

export const TIERS: Tier[] = [
  {
    name: "Starter",
    tagline: "For single-store businesses getting off spreadsheets",
    price: "₹1,999",
    unit: "/ user / month",
    minimum: "Minimum 2 users",
    cta: "Book a Demo",
    features: [
      "Inventory & billing (POS)",
      "GST-ready invoicing",
      "1 location / warehouse",
      "Standard reports dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For multi-location retail, distribution & manufacturing",
    price: "₹3,499",
    unit: "/ user / month",
    minimum: "Minimum 5 users",
    featured: true,
    cta: "Book a Demo",
    features: [
      "Everything in Starter, plus:",
      "Finance & Accounts module",
      "CRM & sales pipeline",
      "Multi-location & multi-company",
      "Real-time analytics dashboard",
      "Priority support (24/7)",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large, multi-brand operations with custom needs",
    price: "Custom",
    unit: "pricing on request",
    minimum: "Minimum 15 users",
    cta: "Talk to Sales",
    features: [
      "Everything in Growth, plus:",
      "Manufacturing & HRM modules",
      "Custom integrations & API access",
      "Dedicated account manager",
      "Custom SLA & onboarding",
      "On-request data residency",
    ],
  },
];

/** "₹3,499" -> "₹2,974" at the annual rate. Non-numeric prices ("Custom") pass through. */
export function priceFor(tier: Tier, billing: "monthly" | "annual"): string {
  const digits = tier.price.replace(/[^0-9]/g, "");
  if (!digits || billing === "monthly") return tier.price;
  const annual = Math.round(parseInt(digits, 10) * (1 - ANNUAL_DISCOUNT));
  return `₹${annual.toLocaleString("en-IN")}`;
}
