import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/"],
    },
    sitemap: "https://www.inexterp.com/sitemap.xml",
  };
}
