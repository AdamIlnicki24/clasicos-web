"use client";

import { AuthProvider } from "@/context/AuthProvider";
import { ReactNode } from "react";

export default function BothLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AuthProvider type="both">
      <main>
        {children}
      </main>
    </AuthProvider>
  );
}
