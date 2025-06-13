import { MAX_LENGTH_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { MESSAGE_MAX_LENGTH } from "@/constants/lengths";
import { object, string } from "yup";

export interface SuggestFixFormData {
  message: string;
}

export const suggestFixFormSchema = object({
  message: string()
    .max(
      MESSAGE_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${MESSAGE_MAX_LENGTH} znaki.`
    )
    .required(REQUIRED),
});

export const initialValues: SuggestFixFormData = {
  message: "",
};
