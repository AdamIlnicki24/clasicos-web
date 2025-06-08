import { MAX_LENGTH_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import {
  PLAYER_NAME_MAX_LENGTH,
  PLAYER_NATIONALITY_MAX_LENGTH,
  PLAYER_POSITION_MAX_LENGTH,
  PLAYER_SURNAME_MAX_LENGTH,
} from "@/constants/lengths";
import { object, string } from "yup";

export interface CreatePlayerFormData {
  name: string;
  surname: string;
  nationality: string;
  position: string;
}

export const createPlayerFormSchema = object({
  name: string()
    .trim()
    .max(
      PLAYER_NAME_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${PLAYER_NAME_MAX_LENGTH} znaków.`
    )
    .transform((value) => (value === "" ? undefined : value))
    .nullable()
    .notRequired(),
  surname: string()
    .max(
      PLAYER_SURNAME_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${PLAYER_SURNAME_MAX_LENGTH} znaków.`
    )
    .required(REQUIRED),
  nationality: string()
    .max(
      PLAYER_NATIONALITY_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${PLAYER_NATIONALITY_MAX_LENGTH} znaków.`
    )
    .required(REQUIRED),
  position: string()
    .max(
      PLAYER_POSITION_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${PLAYER_POSITION_MAX_LENGTH} znaków.`
    )
    .required(REQUIRED),
});

export const initialValues: CreatePlayerFormData = {
  name: "",
  surname: "",
  nationality: "",
  position: "",
};
