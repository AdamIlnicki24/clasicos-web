"use client";

import { KnowledgeZoneCard } from "@/components/cards/KnowledgeZoneCard/KnowledgeZoneCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { FIGO_HISTORY_ARTICLE_LEAD, MESSI_VERSUS_RONALDO_ARTICLE_LEAD } from "@/constants/articles";
import {
  FIGO_HISTORY_ARTICLE_HEADING,
  KNOWLEDGE_ZONE_HEADING,
  MESSI_VERSUS_RONALDO_ARTICLE_HEADING,
} from "@/constants/headings";
import { luisFigo, messiVersusRonaldo } from "@/constants/images";
import { FIGO_HISTORY_URL, MESSI_VERSUS_RONALDO_URL } from "@/constants/urls";
import { getSentences } from "@/utils/getSentences";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

// TODO: Add arrow leading user to comments

export function KnowledgeZoneContent() {
  const router = useRouter();

  const pushToArticle = (article: string) => {
    console.log("Pushing to article:", article);
    router.push(article);
  };

  return (
    <div className="flex min-h-svh flex-col items-center">
      <div className="py-6">
        <Heading title={KNOWLEDGE_ZONE_HEADING} HeadingTag="h1" />
      </div>
      {/* TODO: Think about refactor */}
      {/* TODO: Unify the dashesr */}
      <div className="space-y-6">
        <KnowledgeZoneCard
          src={luisFigo.src}
          alt={luisFigo.alt}
          title={FIGO_HISTORY_ARTICLE_HEADING}
          lead={parse(FIGO_HISTORY_ARTICLE_LEAD)}
          onPress={() => pushToArticle(FIGO_HISTORY_URL)}
        />
        <KnowledgeZoneCard
          src={messiVersusRonaldo.src}
          alt={messiVersusRonaldo.alt}
          title={MESSI_VERSUS_RONALDO_ARTICLE_HEADING}
          lead={parse(getSentences(MESSI_VERSUS_RONALDO_ARTICLE_LEAD, 3))}
          onPress={() => pushToArticle(MESSI_VERSUS_RONALDO_URL)}
        />
      </div>
    </div>
  );
}
