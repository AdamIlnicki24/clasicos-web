"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { PlayerNationalityAutocomplete } from "@/components/inputs/autocompletes/PlayerNationalityAutocomplete/PlayerNationalityAutocomplete";
import { PlayerNameInput } from "@/components/inputs/inputs/PlayerNameInput/PlayerNameInput";
import { PlayerSurnameInput } from "@/components/inputs/inputs/PlayerSurnameInput/PlayerSurnameInput";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { PLAYER_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdatePlayer } from "@/hooks/api/players/useUpdatePlayer";
import { ApiError } from "@/types/apiError";
import { Player } from "@/types/player";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdatePlayerFormData,
  updatePlayerFormSchema,
} from "./updatePlayerFormSchema";

interface UpdatePlayerFormProps {
  onClose?: () => void;
  player: Player;
}

export function UpdatePlayerForm({ onClose, player }: UpdatePlayerFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdatePlayer(player.uuid);

  const onSubmitHandler = (values: UpdatePlayerFormData) => {
    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getPlayers"],
        });

        await queryClient.invalidateQueries({ queryKey: ["getPlayer", player.uuid] });

        toast.success(PLAYER_HAS_BEEN_UPDATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  initialValues.name = player.name ?? "";
  initialValues.surname = player.surname;
  initialValues.nationality = player.nationality;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={updatePlayerFormSchema}
    >
      <>
        <PlayerNameInput />
        <PlayerSurnameInput />
        <PlayerNationalityAutocomplete />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </>
    </Formik>
  );
}
