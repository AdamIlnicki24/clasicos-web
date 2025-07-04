"use client";

import Loading from "@/app/loading";
import { SuggestAddingPlayerModal } from "@/components/modals/SuggestAddingPlayerModal/SuggestAddingPlayerModal";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { useGetUser } from "@/hooks/api/users/useGetUser";
import { useUser } from "@/hooks/context/useUser";
import { Link, useDisclosure } from "@heroui/react";
import { useParams } from "next/navigation";
import { GetTeam } from "../GetTeam/GetTeam";
import { ManageTeam } from "../ManageTeam/ManageTeam";

export function TeamContent() {
  const { userUuid } = useParams();

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUser(userUuid as string);

  const { user: me, isUserLoading: isMeLoading } = useUser();

  if (!userUuid || isUserLoading || isMeLoading) return <Loading />;

  if (!user || isUserError) {
    return <div>Zaloguj się, aby zobaczyć drużynę</div>;
  }

  if (!me) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const isMe = me.uuid === user.uuid;

  return (
    <>
    {/* TODO: Think about connecting two components below into one */}
      {isMe ? <ManageTeam /> : <GetTeam />}
      <div className="flex justify-center px-3 pb-16 pt-6 text-[1.2rem] lg:px-0 lg:text-[1.5rem] text-center">
        <p>
          <Link
            className="text-[1.2rem] text-linkColor lg:text-[1.5rem]"
            as={"button"}
            onPress={onOpen}
          >
            Kliknij tutaj
          </Link>
          , aby zasugerować dodanie piłkarza do bazy.
        </p>
      </div>
      <SuggestAddingPlayerModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
