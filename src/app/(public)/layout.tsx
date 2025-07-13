"use client";

import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import { AuthProvider } from "@/context/AuthProvider";
import { ReactNode } from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AuthProvider type="public">
      <main>
        <ContentContainer>{children}</ContentContainer>
      </main>
    </AuthProvider>
  );
}
