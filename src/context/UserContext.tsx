"use client";

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
  const { data, isLoading, isError, isFetching } = useGetMe();
  const { isLoggedIn } = useAuth();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isLoading && isLoggedIn && data) setUser(data);

    if (!isLoggedIn) setUser(null);
  }, [data, isLoading, isLoggedIn]);

  const logOut = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{
        user,
        logOut,
        isUserLoading: isLoading || isFetching,
        isError: !!isError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
