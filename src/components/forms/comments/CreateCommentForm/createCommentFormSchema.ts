import { MAX_LENGTH_ERROR_MESSAGE, REQUIRED } from "@/constants/errorMessages";
import { COMMENT_CONTENT_MAX_LENGTH } from "@/constants/lengths";
import { object, string } from "yup";

export interface CreateCommentFormData {
  content: string;
}

export const createCommentFormSchema = object({
  content: string()
    .max(
      COMMENT_CONTENT_MAX_LENGTH,
      `${MAX_LENGTH_ERROR_MESSAGE} ${COMMENT_CONTENT_MAX_LENGTH} znaki.`
    )
    .required(REQUIRED),
});

export const initialValues: CreateCommentFormData = {
  content: "",
};
