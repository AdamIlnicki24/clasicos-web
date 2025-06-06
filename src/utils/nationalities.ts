import { Nationality } from "@/types/nationality";
import { countries as nationalities, TCountries as NationalitiesType } from "countries-list";

export const nationalitiesList: Nationality[] = Object.keys(nationalities).map((key) => {
  const { name } = nationalities[key as keyof NationalitiesType];

  return {
    name,
    code: key,
  };
});

export const getFlagUrl = (code: string) =>
  `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`;
