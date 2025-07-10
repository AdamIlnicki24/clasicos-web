import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
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

// TODO: Refactor
export default async function Page({
  params,
}: {
  params: {
    resourceFriendlyLink: keyof typeof componentsMap;
  };
}) {
  const { resourceFriendlyLink } = await params;

  const ArticleComponent = componentsMap[resourceFriendlyLink];

  if (!ArticleComponent) {
    notFound();
  }

  return <ArticleContent ArticleComponent={<ArticleComponent />} />;
}
