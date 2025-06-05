import { TeamPlayer } from "./teamPlayer";
import { User } from "./user";

export interface Team {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  teamPlayers: TeamPlayer[];
}
