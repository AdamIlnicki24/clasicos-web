import { MAX_LENGTH_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { COMMENT_MAX_LENGTH } from "@/constants/lengths";
import { object, string } from "yup";

export interface CreateCommentFormData {
  content: string;
}

export const createCommentFormSchema = object({
  content: string()
    .max(
      COMMENT_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${COMMENT_MAX_LENGTH} znaków.`
    )
    .required(REQUIRED),
});

export const initialValues: CreateCommentFormData = {
  content: "",
};
