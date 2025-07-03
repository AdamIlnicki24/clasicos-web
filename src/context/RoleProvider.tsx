"use client";

import Loading from "@/app/loading";
import { USER_CANNOT_BE_LOADED_ERROR_MESSAGE } from "@/constants/errorMessages";
import { PROFILE_URL, USERS_URL } from "@/constants/urls";
import { useUser } from "@/hooks/context/useUser";
import { Role } from "@/types/role";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface RoleProviderProps {
  children: ReactNode;
  role: Role;
}

export function RoleProvider({ children, role }: RoleProviderProps) {
  const { user, isUserLoading, isError } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !isError && user) {
      if (process.env.NODE_ENV === "development") {
        console.log("User:", user);
      }

      const hasRequiredRole = user.role === role;

      // TODO: Fix below
      if (!hasRequiredRole) {
        router.replace(user.role === "Admin" ? USERS_URL : PROFILE_URL);
      }
    }
  }, [user, isUserLoading, isError, role, router]);

  if (isUserLoading) return <Loading />;

  if (isError) return <div>{USER_CANNOT_BE_LOADED_ERROR_MESSAGE}</div>;

  return <>{children}</>;
}
