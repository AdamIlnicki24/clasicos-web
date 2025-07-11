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

interface UpdateTeamFormProps {
  onClose?: () => void;
  teamPlayers: TeamPlayer[];
}

export function UpdateTeamForm({ onClose, teamPlayers }: UpdateTeamFormProps) {
  const { goalkeepers, defenders, midfielders, forwards, setTeam } =
    useTeamStore();

  useEffect(() => {
    if (
      goalkeepers.length === 0 &&
      defenders.length === 0 &&
      midfielders.length === 0 &&
      forwards.length === 0
    ) {
      const team = {
        goalkeepers: teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Goalkeeper")
          .map((teamPlayer) => teamPlayer.player.uuid),
        defenders: teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Defender")
          .map((teamPlayer) => teamPlayer.player.uuid),
        midfielders: teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Midfielder")
          .map((teamPlayer) => teamPlayer.player.uuid),
        forwards: teamPlayers
          .filter((teamPlayer) => teamPlayer.player.position === "Forward")
          .map((teamPlayer) => teamPlayer.player.uuid),
      };
      setTeam(team);
    }
  }, [teamPlayers, goalkeepers, defenders, midfielders, forwards]);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateMyTeam();

  const onSubmitHandler = (values: UpdateTeamFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getMyTeam"],
        });

        toast.success(TEAM_HAS_BEEN_UPDATED_TOAST);

        if (onClose) onClose();
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
      <>
        <GoalkeepersSelect />
        <DefendersSelect />
        <MidfieldersSelect />
        <ForwardsSelect />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </>
    </Formik>
  );
}
