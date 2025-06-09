import { MAX_LENGTH_ERROR_MESSAGE } from "@/constants/errorMessages";
import {
  FAVORITE_CLUB_MAX_LENGTH,
  FAVORITE_FOOTBALLER_MAX_LENGTH,
  NICK_MAX_LENGTH,
} from "@/constants/lengths";
import { object, string } from "yup";

export interface UpdateMeFormData {
  nick: string;
  favoriteClub: string;
  favoriteFootballer: string;
}

export const updateMeFormSchema = object({
  nick: string()
    .trim()
    .max(
      NICK_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${NICK_MAX_LENGTH} znaki.`
    )
    .transform((value) => (value === "" ? undefined : value))
    .nullable()
    .notRequired(),
  favoriteClub: string()
    .trim()
    .max(
      FAVORITE_CLUB_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${FAVORITE_CLUB_MAX_LENGTH} znaków.`
    )
    .transform((value) => (value === "" ? undefined : value))
    .nullable()
    .notRequired(),
  favoriteFootballer: string()
    .trim()
    .max(
      FAVORITE_FOOTBALLER_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${FAVORITE_FOOTBALLER_MAX_LENGTH} znaków.`
    )
    .transform((value) => (value === "" ? undefined : value))
    .nullable()
    .notRequired(),
});

export const initialValues: UpdateMeFormData = {
  nick: "",
  favoriteClub: "",
  favoriteFootballer: "",
};
