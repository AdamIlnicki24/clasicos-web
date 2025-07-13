import { User } from "./user";

export interface Comment {
  uuid: string;
  content: string;
  resourceFriendlyLink: string;
  createdAt: string;
  user: User;
}

export interface CommentWithCount extends Comment {
  _count: { recommendations: number };
}
