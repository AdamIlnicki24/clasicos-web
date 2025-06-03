import { FORGOT_PASSWORD_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { FORGOT_PASSWORD_PAGE_META_DESCRIPTION } from "@/constants/metaDescriptions";
import { Metadata } from "next";
import { ForgotPasswordContent } from "./ForgotPasswordContent/ForgotPasswordContent";

export const metadata: Metadata = {
  title: FORGOT_PASSWORD_PAGE_HTML_TITLE,
  description: FORGOT_PASSWORD_PAGE_META_DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />;
}
