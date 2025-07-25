import {
  EMAIL_ERROR_MESSAGE,
  MAX_LENGTH_ERROR_MESSAGE,
  REQUIRED,
} from "@/constants/errorMessages";
import { EMAIL_MAX_LENGTH } from "@/constants/lengths";
import { object, string } from "yup";

export interface ForgotPasswordFormData {
  email: string;
}

export const forgotPasswordFormSchema = object({
  email: string()
    .email(EMAIL_ERROR_MESSAGE)
    .max(
      EMAIL_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${EMAIL_MAX_LENGTH} znaków`
    )
    .required(REQUIRED),
});

export const initialValues: ForgotPasswordFormData = {
  email: "",
};
