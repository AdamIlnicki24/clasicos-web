import { PROFILE_PAGE_HTML_TITLE } from "@/constants/htmlTitles";
import { Metadata } from "next";
import { ProfileContent } from "./ProfileContent/ProfileContent";

export const metadata: Metadata = {
  title: PROFILE_PAGE_HTML_TITLE,
};

export default function ProfilePage() {
  return <ProfileContent />;
}
