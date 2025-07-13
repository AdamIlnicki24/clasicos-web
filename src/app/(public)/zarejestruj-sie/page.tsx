import { REGISTER_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { RegisterContent } from "./RegisterContent/RegisterContent";

export const metadata: Metadata = {
  title: REGISTER_PAGE_HTML_TITLE,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return <RegisterContent />;
}
