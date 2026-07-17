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
import Image from "next/image";

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
    <section className="py-20 bg-surface-50 dark:bg-surface-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion
              {...({ type: "single", collapsible: true } as any)}
              className="w-full"
            >
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-[#1881c4] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column: CTA Box */}
          <div className="bg-[#1881c4]  rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-3">
                Ready To Simplify Your Business?
              </h2>
              <p className="text-primary-100 mb-8 max-w-md">
                Book a free demo today and see how iNextERP can help your
                business grow faster.
              </p>

              <form className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus-visible:ring-white"
                  />
                  <Input
                    placeholder="Mobile Number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus-visible:ring-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus-visible:ring-white"
                  />
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-white">
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

                <Button className="w-full sm:w-auto bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800 font-semibold h-12 px-8 mt-2 transition-colors">
                  Book Free Demo Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              {/* Dashboard Preview Snippet inside CTA */}
              <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-white/20 shadow-2xl mt-8 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover opacity-80"
                />
                {/* Overlay to match the blue theme */}
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
