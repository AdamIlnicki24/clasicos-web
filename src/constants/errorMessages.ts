import {
  DEFENDERS_LENGTH,
  FORWARDS_LENGTH,
  GOALKEEPERS_LENGTH,
  MIDFIELDERS_LENGTH,
} from "./lengths";

export const PAGE_DOES_NOT_EXIST = "Ta strona nie istnieje.";
export const SOMETHING_WENT_WRONG = "Coś poszło nie tak.";

export const EMAIL_ERROR_MESSAGE = "Podany adres e-mail jest nieprawidłowy.";
export const REQUIRED = "To pole jest obowiązkowe.";

export const MAX_LENGTH_ERROR_MESSAGE = "W to pole można wpisać maksymalnie";

export const INVALID_UUID_FORMAT = "Nieprawidłowy format UUID.";

export const GOALKEEPERS_LENGTH_ERROR_MESSAGE = `Musisz wybrać dokładnie ${GOALKEEPERS_LENGTH} bramkarza.`;
export const DEFENDERS_LENGTH_ERROR_MESSAGE = `Musisz wybrać dokładnie ${DEFENDERS_LENGTH} obrońców.`;
export const MIDFIELDERS_LENGTH_ERROR_MESSAGE = `Musisz wybrać dokładnie ${MIDFIELDERS_LENGTH} pomocników.`;
export const FORWARDS_LENGTH_ERROR_MESSAGE = `Musisz wybrać dokładnie ${FORWARDS_LENGTH} napastników.`;

export const USER_CONTEXT_ERROR_MESSAGE =
  "UserContext must be within UserContextProvider";
export const USER_CANNOT_BE_LOADED_ERROR_MESSAGE =
  "Wystąpił błąd podczas ładowania danych użytkownika. Spróbuj ponownie później.";

export const INVALID_EMAIL_ADDRESS_ERROR_MESSAGE =
  "Podany adres e-mail jest nieprawidłowy";
export const EMAIL_HAS_NOT_BEEN_SENT_ERROR_MESSAGE =
  "Nie udało się wysłać maila. Spróbuj ponownie później.";
export const YOU_MUST_BE_LOGGED_IN = "Nie jesteś zalogowany.";
export const TEAM_CANNOT_BE_LOADED_ERROR_MESSAGE =
  "Nie udało się załadować drużyny.";
