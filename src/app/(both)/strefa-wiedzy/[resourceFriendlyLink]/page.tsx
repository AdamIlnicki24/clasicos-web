import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ArticleContent } from "./ArticleContent/ArticleContent";

const componentsMap = {
  "jak-luis-figo-przeszedl-z-barcelony-do-realu-i-odmienil-el-clasico": dynamic(
    () => import("../components/articles/FigoArticle")
  ),
  "messi-kontra-ronaldo-ikoniczne-pojedynki-w-el-clasico": dynamic(
    () => import("../components/articles/MessiVersusRonaldoArticle")
  ),
  // TODO: Add next article here
} as const;

export async function generateStaticParams() {
  return Object.keys(componentsMap).map((resourceFriendlyLink) => ({
    resourceFriendlyLink,
  }));
}

type Params = {
  resourceFriendlyLink: keyof typeof componentsMap;
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { resourceFriendlyLink } = await params;

  const ArticleComponent = componentsMap[resourceFriendlyLink];

  if (!ArticleComponent) {
    notFound();
  }

  return (
    <ContentContainer>
      <ArticleContent ArticleComponent={<ArticleComponent />} />
    </ContentContainer>
  );
}
