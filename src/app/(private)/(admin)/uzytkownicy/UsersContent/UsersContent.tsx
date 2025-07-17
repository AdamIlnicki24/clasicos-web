"use client";

import Loading from "@/app/loading";
import { UsersTable } from "@/components/tables/UsersTable/UsersTable";
import { usersTableColumns } from "@/constants/tables/usersTableColumns";
import { NO_USERS_YET } from "@/constants/texts";
import { useGetUsers } from "@/hooks/api/users/useGetUsers";

export function UsersContent() {
  const { data: items, isLoading } = useGetUsers();

  if (isLoading) return <Loading />;

  return (
    <main className="mx-auto w-[90%]">
      {items?.length ? (
        <UsersTable columns={usersTableColumns} items={items} />
      ) : (
        <div className="flex min-h-[80svh] items-center justify-center">
          {NO_USERS_YET}
        </div>
      )}
    </main>
  );
}
