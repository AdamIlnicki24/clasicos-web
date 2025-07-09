"use client";

import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import { CookiesPopup } from "@/components/cookies/CookiesPopup/CookiesPopup";
import { PublicNav } from "@/components/nav/PublicNav/PublicNav";
import { AuthProvider } from "@/context/AuthProvider";
import { useCookiesStore } from "@/store/useCookiesStore";
import { ReactNode } from "react";

export default function BothLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isCookiesPopup, setIsCookiesPopup } = useCookiesStore();

  // TODO: Think about padding to avoid content being covered by nav

  return (
    <AuthProvider type="both">
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
      {isCookiesPopup && (
        <CookiesPopup
          isOpen={!!isCookiesPopup}
          onOpenChange={() => setIsCookiesPopup(false)}
        />
      )}
    </AuthProvider>
  );
}
