import { Metadata } from "next";
import { ForumContent } from "./ForumContent/ForumContent";
import { FORUM_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { FORUM_PAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";

export const metadata: Metadata = {
  title: FORUM_PAGE_HTML_TITLE,
  description: FORUM_PAGE_META_DESCRIPTION,
};

export default function ForumPage() {
  return (
    <ContentContainer>
      <ForumContent />
    </ContentContainer>
  );
}
