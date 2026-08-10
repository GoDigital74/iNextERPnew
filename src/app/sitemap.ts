import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://www.inexterp.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/industries",
  "/industries/apparel-garment-erp-software",
  "/industries/manufacturing-erp-software",
  "/industries/retail-erp-software",
  "/industries/wholesale-distribution-erp-software",
  "/pricing",
  "/privacy-policy",
  "/products/cloud-service",
  "/products/erp-software",
  "/products/it-hardware",
  "/services/accounts",
  "/services/crm",
  "/services/erp-integrations",
  "/services/hrm",
  "/services/inventory-management",
  "/services/manufacturing",
  "/services/points-of-sale",
  "/terms-and-conditions",
];

const SLUGS_QUERY = `{
  "posts": *[_type == "post" && defined(slug.current)].slug.current,
  "jobs": *[_type == "job" && defined(slug.current)].slug.current
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  try {
    const { posts, jobs } = await client.fetch<{ posts: string[]; jobs: string[] }>(
      SLUGS_QUERY
    );

    const dynamicEntries: MetadataRoute.Sitemap = [
      ...(posts ?? []).map((slug) => ({
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: new Date(),
      })),
      ...(jobs ?? []).map((slug) => ({
        url: `${SITE_URL}/careers/${slug}`,
        lastModified: new Date(),
      })),
    ];

    return [...staticEntries, ...dynamicEntries];
  } catch {
    return staticEntries;
  }
}
