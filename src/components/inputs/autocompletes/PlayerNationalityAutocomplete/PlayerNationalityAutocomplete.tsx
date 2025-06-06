import { PLAYER_NATIONALITY_LABEL } from "@/constants/labels";
import { PLAYER_NATIONALITY_PLACEHOLDER } from "@/constants/placeholders";
import { Nationality } from "@/types/nationality";
import { getFlagUrl, nationalitiesList } from "@/utils/nationalities";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
  Image,
} from "@heroui/react";
import { useFormikContext } from "formik";
import * as nationalities from "i18n-iso-countries";
import pl from "i18n-iso-countries/langs/pl.json";

interface PlayerNationalityAutocompleteProps
  extends Omit<AutocompleteProps, "children"> {}

// TODO: Think about extracting line below
nationalities.registerLocale(pl);

export function PlayerNationalityAutocomplete({}: PlayerNationalityAutocompleteProps) {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext<{ nationality: string }>();

  const nationalitiesInPolish: Nationality[] = nationalitiesList
    .map((nationality) => ({
      code: nationality.code,
      name: nationalities.getName(nationality.code, "pl") || nationality.name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Autocomplete
      value={values.nationality}
      onBlur={handleBlur("nationality")}
      isInvalid={touched.nationality && !!errors.nationality}
      color={touched.nationality && !errors.nationality ? "success" : "default"}
      errorMessage={touched.nationality && errors.nationality}
      label={PLAYER_NATIONALITY_LABEL}
      placeholder={PLAYER_NATIONALITY_PLACEHOLDER}
      isRequired
      isClearable
      allowsCustomValue
      defaultItems={nationalitiesInPolish}
      onSelectionChange={(key) => {
        const selectedCode = key as string;
        handleChange("nationality")(selectedCode);
      }}
      onInputChange={(value) => {
        if (value === "") {
          handleChange("nationality")("");
        }
      }}
      startContent={
        <Image
          alt={values.nationality}
          src={values.nationality ? getFlagUrl(values.nationality) : ""}
          className="w-10 rounded-md"
        />
      }
    >
      {(item: Nationality) => (
        <AutocompleteItem
          key={item.code}
          textValue={item.name}
          startContent={
            <Image
              alt={item.name}
              src={getFlagUrl(item.code)}
              className="w-8 rounded-md"
            />
          }
        >
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
