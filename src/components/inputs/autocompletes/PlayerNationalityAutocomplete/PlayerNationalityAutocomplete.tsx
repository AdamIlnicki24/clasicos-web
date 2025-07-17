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

// TODO: Think about extracting line below
nationalities.registerLocale(pl);

export function PlayerNationalityAutocomplete({
  ...properties
}: Omit<AutocompleteProps<Nationality>, "children">) {
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
      classNames={{
        base: "text-defaultBlack",
        clearButton: "",
        endContentWrapper: "",
        listbox: "text-defaultBlack",
        listboxWrapper: "",
        popoverContent: "text-defaultBlack",
        selectorButton: "",
      }}
      value={values.nationality}
      onBlur={handleBlur("nationality")}
      isInvalid={touched.nationality && !!errors.nationality}
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
        values.nationality ? (
          <Image
            alt={values.nationality}
            src={getFlagUrl(values.nationality)}
            className="w-7 rounded-md"
          />
        ) : null
      }
      {...properties}
    >
      {(item: Nationality) => (
        <AutocompleteItem
          key={item.code}
          textValue={item.name}
          startContent={
            <Image
              alt={item.name}
              src={getFlagUrl(item.code)}
              className="w-7 rounded-md"
            />
          }
        >
          {item.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
