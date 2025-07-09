"use client";

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { MobileProvider } from "./MobileContext";
import { UserProvider } from "./UserContext";

export function AppProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MobileProvider>
        <UserProvider>
          <HeroUIProvider locale="pl-PL" navigate={router.push}>
            {children}
          </HeroUIProvider>
        </UserProvider>
      </MobileProvider>
    </QueryClientProvider>
  );
}
