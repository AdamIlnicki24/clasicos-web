"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { useCreatePlayer } from "@/hooks/api/players/useCreatePlayer";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import {
  CreatePlayerFormData,
  createPlayerFormSchema,
  initialValues,
} from "./createPlayerFormSchema";
import { PlayerNationalityAutocomplete } from "@/components/inputs/autocompletes/PlayerNationalityAutocomplete/PlayerNationalityAutocomplete";
import { PlayerNameInput } from "@/components/inputs/inputs/PlayerNameInput/PlayerNameInput";
import { PlayerSurnameInput } from "@/components/inputs/inputs/PlayerSurnameInput/PlayerSurnameInput";
import { PlayerPositionSelect } from "@/components/inputs/selects/PlayerPositionSelect/PlayerPositionSelect";
import { toast } from "react-toastify";
import { PLAYER_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { ApiError } from "@/types/apiError";

interface CreatePlayerFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
}

export function CreatePlayerForm({ onClose }: CreatePlayerFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useCreatePlayer();

  const onSubmitHandler = (values: CreatePlayerFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getPlayers"],
        });

        toast.success(PLAYER_HAS_BEEN_CREATED_TOAST);

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
      validationSchema={createPlayerFormSchema}
    >
      <>
        <PlayerNameInput ref={nameInputRef} onKeyDown={() => {}} />
        <PlayerSurnameInput ref={surnameInputRef} onKeyDown={() => {}} />
        <PlayerNationalityAutocomplete />
        <PlayerPositionSelect />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
