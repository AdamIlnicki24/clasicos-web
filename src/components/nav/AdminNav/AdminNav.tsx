import {
  CLOSE_MENU_ARIA_LABEL,
  OPEN_MENU_ARIA_LABEL,
} from "@/constants/ariaLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { adminNavItems } from "@/constants/menuItems";
import {
  FORUM_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  LOG_OUT_TITLE,
  PLAYERS_TITLE,
  USERS_TITLE,
} from "@/constants/titles";
import { LOG_OUT_ERROR_TOAST, LOG_OUT_SUCCESS_TOAST } from "@/constants/toasts";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL,
  PLAYERS_URL,
  PROFILE_URL,
  USERS_URL,
} from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import { useUser } from "@/hooks/context/useUser";
import {
  Avatar,
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
  Tooltip,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "../NavLink/NavLink";
import { MY_PROFILE_TOOLTIP } from "@/constants/tooltips";
import { logo } from "@/constants/images";

export function AdminNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

  const { user, logOut, isUserLoading } = useUser();

  const router = useRouter();

  const handleLogout = () => {
    try {
      logOut();

      toast.success(LOG_OUT_SUCCESS_TOAST);

      router.replace(HOME_URL);
    } catch {
      toast.error(LOG_OUT_ERROR_TOAST);
    }
  };

  if (!user) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  return (
    <Navbar
      classNames={{
        base: "fixed top-0 bg-defaultNavy py-2 lg:py-4 px-2",
        menu: "bg-defaultNavy pt-10 w-screen overflow-hidden z-50",
      }}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
    >
      <NavbarBrand className="flex-start h-full">
        <Link
          href={HOME_URL}
          className="block w-[10rem] lg:w-[15rem]"
          onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
        >
          <Image src={logo.src} alt={logo.alt} className="h-16" />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? CLOSE_MENU_ARIA_LABEL : OPEN_MENU_ARIA_LABEL}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden w-full lg:flex">
        <NavbarItem>
          {isUserLoading ? (
            <Spinner size="sm" />
          ) : (
            <Tooltip
              content={MY_PROFILE_TOOLTIP}
              showArrow
              color="default"
              className="text-defaultBlack"
            >
              <Button
                onPress={() => router.push(`${PROFILE_URL}/${user.uuid}`)}
                size="sm"
                className="rounded-3xl"
              >
                <Avatar size="sm" />
              </Button>
            </Tooltip>
          )}
        </NavbarItem>
        <NavbarItem>
          <NavLink
            title={KNOWLEDGE_ZONE_TITLE}
            href={KNOWLEDGE_ZONE_URL}
            onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
          />
        </NavbarItem>
        <NavbarItem>
          <NavLink
            title={FORUM_TITLE}
            href={FORUM_URL}
            onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
          />
        </NavbarItem>
        <NavbarItem>
          <NavLink
            title={USERS_TITLE}
            href={USERS_URL}
            onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
          />
        </NavbarItem>
        <NavbarItem>
          <NavLink
            title={PLAYERS_TITLE}
            href={PLAYERS_URL}
            onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
          />
        </NavbarItem>

        <NavbarItem>
          <NavLink
            href={HOME_URL}
            title={LOG_OUT_TITLE}
            onClick={() => {
              handleLogout();
              return isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {adminNavItems.map((item) => {
          console.log("Admin nav items:", adminNavItems);

          return (
            <NavbarMenuItem key={item.href}>
              <NavLink
                title={item.title}
                href={
                  item.href === PROFILE_URL
                    ? `${PROFILE_URL}/${user.uuid}`
                    : item.href
                }
                onClick={() => isMobile && setIsMenuOpen(false)}
              />
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
