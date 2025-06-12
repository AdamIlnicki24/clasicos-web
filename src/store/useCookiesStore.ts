import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookiesStore {
  isCookiesPopup: boolean;
  setIsCookiesPopup: (value: boolean) => void;
}

export const useCookiesStore = create<CookiesStore>()(
  persist(
    (set) => ({
      isCookiesPopup: true,
      setIsCookiesPopup: (value) => set({ isCookiesPopup: value }),
    }),
    {
      name: "cookies-store",
    }
  )
);
