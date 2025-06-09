"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { DefendersSelect } from "@/components/inputs/selects/DefendersSelect/DefendersSelect";
import { ForwardsSelect } from "@/components/inputs/selects/ForwadsSelect/ForwadsSelect";
import { GoalkeepersSelect } from "@/components/inputs/selects/GoalkeepersSelect/GoalkeepersSelect";
import { MidfieldersSelect } from "@/components/inputs/selects/MidfieldersSelect/MidfieldersSelect";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { TEAM_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMyTeam } from "@/hooks/api/team/me/useUpdateMyTeam";
import { ApiError } from "@/types/apiError";
import { TeamPlayer } from "@/types/teamPlayer";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  UpdateTeamFormData,
  updateTeamFormSchema,
} from "./updateTeamFormSchema";

interface UpdateTeamFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
  teamPlayers: TeamPlayer[];
}

export function UpdateTeamForm({ onClose, teamPlayers }: UpdateTeamFormProps) {
  //   const goalkeepersRef = useRef<HTMLSelectElement>(null);
  //   const defendersRef = useRef<HTMLSelectElement>(null);
  //   const midfieldersRef = useRef<HTMLSelectElement>(null);
  //   const forwardsRef = useRef<HTMLSelectElement>(null);

  const queryClient = useQueryClient();

  // TODO: Think about proper usage of getPlayers hook

  const { mutate, isPending } = useUpdateMyTeam();

  const initialValues: UpdateTeamFormData = {
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

  const onSubmitHandler = (values: UpdateTeamFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          // TODO: Think about key below
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
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={updateTeamFormSchema}
    >
      <>
        <GoalkeepersSelect />
        <DefendersSelect />
        <MidfieldersSelect />
        <ForwardsSelect />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
