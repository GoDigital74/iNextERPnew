import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

export type ResourcePost = {
  _id: string;
  title: string;
  slug?: { current: string };
  mainImage?: (SanityImageSource & { asset?: unknown }) | null;
  category?: string;
  publishedAt?: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  Analytics: "text-accent-700 bg-accent-50",
  Business: "text-brand-700 bg-brand-50",
  Retail: "text-emerald-700 bg-emerald-50",
  Technology: "text-brand-700 bg-brand-50",
  Sustainability: "text-emerald-700 bg-emerald-50",
};
const DEFAULT_CATEGORY_COLOR = "text-brand-700 bg-brand-50";

function formatDate(dateString?: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function Resources({ posts }: { posts: ResourcePost[] }) {
  if (posts.length === 0) return null;

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
          {posts.map((post) => {
            const href = `/blog/${post.slug?.current ?? ""}`;
            return (
              <div
                key={post._id}
                className="card-surface card-surface-hover group flex flex-col overflow-hidden p-0"
              >
                <Link href={href} className="relative block aspect-[4/3] w-full overflow-hidden bg-ink-100">
                  {post.mainImage?.asset ? (
                    <Image
                      src={urlFor(post.mainImage).width(600).height(450).url()}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-medium text-ink-400">
                      iNextERP
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-ink-900/30 to-transparent" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-semibold",
                        CATEGORY_COLORS[post.category ?? ""] ?? DEFAULT_CATEGORY_COLOR
                      )}
                    >
                      {post.category || "Blog"}
                    </span>
                    <span className="text-xs text-ink-400">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="mb-4 line-clamp-2 font-semibold text-ink-900 transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <div className="mt-auto">
                    <Link
                      href={href}
                      className="inline-flex items-center text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700"
                    >
                      Read More{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
