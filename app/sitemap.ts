import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thinkcreative.com";

const PAGES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",                          priority: 1.0,  changeFrequency: "weekly" },
  { url: "/pricing",                   priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/seo",              priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/ppc",              priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/facebook-ads",     priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/graphic-design",   priority: 0.9,  changeFrequency: "monthly" },
  { url: "/services/web-development",  priority: 0.9,  changeFrequency: "monthly" },
  { url: "/team",                      priority: 0.7,  changeFrequency: "monthly" },
  { url: "/contact-us",                priority: 0.8,  changeFrequency: "yearly"  },
  { url: "/partners-program",          priority: 0.7,  changeFrequency: "monthly" },
  { url: "/careers",                   priority: 0.6,  changeFrequency: "weekly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
