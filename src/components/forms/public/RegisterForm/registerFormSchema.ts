import { EMAIL_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { boolean, object, string } from "yup";

export interface RegisterFormData {
  email: string;
  password: string;
  isPrivacyPolicyAccepted: boolean;
}

export const registerFormSchema = object({
  email: string().email(EMAIL_ERROR_MESSAGE).required(REQUIRED),
  password: string().required(REQUIRED),
  // TODO: Think whether validation below is enough
  isPrivacyPolicyAccepted: boolean().oneOf([true]).required(REQUIRED),
});

export const initialValues: RegisterFormData = {
  email: "",
  password: "",
  isPrivacyPolicyAccepted: false,
};
