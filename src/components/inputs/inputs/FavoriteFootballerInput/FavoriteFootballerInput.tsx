import { FAVORITE_FOOTBALLER_MAX_LENGTH } from "@/constants/lengths";
import { FAVORITE_FOOTBALLER_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { FAVORITE_FOOTBALLER_LABEL } from "@/constants/labels";

export function FavoriteFootballerInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ favoriteFootballer: string }>();

  return (
    <TextInput
      onChange={handleChange("favoriteFootballer")}
      onBlur={handleBlur("favoriteFootballer")}
      value={values.favoriteFootballer}
      isInvalid={touched.favoriteFootballer && !!errors.favoriteFootballer}
      errorMessage={touched.favoriteFootballer && errors.favoriteFootballer}
      isClearable
      onClear={() => {
        setFieldValue("favoriteFootballer", "");
      }}
      label={FAVORITE_FOOTBALLER_LABEL}
      placeholder={FAVORITE_FOOTBALLER_PLACEHOLDER}
      maxLength={FAVORITE_FOOTBALLER_MAX_LENGTH}
    />
  );
}
