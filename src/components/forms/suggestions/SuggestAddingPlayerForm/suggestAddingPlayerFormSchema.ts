import { MAX_LENGTH_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import {
  MESSAGE_MAX_LENGTH,
  PLAYER_SUGGESTION_MAX_LENGTH,
} from "@/constants/lengths";
import { object, string } from "yup";

export interface SuggestAddingPlayerFormData {
  player: string;
  message: string;
}

export const suggestAddingPlayerFormSchema = object({
  player: string()
    .max(
      PLAYER_SUGGESTION_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${PLAYER_SUGGESTION_MAX_LENGTH} znaków`
    )
    .required(REQUIRED),
  message: string().max(
    MESSAGE_MAX_LENGTH,
    `${MAX_LENGTH_ERROR_MESSAGE} ${MESSAGE_MAX_LENGTH} znaki.`
  ),
});

export const initialValues: SuggestAddingPlayerFormData = {
  player: "",
  message: "",
};
