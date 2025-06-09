import { useFormikContext } from "formik";
import {
  TextInput,
  TextInputProps,
} from "../../components/TextInput/TextInput";
import { NICK_MAX_LENGTH } from "@/constants/lengths";
import { NICK_LABEL } from "@/constants/labels";
import { NICK_PLACEHOLDER } from "@/constants/placeholders";

export function NickInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ nick: string }>();

  // TODO: Handle nick being unique

  return (
    <TextInput
      onChange={handleChange("nick")}
      onBlur={handleBlur("nick")}
      value={values.nick}
      color={touched.nick && !errors.nick ? "success" : "default"}
      isInvalid={touched.nick && !!errors.nick}
      errorMessage={touched.nick && errors.nick}
      isClearable
      onClear={() => {
        setFieldValue("nick", "");
      }}
      label={NICK_LABEL}
      placeholder={NICK_PLACEHOLDER}
      maxLength={NICK_MAX_LENGTH}
    />
  );
}
