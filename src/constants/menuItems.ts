import {
  FORUM_TITLE,
  HOME_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  LOG_IN_TITLE,
  LOG_OUT_TITLE,
  PLAYERS_TITLE,
  PROFILE_TITLE,
  USERS_TITLE,
} from "./titles";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL,
  LOG_IN_URL,
  PLAYERS_URL,
  PROFILE_URL,
  USERS_URL,
} from "./urls";

export const publicNavItems = [
  // { title: HOME_TITLE, href: HOME_URL },
  { title: KNOWLEDGE_ZONE_TITLE, href: KNOWLEDGE_ZONE_URL },
  { title: FORUM_TITLE, href: FORUM_URL },
  { title: LOG_IN_TITLE, href: LOG_IN_URL },
];

export const adminNavItems = [
  // { title: HOME_TITLE, href: HOME_URL },
  { title: PROFILE_TITLE, href: PROFILE_URL },
  { title: KNOWLEDGE_ZONE_TITLE, href: KNOWLEDGE_ZONE_URL },
  { title: FORUM_TITLE, href: FORUM_URL },
  { title: USERS_TITLE, href: USERS_URL },
  { title: PLAYERS_TITLE, href: PLAYERS_URL },
  // { title: LOG_OUT_TITLE },
];

export const visitorNavItems = [
  // { title: HOME_TITLE, href: HOME_URL },
  { title: PROFILE_TITLE, href: PROFILE_URL },
  { title: KNOWLEDGE_ZONE_TITLE, href: KNOWLEDGE_ZONE_URL },
  { title: FORUM_TITLE, href: FORUM_URL },
  // { title: LOG_OUT_TITLE },
];
