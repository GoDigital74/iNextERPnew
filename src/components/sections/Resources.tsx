import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const RESOURCES = [
  {
    type: "Blog",
    date: "10 May 2025",
    title: "How ERP Helps Retail Businesses Increase Profitability",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    type: "Case Study",
    date: "03 May 2025",
    title: "Stock Management Best Practices For Growing Businesses",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400"
  },
  {
    type: "Guide",
    date: "25 Apr 2025",
    title: "Why Cloud ERP Is The Future Of Business Management",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400"
  },
  {
    type: "Case Study",
    date: "18 Apr 2025",
    title: "Case Study: How iNextERP Helped A Garment Business Grow 3x",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600",
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400"
  }
];

export function Resources() {
  return (
    <section className="py-20 bg-surface-50 dark:bg-surface-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-foreground">Resources To Help You Grow</h2>
          <Link href="/resources" className="hidden md:flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-surface-900 rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", item.color)}>
                    {item.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-4 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <div className="mt-auto">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                    Read More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
