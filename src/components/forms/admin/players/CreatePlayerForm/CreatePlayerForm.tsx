"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { PlayerNationalityAutocomplete } from "@/components/inputs/autocompletes/PlayerNationalityAutocomplete/PlayerNationalityAutocomplete";
import { PlayerNameInput } from "@/components/inputs/inputs/PlayerNameInput/PlayerNameInput";
import { PlayerSurnameInput } from "@/components/inputs/inputs/PlayerSurnameInput/PlayerSurnameInput";
import { PlayerPositionSelect } from "@/components/inputs/selects/PlayerPositionSelect/PlayerPositionSelect";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { PLAYER_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { useCreatePlayer } from "@/hooks/api/players/useCreatePlayer";
import { ApiError } from "@/types/apiError";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  CreatePlayerFormData,
  createPlayerFormSchema,
  initialValues,
} from "./createPlayerFormSchema";

interface CreatePlayerFormProps {
  onClose?: () => void;
}

export function CreatePlayerForm({ onClose }: CreatePlayerFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useCreatePlayer();

  const onSubmitHandler = (values: CreatePlayerFormData) => {
    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getPlayers"],
        });

        toast.success(PLAYER_HAS_BEEN_CREATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={createPlayerFormSchema}
    >
      <>
        <PlayerNameInput />
        <PlayerSurnameInput />
        <PlayerNationalityAutocomplete />
        <PlayerPositionSelect />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </>
    </Formik>
  );
}
