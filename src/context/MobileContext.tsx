"use client";

import Loading from "@/app/loading";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MobileContext = createContext<boolean | undefined>(undefined);

export function MobileProvider({ children }: { children: ReactNode }) {
  const isMobileQuery = useMediaQuery({ query: "(max-width: 1023px)" });
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile === null) return <Loading />;

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}
