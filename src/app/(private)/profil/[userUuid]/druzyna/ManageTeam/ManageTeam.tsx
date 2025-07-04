import Loading from "@/app/loading";
import { PitchBoard } from "@/components/boards/PitchBoard/PitchBoard";
import { Button } from "@/components/buttons/Button/Button";
import { Heading } from "@/components/headings/Heading/Heading";
import { CreateTeamModal } from "@/components/modals/CreateTeamModal/CreateTeamModal";
import { UpdateTeamModal } from "@/components/modals/UpdateTeamModal/UpdateTeamModal";
import { PlayerTile } from "@/components/tiles/PlayerTile/PlayerTile";
import {
  CREATE_TEAM_BUTTON_LABEL,
  UPDATE_TEAM_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import {
  YOUR_TEAM_HEADING
} from "@/constants/headings";
import { MobileContext } from "@/context/MobileContext";
import { useGetMyTeam } from "@/hooks/api/team/me/useGetMyTeam";
import { useTeamStore } from "@/store/useTeamStore";
import { Position } from "@/types/position";
import { TeamPlayer } from "@/types/teamPlayer";
import { useDisclosure } from "@heroui/react";
import { useContext, useEffect } from "react";

export function ManageTeam() {
  const { data, isLoading, isError } = useGetMyTeam();

   const isMobile = useContext(MobileContext);

  const setTeam = useTeamStore((state) => state.setTeam);

  console.log("Team:", data);

  useEffect(() => {
    if (data) {
      const team = {
        goalkeepers: data.teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Goalkeeper")
          .map((teamPlayer) => teamPlayer.player.uuid),
        defenders: data.teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Defender")
          .map((teamPlayer) => teamPlayer.player.uuid),
        midfielders: data.teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Midfielder")
          .map((teamPlayer) => teamPlayer.player.uuid),
        forwards: data.teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Forward")
          .map((teamPlayer) => teamPlayer.player.uuid),
      };
      setTeam(team);
    }
  }, [data]);

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  const getPlayersByPosition = (position: Position) => {
    return data?.teamPlayers
      .filter(
        (teamPlayer: TeamPlayer) => teamPlayer.player.position === position
      )
      .map((teamPlayer: TeamPlayer) => {
        const { name, surname, uuid } = teamPlayer.player;
        return <PlayerTile name={name} surname={surname} key={uuid} />;
      });
  };

  const goalkeepers = getPlayersByPosition("Goalkeeper");
  const defenders = getPlayersByPosition("Defender");
  const midfielders = getPlayersByPosition("Midfielder");
  const forwards = getPlayersByPosition("Forward");

  if (isLoading) return <Loading />;

  // if (isError) return <div>{TEAM_CANNOT_BE_LOADED_ERROR_MESSAGE}</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-y-3 pt-6">
        <Heading HeadingTag="h1" title={YOUR_TEAM_HEADING} size={isMobile ? "md" : "lg"} />
        {/* <Heading
          HeadingTag="h2"
          title={data ? UPDATE_TEAM_HEADING : CREATE_TEAM_HEADING}
          size="md"
        /> */}
        {data ? (
          <Button
            title={UPDATE_TEAM_BUTTON_LABEL}
            onPress={onOpen}
            mode="secondary"
          />
        ) : (
          <Button
            title={CREATE_TEAM_BUTTON_LABEL}
            onPress={onOpen}
            mode="secondary"
          />
        )}
      </div>
      <div className="flex w-full items-center justify-center pt-8">
        {data ? (
          <PitchBoard
            goalkeepers={goalkeepers ?? []}
            defenders={defenders ?? []}
            midfielders={midfielders ?? []}
            forwards={forwards ?? []}
          />
        ) : (
          <p>Po stworzeniu drużyny, pojawi się ona poniżej</p>
        )}
      </div>
      {data ? (
        <UpdateTeamModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          teamPlayers={data?.teamPlayers ?? []}
        />
      ) : (
        <CreateTeamModal isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </div>
  );
}
