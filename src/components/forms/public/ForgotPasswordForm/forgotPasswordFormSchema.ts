import { EMAIL_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { object, string } from "yup";

export interface ForgotPasswordFormData {
  email: string;
}

export const forgotPasswordFormSchema = object({
  email: string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED),
});

export const initialValues: ForgotPasswordFormData = {
  email: "",
};
