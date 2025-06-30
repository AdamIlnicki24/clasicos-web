"use client";

import Loading from "@/app/loading";
import { useUser } from "@/hooks/context/useUser";
import { GetTeam } from "../GetTeam/GetTeam";
import { ManageTeam } from "../ManageTeam/ManageTeam";
import { useParams } from "next/navigation";
import { useGetUser } from "@/hooks/api/users/useGetUser";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";

export function TeamContent() {
  const { userUuid } = useParams();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUser(userUuid as string);

  const { user: me, isUserLoading: isMeLoading } = useUser();

  if (isUserLoading || isMeLoading) return <Loading />;

  if (!user || isUserError) {
    return <div>Zaloguj się, aby zobaczyć drużynę</div>;
  }

  if (!me) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const isMe = me.uuid === user.uuid;

  return isMe ? <ManageTeam /> : <GetTeam />;
}
