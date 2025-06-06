import { PLAYER_SURNAME_MAX_LENGTH } from "@/constants/lengths";
import { PLAYER_SURNAME_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { PLAYER_SURNAME_LABEL } from "@/constants/labels";

export function PlayerSurnameInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ playerSurname: string }>();

  return (
    <TextInput
      type="playerSurname"
      onChange={handleChange("playerSurname")}
      onBlur={handleBlur("playerSurname")}
      value={values.playerSurname}
      color={touched.playerSurname && !errors.playerSurname ? "success" : "default"}
      isInvalid={touched.playerSurname && !!errors.playerSurname}
      errorMessage={touched.playerSurname && errors.playerSurname}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("playerSurname", "");
      }}
      label={PLAYER_SURNAME_LABEL}
      placeholder={PLAYER_SURNAME_PLACEHOLDER}
      maxLength={PLAYER_SURNAME_MAX_LENGTH}
    />
  );
}
