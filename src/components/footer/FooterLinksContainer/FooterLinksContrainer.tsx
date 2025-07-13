import { ReactNode } from "react";

interface FooterLinksContainerProps {
  children: ReactNode;
}

export function FooterLinksContainer({ children }: FooterLinksContainerProps) {
  return <div className="flex flex-col gap-y-2 items-start">{children}</div>;
}
