import { createPlayerSuggestion } from "@/actions/actions";
import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SuggestPlayerInput } from "@/components/inputs/inputs/SuggestPlayerInput/SuggestPlayerInput";
import { MessageTextarea } from "@/components/inputs/textareas/MessageTextarea/MessageTextarea";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { SUGGEST_ADDING_PLAYER_MESSAGE_PLACEHOLDER } from "@/constants/placeholders";
import { SUGGESTION_HAS_BEEN_SENT_TOAST } from "@/constants/toasts";
import { useUser } from "@/hooks/context/useUser";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  initialValues,
  SuggestAddingPlayerFormData,
  suggestAddingPlayerFormSchema,
} from "./suggestAddingPlayerFormSchema";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";

interface SuggestAddingPlayerFormProps {
  onClose?: () => void;
}
export function SuggestAddingPlayerForm({
  onClose,
}: SuggestAddingPlayerFormProps) {
  // TODO: Think about adding form ref

  const [isPending, setIsPending] = useState(false);

  const { user } = useUser();

  if (!user) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const { nick } = user.visitor;

  const onSubmitHandler = async ({
    player,
    message,
  }: SuggestAddingPlayerFormData) => {
    setIsPending(true);

    // TODO: Finish below
    await createPlayerSuggestion({ player, message, nick }).then((response) => {
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
      validationSchema={suggestAddingPlayerFormSchema}
    >
      <>
        <SuggestPlayerInput />
        <MessageTextarea
          placeholder={SUGGEST_ADDING_PLAYER_MESSAGE_PLACEHOLDER}
        />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
