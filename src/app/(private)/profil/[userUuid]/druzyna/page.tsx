import { TEAM_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { TeamContent } from "./TeamContent/TeamContent";

export const metadata: Metadata = {
  title: TEAM_PAGE_HTML_TITLE,
};


export default function TeamPage() {
  return <TeamContent />;
}
