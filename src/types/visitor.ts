import { User } from "./user";

export interface Visitor {
  uuid: string;
  // TODO: Move nick to Visitor model in API and mark it as optional
  nick?: string;
  favoriteClub?: string;
  favoriteFootballer?: string;
  bannedAt?: string;
  user: User;
}
