import { KNOWLEDGE_ZONE_URL, FORUM_URL } from "@/constants/urls";
import Link from "next/link";

export function RedirectParagraph() {
  return (
    <p>
      Zapraszamy również do naszej{" "}
      <Link
        href={KNOWLEDGE_ZONE_URL}
        className="text-[1.25rem] text-linkColor lg:text-[1.6rem]"
      >
        strefy wiedzy
      </Link>{" "}
      <span>oraz na</span>{" "}
      <Link
        href={FORUM_URL}
        className="text-[1.25rem] text-linkColor lg:text-[1.6rem]"
      >
        forum dyskusyjne
      </Link>
      <span>.</span>
    </p>
  );
}