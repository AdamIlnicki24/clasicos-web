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
      router.replace(LOG_IN_URL);
      toast.success(RESET_PASSWORD_EMAIL_SENT_TOAST);
    } catch (error) {
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
      {({ values }) => (
        <div className="flex w-full flex-col gap-4 lg:w-[60%]">
          <div className="grid grid-cols-1 gap-4">
            <EmailInput value={values.email} />
          </div>
          <SubmitButton
            title={
              isPending ? <Spinner size="md" /> : RESET_PASSWORD_BUTTON_LABEL
            }
            mode="primary"
          />
        </div>
      )}
    </Formik>
  );
}
