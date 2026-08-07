"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const FAQS = [
  {
    question: "What is iNextERP?",
    answer:
      "iNextERP is a complete cloud-based Enterprise Resource Planning solution designed for retail, wholesale, and manufacturing businesses.",
  },
  {
    question: "Is iNextERP GST compliant?",
    answer:
      "Yes, our platform is 100% compliant with the latest GST regulations, including e-invoicing and direct return filing.",
  },
  {
    question: "Can I access iNextERP on mobile?",
    answer:
      "Absolutely. We offer dedicated mobile applications for both iOS and Android, plus a fully responsive web interface.",
  },
  {
    question: "How secure is the software?",
    answer:
      "We use bank-level 256-bit encryption, daily automated backups, and multi-factor authentication to keep your data secure.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Standard implementation takes between 3 to 7 days depending on your data migration needs.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we provide free onboarding training and 24/7 dedicated customer support.",
  },
];

export function FaqAndCta() {
  return (
    <section className="w-full bg-ink-50 py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column: FAQ */}
          <div>
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="mb-8 text-3xl font-bold text-ink-900">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-ink-150"
                >
                  <AccordionTrigger className="py-4 text-left text-base font-medium text-ink-800 hover:text-brand-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-ink-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: CTA Box */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-brand-800 p-8 text-white shadow-2xl shadow-brand-900/25 md:p-10">
            {/* Background shapes */}
            <div className="pointer-events-none absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="mb-3 text-3xl font-bold">
                Ready To Simplify Your Business?
              </h2>
              <p className="mb-8 max-w-md text-brand-100">
                Book a free demo today and see how iNextERP can help your
                business grow faster.
              </p>

              <form className="mb-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Full Name"
                    className="h-11 bg-white/10 border-white/20 text-white placeholder:text-brand-100/70 focus-visible:ring-white/40"
                  />
                  <Input
                    placeholder="Mobile Number"
                    className="h-11 bg-white/10 border-white/20 text-white placeholder:text-brand-100/70 focus-visible:ring-white/40"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Email Address"
                    className="h-11 bg-white/10 border-white/20 text-white placeholder:text-brand-100/70 focus-visible:ring-white/40"
                  />
                  <Select>
                    <SelectTrigger className="h-11 w-full bg-white/10 border-white/20 text-white data-placeholder:text-brand-100/70 focus-visible:ring-white/40">
                      <SelectValue placeholder="Business Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail Store</SelectItem>
                      <SelectItem value="wholesale">
                        Wholesale & Distribution
                      </SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  size="lg"
                  className="mt-2 w-full bg-white text-brand-700 hover:bg-brand-50 sm:w-auto"
                >
                  Book Free Demo Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
