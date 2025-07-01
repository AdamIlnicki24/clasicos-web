import { UsersTableColumns } from "@/types/usersTableColumns";

export const usersTableColumns: UsersTableColumns[] = [
  { key: "email", label: "Email" },
  { key: "createdAt", label: "Data dołączenia" },
  { key: "nick", label: "Nick" },
  { key: "favoriteClub", label: "Ulubiony klub" },
  { key: "favoriteFootballer", label: "Ulubiony piłkarz" },
  { key: "banned", label: "Status" },
];
