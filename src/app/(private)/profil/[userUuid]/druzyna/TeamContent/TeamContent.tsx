"use client";

import Loading from "@/app/loading";
import { useUser } from "@/hooks/context/useUser";
import { GetTeam } from "../GetTeam/GetTeam";
import { ManageTeam } from "../ManageTeam/ManageTeam";

export function TeamContent() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) return <Loading />;

  return user ? <ManageTeam /> : <GetTeam />;
}
