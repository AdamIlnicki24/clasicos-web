import { MESSAGE_LABEL } from "@/constants/labels";
import { MESSAGE_MAX_LENGTH } from "@/constants/lengths";
import { useFormikContext } from "formik";
import { Textarea, TextareaProps } from "../../components/Textarea/Textarea";

export function MessageTextarea({ ...properties }: TextareaProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ message: string }>();

  return (
    <Textarea
      onChange={handleChange("message")}
      onBlur={handleBlur("message")}
      value={values.message}
      isInvalid={touched.message && !!errors.message}
      errorMessage={touched.message && errors.message}
      isClearable
      onClear={() => {
        setFieldValue("message", "");
      }}
      label={MESSAGE_LABEL}
      maxLength={MESSAGE_MAX_LENGTH}
      isCounterShown
      {...properties}
    />
  );
}
