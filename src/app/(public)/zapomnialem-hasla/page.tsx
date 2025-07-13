import { FORGOT_PASSWORD_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { ForgotPasswordContent } from "./ForgotPasswordContent/ForgotPasswordContent";

export const metadata: Metadata = {
  title: FORGOT_PASSWORD_PAGE_HTML_TITLE,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />;
}
