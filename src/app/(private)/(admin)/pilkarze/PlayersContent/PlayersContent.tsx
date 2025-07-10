"use client";

import { PlayersTable } from "@/components/tables/PlayersTable/PlayersTable";
import { playersTableColumns } from "@/constants/tables/playersTableColumns";
import { useGetPlayers } from "@/hooks/api/players/useGetPlayers";

export function PlayersContent() {
  const { data: items } = useGetPlayers();

  return (
    <div className="mx-auto w-[90%]">
      {items ? (
        <PlayersTable columns={playersTableColumns} items={items} />
      ) : (
        <div>Nie ma jeszcze żadnych piłkarzy</div>
      )}
    </div>
  );
}
