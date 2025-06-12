"use client";

import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import { CookiesPopup } from "@/components/cookies/CookiesPopup/CookiesPopup";
import { AuthProvider } from "@/context/AuthProvider";
import { useCookiesStore } from "@/store/useCookiesStore";
import { ReactNode } from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isCookiesPopup, setIsCookiesPopup } = useCookiesStore();

  return (
    <AuthProvider type="public">
      <header>
        <nav>{/* <Navbar /> */}</nav>
      </header>
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
      {isCookiesPopup && (
        <CookiesPopup
          isOpen={!!isCookiesPopup}
          onOpenChange={() => setIsCookiesPopup(false)}
        />
      )}
    </AuthProvider>
  );
}
