"use client";

import { InfoButton } from "@/components/buttons/InfoButton/InfoButton";
import { KnowledgeZoneCard } from "@/components/cards/KnowledgeZoneCard/KnowledgeZoneCard";
import { Heading } from "@/components/headings/Heading/Heading";
import { InspiredByModal } from "@/components/modals/InspiredByModal/InspiredByModal";
import {
  FIGO_HISTORY_ARTICLE_LEAD,
  MESSI_VERSUS_RONALDO_ARTICLE_LEAD,
} from "@/constants/articles";
import {
  FIGO_HISTORY_ARTICLE_HEADING,
  KNOWLEDGE_ZONE_HEADING,
  MESSI_VERSUS_RONALDO_ARTICLE_HEADING,
} from "@/constants/headings";
import { luisFigo, messiVersusRonaldo } from "@/constants/images";
import { FIGO_HISTORY_URL, MESSI_VERSUS_RONALDO_URL } from "@/constants/urls";
import { getSentences } from "@/utils/getSentences";
import { useDisclosure } from "@heroui/react";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";

// TODO: Add arrow leading user to comments

export function KnowledgeZoneContent() {
  const router = useRouter();

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const pushToArticle = (article: string) => {
    router.push(article);
  };

  return (
    <>
      <main className="flex min-h-svh flex-col items-center pb-6">
        <div className="flex py-6 items-center gap-x-2">
          <InfoButton onPress={onOpen} />
          <Heading title={KNOWLEDGE_ZONE_HEADING} HeadingTag="h1" />
        </div>
        {/* TODO: Unify the dashes */}
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
            lead={parse(getSentences(MESSI_VERSUS_RONALDO_ARTICLE_LEAD, 2))}
            onPress={() => pushToArticle(MESSI_VERSUS_RONALDO_URL)}
          />
        </div>
      </main>
      <InspiredByModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
