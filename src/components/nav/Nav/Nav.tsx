"use client";

import {
  adminNavItems,
  publicNavItems,
  visitorNavItems,
} from "@/constants/menuItems";
import { useAuth } from "@/hooks/auth/useAuth";
import { useUser } from "@/hooks/context/useUser";
import { NavContent } from "../NavContent/NavContent";

export function Nav() {
  const { user, isUserLoading, logOut } = useUser();
  const { isPending } = useAuth();

  return !user ? (
    <NavContent navItems={publicNavItems} />
  ) : (
    <NavContent
      navItems={user.role === "Visitor" ? visitorNavItems : adminNavItems}
      showProfile
      showLogout
      user={user}
      logOut={logOut}
      isUserLoading={isUserLoading || isPending}
    />
  );
}
