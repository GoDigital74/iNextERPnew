import Image from "next/image";

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
];

// Scattered tilt/offset applied per card from md breakpoint up — cycles through
// six variants so the grid reads as a loosely scattered pile rather than a strict grid.
const CARD_TILTS = [
  "md:rotate-[-3deg] md:-translate-x-2 md:translate-y-2.5",
  "md:rotate-[2.5deg] md:translate-x-2.5 md:-translate-y-3.5",
  "md:rotate-[-2deg] md:translate-x-1.5 md:translate-y-4",
  "md:rotate-[3deg] md:-translate-x-2.5 md:-translate-y-2",
  "md:rotate-[-1.5deg] md:-translate-x-1.5 md:translate-y-3.5",
  "md:rotate-[2deg] md:translate-x-2 md:-translate-y-2.5",
];

export function Testimonials() {
  return (
    <section className="w-full bg-ink-50 py-8">
      <div className="section-container mb-16 flex flex-col items-center">
        <div className="max-w-2xl text-center">
          <div className="eyebrow mb-5 justify-center">Testimonials</div>
          <h2 className="mb-5 text-3xl font-bold text-ink-900 md:text-4xl">
            Loved By Businesses, <span className="text-brand-500">Trusted By Teams</span>
          </h2>
          <p className="text-lg text-ink-500">
            Join hundreds of businesses who&rsquo;ve made iNextERP their daily
            driver for sales, inventory &amp; accounting.
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.name}
              className={`card-surface group cursor-default p-6 transition-all duration-500 ease-premium hover:z-20 hover:-translate-y-2 hover:translate-x-0 hover:rotate-0 hover:scale-[1.05] hover:border-brand-200 hover:shadow-(--shadow-glow-brand) ${
                CARD_TILTS[index % CARD_TILTS.length]
              }`}
            >
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
              <p className="text-left text-[15px] leading-relaxed text-ink-700">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
