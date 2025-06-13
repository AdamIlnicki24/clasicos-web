// TODO: Standardize 3 public forms

import {
    EMAIL_HAS_NOT_BEEN_SENT_ERROR_TOAST,
    RESET_PASSWORD_EMAIL_SENT_TOAST,
} from "@/constants/toasts";
import { LOG_IN_URL } from "@/constants/urls";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { ForgotPasswordFormData, forgotPasswordFormSchema, initialValues } from "./forgotPasswordFormSchema";
import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { EmailInput } from "@/components/inputs/inputs/EmailInput/EmailInput";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { RESET_PASSWORD_BUTTON_LABEL } from "@/constants/buttonLabels";

export function ForgotPasswordForm() {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const onSubmitHandler = async (values: ForgotPasswordFormData) => {
    setIsPending(true);
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, values.email);
      // TODO: Think about order of two lines below
      router.replace(LOG_IN_URL);
      toast.success(RESET_PASSWORD_EMAIL_SENT_TOAST);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
      toast.error(EMAIL_HAS_NOT_BEEN_SENT_ERROR_TOAST);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={forgotPasswordFormSchema}
    >
      <>
        <EmailInput />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : RESET_PASSWORD_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
