import {
    DEFENDERS_LENGTH_ERROR_MESSAGE,
    FORWARDS_LENGTH_ERROR_MESSAGE,
    GOALKEEPERS_LENGTH_ERROR_MESSAGE,
    INVALID_UUID_FORMAT,
    MIDFIELDERS_LENGTH_ERROR_MESSAGE,
    REQUIRED,
} from "@/constants/errorMessages";
import {
    DEFENDERS_LENGTH,
    FORWARDS_LENGTH,
    GOALKEEPERS_LENGTH,
    MIDFIELDERS_LENGTH,
} from "@/constants/lengths";
import { array, object, string } from "yup";

export interface CreateTeamFormData {
  goalkeepers: string[];
  defenders: string[];
  midfielders: string[];
  forwards: string[];
}

export const createTeamFormSchema = object({
  goalkeepers: array()
    .of(string().uuid(INVALID_UUID_FORMAT))
    .length(GOALKEEPERS_LENGTH, GOALKEEPERS_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED),

  defenders: array()
    .of(string().uuid(INVALID_UUID_FORMAT))
    .length(DEFENDERS_LENGTH, DEFENDERS_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED),

  midfielders: array()
    .of(string().uuid(INVALID_UUID_FORMAT))
    .length(MIDFIELDERS_LENGTH, MIDFIELDERS_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED),

  forwards: array()
    .of(string().uuid(INVALID_UUID_FORMAT))
    .length(FORWARDS_LENGTH, FORWARDS_LENGTH_ERROR_MESSAGE)
    .required(REQUIRED),
});

export const initialValues: CreateTeamFormData = {
  goalkeepers: [],
  defenders: [],
  midfielders: [],
  forwards: [],
};
