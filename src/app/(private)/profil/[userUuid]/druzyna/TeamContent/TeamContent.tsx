"use client";

import Loading from "@/app/loading";
import { PitchBoard } from "@/components/boards/PitchBoard/PitchBoard";
import { Button } from "@/components/buttons/Button/Button";
import { DeleteButton } from "@/components/buttons/DeleteButton/DeleteButton";
import { SuggestAddingPlayerButton } from "@/components/buttons/SuggestAddingPlayerButton/SuggestAddingPlayerButton";
import { Heading } from "@/components/headings/Heading/Heading";
import { CreateTeamModal } from "@/components/modals/CreateTeamModal/CreateTeamModal";
import { DeleteTeamModal } from "@/components/modals/DeleteTeamModal/DeleteTeamModal";
import { SuggestAddingPlayerModal } from "@/components/modals/SuggestAddingPlayerModal/SuggestAddingPlayerModal";
import { UpdateTeamModal } from "@/components/modals/UpdateTeamModal/UpdateTeamModal";
import { PlayerTile } from "@/components/tiles/PlayerTile/PlayerTile";
import {
  CREATE_TEAM_BUTTON_LABEL,
  DELETE_TEAM_BUTTON_LABEL,
  UPDATE_TEAM_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { TEAM_HEADING, YOUR_TEAM_HEADING } from "@/constants/headings";
import { TEAM_WILL_APPEAR_BELOW } from "@/constants/texts";
import { TEAM_HAS_BEEN_DELETED_TOAST } from "@/constants/toasts";
import { MobileContext } from "@/context/MobileContext";
import { useDeleteMyTeam } from "@/hooks/api/team/me/useDeleteMyTeam";
import { useGetTeam } from "@/hooks/api/team/useGetTeam";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { Position } from "@/types/position";
import { Team } from "@/types/team";
import { TeamPlayer } from "@/types/teamPlayer";
import { useDisclosure } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export function TeamContent() {
  const queryClient = useQueryClient();
  const { userUuid } = useParams();
  const isMobile = useContext(MobileContext);
  const { user, isUserLoading } = useUser();

  const { data: team, isLoading: isTeamLoading } = useGetTeam(
    userUuid as string
  );

  const { mutate, isPending } = useDeleteMyTeam();

  const {
    onOpen: onCreateTeamModalOpen,
    isOpen: isCreateTeamModalOpen,
    onOpenChange: onCreateTeamModalOpenChange,
  } = useDisclosure();

  const {
    onOpen: onUpdateTeamModalOpen,
    isOpen: isUpdateTeamModalOpen,
    onOpenChange: onUpdateTeamModalOpenChange,
  } = useDisclosure();

  const {
    onOpen: onDeleteTeamModalOpen,
    isOpen: isDeleteTeamModalOpen,
    onOpenChange: onDeleteTeamModalOpenChange,
    onClose,
  } = useDisclosure();

  const {
    onOpen: onSuggestionModalOpen,
    isOpen: isSuggestionModalOpen,
    onOpenChange: onSuggestionModalOpenChange,
  } = useDisclosure();

  if (!userUuid || isUserLoading || isTeamLoading) return <Loading />;

  if (!user) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const isMe = user.uuid === userUuid;

  const headingTitle = isMe ? YOUR_TEAM_HEADING : TEAM_HEADING;

  const getPlayersByPosition = (position: Position) => {
    return (
      team?.teamPlayers
        .filter(
          (teamPlayer: TeamPlayer) => teamPlayer.player.position === position
        )
        .map((teamPlayer: TeamPlayer) => {
          const { name, surname, nationality, uuid } = teamPlayer.player;
          return (
            <PlayerTile
              name={name}
              surname={surname}
              key={uuid}
              nationality={nationality}
            />
          );
        }) ?? []
    );
  };

  const goalkeepers = getPlayersByPosition("Goalkeeper");
  const defenders = getPlayersByPosition("Defender");
  const midfielders = getPlayersByPosition("Midfielder");
  const forwards = getPlayersByPosition("Forward");

  const onDeleteHandler = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.setQueryData<Team | undefined>(["getMyTeam"], undefined);
        queryClient.removeQueries({ queryKey: ["getTeam", userUuid] });

        toast.success(TEAM_HAS_BEEN_DELETED_TOAST);

        onClose();
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-y-3 pt-6 text-[1.2rem] lg:text-[1.5rem]">
          {team && (
            <Heading
              HeadingTag="h1"
              title={headingTitle}
              size={isMobile ? "md" : "lg"}
            />
          )}
          {isMe && team ? (
            <div className="flex justify-center gap-x-4">
              <Button
                title={UPDATE_TEAM_BUTTON_LABEL}
                onPress={onUpdateTeamModalOpen}
                mode="secondary"
              />
              <DeleteButton
                title={DELETE_TEAM_BUTTON_LABEL}
                onPress={onDeleteTeamModalOpen}
              />
            </div>
          ) : (
            <Button
              title={CREATE_TEAM_BUTTON_LABEL}
              onPress={onCreateTeamModalOpen}
              mode="secondary"
            />
          )}
          <div className="flex w-full items-center justify-center lg:py-4">
            {team ? (
              <PitchBoard
                goalkeepers={goalkeepers}
                defenders={defenders}
                midfielders={midfielders}
                forwards={forwards}
              />
            ) : (
              <p>{TEAM_WILL_APPEAR_BELOW}</p>
            )}
          </div>
          <SuggestAddingPlayerButton onPress={onSuggestionModalOpen} />
        </div>
      </div>

      <CreateTeamModal
        isOpen={isCreateTeamModalOpen}
        onOpenChange={onCreateTeamModalOpenChange}
      />

      <UpdateTeamModal
        isOpen={isUpdateTeamModalOpen}
        onOpenChange={onUpdateTeamModalOpenChange}
        teamPlayers={team?.teamPlayers ?? []}
      />

      <DeleteTeamModal
        isOpen={isDeleteTeamModalOpen}
        onOpenChange={onDeleteTeamModalOpenChange}
        isPending={isPending}
        onDeleteHandler={onDeleteHandler}
      />

      <SuggestAddingPlayerModal
        isOpen={isSuggestionModalOpen}
        onOpenChange={onSuggestionModalOpenChange}
      />
    </>
  );
}
