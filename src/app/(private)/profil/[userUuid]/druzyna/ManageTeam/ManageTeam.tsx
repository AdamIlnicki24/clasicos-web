import Loading from "@/app/loading";
import { Button } from "@/components/buttons/Button/Button";
import { Heading } from "@/components/headings/Heading/Heading";
import { CreateTeamModal } from "@/components/modals/CreateTeamModal/CreateTeamModal";
import { UpdateTeamModal } from "@/components/modals/UpdateTeamModal/UpdateTeamModal";
import {
  CREATE_TEAM_BUTTON_LABEL,
  UPDATE_TEAM_BUTTON_LABEL,
} from "@/constants/buttonLabels";
import {
  CREATE_TEAM_HEADING,
  UPDATE_TEAM_HEADING,
  YOUR_TEAM_HEADING,
} from "@/constants/headings";
import { useGetMyTeam } from "@/hooks/api/team/me/useGetMyTeam";
import { useDisclosure } from "@heroui/react";

export function ManageTeam() {
  const { data: team, isLoading } = useGetMyTeam();

  console.log("Team:", team);

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  if (isLoading) return <Loading />;

  return (
    <div className="flex min-h-svh flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <Heading HeadingTag="h1" title={YOUR_TEAM_HEADING} />
        <Heading
          HeadingTag="h2"
          title={team ? UPDATE_TEAM_HEADING : CREATE_TEAM_HEADING}
          size="md"
        />
        {team ? (
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
      <div className="flex items-center justify-center pt-8">
        {!team && <p>Po stworzeniu drużyny, pojawi się ona poniżej</p>}
      </div>
      <UpdateTeamModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        teamPlayers={team?.teamPlayers ?? []}
      />
      <CreateTeamModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
