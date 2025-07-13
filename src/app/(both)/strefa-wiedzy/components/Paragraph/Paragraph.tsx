import { ReactNode } from "react";

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="py-4 leading-relaxed tracking-wide">{children}</p>;
}
