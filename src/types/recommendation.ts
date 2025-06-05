import { Comment } from "./comment";
import { User } from "./user";

export interface Recommendation {
  uuid: string;
  createdAt: string;
  user: User;
  comment: Comment;
}
