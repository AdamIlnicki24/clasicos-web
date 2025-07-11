import { Metadata } from "next";
import { KnowledgeZoneContent } from "./components/KnowledgeZoneContent/KnowledgeZoneContent";
import { KNOWLEDGE_ZONE_PAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { KNOWLEDGE_ZONE_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";

export const metadata: Metadata = {
  title: KNOWLEDGE_ZONE_PAGE_HTML_TITLE,
  description: KNOWLEDGE_ZONE_PAGE_META_DESCRIPTION,
};

export default function KnowledgeZonePage() {
  return (
    <ContentContainer>
      <KnowledgeZoneContent />
    </ContentContainer>
  );
}
