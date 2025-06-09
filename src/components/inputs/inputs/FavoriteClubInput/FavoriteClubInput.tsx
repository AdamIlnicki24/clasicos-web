import { FAVORITE_CLUB_MAX_LENGTH } from "@/constants/lengths";
import { FAVORITE_CLUB_PLACEHOLDER } from "@/constants/placeholders";
import { useFormikContext } from "formik";
import { TextInputProps, TextInput } from "../../components/TextInput/TextInput";
import { FAVORITE_CLUB_LABEL } from "@/constants/labels";

export function FavoriteClubInput({}: TextInputProps) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<{ favoriteClub: string }>();

  return (
    <TextInput
      onChange={handleChange("favoriteClub")}
      onBlur={handleBlur("favoriteClub")}
      value={values.favoriteClub}
      color={touched.favoriteClub && !errors.favoriteClub ? "success" : "default"}
      isInvalid={touched.favoriteClub && !!errors.favoriteClub}
      errorMessage={touched.favoriteClub && errors.favoriteClub}
      isClearable
      onClear={() => {
        setFieldValue("favoriteClub", "");
      }}
      label={FAVORITE_CLUB_LABEL}
      placeholder={FAVORITE_CLUB_PLACEHOLDER}
      maxLength={FAVORITE_CLUB_MAX_LENGTH}
    />
  );
}
