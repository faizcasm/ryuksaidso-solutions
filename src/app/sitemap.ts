import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

const siteUrl = "https://solutions.ryuksaidso.online";
const lastModified = new Date("2026-11-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/pricing", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
