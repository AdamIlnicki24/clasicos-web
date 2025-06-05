import { CommentWithCount } from "./comment";
import { Recommendation } from "./recommendation";
import { Role } from "./role";
import { Team } from "./team";
import { Visitor } from "./visitor";

export interface User {
  uuid: string;
  firebaseId: string;
  email: string;
  nick: string;
  role: Role;
  createdAt: string;
  acceptedPrivacyPolicyAt?: string;
  updatedAt: string;
  visitor: Visitor;
  comments?: CommentWithCount[];
  recommendations?: Recommendation[];
  team?: Team;
}
