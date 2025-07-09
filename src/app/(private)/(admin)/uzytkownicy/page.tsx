import { USERS_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { UsersContent } from "./UsersContent/UsersContent";

// TODO: Add metadata
export const metadata: Metadata = {
  title: USERS_PAGE_HTML_TITLE,
};

export default function UsersPage() {
  return <UsersContent />;
}
