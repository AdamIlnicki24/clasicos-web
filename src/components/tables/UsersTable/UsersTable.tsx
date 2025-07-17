import { ActiveUserChip } from "@/components/chips/ActiveUserChip/ActiveUserChip";
import { BannedUserChip } from "@/components/chips/BannedUserChip/BannedUserChip";
import { Heading } from "@/components/headings/Heading/Heading";
import { USERS_TABLE_ARIA_LABEL } from "@/constants/ariaLabels";
import { USERS_TABLE_HEADING } from "@/constants/headings";
import { ENIGMA, NO_INFORMATION } from "@/constants/texts";
import { PROFILE_URL } from "@/constants/urls";
import { User } from "@/types/user";
import { TableColumns } from "@/types/tableColumns";
import { formatDate } from "@/utils/date";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useRouter } from "next/navigation";

interface UsersTableProps {
  columns: TableColumns[];
  items: User[];
}

export function UsersTable({ columns, items }: UsersTableProps) {
  const router = useRouter();

  const renderCell = (item: User, columnKey: string) => {
    switch (columnKey) {
      case "email":
        return item.email;

      case "createdAt":
        return formatDate(item.createdAt);

      case "nick":
        return item.visitor?.nick || ENIGMA;

      case "favoriteClub":
        return item.visitor?.favoriteClub || NO_INFORMATION;

      case "favoriteFootballer":
        return item.visitor?.favoriteFootballer || NO_INFORMATION;

      case "banned":
        return item.visitor?.bannedAt ? <BannedUserChip /> : <ActiveUserChip />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-6 py-6">
      <Heading HeadingTag="h1" title={USERS_TABLE_HEADING} />
      <Table aria-label={USERS_TABLE_ARIA_LABEL} className="text-defaultBlack">
        <TableHeader columns={columns} className="">
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow
              onClick={() => router.push(`${PROFILE_URL}/${item.uuid}`)}
              className="cursor-pointer transition hover:bg-defaultGray/50"
              key={item.uuid}
            >
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
