"use client";

import { useUser } from "@/hooks/context/useUser";
import { PublicNav } from "../PublicNav/PublicNav";
import { Spinner } from "@heroui/react";
import { AdminNav } from "../AdminNav/AdminNav";
import { VisitorNav } from "../VisitorNav/VisitorNav";

export function Nav() {
  const { user, isUserLoading, isError } = useUser();

  if (isUserLoading) return <Spinner size="sm" />;

  if (isError) return <div>Wystąpił błąd</div>;

  if (!user) return <PublicNav />;

  return user.role === "Admin" ? <AdminNav /> : <VisitorNav />;
}
