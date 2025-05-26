"use client";

import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { EmailInput } from "@/components/inputs/EmailInput/EmailInput";
import { PasswordInput } from "@/components/inputs/PasswordInput/PasswordInput";
import { LOG_IN_BUTTON_LABEL } from "@/constants/buttonLabels";
import {
  LOG_IN_ERROR_TOAST,
  LOG_IN_INVALID_CREDENTIALS_TOAST,
  LOG_IN_SUCCESS_TOAST,
} from "@/constants/toasts";
import { auth } from "@/firebase";
import { Spinner } from "@heroui/react";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  LogInFormData,
  logInFormSchema,
} from "./logInFormSchema";

export function LogInForm() {
  // TODO: Create refs

  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler = async (values: LogInFormData) => {
    setIsPending(true);

    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async ({ user }) => {
        toast.success(LOG_IN_SUCCESS_TOAST);
        setIsPending(false);
        if (process.env.NODE_ENV === "development") {
          const token = await user.getIdToken();
          console.log("Token:", token);
        }
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        let toastErrorMessage: string;

        if (errorCode == "auth/invalid-credential") {
          toastErrorMessage = LOG_IN_INVALID_CREDENTIALS_TOAST;
        } else {
          toastErrorMessage = LOG_IN_ERROR_TOAST;
        }

        toast.error(toastErrorMessage);
        setIsPending(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={logInFormSchema}
    >
      <>
        <EmailInput />
        <PasswordInput />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : LOG_IN_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
