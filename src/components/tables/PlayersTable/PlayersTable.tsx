import { EditButton } from "@/components/buttons/EditButton/EditButton";
import { Heading } from "@/components/headings/Heading/Heading";
import { UpdatePlayerModal } from "@/components/modals/UpdatePlayerModal/UpdatePlayerModal";
import { PLAYERS_TABLE_ARIA_LABEL } from "@/constants/ariaLabels";
import { PLAYERS_TABLE_HEADING } from "@/constants/headings";
import { Player } from "@/types/player";
import { TableColumns } from "@/types/tableColumns";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

interface PlayersTableProps {
  columns: TableColumns[];
  items: Player[];
}

export function PlayersTable({ columns, items }: PlayersTableProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const {
    onOpen: onUpdateModalOpen,
    isOpen: isUpdateModalOpen,
    onOpenChange: onUpdateModalOpenChange,
  } = useDisclosure();

  const handleUpdatingPlayer = (player: Player) => {
    setSelectedPlayer(player);
    onUpdateModalOpen();
  };

  const renderCell = (item: Player, columnKey: string) => {
    switch (columnKey) {
      case "name":
        return item.name ?? "";

      case "surname":
        return item.surname;

      // TODO: Think about flags
      case "nationality":
        return item.nationality;

      case "position":
        return item.position;

      case "edit":
        return <EditButton onPress={() => handleUpdatingPlayer(item)} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-6 pb-6">
        <Heading HeadingTag="h1" title={PLAYERS_TABLE_HEADING} />
        <Table
          aria-label={PLAYERS_TABLE_ARIA_LABEL}
          className="text-defaultBlack"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          {/* TODO: Think about ?? vs || */}
          <TableBody items={items}>
            {(item) => (
              <TableRow
                className="transition hover:bg-defaultGray/50"
                key={item.uuid}
              >
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey.toString())}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {selectedPlayer && (
        <UpdatePlayerModal
          isOpen={isUpdateModalOpen}
          onOpenChange={onUpdateModalOpenChange}
          player={selectedPlayer}
        />
      )}
    </>
  );
}
