"use client";

import Loading from "@/app/loading";
import { auth } from "@/firebase";
import { useGetMe } from "@/hooks/api/users/me/useGetMe";
import { useAuth } from "@/hooks/auth/useAuth";
import { User } from "@/types/user";
import { signOut } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextProps {
  user: User | null;
  logOut: () => void;
  isUserLoading: boolean;
  isError: boolean;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  logOut: () => {},
  isUserLoading: false,
  isError: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, isError } = useGetMe();
  const { isLoggedIn, isPending } = useAuth();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isLoading && isLoggedIn && data) {
      setUser(data);
    }

    if (!isLoggedIn) setUser(null);
  }, [isLoading, isLoggedIn, data]);

  const logOut = () => signOut(auth);

  if (isPending) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logOut,
        isUserLoading: isPending || isLoading,
        isError: !!isError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
