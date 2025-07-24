"use client";

import {
  adminNavItems,
  publicNavItems,
  visitorNavItems,
} from "@/constants/menuItems";
import { useUser } from "@/hooks/context/useUser";
import { NavContent } from "../NavContent/NavContent";
import { Spinner } from "@heroui/react";

export function Nav() {
  const { user, isUserLoading, logOut } = useUser();

  return isUserLoading ? (
    <Spinner size="sm" color="default" />
  ) : !user ? (
    <NavContent navItems={publicNavItems} />
  ) : user.role === "Visitor" ? (
    <NavContent
      navItems={visitorNavItems}
      showProfile
      showLogout
      user={user}
      logOut={logOut}
    />
  ) : (
    <NavContent
      navItems={adminNavItems}
      showProfile
      showLogout
      user={user}
      logOut={logOut}
    />
  );
}
