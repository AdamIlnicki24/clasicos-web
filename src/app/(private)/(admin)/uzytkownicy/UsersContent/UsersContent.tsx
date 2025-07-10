"use client";

import { UsersTable } from "@/components/tables/UsersTable/UsersTable";
import { usersTableColumns } from "@/constants/tables/usersTableColumns";
import { useGetUsers } from "@/hooks/api/users/useGetUsers";

export function UsersContent() {
  const { data: items } = useGetUsers();

  // TODO: Move line below to JSX
  if (!items) return <div>Nie ma jeszcze żadnych użytkowników</div>;

  return (
    <div className="mx-auto w-[90%]">
      <UsersTable columns={usersTableColumns} items={items} />
    </div>
  );
}
