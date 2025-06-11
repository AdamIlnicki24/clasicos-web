import { USER_CONTEXT_ERROR_MESSAGE } from "@/constants/errorMessages";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    if (process.env.NODE_ENV === "development") {
      throw new Error(USER_CONTEXT_ERROR_MESSAGE);
    }
  }
  return context;
};
