import Loading from "@/app/loading";
import { PitchBoard } from "@/components/boards/PitchBoard/PitchBoard";
import { Heading } from "@/components/headings/Heading/Heading";
import { PlayerTile } from "@/components/tiles/PlayerTile/PlayerTile";
import { TEAM_CANNOT_BE_LOADED_ERROR_MESSAGE } from "@/constants/errorMessages";
import { TEAM_HEADING, YOUR_TEAM_HEADING } from "@/constants/headings";
import { useGetTeam } from "@/hooks/api/team/useGetTeam";
import { Position } from "@/types/position";
import { TeamPlayer } from "@/types/teamPlayer";
import { useParams } from "next/navigation";

export function GetTeam() {
  const { userUuid } = useParams();

  const { data: team, isLoading, isError } = useGetTeam(userUuid as string);

  console.log("Team:", team);

  if (!team) return <p>Użytkownik nie stworzył jeszcze swojej drużyny</p>;

  const getPlayersByPosition = (position: Position) => {
    return team.teamPlayers
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

  // TODO: Fix error below when user doesn;t have the team
  if (isError) return <div>{TEAM_CANNOT_BE_LOADED_ERROR_MESSAGE}</div>;

  return (
    <div className="flex min-h-svh flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <Heading HeadingTag="h1" title={TEAM_HEADING} />
        <PitchBoard
          goalkeepers={goalkeepers}
          defenders={defenders}
          midfielders={midfielders}
          forwards={forwards}
        />
      </div>
    </div>
  );
}
