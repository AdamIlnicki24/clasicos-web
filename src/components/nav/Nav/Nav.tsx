"use client";

import { useUser } from "@/hooks/context/useUser";
import { AdminNav } from "../AdminNav/AdminNav";
import { PublicNav } from "../PublicNav/PublicNav";
import { VisitorNav } from "../VisitorNav/VisitorNav";

export function Nav() {
  const { user } = useUser();

  if (!user) return <PublicNav />;

  return user.role === "Admin" ? <AdminNav /> : <VisitorNav />;
}
