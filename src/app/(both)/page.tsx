"use client";

import { Button } from "@/components/buttons/Button/Button";
import {
  LOG_IN_BUTTON_LABEL,
  LOG_OUT_BUTTON_LABEL,
  REGISTER_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import { CLASICOS_DESCRIPTION, CLASICOS_DETAILS, OR } from "@/constants/texts";
import {
  FORUM_URL,
  KNOWLEDGE_ZONE_URL,
  LOG_IN_URL,
  REGISTER_URL,
} from "@/constants/urls";
import { useUser } from "@/hooks/context/useUser";
import { Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Logo from "@/assets/icons/logo.svg";
import Loading from "../loading";
import { Heading } from "@/components/headings/Heading/Heading";
import { CLASICOS_HEADING } from "@/constants/headings";

export default function BothPage() {
  const { logOut, user, isUserLoading } = useUser();

  const router = useRouter();

  const handleLogout = async () => {
    try {
      logOut();
      toast.success("Wylogowano poprawnie.");
    } catch {
      toast.error("Nie udało się poprawnie wylogować.");
    }
  };

  const pushToPublicPage = (url: string) => {
    router.push(url);
  };

  if (isUserLoading) return <Loading />;

  return (
    <main className="relative min-h-svh bg-[url('/images/stadion-w-pionie.jpg')] bg-cover bg-center lg:bg-[url('/images/stadion-w-poziomie.jpg')]">
      <div className="absolute inset-0 bg-defaultBlack opacity-80"></div>
      <div className="relative z-10 mx-auto flex w-[90%] flex-col items-center gap-y-4 pt-28 text-[1.25rem] leading-relaxed tracking-wide text-defaultWhite lg:w-[60%] lg:text-[1.4rem]">
        <div className="flex gap-x-3">
          <Logo width={48} />
          <Heading HeadingTag="h1" title={CLASICOS_HEADING} />
        </div>
        <p className="py-4">{CLASICOS_DESCRIPTION}</p>
        {!user && (
          <div className="flex flex-col items-center gap-4 py-6 lg:flex-row">
            <Button
              onPress={() => pushToPublicPage(LOG_IN_URL)}
              title={LOG_IN_BUTTON_LABEL}
            />
            <span>{OR.toLowerCase()}</span>
            <Button
              onPress={() => pushToPublicPage(REGISTER_URL)}
              title={REGISTER_BUTTON_LABEL}
            />
          </div>
        )}
        <div className="space-y-4">
          <p>
            Zapraszamy również do naszej{" "}
            <Link
              href={KNOWLEDGE_ZONE_URL}
              className="text-[1.25rem] text-linkColor lg:text-[1.4rem]"
            >
              strefy wiedzy
            </Link>{" "}
            <span>oraz na</span>{" "}
            <Link
              href={FORUM_URL}
              className="text-[1.25rem] text-linkColor lg:text-[1.4rem]"
            >
              forum dyskusyjne
            </Link>
            <span>.</span>
          </p>
          <p>{CLASICOS_DETAILS}</p>
        </div>
      </div>
    </main>
  );
}
