import { Country } from "@/types/country";
import { countries, TCountries } from "countries-list";

export const countriesList: Country[] = Object.keys(countries).map((key) => {
  const { name } = countries[key as keyof TCountries];

  return {
    name,
    code: key,
  };
});

export const getCountryFlagUrl = (code: string) =>
  `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`;
