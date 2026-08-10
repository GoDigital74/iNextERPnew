"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const TESTIMONIALS = [
  {
    name: "Rahul Agarwal",
    role: "Director",
    company: "Agarwal Textiles",
    content:
      "NextERP has completely transformed the way we manage our business. It's simple, powerful and reliable.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    name: "Neha Sharma",
    role: "CEO",
    company: "Fashion Hub",
    content:
      "The real-time reports and inventory management features helped us increase our profits significantly.",
    avatar: "https://i.pravatar.cc/150?u=neha",
  },
  {
    name: "Vikram Singh",
    role: "Proprietor",
    company: "Singh Electronics",
    content:
      "Excellent support team and easy to use software. Highly recommended for growing businesses.",
    avatar: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Priya Verma",
    role: "Owner",
    company: "Priya Fashion Boutique",
    content:
      "Billing used to take forever during peak hours. With iNextERP's POS, we now check out customers in seconds, even on our busiest sale days.",
    avatar: "https://i.pravatar.cc/150?u=priyaverma",
  },
  {
    name: "Anil Mehta",
    role: "Managing Director",
    company: "Mehta Wholesale Traders",
    content:
      "We run three warehouses and stock mismatches were a constant headache. iNextERP keeps inventory in sync across all of them in real time.",
    avatar: "https://i.pravatar.cc/150?u=anilmehta",
  },
  {
    name: "Sunita Rao",
    role: "Operations Manager",
    company: "Rao Garments",
    content:
      "GST billing and compliance used to eat up hours every month. It's now almost fully automated, which has freed up our accounts team a lot.",
    avatar: "https://i.pravatar.cc/150?u=sunitarao",
  },
  {
    name: "Deepak Chopra",
    role: "Founder",
    company: "Chopra Enterprises",
    content:
      "We finally moved off spreadsheets. Having one system for sales, stock and accounts instead of scattered Excel files has cut our errors down a lot.",
    avatar: "https://i.pravatar.cc/150?u=deepakchopra",
  },
  {
    name: "Kavita Joshi",
    role: "CFO",
    company: "Joshi Distributors",
    content:
      "The dashboard gives us real-time sales and stock reports, so decisions that used to wait for month-end now happen the same day.",
    avatar: "https://i.pravatar.cc/150?u=kavitajoshi",
  },
  {
    name: "Arjun Malhotra",
    role: "CEO",
    company: "Malhotra Retail Group",
    content:
      "Data security was a big worry after we grew past a certain size. iNextERP's backups and access controls have given us real peace of mind.",
    avatar: "https://i.pravatar.cc/150?u=arjunmalhotra",
  },
  {
    name: "Meera Iyer",
    role: "Finance Head",
    company: "Iyer Apparel Mart",
    content:
      "Reconciling GST returns used to mean three days of back and forth with our CA every month. Now the reports are ready before he even asks.",
    avatar: "https://i.pravatar.cc/150?u=meeraiyer",
  },
  {
    name: "Rohan Kapoor",
    role: "Founder",
    company: "Kapoor Home Decor",
    content:
      "We sell across our store, WhatsApp and an online catalog. iNextERP is the one place we check to know exactly what's in stock across all three.",
    avatar: "https://i.pravatar.cc/150?u=rohankapoor",
  },
  {
    name: "Anjali Desai",
    role: "Store Manager",
    company: "Desai Footwear",
    content:
      "Barcode billing at the counter has cut our checkout time by more than half, and staff picked it up within a day, no real training needed.",
    avatar: "https://i.pravatar.cc/150?u=anjalidesai",
  },
  {
    name: "Suresh Pillai",
    role: "Partner",
    company: "Pillai Hardware Traders",
    content:
      "Purchase orders and vendor payments used to live in three different registers. Having them tracked in one system has cleaned up our accounts a lot.",
    avatar: "https://i.pravatar.cc/150?u=sureshpillai",
  },
  {
    name: "Ritu Bhatia",
    role: "Director",
    company: "Bhatia Kids Wear",
    content:
      "Returns and exchanges were always a mess to track during sale season. iNextERP logs every one automatically, so nothing slips through anymore.",
    avatar: "https://i.pravatar.cc/150?u=ritubhatia",
  },
  {
    name: "Manoj Trivedi",
    role: "CEO",
    company: "Trivedi Auto Parts",
    content:
      "With four branches, I could never get a straight answer on total stock. Now I pull it up on my phone in seconds, from anywhere.",
    avatar: "https://i.pravatar.cc/150?u=manojtrivedi",
  },
];

// Scattered tilt/offset applied per card from md breakpoint up. The vertical
// overlap itself comes from a uniform negative margin-top on every card (see
// the grid below) — that's real layout, so it actually shrinks the section's
// height, not just a visual bleed from a transform. Rotate/translate-x here
// are pure paint (no effect on layout) and just add the scattered-pile jitter.
const CARD_TILTS = [
  "md:z-10 md:rotate-[-6deg] md:-translate-x-4 md:translate-y-2",
  "md:z-20 md:rotate-[5deg] md:translate-x-5 md:-translate-y-2",
  "md:z-0 md:rotate-[-4deg] md:translate-x-4 md:translate-y-3",
  "md:z-20 md:rotate-[6deg] md:-translate-x-5 md:-translate-y-2",
  "md:z-10 md:rotate-[-5deg] md:-translate-x-3 md:translate-y-2",
  "md:z-0 md:rotate-[4deg] md:translate-x-4 md:-translate-y-3",
];

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({
  item,
  className = "",
}: {
  item: Testimonial;
  className?: string;
}) {
  return (
    <div className={`card-surface cursor-default p-6 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-ink-100">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <h4 className="text-sm font-bold text-ink-900">{item.name}</h4>
          <p className="text-sm text-ink-400">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
      <p className="text-left text-[15px] leading-relaxed text-ink-700 md:line-clamp-3">
        {item.content}
      </p>
    </div>
  );
}

const AUTOPLAY_DELAY_MS = 2200;

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 14,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance one card at a time, pausing while the user is dragging.
  useEffect(() => {
    if (!emblaApi) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const play = () => {
      timer = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_DELAY_MS);
    };
    const stop = () => timer && clearInterval(timer);
    play();
    emblaApi.on("pointerDown", stop).on("pointerUp", play);
    return () => {
      stop();
      emblaApi.off("pointerDown", stop).off("pointerUp", play);
    };
  }, [emblaApi]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-3 flex touch-pan-y">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.name}
              className="min-w-0 shrink-0 grow-0 basis-[86%] pl-3"
            >
              <TestimonialCard
                item={item}
                className={`h-full transition-all duration-300 ease-premium ${
                  idx === selectedIndex
                    ? "scale-100 opacity-100"
                    : "scale-[0.94] opacity-50"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === selectedIndex
                ? "w-6 bg-brand-500"
                : "w-2 bg-ink-200 hover:bg-ink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full bg-ink-50 py-10">
      <div className="section-container mb-10 flex flex-col items-center md:mb-12">
        <div className="max-w-4xl text-center">
          <div className="eyebrow mb-5 justify-center">Testimonials</div>
          <h2 className="mb-5 text-3xl font-bold text-ink-900 md:text-4xl">
            Loved By Businesses, <span className="text-brand-500">Trusted By Teams</span>
          </h2>
          <p className="text-lg text-ink-600">
            Join hundreds of businesses who&rsquo;ve made iNextERP their daily
            driver for sales, inventory &amp; accounting.
          </p>
        </div>
      </div>

      <div className="section-container">
        <TestimonialCarousel />

        {/* md:pt-14 balances the -mt-14 every card carries below, so row one still
            lands in its normal spot instead of being clipped by the carousel above it. */}
        <div className="mx-auto hidden max-w-6xl md:grid md:grid-cols-2 md:gap-x-6 md:pt-14 xl:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard
              key={item.name}
              item={item}
              className={`group relative md:-mt-14 transition-all duration-500 ease-premium hover:z-30 hover:-translate-y-2 hover:translate-x-0 hover:rotate-0 hover:scale-[1.05] hover:border-brand-200 hover:shadow-(--shadow-glow-brand) ${
                CARD_TILTS[index % CARD_TILTS.length]
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
