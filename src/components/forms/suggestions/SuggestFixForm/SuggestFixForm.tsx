import { SubmitButton } from "@/components/buttons/SubmitButton/SubmitButton";
import { MessageTextarea } from "@/components/inputs/textareas/MessageTextarea/MessageTextarea";
import { SUBMIT_FORM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { SUGGEST_FIX_MESSAGE_PLACEHOLDER } from "@/constants/placeholders";
import { Spinner } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { initialValues, SuggestFixFormData, suggestFixFormSchema } from "./suggestFixFormSchema";

export function SuggestFixForm() {
  // TODO: Think about adding form ref

  const [isPending, setIsPending] = useState(false);

  const onSubmitHandler = async (values: SuggestFixFormData) => {
    setIsPending(true);

    if (process.env.NODE_ENV === "development") {
      console.log("Values:", values);
    }

    // TODO: Finish below
    await createFixSuggestion(values).then((response) => {
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
      validationSchema={suggestFixFormSchema}
    >
      <>
        <MessageTextarea placeholder={SUGGEST_FIX_MESSAGE_PLACEHOLDER} />
        <SubmitButton
          title={isPending ? <Spinner size="md" /> : SUBMIT_FORM_BUTTON_LABEL}
        />
      </>
    </Formik>
  );
}
