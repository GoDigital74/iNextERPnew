import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { client } from "@/sanity/lib/client";

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

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog | iNextERP",
  description:
    "Insights on retail, inventory, accounting, and running a smarter business — from the iNextERP team.",
  alternates: {
    canonical: "https://www.inexterp.com/blog",
  },
  openGraph: {
    title: "Blog | iNextERP",
    description:
      "Insights on retail, inventory, accounting, and running a smarter business — from the iNextERP team.",
    url: "https://www.inexterp.com/blog",
    type: "website",
    images: [{ url: "/dashboard/inext hero.png", width: 1200, height: 630, alt: "iNextERP Blog" }],
  },
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);
  return <BlogClient initialPosts={posts} />;
}
