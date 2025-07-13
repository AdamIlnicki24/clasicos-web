import { TableColumns } from "@/types/tableColumns";

export const usersTableColumns: TableColumns[] = [
  { key: "email", label: "Email" },
  { key: "createdAt", label: "Data dołączenia" },
  { key: "nick", label: "Nick" },
  { key: "favoriteClub", label: "Ulubiony klub" },
  { key: "favoriteFootballer", label: "Ulubiony piłkarz" },
  { key: "banned", label: "Status" },
];
