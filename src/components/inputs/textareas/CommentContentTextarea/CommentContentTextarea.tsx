import { COMMENT_CONTENT_LABEL } from "@/constants/labels";
import { COMMENT_CONTENT_MAX_LENGTH } from "@/constants/lengths";
import { COMMENT_CONTENT_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { Textarea, TextareaProps } from "../../components/Textarea/Textarea";

export function CommentContentTextarea({}: TextareaProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ content: string }>();

  return (
    <Textarea
      onChange={handleChange("content")}
      onBlur={handleBlur("content")}
      value={values.content}
      isInvalid={touched.content && !!errors.content}
      errorMessage={touched.content && errors.content}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("content", "");
      }}
      label={COMMENT_CONTENT_LABEL}
      placeholder={COMMENT_CONTENT_PLACEHOLDER}
      maxLength={COMMENT_CONTENT_MAX_LENGTH}
      isCounterShown
    />
  );
}
