import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://shpper.com";

const ROUTES = [
  "",
  "/about",
  "/faq",
  "/contact",
  "/legal/privacy-policy",
  "/legal/cookie-policy",
  "/legal/terms-conditions",
];

const LOCALES = ["en", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/about" ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
