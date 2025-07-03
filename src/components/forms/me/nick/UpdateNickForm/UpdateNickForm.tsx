"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { NickInput } from "@/components/inputs/inputs/NickInput/NickInput";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { ENIGMA } from "@/constants/texts";
import { NICK_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMyNick } from "@/hooks/api/users/me/useUpdateMyNick";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { Visitor } from "@/types/visitor";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdateNickFormData,
  updateNickFormSchema,
} from "./updateNickFormSchema";

interface UpdateNickFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
  visitor: Visitor;
}

export function UpdateNickForm({ onClose, visitor }: UpdateNickFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  // TODO: Create refs

  const queryClient = useQueryClient();

  const { user } = useUser();

  const { mutate, isPending } = useUpdateMyNick();

  const onSubmitHandler = (values: UpdateNickFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getUser", user?.uuid],
        });

        toast.success(NICK_HAS_BEEN_UPDATED_TOAST);

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

  // TODO: Override initial values also in other resources
  initialValues.nick = visitor.nick ?? ENIGMA;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={updateNickFormSchema}
    >
      <>
        <NickInput />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </>
    </Formik>
  );
}
