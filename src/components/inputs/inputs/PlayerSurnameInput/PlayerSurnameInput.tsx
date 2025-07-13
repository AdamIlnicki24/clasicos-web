import { PLAYER_SURNAME_MAX_LENGTH } from "@/constants/lengths";
import { PLAYER_SURNAME_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { PLAYER_SURNAME_LABEL } from "@/constants/labels";

export function PlayerSurnameInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ surname: string }>();

  return (
    <TextInput
      onChange={handleChange("surname")}
      onBlur={handleBlur("surname")}
      value={values.surname}
      isInvalid={touched.surname && !!errors.surname}
      errorMessage={touched.surname && errors.surname}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("surname", "");
      }}
      label={PLAYER_SURNAME_LABEL}
      placeholder={PLAYER_SURNAME_PLACEHOLDER}
      maxLength={PLAYER_SURNAME_MAX_LENGTH}
    />
  );
}
