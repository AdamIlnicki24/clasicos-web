"use client";

import { Button } from "@/components/buttons/Button/Button";
import {
  LOG_IN_BUTTON_LABEL,
  LOG_OUT_BUTTON_LABEL,
  REGISTER_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import { OR } from "@/constants/texts";
import { FORUM_URL, KNOWLEDGE_ZONE_URL, LOG_IN_URL, REGISTER_URL } from "@/constants/urls";
import { useUser } from "@/hooks/context/useUser";
import { Link } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Ball from "@/assets/icons/ball.svg";

export default function Page() {
  const { logOut } = useUser();

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

  return (
    <main className="relative min-h-svh bg-[url('/images/stadion-w-pionie.jpg')] bg-cover bg-center lg:bg-[url('/images/stadion-w-poziomie.jpg')]">
      <div className="absolute inset-0 bg-defaultBlack opacity-80"></div>
      <div className="relative z-10 mx-auto flex w-[60%] flex-col items-center gap-y-4 text-[1.4rem] leading-relaxed tracking-wide text-defaultWhite lg:pt-12">
        <Ball width={48} />
        {/* TODO: Remove heading below */}
        <h1>Strona główna dla wszystkich</h1>
        <p className="py-4">
          Clasicos to portal o rywalizacji między Barceloną a Realem Madryt.
          Znajdziesz tu ciekawe artykuły o tej batalii, podyskutujesz z innymi
          fanatykami, a także stworzysz swoją jedenastkę najlepszych piłkarzy w
          historii Klasyków.
        </p>
        <div className="flex items-center gap-x-4 py-6">
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
        <div className="space-y-4">
          <p>
            Zapraszamy również do naszej{" "}
            <Link
              href={KNOWLEDGE_ZONE_URL}
              className="text-linkColor px-1 text-[1.4rem]"
            >
              strefy wiedzy
            </Link>{" "}
            <span>oraz na</span>{" "}
            <Link
              href={FORUM_URL}
              className="text-linkColor ps-1 text-[1.4rem]"
            >
              forum dyskusyjne
            </Link>
            <span>.</span>
          </p>
          <p>
            Nie musisz się logować, aby czytać artykuły czy dyskusje, ale już
            tak, jeśli chcesz wziąć udział w rozmowie, zarekomendować komentarz,
            czy też stworzyć swoją jedenastkę.
          </p>
        </div>
        {/* TODO: Remove button below */}
        <Button onPress={handleLogout} title={LOG_OUT_BUTTON_LABEL} />
      </div>
    </main>
  );
}
