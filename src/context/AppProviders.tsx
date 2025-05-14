"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

// TODO: Improve this component

export function AppProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider locale="pl-PL" navigate={router.push}>
      {children}
    </HeroUIProvider>
  );
}
