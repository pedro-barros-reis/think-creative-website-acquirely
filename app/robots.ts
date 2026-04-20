import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thinkcreative.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/contact-us/sent"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
