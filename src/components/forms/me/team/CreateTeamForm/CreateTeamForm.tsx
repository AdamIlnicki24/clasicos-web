"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { DefendersSelect } from "@/components/inputs/selects/DefendersSelect/DefendersSelect";
import { ForwardsSelect } from "@/components/inputs/selects/ForwadsSelect/ForwadsSelect";
import { GoalkeepersSelect } from "@/components/inputs/selects/GoalkeepersSelect/GoalkeepersSelect";
import { MidfieldersSelect } from "@/components/inputs/selects/MidfieldersSelect/MidfieldersSelect";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { TEAM_HAS_BEEN_CREATED_TOAST } from "@/constants/toasts";
import { useCreateMyTeam } from "@/hooks/api/team/me/useCreateMyTeam";
import { useTeamStore } from "@/store/useTeamStore";
import { ApiError } from "@/types/apiError";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  CreateTeamFormData,
  createTeamFormSchema,
  initialValues,
} from "./createTeamFormSchema";

interface CreateTeamFormProps {
  onClose?: () => void;
}

export function CreateTeamForm({ onClose }: CreateTeamFormProps) {
  //   const goalkeepersRef = useRef<HTMLSelectElement>(null);
  //   const defendersRef = useRef<HTMLSelectElement>(null);
  //   const midfieldersRef = useRef<HTMLSelectElement>(null);
  //   const forwardsRef = useRef<HTMLSelectElement>(null);

  const { setTeam, goalkeepers, defenders, midfielders, forwards } =
    useTeamStore();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useCreateMyTeam();

  const onSubmitHandler = (values: CreateTeamFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        setTeam(values);
        await queryClient.invalidateQueries({
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
      initialValues={{
        ...initialValues,
        goalkeepers,
        defenders,
        midfielders,
        forwards,
      }}
      onSubmit={onSubmitHandler}
      validationSchema={createTeamFormSchema}
      enableReinitialize
    >
      <div className="flex flex-col gap-y-4">
        <GoalkeepersSelect />
        <DefendersSelect />
        <MidfieldersSelect />
        <ForwardsSelect />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </div>
    </Formik>
  );
}
