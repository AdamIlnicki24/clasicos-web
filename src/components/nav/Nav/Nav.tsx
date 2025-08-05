"use client";

import {
  adminNavItems,
  publicNavItems,
  visitorNavItems,
} from "@/constants/menuItems";
import { useAuth } from "@/hooks/auth/useAuth";
import { useUser } from "@/hooks/context/useUser";
import { NavContent } from "../NavContent/NavContent";
import { Spinner } from "@heroui/react";

export function Nav() {
  const { user, isUserLoading, logOut } = useUser();
  const { isPending } = useAuth();

  if (isUserLoading || isPending) {
    return (
      <div className="fixed top-0 z-50 flex w-full justify-end bg-defaultNavy p-4">
        <Spinner size="md" color="default" />
      </div>
    );
  }

  return !user ? (
    <NavContent navItems={publicNavItems} />
  ) : (
    <NavContent
      navItems={user.role === "Visitor" ? visitorNavItems : adminNavItems}
      showProfile
      showLogout
      user={user}
      logOut={logOut}
    />
  );
}
