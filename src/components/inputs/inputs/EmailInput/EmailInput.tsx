import { EMAIL_LABEL } from "@/constants/labels";
import { EMAIL_MAX_LENGTH } from "@/constants/lengths";
import { EMAIL_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import {
  TextInput
} from "../../components/TextInput/TextInput";

export function EmailInput() {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ email: string }>();

  return (
    <TextInput
      type="email"
      onChange={handleChange("email")}
      onBlur={handleBlur("email")}
      value={values.email}
      isInvalid={touched.email && !!errors.email}
      errorMessage={touched.email && errors.email}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("email", "");
      }}
      label={EMAIL_LABEL}
      placeholder={EMAIL_PLACEHOLDER}
      maxLength={EMAIL_MAX_LENGTH}
    />
  );
}
