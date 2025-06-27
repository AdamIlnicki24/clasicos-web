"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/buttons/Button/Button";
import { AboutMeCard } from "@/components/cards/AboutMeCard/AboutMeCard";
import { UserDataCard } from "@/components/cards/NickCard/NickCard";
import { UpdateMeModal } from "@/components/modals/UpdateMeModal/UpdateMeModal";
import {
  BAN_BUTTON_LABEL,
  UNBAN_BUTTON_LABEL,
  UPDATE_ABOUT_ME_DATA_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { ENIGMA, NO_INFORMATION } from "@/constants/texts";
import {
  USER_HAS_BEEN_BANNED_TOAST,
  USER_HAS_BEEN_UNBANNED_TOAST,
} from "@/constants/toasts";
import { PROFILE_URL, TEAM_URL } from "@/constants/urls";
import { useGetUserRecommendationsCount } from "@/hooks/api/recommendations/useGetUserRecommendationsCount";
import { useBanUser } from "@/hooks/api/users/useBanUser";
import { useGetUser } from "@/hooks/api/users/useGetUser";
import { useUnbanUser } from "@/hooks/api/users/useUnbanUser";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { formatDate } from "@/utils/date";
import { Spinner, useDisclosure } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function ProfileContent() {
  const queryClient = useQueryClient();

  const { userUuid } = useParams();

  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetUser(userUuid as string);
  const { user: me, isUserLoading: isMeLoading } = useUser();

  const { data: recommendationsCount } = useGetUserRecommendationsCount(
    userUuid as string
  );

  const { mutate: banMutate, isPending: isBanning } = useBanUser(
    user?.uuid ?? ""
  );

  const { mutate: unbanMutate, isPending: isUnbanning } = useUnbanUser(
    user?.uuid ?? ""
  );

  if (isUserLoading || isMeLoading) return <Loading />;

  if (!user || isUserError) {
    return <div>Zaloguj się, aby zobaczyć użytkownika</div>;
  }

  if (!me) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const { visitor, createdAt, team } = user;
  const { nick, favoriteClub, favoriteFootballer } = visitor;

  const isAdmin = me.role === "Admin";
  const isMe = me.uuid === user.uuid;
  const isUserBanned = Boolean(visitor.bannedAt);

  const checkOutTeam = () => {
    router.push(`${PROFILE_URL}/${userUuid}/${TEAM_URL}/${team?.uuid}`);
  };

  const onBanHandler = () => {
    banMutate(undefined, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getUsers"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["getUser", user.uuid],
        });

        toast.success(USER_HAS_BEEN_BANNED_TOAST);
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("Error:", error);
        }
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  const onUnbanHandler = () => {
    unbanMutate(undefined, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getUsers"],
        });

        await queryClient.invalidateQueries({
          queryKey: ["getUser", user.uuid],
        });

        toast.success(USER_HAS_BEEN_UNBANNED_TOAST);
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("Error:", error);
        }
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  return (
    <>
      <div className="flex justify-end pe-12 pt-8">
        {isMe && (
          <Button
            title={UPDATE_ABOUT_ME_DATA_BUTTON_LABEL}
            onPress={onOpen}
            mode="secondary"
          />
        )}
        {isAdmin &&
          !isMe &&
          (isUserBanned ? (
            <Button
              title={isUnbanning ? <Spinner size="md" /> : UNBAN_BUTTON_LABEL}
              onPress={onUnbanHandler}
            />
          ) : (
            <Button
              title={isBanning ? <Spinner size="md" /> : BAN_BUTTON_LABEL}
              onPress={onBanHandler}
            />
          ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[9fr_11fr]">
        <UserDataCard
          nick={nick ?? ENIGMA}
          createdAt={formatDate(createdAt)}
          recommendationsCount={recommendationsCount ?? 0}
        />
        <AboutMeCard
          favoriteClub={favoriteClub ?? NO_INFORMATION}
          favoriteFootballer={favoriteFootballer ?? NO_INFORMATION}
          checkOutTeam={checkOutTeam}
        />
      </div>
      <UpdateMeModal
        visitor={visitor}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
