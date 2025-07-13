import { RoleProvider } from "@/context/RoleProvider";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <RoleProvider role="Admin">{children}</RoleProvider>;
}
