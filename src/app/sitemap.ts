import {
  FIGO_HISTORY_SITEMAP_URL,
  FORUM_SITEMAP_URL,
  HOME_SITEMAP_URL,
  KNOWLEDGE_ZONE_SITEMAP_URL,
  MESSI_VERSUS_RONALDO_SITEMAP_URL
} from "@/constants/urls";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: HOME_SITEMAP_URL },
    { url: KNOWLEDGE_ZONE_SITEMAP_URL },
    { url: FIGO_HISTORY_SITEMAP_URL },
    { url: MESSI_VERSUS_RONALDO_SITEMAP_URL },
    { url: FORUM_SITEMAP_URL },
  ];
}
