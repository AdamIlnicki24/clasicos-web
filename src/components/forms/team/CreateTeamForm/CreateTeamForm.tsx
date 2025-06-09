"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { useCreateMyTeam } from "@/hooks/api/team/me/useCreateMyTeam";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import {
  CreateTeamFormData,
  createTeamFormSchema,
  initialValues,
} from "./createTeamFormSchema";
import { toast } from "react-toastify";
import { TEAM_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { ApiError } from "@/types/apiError";
import { DefendersSelect } from "@/components/inputs/selects/DefendersSelect/DefendersSelect";

interface CreateTeamFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
}

export function CreateTeamForm({ onClose }: CreateTeamFormProps) {
  //   const goalkeepersRef = useRef<HTMLSelectElement>(null);
  //   const defendersRef = useRef<HTMLSelectElement>(null);
  //   const midfieldersRef = useRef<HTMLSelectElement>(null);
  //   const forwardsRef = useRef<HTMLSelectElement>(null);

  const queryClient = useQueryClient();

  // TODO: Think about proper usage of getPlayers hook

  const { mutate, isPending } = useCreateMyTeam();

  const onSubmitHandler = (values: CreateTeamFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          // TODO: Think about key below
          queryKey: ["getMyTeam"],
        });

        toast.success(TEAM_HAS_BEEN_CREATED_TOAST);

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
      validationSchema={createTeamFormSchema}
    >
      <>
        {/* <GoalkeepersSelect /> */}
        <DefendersSelect />
        {/* <MidfieldersSelect />
        <ForwardsSelect /> */}
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
