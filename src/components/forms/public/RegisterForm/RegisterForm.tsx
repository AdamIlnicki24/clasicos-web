"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { EmailInput } from "@/components/inputs/inputs/EmailInput/EmailInput";
import { PasswordInput } from "@/components/inputs/inputs/PasswordInput/PasswordInput";
import { REGISTER_BUTTON_LABEL } from "@/constants/buttonLabels";
import {
  EXISTING_USER_ERROR_TOAST,
  REGISTER_ERROR_TOAST,
  REGISTER_SUCCESS_TOAST,
} from "@/constants/toasts";
import { HOME_URL, PROFILE_URL } from "@/constants/urls";
import { useRegister } from "@/hooks/api/auth/useRegister";
import { Spinner } from "@heroui/react";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  initialValues,
  RegisterFormData,
  registerFormSchema,
} from "./registerFormSchema";

export function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const router = useRouter();

  const onSubmitHandler = (values: RegisterFormData) => {
    const auth = getAuth();

    mutate(values, {
      onSuccess: async () => {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast.success(REGISTER_SUCCESS_TOAST);
        router.replace(HOME_URL);
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 409) {
          toast.error(EXISTING_USER_ERROR_TOAST);
        } else {
          toast.error(REGISTER_ERROR_TOAST);
        }
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={registerFormSchema}
    >
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4">
          <EmailInput />
          <PasswordInput />
        </div>
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : REGISTER_BUTTON_LABEL}
        />
      </div>
    </Formik>
  );
}
