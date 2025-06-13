import { MESSAGE_LABEL } from "@/constants/labels";
import { MESSAGE_MAX_LENGTH } from "@/constants/lengths";
import { SUGGEST_ADDING_PLAYER_MESSAGE_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { Textarea, TextareaProps } from "../../components/Textarea/Textarea";

export function MessageTextarea({}: TextareaProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ message: string }>();

  return (
    <Textarea
      onChange={handleChange("message")}
      onBlur={handleBlur("message")}
      value={values.message}
      color={touched.message && !errors.message ? "success" : "default"}
      isInvalid={touched.message && !!errors.message}
      errorMessage={touched.message && errors.message}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("message", "");
      }}
      label={MESSAGE_LABEL}
      maxLength={MESSAGE_MAX_LENGTH}
      isCounterShown
    />
  );
}
