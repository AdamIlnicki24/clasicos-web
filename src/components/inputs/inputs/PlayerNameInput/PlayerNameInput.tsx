import { PLAYER_NAME_MAX_LENGTH } from "@/constants/lengths";
import { PLAYER_NAME_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { PLAYER_NAME_LABEL } from "@/constants/labels";

export function PlayerNameInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ name: string }>();

  return (
    <TextInput
      onChange={handleChange("name")}
      onBlur={handleBlur("name")}
      value={values.name}
      isInvalid={touched.name && !!errors.name}
      errorMessage={touched.name && errors.name}
      isClearable
      onClear={() => {
        setFieldValue("name", "");
      }}
      label={PLAYER_NAME_LABEL}
      placeholder={PLAYER_NAME_PLACEHOLDER}
      maxLength={PLAYER_NAME_MAX_LENGTH}
    />
  );
}
