"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Loader2,
} from "lucide-react";
// Adjust these paths depending on where your sanity folder is located
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  category, 
  publishedAt,
  readTime,
  excerpt,
  author
}`;

const CATEGORIES = [
  "All",
  "Analytics",
  "Business",
  "Retail",
  "Technology",
  "Sustainability",
];

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

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
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F4F7FB] pt-28 pb-4 px-6 border-b border-blue-100/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1881c4] mb-6 leading-tight">
            Insights & Resources for Retail <br className="hidden md:block" />{" "}
            Success
          </h1>
          <p className="text-gray-500 mb-10 text-base md:text-lg">
            Discover the latest trends, strategies, and innovations in inventory
            and retail management
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-full text-base shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:ring-4 focus:ring-[#1881c4]/10 focus:border-[#1881c4] outline-none transition-all"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <a
            href="/studio"
            className="text-sm font-bold text-[#1881c4] hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER */}
      <section className="border-b border-gray-100 bg-white sticky top-[72px] z-20 shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-[#1881c4] text-white border-[#1881c4] shadow-md shadow-[#1881c4]/20"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1881c4] hover:text-[#1881c4]"
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
        <div className="container mx-auto max-w-[1200px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#1881c4]">
              <Loader2 className="w-10 h-10 animate-spin mb-4" />
              <p className="text-gray-500 font-medium">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-lg font-medium">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-[#1881c4] hover:underline font-bold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post._id}
                  // 👇 FIX: Changed bg-gray-50 to bg-[#F5F5F5]
                  className="group bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-52 overflow-hidden bg-gray-200">
                    {post.mainImage?.asset ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                        No Image Uploaded
                      </div>
                    )}

                    {/* Category Badge */}
                    {post.category && (
                      <div className="absolute top-4 right-4 bg-[#1881c4] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                        {post.category}
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  {/* 👇 FIX: Reduced padding from p-8 to p-5 */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug line-clamp-2 group-hover:text-[#1881c4] transition-colors">
                      {post.title}
                    </h3>

                    {/* Meta Row */}
                    <div className="flex items-center gap-5 text-xs font-bold text-gray-500 mb-2">
                      {post.publishedAt && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#1881c4]" />
                          {formatDate(post.publishedAt)}
                        </div>
                      )}
                      {post.readTime && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#1881c4]" />
                          {post.readTime} min read
                        </div>
                      )}
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-8 line-clamp-3 flex-1">
                      {post.excerpt || "Click to read more about this topic..."}
                    </p>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#1881c4]">
                          <User className="w-3 h-3" />
                        </div>
                        {post.author || "iNextERP Team"}
                      </div>
                      <Link
                        href={`/blog/${post.slug?.current || "#"}`}
                        className="flex items-center gap-1.5 text-sm font-bold text-[#1881c4] hover:text-blue-800 transition-colors"
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

