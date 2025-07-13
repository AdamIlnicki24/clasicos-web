import { LOG_IN_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { LogInContent } from "./LogInContent/LogInContent";

export const metadata: Metadata = {
  title: LOG_IN_PAGE_HTML_TITLE,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LogInPage() {
  return <LogInContent />;
}
