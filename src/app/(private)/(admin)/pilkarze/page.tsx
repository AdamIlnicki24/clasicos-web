import { Metadata } from "next";
import { PlayersContent } from "./PlayersContent/PlayersContent";
import { PLAYERS_PAGE_HTML_TITLE } from "@/constants/htmlTitles";

export const metadata: Metadata = {
  title: PLAYERS_PAGE_HTML_TITLE,
};

export default function PlayersPage() {
  return <PlayersContent />;
}
