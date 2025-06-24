"use client";

import { KnowledgeZoneCard } from "@/components/cards/KnowledgeZoneCard/KnowledgeZoneCard";
import { FIGO_HISTORY_ARTICLE_LEAD } from "@/constants/articles";
import { FIGO_HISTORY_ARTICLE_HEADING } from "@/constants/headings";
import { luisFigo } from "@/constants/images";
import { FIGO_HISTORY_URL } from "@/constants/urls";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

export function KnowledgeZoneContent() {
  const router = useRouter();

  const pushToArticle = (article: string) => {
    console.log("Pushing to article:", article);
    router.push(article);
  };

  return (
    <>
      <KnowledgeZoneCard
        src={luisFigo.src}
        alt={luisFigo.alt}
        // TODO: Add sizes
        title={FIGO_HISTORY_ARTICLE_HEADING}
        lead={parse(FIGO_HISTORY_ARTICLE_LEAD)}
        onPress={() => pushToArticle(FIGO_HISTORY_URL)}
      />
    </>
  );
}
