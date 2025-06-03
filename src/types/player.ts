import { Position } from "./position";

export interface Player {
  uuid: string;
  name?: string;
  surname: string;
  nationality: string;
  position: Position;
  createdAt: string;
  updatedAt?: string;
}
