"use client";

import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import { AuthProvider } from "@/context/AuthProvider";
import { useUser } from "@/hooks/context/useUser";
import { ReactNode } from "react";
import Loading from "../loading";
import { AdminNav } from "@/components/nav/AdminNav/AdminNav";
import { VisitorNav } from "@/components/nav/VisitorNav/VisitorNav";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) return <Loading />;

  const Nav = user?.role === "Admin" ? AdminNav : VisitorNav;

  return (
    <AuthProvider type="private">
      <ContentContainer>{children}</ContentContainer>
    </AuthProvider>
  );
}
