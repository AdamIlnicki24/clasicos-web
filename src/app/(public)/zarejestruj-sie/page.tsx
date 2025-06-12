import { Metadata } from "next";
import { REGISTER_PAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { RegisterContent } from "./RegisterContent/RegisterContent";
import { REGISTER_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";

export const metadata: Metadata = {
  title: REGISTER_PAGE_HTML_TITLE,
  description: REGISTER_PAGE_META_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return (
    <ContentContainer>
      <RegisterContent />
    </ContentContainer>
  );
}
