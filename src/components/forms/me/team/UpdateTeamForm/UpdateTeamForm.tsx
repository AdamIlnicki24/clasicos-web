"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { DefendersSelect } from "@/components/inputs/selects/DefendersSelect/DefendersSelect";
import { ForwardsSelect } from "@/components/inputs/selects/ForwadsSelect/ForwadsSelect";
import { GoalkeepersSelect } from "@/components/inputs/selects/GoalkeepersSelect/GoalkeepersSelect";
import { MidfieldersSelect } from "@/components/inputs/selects/MidfieldersSelect/MidfieldersSelect";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { TEAM_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMyTeam } from "@/hooks/api/team/me/useUpdateMyTeam";
import { useTeamStore } from "@/store/useTeamStore";
import { ApiError } from "@/types/apiError";
import { TeamPlayer } from "@/types/teamPlayer";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdateTeamFormData,
  updateTeamFormSchema,
} from "./updateTeamFormSchema";
import { Team } from "@/types/team";
import { useParams } from "next/navigation";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";

interface UpdateTeamFormProps {
  onClose?: () => void;
  teamPlayers: TeamPlayer[];
}

export function UpdateTeamForm({ onClose, teamPlayers }: UpdateTeamFormProps) {
  const { goalkeepers, defenders, midfielders, forwards, setTeam } =
    useTeamStore();

  const { userUuid } = useParams();

  useEffect(() => {
    if (
      goalkeepers.length === 0 &&
      defenders.length === 0 &&
      midfielders.length === 0 &&
      forwards.length === 0
    ) {
      const team = teamPlayers.reduce(
        (accumulator, current) => {
          const position = current.player.position;
          const uuid = current.player.uuid;
          return {
            ...accumulator,
            [position === "Goalkeeper"
              ? "goalkeepers"
              : position === "Defender"
                ? "defenders"
                : position === "Midfielder"
                  ? "midfielders"
                  : "forwards"]: [
              ...accumulator[
                position === "Goalkeeper"
                  ? "goalkeepers"
                  : position === "Defender"
                    ? "defenders"
                    : position === "Midfielder"
                      ? "midfielders"
                      : "forwards"
              ],
              uuid,
            ],
          };
        },
        { goalkeepers: [], defenders: [], midfielders: [], forwards: [] }
      );

      setTeam(team);
    }
  }, [teamPlayers, goalkeepers, defenders, midfielders, forwards, setTeam]);

  const queryClient = useQueryClient();

  const { data = [], isLoading: arePlayersLoading } = useGetPlayers();

  const { mutate, isPending } = useUpdateMyTeam();

  const onSubmitHandler = (values: UpdateTeamFormData) => {
    mutate(values, {
      onSuccess: (updatedTeam) => {
        queryClient.setQueryData<Team | undefined>(["getMyTeam"], updatedTeam);
        queryClient.removeQueries({ queryKey: ["getTeam", userUuid] });

        toast.success(TEAM_HAS_BEEN_UPDATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  const filteredGoalkeepers = data.filter(
    (player) => player.position === "Goalkeeper"
  );
  const filteredDefenders = data.filter(
    (player) => player.position === "Defender"
  );
  const filteredMidfielders = data.filter(
    (player) => player.position === "Midfielder"
  );
  const filteredForwards = data.filter(
    (player) => player.position === "Forward"
  );

  return (
    <Formik
      initialValues={{
        ...initialValues,
        goalkeepers,
        defenders,
        midfielders,
        forwards,
      }}
      onSubmit={onSubmitHandler}
      validationSchema={updateTeamFormSchema}
      enableReinitialize
    >
      {arePlayersLoading ? (
        <Spinner size="md" />
      ) : (
        <>
          <GoalkeepersSelect players={filteredGoalkeepers} />
          <DefendersSelect players={filteredDefenders} />
          <MidfieldersSelect players={filteredMidfielders} />
          <ForwardsSelect players={filteredForwards} />
          <SubmitButton
            title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
            mode="secondary"
          />
        </>
      )}
    </Formik>
  );
}
