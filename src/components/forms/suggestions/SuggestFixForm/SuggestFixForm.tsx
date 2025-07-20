import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { MessageTextarea } from "@/components/inputs/textareas/MessageTextarea/MessageTextarea";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { SUGGEST_FIX_MESSAGE_PLACEHOLDER } from "@/constants/placeholders";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  SuggestFixFormData,
  suggestFixFormSchema,
} from "./suggestFixFormSchema";
import { createFixSuggestion } from "@/actions/actions";
import { SUGGESTION_HAS_BEEN_SENT_TOAST } from "@/constants/toasts";
import { useUser } from "@/hooks/context/useUser";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";

interface SuggestFixFormProps {
  onClose?: () => void;
}

export function SuggestFixForm({ onClose }: SuggestFixFormProps) {
  const [isPending, setIsPending] = useState(false);

  const { user } = useUser();

  if (!user) {
    return <div className="text-center">{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const { nick } = user.visitor;

  const onSubmitHandler = async ({ message }: SuggestFixFormData) => {
    setIsPending(true);

    await createFixSuggestion({ message, nick }).then((response) => {
      if (process.env.NODE_ENV === "development") {
        console.log("Response:", response);
      }

      if (response.success) {
        toast.success(SUGGESTION_HAS_BEEN_SENT_TOAST);

        if (onClose) onClose();
      } else {
        toast.error(response.error);
      }
    });

    setIsPending(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={suggestFixFormSchema}
    >
      <>
        <MessageTextarea
          placeholder={SUGGEST_FIX_MESSAGE_PLACEHOLDER}
          isRequired
        />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
          mode="secondary"
        />
      </>
    </Formik>
  );
}
