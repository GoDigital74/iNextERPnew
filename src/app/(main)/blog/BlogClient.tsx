"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const CATEGORIES = [
  "All",
  "Analytics",
  "Business",
  "Retail",
  "Technology",
  "Sustainability",
];

export default function BlogClient({
  initialPosts,
  initialQuery = "",
}: {
  initialPosts: any[];
  initialQuery?: string;
}) {
  const [posts] = useState<any[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-ink-900">
      {/* 1. HERO SECTION */}
      <section className="relative bg-ink-950 overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
        {/* Animated ambient glows */}
        <div className="hero-ambient hero-anim-aurora absolute -top-[10%] left-1/2 h-[55%] w-[60%] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="hero-ambient hero-anim-drift-left absolute bottom-0 left-[8%] h-[42%] w-[38%] rounded-full bg-brand-600/25 blur-[130px]" />
        <div className="hero-ambient hero-anim-drift-right absolute bottom-0 right-[6%] h-[38%] w-[34%] rounded-full bg-accent-600/20 blur-[130px]" />

        {/* Admin link, top right corner */}
        <div className="absolute top-6 right-6 md:top-8 md:right-12 z-20">
          <a
            href="/studio"
            className="text-xs font-semibold text-white/60 hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </div>

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm font-medium text-ink-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Blog</span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-brand-300 uppercase shadow-lg shadow-black/20 backdrop-blur-md mb-8 mx-auto">
              <Sparkles className="h-3 w-3" />
              iNextERP Blog
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-100 text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
              Insights & Resources for{" "}
              <span className="bg-[linear-gradient(100deg,#8fd8ff_0%,#d6f0ff_45%,#ffffff_100%)] bg-clip-text text-transparent">
                Retail Success
              </span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-200 text-ink-200 mb-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the latest trends, strategies, and innovations in
              inventory and retail management from the iNextERP team.
            </p>

            {/* Search Bar */}
            <div className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-300 relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                className="block w-full pl-14 pr-6 py-4 bg-white/10 border border-white/15 rounded-full text-base text-white placeholder:text-white/50 backdrop-blur-md shadow-lg shadow-black/20 focus:ring-4 focus:ring-brand-500/25 focus:border-brand-300/60 outline-none transition-all"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="animate-in fade-in fill-mode-both duration-1000 delay-500 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: BookOpen, label: "Practical Guides" },
                { icon: TrendingUp, label: "Industry Trends" },
                { icon: Calendar, label: "Fresh Every Week" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-300" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER */}
      <section className="border-b border-ink-150 bg-white/95 backdrop-blur-xl sticky top-20 z-20">
        <div className="section-container max-w-6xl mx-auto py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-brand-500 text-white border-brand-500 shadow-[0_4px_16px_-4px_rgba(24,129,196,0.4)]"
                    : "bg-transparent text-ink-500 border-ink-150 hover:border-brand-300 hover:text-brand-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOG GRID */}
      <section className="py-16 px-6">
        <div className="section-container max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-ink-500 bg-ink-50 rounded-2xl border border-dashed border-ink-200">
              <p className="text-lg font-medium">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-brand-600 hover:text-brand-700 hover:underline font-bold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post._id}
                  className="group card-surface card-surface-hover overflow-hidden p-0 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-ink-100">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-ink-400 font-medium">
                        No Image Uploaded
                      </div>
                    )}

                    {/* Category Badge */}
                    {post.category && (
                      <div className="absolute top-4 right-4 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                        {post.category}
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-ink-900 mb-4 leading-snug line-clamp-2 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Meta Row */}
                    <div className="flex items-center gap-5 text-xs font-bold text-ink-400 mb-2">
                      {post.publishedAt && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-brand-500" />
                          {formatDate(post.publishedAt)}
                        </div>
                      )}
                      {post.readTime && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-brand-500" />
                          {post.readTime} min read
                        </div>
                      )}
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-ink-500 leading-relaxed mb-8 line-clamp-3 flex-1">
                      {post.excerpt || "Click to read more about this topic..."}
                    </p>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-ink-150">
                      <div className="flex items-center gap-2 text-xs font-bold text-ink-700">
                        <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                          <User className="w-3 h-3" />
                        </div>
                        {post.author || "iNextERP Team"}
                      </div>
                      <Link
                        href={`/blog/${post.slug?.current || "#"}`}
                        className="flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
