import { Button } from "@/components/buttons/Button/Button";
import { EditButton } from "@/components/buttons/EditButton/EditButton";
import { Heading } from "@/components/headings/Heading/Heading";
import { CreatePlayerModal } from "@/components/modals/CreatePlayerModal/CreatePlayerModal";
import { UpdatePlayerModal } from "@/components/modals/UpdatePlayerModal/UpdatePlayerModal";
import { PLAYERS_TABLE_ARIA_LABEL } from "@/constants/ariaLabels";
import { CREATE_PLAYER_BUTTON_LABEL } from "@/constants/buttonLabels";
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
    onOpen: onCreateModalOpen,
    isOpen: isCreateModalOpen,
    onOpenChange: onCreateModalOpenChange,
  } = useDisclosure();
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
      <div className="flex justify-end pb-6 pe-4 pt-8 lg:pb-0 lg:pe-12">
        <Button
          title={CREATE_PLAYER_BUTTON_LABEL}
          onPress={onCreateModalOpen}
        />
      </div>
      <div className="flex flex-col items-center gap-y-6">
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
      <CreatePlayerModal
        isOpen={isCreateModalOpen}
        onOpenChange={onCreateModalOpenChange}
      />
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
