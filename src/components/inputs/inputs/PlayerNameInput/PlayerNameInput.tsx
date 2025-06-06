import { PLAYER_NAME_MAX_LENGTH } from "@/constants/lengths";
import { PLAYER_NAME_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { PLAYER_NAME_LABEL } from "@/constants/labels";

export function PlayerNameInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ playerName: string }>();

  return (
    <TextInput
      type="playerName"
      onChange={handleChange("playerName")}
      onBlur={handleBlur("playerName")}
      value={values.playerName}
      color={touched.playerName && !errors.playerName ? "success" : "default"}
      isInvalid={touched.playerName && !!errors.playerName}
      errorMessage={touched.playerName && errors.playerName}
      isClearable
      onClear={() => {
        setFieldValue("playerName", "");
      }}
      label={PLAYER_NAME_LABEL}
      placeholder={PLAYER_NAME_PLACEHOLDER}
      maxLength={PLAYER_NAME_MAX_LENGTH}
    />
  );
}
