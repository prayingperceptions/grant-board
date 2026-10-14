import type { MetadataRoute } from "next";
import { programs } from "../data/programs";

const BASE = "https://grantboard.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/sponsor`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/newsletter`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/submit`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const programPages: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${BASE}/grants/${p.slug}`,
    lastModified: new Date(p.verifiedDate),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...programPages];
}
