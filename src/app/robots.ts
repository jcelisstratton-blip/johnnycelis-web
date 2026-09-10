import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Panel interno de estrategia (Basic Auth) y accesos — no es
      // contenido público, ver AGENTS.md.
      disallow: ["/panelcentral", "/accesos"],
    },
    sitemap: "https://www.stratt-on.com/sitemap.xml",
  };
}
