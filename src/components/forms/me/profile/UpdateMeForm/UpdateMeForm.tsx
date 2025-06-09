"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { FavoriteClubInput } from "@/components/inputs/inputs/FavoriteClubInput/FavoriteClubInput";
import { FavoriteFootballerInput } from "@/components/inputs/inputs/FavoriteFootballerInput/FavoriteFootballerInput";
import { NickInput } from "@/components/inputs/inputs/NickInput/NickInput";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { PROFILE_DATA_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMe } from "@/hooks/api/users/me/useUpdateMe";
import { ApiError } from "@/types/apiError";
import { Visitor } from "@/types/visitor";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdateMeFormData,
  updateMeFormSchema,
} from "./updateMeFormSchema";

interface UpdateMeFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
  visitor: Visitor;
}

export function UpdateMeForm({ onClose, visitor }: UpdateMeFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  // TODO: Create refs

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateMe();

  const onSubmitHandler = (values: UpdateMeFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getMe"],
        });

        toast.success(PROFILE_DATA_HAS_BEEN_UPDATED_TOAST);

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
  initialValues.nick = visitor.nick ?? "";
  initialValues.favoriteClub = visitor.favoriteClub ?? "";
  initialValues.favoriteFootballer = visitor.favoriteFootballer ?? "";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={updateMeFormSchema}
    >
      <>
        <NickInput />
        <FavoriteClubInput />
        <FavoriteFootballerInput />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
