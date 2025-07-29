"use client";

import Loading from "@/app/loading";
import { Button } from "@/components/buttons/Button/Button";
import { CreatePlayerModal } from "@/components/modals/CreatePlayerModal/CreatePlayerModal";
import { PlayersTable } from "@/components/tables/PlayersTable/PlayersTable";
import { CREATE_PLAYER_BUTTON_LABEL } from "@/constants/buttonLabels";
import { playersTableColumns } from "@/constants/tables/playersTableColumns";
import { NO_PLAYERS_YET } from "@/constants/texts";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";
import { useDisclosure } from "@heroui/react";

export function PlayersContent() {
  const { data: items, isLoading } = useGetPlayers();

  const {
    onOpen: onCreateModalOpen,
    isOpen: isCreateModalOpen,
    onOpenChange: onCreateModalOpenChange,
  } = useDisclosure();

  if (isLoading) return <Loading />;

  return (
    <>
      <main className="flex justify-end pb-6 pe-4 pt-8 lg:pb-0 lg:pe-12">
        <Button
          title={CREATE_PLAYER_BUTTON_LABEL}
          onPress={onCreateModalOpen}
        />
      </main>
      <div className="mx-auto w-[90%]">
        {items?.length ? (
          <PlayersTable columns={playersTableColumns} items={items} />
        ) : (
          <div className="flex min-h-svh items-center justify-center">
            {NO_PLAYERS_YET}
          </div>
        )}
      </div>
      <CreatePlayerModal
        isOpen={isCreateModalOpen}
        onOpenChange={onCreateModalOpenChange}
      />
    </>
  );
}
