"use client";

import {
  adminNavItems,
  publicNavItems,
  visitorNavItems,
} from "@/constants/menuItems";
import { useUser } from "@/hooks/context/useUser";
import { NavContent } from "../NavContent/NavContent";

export function Nav() {
  const { user, isUserLoading, logOut } = useUser();

  if (!user) return <NavContent navItems={publicNavItems} />;

  if (user.role === "Admin") {
    return (
      <NavContent
        navItems={adminNavItems}
        showProfile
        showLogout
        user={user}
        isUserLoading={isUserLoading}
        logOut={logOut}
      />
    );
  }

  return (
    <NavContent
      navItems={visitorNavItems}
      showProfile
      showLogout
      user={user}
      isUserLoading={isUserLoading}
      logOut={logOut}
    />
  );
}
