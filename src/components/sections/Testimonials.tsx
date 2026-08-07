"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Rahul Agarwal",
    role: "Director",
    company: "Agarwal Textiles",
    content:
      "NextERP has completely transformed the way we manage our business. It's simple, powerful and reliable.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    role: "CEO",
    company: "Fashion Hub",
    content:
      "The real-time reports and inventory management features helped us increase our profits significantly.",
    avatar: "https://i.pravatar.cc/150?u=neha",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Proprietor",
    company: "Singh Electronics",
    content:
      "Excellent support team and easy to use software. Highly recommended for growing businesses.",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Owner",
    company: "Priya Fashion Boutique",
    content:
      "Billing used to take forever during peak hours. With iNextERP's POS, we now check out customers in seconds, even on our busiest sale days.",
    avatar: "https://i.pravatar.cc/150?u=priyaverma",
    rating: 5,
  },
  {
    name: "Anil Mehta",
    role: "Managing Director",
    company: "Mehta Wholesale Traders",
    content:
      "We run three warehouses and stock mismatches were a constant headache. iNextERP keeps inventory in sync across all of them in real time.",
    avatar: "https://i.pravatar.cc/150?u=anilmehta",
    rating: 4,
  },
  {
    name: "Sunita Rao",
    role: "Operations Manager",
    company: "Rao Garments",
    content:
      "GST billing and compliance used to eat up hours every month. It's now almost fully automated, which has freed up our accounts team a lot.",
    avatar: "https://i.pravatar.cc/150?u=sunitarao",
    rating: 5,
  },
  {
    name: "Deepak Chopra",
    role: "Founder",
    company: "Chopra Enterprises",
    content:
      "We finally moved off spreadsheets. Having one system for sales, stock and accounts instead of scattered Excel files has cut our errors down a lot.",
    avatar: "https://i.pravatar.cc/150?u=deepakchopra",
    rating: 4,
  },
  {
    name: "Kavita Joshi",
    role: "CFO",
    company: "Joshi Distributors",
    content:
      "The dashboard gives us real-time sales and stock reports, so decisions that used to wait for month-end now happen the same day.",
    avatar: "https://i.pravatar.cc/150?u=kavitajoshi",
    rating: 5,
  },
  {
    name: "Arjun Malhotra",
    role: "CEO",
    company: "Malhotra Retail Group",
    content:
      "Data security was a big worry after we grew past a certain size. iNextERP's backups and access controls have given us real peace of mind.",
    avatar: "https://i.pravatar.cc/150?u=arjunmalhotra",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", dragFree: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <section className="w-full overflow-hidden bg-ink-50 py-24">
      <div className="section-container mb-12 text-center">
        <div className="eyebrow mb-5 justify-center">Testimonials</div>
        <h2 className="text-3xl font-bold text-ink-900 md:text-5xl">
          What Our <span className="text-brand-500">Clients Say</span>
        </h2>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-4 pl-4">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              >
                <div className="card-surface flex h-full flex-col justify-between p-8">
                  <div>
                    <Quote className="mb-4 h-7 w-7 text-brand-300" />
                    <div className="mb-4 flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < item.rating
                              ? "h-4 w-4 fill-current"
                              : "h-4 w-4 fill-none text-ink-200"
                          }
                        />
                      ))}
                    </div>
                    <p className="mb-8 text-lg italic leading-relaxed text-ink-700">
                      &ldquo;{item.content}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-ink-100">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-ink-900">{item.name}</h4>
                      <p className="text-sm text-ink-500">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
