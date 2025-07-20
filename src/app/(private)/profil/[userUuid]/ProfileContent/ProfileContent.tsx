"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/buttons/Button/Button";
import { AboutMeCard } from "@/components/cards/AboutMeCard/AboutMeCard";
import { UserDataCard } from "@/components/cards/UserDataCard/UserDataCard";
import { EnigmaModal } from "@/components/modals/EnigmaModal/EnigmaModal";
import { UpdateNickModal } from "@/components/modals/UpdateNickModal/UpdateNickModal";
import { UpdateProfileModal } from "@/components/modals/UpdateProfileModal/UpdateProfileModal";
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

  const {
    isOpen: isProfileModalOpen,
    onOpen: onProfileModalOpen,
    onOpenChange: onProfileModalOpenChange,
  } = useDisclosure();

  const {
    isOpen: isNickModalOpen,
    onOpen: onNickModalOpen,
    onOpenChange: onNickModalOpenChange,
  } = useDisclosure();

  const {
    isOpen: isEnigmaModalOpen,
    onOpen: onEnigmaModalOpen,
    onOpenChange: onEnigmaModalOpenChange,
  } = useDisclosure();

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

  if (!userUuid || isUserLoading || isMeLoading) return <Loading />;

  if (!user || isUserError) {
    return <div className="text-center">Zaloguj się, aby zobaczyć użytkownika</div>;
  }

  if (!me) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const { visitor, createdAt } = user;
  const { nick, favoriteClub, favoriteFootballer } = visitor;

  const isAdmin = me.role === "Admin";
  const isMe = me.uuid === user.uuid;
  const isUserBanned = Boolean(visitor.bannedAt);

  const checkOutTeam = () => {
    router.push(`${PROFILE_URL}/${userUuid}/${TEAM_URL}`);
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
      <main className="min-h-[70svh]">
        <div className="flex justify-end pb-6 pe-4 pt-8 lg:pb-0 lg:pe-12">
          {isMe && (
            <Button
              title={UPDATE_ABOUT_ME_DATA_BUTTON_LABEL}
              onPress={onProfileModalOpen}
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
            nick={nick?.trim() ? nick : ENIGMA}
            onEditButtonPress={onNickModalOpen}
            createdAt={formatDate(createdAt)}
            recommendationsCount={recommendationsCount ?? 0}
            isMe={isMe}
            onOpen={onEnigmaModalOpen}
          />
          <AboutMeCard
            favoriteClub={favoriteClub?.trim() ? favoriteClub : NO_INFORMATION}
            favoriteFootballer={
              favoriteFootballer?.trim() ? favoriteFootballer : NO_INFORMATION
            }
            checkOutTeam={() => checkOutTeam()}
          />
        </div>
        <UpdateProfileModal
          visitor={visitor}
          isOpen={isProfileModalOpen}
          onOpenChange={onProfileModalOpenChange}
        />
        <UpdateNickModal
          visitor={visitor}
          isOpen={isNickModalOpen}
          onOpenChange={onNickModalOpenChange}
        />
        <EnigmaModal isOpen={isEnigmaModalOpen} onOpenChange={onEnigmaModalOpenChange} />
      </main>
    </>
  );
}
