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
    question: "What is ERP software used for?",
    answer:
      "ERP software is used to integrate and manage core business processes — like finance, inventory, sales, purchasing, and HR — on a single platform, so data flows seamlessly between departments in real time.",
  },
  {
    question: "Is ERP only for large companies?",
    answer:
      "No. While ERP was traditionally associated with large enterprises, modern solutions like iNextERP are built to be affordable and scalable, making them just as useful for small and mid-sized businesses looking to streamline operations.",
  },
  {
    question: "How long does it take to implement an ERP system?",
    answer:
      "Implementation timelines vary based on business size and complexity, but most ERP rollouts take anywhere from a few weeks to a few months. iNextERP works closely with clients to ensure a smooth, minimally disruptive transition.",
  },
  {
    question: "What industries can benefit from iNextERP?",
    answer:
      "iNextERP is designed to serve a wide range of industries, including manufacturing, retail, distribution, and services, with solutions customized to each industry's specific workflows and requirements.",
  },
  {
    question: "How do I know if my business needs an ERP system?",
    answer:
      "If you're dealing with disconnected data, manual reporting delays, frequent errors, or difficulty scaling operations, it's likely time to consider an ERP solution. You can reach out to the iNextERP team for a free consultation to assess your specific needs.",
  },
];

export function FaqAndCta() {
  return (
    <section className="relative w-full overflow-hidden bg-ink-50 py-20 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-brand-200/30 blur-[110px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent-300/20 blur-[100px]" />
      </div>

      <div className="section-container relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column: FAQ */}
          <div className="card-surface p-8 md:p-10">
            <div className="eyebrow mb-5">FAQ</div>
            <h2 className="mb-8 text-3xl font-bold text-ink-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <Accordion className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-ink-150"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-bold text-ink-900 hover:text-brand-600 hover:no-underline md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1 text-base leading-relaxed text-ink-500 md:text-lg">
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
