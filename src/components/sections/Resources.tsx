import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const RESOURCES = [
  {
    type: "Blog",
    date: "10 May 2025",
    title: "How ERP Helps Retail Businesses Increase Profitability",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    color: "text-brand-700 bg-brand-50",
  },
  {
    type: "Case Study",
    date: "03 May 2025",
    title: "Stock Management Best Practices For Growing Businesses",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    color: "text-emerald-700 bg-emerald-50",
  },
  {
    type: "Guide",
    date: "25 Apr 2025",
    title: "Why Cloud ERP Is The Future Of Business Management",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    color: "text-accent-700 bg-accent-50",
  },
  {
    type: "Case Study",
    date: "18 Apr 2025",
    title: "Case Study: How iNextERP Helped A Garment Business Grow 3x",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600",
    color: "text-emerald-700 bg-emerald-50",
  },
];

export function Resources() {
  return (
    <section className="w-full bg-white py-20">
      <div className="section-container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="eyebrow mb-5">Resources</div>
            <h2 className="text-3xl font-bold text-ink-900">
              Resources To Help You Grow
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden items-center text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 md:flex"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((item, idx) => (
            <div
              key={idx}
              className="card-surface card-surface-hover group flex flex-col overflow-hidden p-0"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-900/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold",
                      item.color
                    )}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs text-ink-400">{item.date}</span>
                </div>
                <h3 className="mb-4 line-clamp-2 font-semibold text-ink-900 transition-colors group-hover:text-brand-600">
                  {item.title}
                </h3>
                <div className="mt-auto">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700"
                  >
                    Read More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-brand-600"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
