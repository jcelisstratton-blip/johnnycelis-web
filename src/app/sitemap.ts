import type { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";

const BASE_URL = "https://www.stratt-on.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/servicios", "/insights", "/redes", "/redes/johnny", "/politicadeprivacidad", "/terminosycondiciones"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const insightRoutes = getAllInsights().map((post) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...insightRoutes];
}
