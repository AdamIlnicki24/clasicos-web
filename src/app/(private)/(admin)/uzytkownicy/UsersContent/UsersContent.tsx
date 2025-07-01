"use client";

import Loading from "@/app/loading";
import { UsersTable } from "@/components/tables/UsersTable/UsersTable";
import { usersTableColumns } from "@/constants/usersTableColumns";
import { useGetUsers } from "@/hooks/api/users/useGetUsers";

export function UsersContent() {
  const { data: items, isLoading, isError } = useGetUsers();

  if (isLoading) return <Loading />;
  if (isError) return <div>Coś poszło nie tak</div>;

  if (!items) return <div>Nie ma jeszcze żadnych użytkowników</div>;

  return (
    <div className="w-[90%] mx-auto">
      <UsersTable columns={usersTableColumns} items={items} />
    </div>
  );
}
