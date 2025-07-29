"use client";

import {
  adminNavItems,
  publicNavItems,
  visitorNavItems,
} from "@/constants/menuItems";
import { useUser } from "@/hooks/context/useUser";
import { Spinner } from "@heroui/react";
import { NavContent } from "../NavContent/NavContent";

export function Nav() {
  const { user, isUserLoading, logOut } = useUser();

  return isUserLoading ? (
    <div className="flex justify-end">
      <Spinner size="sm" color="default" />
    </div>
  ) : !user ? (
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