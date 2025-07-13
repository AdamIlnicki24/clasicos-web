import { EMAIL_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { object, string } from "yup";

export interface RegisterFormData {
  email: string;
  password: string;
}

export const registerFormSchema = object({
  email: string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED),
  password: string().required(REQUIRED),
});

export const initialValues: RegisterFormData = {
  email: "",
  password: "",
};
