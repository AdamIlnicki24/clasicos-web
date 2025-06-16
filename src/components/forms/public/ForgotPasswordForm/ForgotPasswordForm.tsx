"use client";

import {
  EMAIL_HAS_NOT_BEEN_SENT_ERROR_TOAST,
  RESET_PASSWORD_EMAIL_SENT_TOAST,
} from "@/constants/toasts";
import { LOG_IN_URL } from "@/constants/urls";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  ForgotPasswordFormData,
  forgotPasswordFormSchema,
  initialValues,
} from "./forgotPasswordFormSchema";
import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { EmailInput } from "@/components/inputs/inputs/EmailInput/EmailInput";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { RESET_PASSWORD_BUTTON_LABEL } from "@/constants/buttonLabels";
import { useRouter } from "next/navigation";

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
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4">
          <EmailInput />
        </div>
        <div className="flex justify-center pt-4">
          <SubmitButton
            title={
              isPending ? <Spinner size="md" /> : RESET_PASSWORD_BUTTON_LABEL
            }
            variant="bordered"
          />
        </div>
      </div>
    </Formik>
  );
}
