"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Rahul Agarwal",
    role: "Director",
    company: "Agarwal Textiles",
    content:
      "NextERP has completely transformed the way we manage our business. It's simple, powerful and reliable.",
    avatar: "https://i.pravatar.cc/150?u=rahul", // Replace with actual assets
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
    <section className="py-24 bg-surface-50 dark:bg-surface-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          What Our <span className="text-[#1881c4]">Clients Say</span>
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-4 pl-4">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0"
              >
                <div className="bg-white dark:bg-surface-950 p-8 rounded-2xl border border-border shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < item.rating
                              ? "w-4 h-4 fill-current"
                              : "w-4 h-4 fill-none text-amber-200 dark:text-amber-900"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-lg italic mb-8">
                      "{item.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
