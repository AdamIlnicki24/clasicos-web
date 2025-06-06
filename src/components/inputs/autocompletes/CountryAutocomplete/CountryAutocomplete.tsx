import { PLAYER_NATIONALITY_LABEL } from "@/constants/labels";
import { PLAYER_NATIONALITY_PLACEHOLDER } from "@/constants/placeholders";
import { Country } from "@/types/country";
import { countriesList, getCountryFlagUrl } from "@/utils/countries";
import {
    Autocomplete,
    AutocompleteItem,
    AutocompleteProps,
    Image
} from "@heroui/react";
import { useFormikContext } from "formik";
import * as countries from "i18n-iso-countries";
import pl from "i18n-iso-countries/langs/pl.json";

// TODO: Think about standardizing naming

// TODO: Think about extracting line below
countries.registerLocale(pl);

export function CountryAutocomplete({}: AutocompleteProps) {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext<{ country: string }>();

  const countriesInPolish: Country[] = countriesList
    .map((country) => ({
      code: country.code,
      name: countries.getName(country.code, "pl") || country.name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Autocomplete
      value={values.country}
      onBlur={handleBlur("country")}
      isInvalid={touched.country && !!errors.country}
      color={touched.country && !errors.country ? "success" : "default"}
      errorMessage={touched.country && errors.country}
      label={PLAYER_NATIONALITY_LABEL}
      placeholder={PLAYER_NATIONALITY_PLACEHOLDER}
      isRequired
      isClearable
      allowsCustomValue
      defaultItems={countriesInPolish}
      onSelectionChange={(key) => {
        const selectedCode = key as string;
        handleChange("country")(selectedCode);
      }}
      onInputChange={(value) => {
        if (value === "") {
          handleChange("country")("");
        }
      }}
      startContent={
        <Image
          alt={values.country}
          src={values.country ? getCountryFlagUrl(values.country) : ""}
          className="w-10 rounded-md"
        />
      }
    >
      {(item: Country) => (
        <AutocompleteItem
          key={item.code}
          textValue={item.name}
          startContent={
            <Image
              alt={item.name}
              src={getCountryFlagUrl(item.code)}
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
