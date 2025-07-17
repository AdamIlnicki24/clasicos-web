import { HOME_SITEMAP_URL } from "@/constants/urls";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${HOME_SITEMAP_URL}/sitemap.xml`,
  };
}
