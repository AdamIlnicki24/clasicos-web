import { Metadata } from "next";
import { LogInContent } from "./LogInContent/LogInContent";
import { LOG_IN_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { LOG_IN_PAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";

export const metadata: Metadata = {
  title: LOG_IN_PAGE_HTML_TITLE,
  description: LOG_IN_PAGE_META_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LogInPage() {
  return (
    // <ContentContainer>
      <LogInContent />
    // </ContentContainer>
  );
}
