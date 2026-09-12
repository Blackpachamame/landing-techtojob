import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? [{ url: new URL("/", siteUrl).href }] : [];
}
