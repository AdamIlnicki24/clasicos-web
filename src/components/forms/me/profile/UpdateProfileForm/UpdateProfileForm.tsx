"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { FavoriteClubInput } from "@/components/inputs/inputs/FavoriteClubInput/FavoriteClubInput";
import { FavoriteFootballerInput } from "@/components/inputs/inputs/FavoriteFootballerInput/FavoriteFootballerInput";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { NO_INFORMATION } from "@/constants/texts";
import { PROFILE_DATA_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMyProfile } from "@/hooks/api/users/me/useUpdateMyProfile";
import { ApiError } from "@/types/apiError";
import { Visitor } from "@/types/visitor";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { useRef } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdateProfileFormData,
  updateProfileFormSchema,
} from "./updateProfileFormSchema";
import { useUser } from "@/hooks/context/useUser";

interface UpdateProfileFormProps {
  // TODO: Think about the name of the prop
  onClose?: () => void;
  visitor: Visitor;
}

export function UpdateProfileForm({
  onClose,
  visitor,
}: UpdateProfileFormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  // TODO: Create refs

  const queryClient = useQueryClient();

  const { user } = useUser();

  const { mutate, isPending } = useUpdateMyProfile();

  const onSubmitHandler = (values: UpdateProfileFormData) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Submitted values:", values);
    }

    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getUser", user?.uuid],
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
  // initialValues.nick = visitor.nick ?? "";
  initialValues.favoriteClub = visitor.favoriteClub ?? NO_INFORMATION;
  initialValues.favoriteFootballer =
    visitor.favoriteFootballer ?? NO_INFORMATION;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={updateProfileFormSchema}
    >
      <>
        {/* <NickInput /> */}
        <FavoriteClubInput />
        <FavoriteFootballerInput />
          <SubmitButton
            title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
            mode="secondary"
          />
      </>
    </Formik>
  );
}
