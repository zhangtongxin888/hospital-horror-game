import type { MetadataRoute } from "next";
import { publicRoutes, site } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: `${site.domain}${path || "/"}`,
    lastModified: new Date("2026-08-18T16:00:00.000Z"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/beginner-guide" ? 0.9 : 0.7,
  }));
}
