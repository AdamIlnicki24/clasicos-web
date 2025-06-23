import { RoleProvider } from "@/context/RoleProvider";
import { ReactNode } from "react";

export default function VisitorLayout({ children }: { children: ReactNode }) {
  // TODO: Think about usage of the role below
  return <RoleProvider role="Visitor">{children}</RoleProvider>;
}
