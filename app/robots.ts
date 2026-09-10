import type { MetadataRoute } from "next";

/** Se sirve en /robots.txt y apunta al sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://kovex.net/sitemap.xml",
  };
}
