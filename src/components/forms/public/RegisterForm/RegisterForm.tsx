import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { EmailInput } from "@/components/inputs/inputs/EmailInput/EmailInput";
import { PasswordInput } from "@/components/inputs/inputs/PasswordInput/PasswordInput";
import { REGISTER_BUTTON_LABEL } from "@/constants/buttonLabels";
import {
  EXISTING_USER_ERROR_TOAST,
  REGISTER_ERROR_TOAST,
  REGISTER_SUCCESS_TOAST,
} from "@/constants/toasts";
import { Spinner } from "@heroui/react";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  RegisterFormData,
  registerFormSchema,
} from "./registerFormSchema";
import { PrivacyPolicyCheckbox } from "@/components/inputs/checkboxes/PrivacyPolicyCheckbox/PrivacyPolicyCheckbox";

export function RegisterForm() {
  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler = async (values: RegisterFormData) => {
    setIsPending(true);

    // TODO: Think about line below
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        toast.success(REGISTER_SUCCESS_TOAST);
        setIsPending(false);
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;

        let toastMessage: string;

        if (errorCode == "auth/email-already-in-use") {
          toastMessage = EXISTING_USER_ERROR_TOAST;
        } else {
          toastMessage = REGISTER_ERROR_TOAST;
        }

        toast.error(toastMessage);
        setIsPending(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={registerFormSchema}
    >
      <>
        <EmailInput />
        <PasswordInput />
        <PrivacyPolicyCheckbox />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : REGISTER_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
