"use client";

import { useUser } from "@/hooks/context/useUser";
import { AdminNav } from "../AdminNav/AdminNav";
import { PublicNav } from "../PublicNav/PublicNav";
import { VisitorNav } from "../VisitorNav/VisitorNav";
import { Spinner } from "@heroui/react";

export function Nav() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!user) return <PublicNav />;

  return user.role === "Admin" ? <AdminNav /> : <VisitorNav />;
}
