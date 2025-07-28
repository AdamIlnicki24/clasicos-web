"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { FavoriteClubInput } from "@/components/inputs/inputs/FavoriteClubInput/FavoriteClubInput";
import { FavoriteFootballerInput } from "@/components/inputs/inputs/FavoriteFootballerInput/FavoriteFootballerInput";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { NO_INFORMATION } from "@/constants/texts";
import { PROFILE_DATA_HAS_BEEN_UPDATED_TOAST } from "@/constants/toasts";
import { useUpdateMyProfile } from "@/hooks/api/users/me/useUpdateMyProfile";
import { useUser } from "@/hooks/context/useUser";
import { ApiError } from "@/types/apiError";
import { Visitor } from "@/types/visitor";
import { Spinner } from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  initialValues,
  UpdateProfileFormData,
  updateProfileFormSchema,
} from "./updateProfileFormSchema";

interface UpdateProfileFormProps {
  onClose?: () => void;
  visitor: Visitor;
}

export function UpdateProfileForm({
  onClose,
  visitor,
}: UpdateProfileFormProps) {
  const queryClient = useQueryClient();

  const { user } = useUser();

  const { mutate, isPending } = useUpdateMyProfile();

  const onSubmitHandler = (values: UpdateProfileFormData) => {
    mutate(values, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["getUser", user?.uuid],
        });

        toast.success(PROFILE_DATA_HAS_BEEN_UPDATED_TOAST);

        if (onClose) onClose();
      },
      onError: (error) => {
        toast.error((error as ApiError).response.data.message);
      },
    });
  };

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
