import { auth } from "@/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

interface AuthState {
  isLoggedIn: boolean;
  isPending: boolean;
  user: User | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    isPending: true,
    user: null,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      setAuthState({ isLoggedIn: !!user, isPending: false, user });

      await queryClient.invalidateQueries({ queryKey: ["getMe"] });
    });

    return () => unregisterAuthObserver();
  }, [queryClient]);

  return { ...authState };
}
