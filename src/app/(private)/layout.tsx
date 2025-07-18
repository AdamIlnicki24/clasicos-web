import { ContentContainer } from "@/components/containers/ContentContainer/ContentContainer";
import { AuthProvider } from "@/context/AuthProvider";
import { ReactNode } from "react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <AuthProvider type="private">
      <ContentContainer>{children}</ContentContainer>
    </AuthProvider>
  );
}
