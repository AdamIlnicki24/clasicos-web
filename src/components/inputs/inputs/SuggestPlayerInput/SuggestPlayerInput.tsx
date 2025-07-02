import { useFormikContext } from "formik";
import {
  TextInputProps,
  TextInput,
} from "../../components/TextInput/TextInput";
import { SUGGEST_ADDING_PLAYER_PLACEHOLDER } from "@/constants/placeholders";
import { PLAYER_SUGGESTION_MAX_LENGTH } from "@/constants/lengths";
import { PLAYER_SUGGESTION_LABEL } from "@/constants/labels";

export function SuggestPlayerInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ player: string }>();

  return (
    <TextInput
      onChange={handleChange("player")}
      onBlur={handleBlur("player")}
      value={values.player}
      color={touched.player && !errors.player ? "success" : "default"}
      isInvalid={touched.player && !!errors.player}
      errorMessage={touched.player && errors.player}
      isRequired
      isClearable
      onClear={() => {
        setFieldValue("player", "");
      }}
      label={PLAYER_SUGGESTION_LABEL}
      placeholder={SUGGEST_ADDING_PLAYER_PLACEHOLDER}
      maxLength={PLAYER_SUGGESTION_MAX_LENGTH}
    />
  );
}
