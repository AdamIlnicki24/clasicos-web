import { MAX_LENGTH_ERROR_MESSAGE } from "@/constants/errorMessages";
import {
  NICK_MAX_LENGTH
} from "@/constants/lengths";
import { object, string } from "yup";

export interface UpdateNickFormData {
  nick: string;
}

export const updateNickFormSchema = object({
  nick: string()
    .trim()
    .max(
      NICK_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${NICK_MAX_LENGTH} znaki.`
    )
    .transform((value) => (value === "" ? undefined : value))
    .nullable()
    .notRequired(),
});

export const initialValues: UpdateNickFormData = {
  nick: "",
};
