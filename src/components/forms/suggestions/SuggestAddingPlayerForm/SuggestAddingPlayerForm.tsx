import { toast } from "react-toastify";
import {
  initialValues,
  SuggestAddingPlayerFormData,
  suggestAddingPlayerFormSchema,
} from "./suggestAddingPlayerFormSchema";
import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { MessageTextarea } from "@/components/inputs/textareas/MessageTextarea/MessageTextarea";
import { SUGGEST_ADDING_PLAYER_MESSAGE_PLACEHOLDER } from "@/constants/placeholders";
import { SuggestPlayerInput } from "@/components/inputs/inputs/SuggestPlayerInput/SuggestPlayerInput";

export function SuggestAddingPlayerForm() {
  // TODO: Think about adding form ref

  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler = async (values: SuggestAddingPlayerFormData) => {
    setIsPending(true);

    if (process.env.NODE_ENV === "development") {
      console.log("Values:", values);
    }

    // TODO: Finish below
    await createPlayerSuggestion(values).then((response) => {
      if (process.env.NODE_ENV === "development") {
        console.log("Response:", response);
      }
      if (response.success) {
        toast.success();
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
