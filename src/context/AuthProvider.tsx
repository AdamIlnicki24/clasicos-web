"use client";

import Loading from "@/app/loading";
import { HOME_URL, LOG_IN_URL } from "@/constants/urls";
import { useAuth } from "@/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { UserProvider } from "./UserContext";

interface AuthProviderProps {
  children: ReactNode;
  type: "public" | "private" | "both";
}

export function AuthProvider({ children, type }: AuthProviderProps) {
  const router = useRouter();

  const { isLoggedIn, isPending } = useAuth();

  useEffect(() => {
    if (type === "public" && isLoggedIn) router.replace(HOME_URL);
  }, [type, isLoggedIn, router]);

  useEffect(() => {
    if (type === "private" && !isPending && !isLoggedIn)
      router.replace(`${LOG_IN_URL}?redirect=${window.location.pathname}`);
  }, [type, isPending, isLoggedIn, router]);

  if (isPending) return <Loading />;

  return <UserProvider>{children}</UserProvider>;
}
