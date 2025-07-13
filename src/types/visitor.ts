import { User } from "./user";

export interface Visitor {
  uuid: string;
  nick?: string;
  favoriteClub?: string;
  favoriteFootballer?: string;
  bannedAt?: string;
  user: User;
}
