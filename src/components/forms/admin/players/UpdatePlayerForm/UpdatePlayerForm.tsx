"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { useUpdatePlayer } from "@/hooks/api/players/useUpdatePlayer";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import {
  UpdatePlayerFormData,
  updatePlayerFormSchema,
  initialValues,
} from "./updatePlayerFormSchema";
import { PlayerNationalityAutocomplete } from "@/components/inputs/autocompletes/PlayerNationalityAutocomplete/PlayerNationalityAutocomplete";
import { PlayerNameInput } from "@/components/inputs/inputs/PlayerNameInput/PlayerNameInput";
import { PlayerSurnameInput } from "@/components/inputs/inputs/PlayerSurnameInput/PlayerSurnameInput";
import { PlayerPositionSelect } from "@/components/inputs/selects/PlayerPositionSelect/PlayerPositionSelect";
import { toast } from "react-toastify";
import { PLAYER_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { ApiError } from "@/types/apiError";
import { useParams } from "next/navigation";
import { Player } from "@/types/player";

interface UpdatePlayerFormProps {
  onClose?: () => void;
  player: Player;
}

export function UpdatePlayerForm({ onClose, player }: UpdatePlayerFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  // TODO: Create refs

  const queryClient = useQueryClient();

  // TODO: Create dynamic folder
  const { uuid } = useParams();

  const { mutate, isPending } = useUpdatePlayer(uuid as string);

  const onSubmitHandler = (values: UpdatePlayerFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getPlayers"],
        });

        await queryClient.invalidateQueries({ queryKey: ["getPlayer", uuid] });

        toast.success(PLAYER_HAS_BEEN_UPDATED_TOAST);

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
        <PlayerNameInput ref={nameInputRef} onKeyDown={() => {}} />
        <PlayerSurnameInput ref={surnameInputRef} onKeyDown={() => {}} />
        <PlayerNationalityAutocomplete />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL} mode="secondary"
        />
      </>
    </Formik>
  );
}
