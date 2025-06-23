"use client";

import { useUser } from "@/hooks/context/useUser";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";
import FigoArticle from "./strefa-wiedzy/components/articles/FigoArticle";

export default function Page() {
  const { logOut } = useUser();

  const handleLogout = async () => {
    try {
      logOut();
      toast.success("Wylogowano poprawnie.");
    } catch {
      toast.error("Nie udało się poprawnie wylogować.");
    }
  };

  return (
    <>
      <h1>Strona główna dla wszystkich</h1>
      <FigoArticle />
      <Button onPress={handleLogout}>Wyloguj</Button>
    </>
  );
}
