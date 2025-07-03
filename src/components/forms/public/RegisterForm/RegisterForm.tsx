"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { PrivacyPolicyCheckbox } from "@/components/inputs/checkboxes/PrivacyPolicyCheckbox/PrivacyPolicyCheckbox";
import { EmailInput } from "@/components/inputs/inputs/EmailInput/EmailInput";
import { PasswordInput } from "@/components/inputs/inputs/PasswordInput/PasswordInput";
import { REGISTER_BUTTON_LABEL } from "@/constants/buttonLabels";
import {
  EXISTING_USER_ERROR_TOAST,
  REGISTER_ERROR_TOAST,
  REGISTER_SUCCESS_TOAST,
} from "@/constants/toasts";
import { useRegister } from "@/hooks/api/auth/useRegister";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import {
  initialValues,
  RegisterFormData,
  registerFormSchema,
} from "./registerFormSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HOME_URL } from "@/constants/urls";

export function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const router = useRouter();

  const onSubmitHandler = (values: RegisterFormData) => {
    // const auth = getAuth();
    // const credentials = await createUserWithEmailAndPassword(
    //   auth,
    //   values.email,
    //   values.password
    // );

    // const firebaseId = credentials.user.uid;

    mutate(values, {
      onSuccess: () => {
        // TODO: Think about moving user to profile uuid
        router.replace(HOME_URL);
        toast.success(REGISTER_SUCCESS_TOAST);
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
          <PrivacyPolicyCheckbox />
        </div>
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : REGISTER_BUTTON_LABEL}
        />
      </div>
    </Formik>
  );
}
