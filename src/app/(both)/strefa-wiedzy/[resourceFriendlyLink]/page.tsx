import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { ArticleContent } from "./ArticleContent/ArticleContent.jsx";

const componentsMap = {
  figo: dynamic(() => import("../components/articles/FigoArticle")),
} as const;

export async function generateStaticParams() {
  return Object.keys(componentsMap).map((resourceFriendlyLink) => ({
    resourceFriendlyLink,
  }));
}

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
