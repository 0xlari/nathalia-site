import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nathalia-site.vercel.app",
      lastModified: new Date(),
    },
  ];
}