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

interface CreatePlayerFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
}

export function CreatePlayerForm({ onClose }: CreatePlayerFormProps) {
  const playerNameInputRef = useRef<HTMLInputElement>(null);
  const playerSurnameInputRef = useRef<HTMLInputElement>(null);

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

        // TODO: Toast success message

        if (onClose) onClose();
      },
      onError: (error) => {
        if (process.env.NODE_ENV === "development") {
          console.error("Error:", error);
        }
        // TODO: Toast error message
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
        {/* <PlayerNameInput ref={} onKeyDown={} /> */}
        {/* <PlayerSurnameInput ref={} onKeyDown={} /> */}
        {/* <PlayerNationalityAutocomplete /> */}
        {/* <PlayerPositionSelect /> */}
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
