import {
  CLOSE_MENU_ARIA_LABEL,
  OPEN_MENU_ARIA_LABEL,
} from "@/constants/ariaLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { logo } from "@/constants/images";
import {
  LOG_OUT_TITLE,
  PROFILE_TITLE
} from "@/constants/titles";
import { LOG_OUT_ERROR_TOAST, LOG_OUT_SUCCESS_TOAST } from "@/constants/toasts";
import { MY_PROFILE_TOOLTIP } from "@/constants/tooltips";
import {
  HOME_URL,
  PROFILE_URL
} from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import { NavItems } from "@/types/navItems";
import { User } from "@/types/user";
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

interface NavContentProps {
  navItems: NavItems[];
  showProfile?: boolean;
  showLogout?: boolean;
  user?: User;
  isUserLoading?: boolean;
  logOut?: () => void;
}

export function NavContent({
  navItems,
  showProfile,
  showLogout,
  user,
  isUserLoading,
  logOut,
}: NavContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

  const router = useRouter();

  const handleLogout = () => {
    try {
      if (logOut) logOut();

      router.replace(HOME_URL);

      toast.success(LOG_OUT_SUCCESS_TOAST);
    } catch {
      toast.error(LOG_OUT_ERROR_TOAST);
    }
  };

  if (isUserLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if ((showProfile || showLogout) && !isUserLoading && !user) {
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
          <Image src={logo.src} alt={logo.alt} className="h-10 lg:h-16" />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? CLOSE_MENU_ARIA_LABEL : OPEN_MENU_ARIA_LABEL}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden w-full lg:flex">
        {showProfile && (
          <NavbarItem>
              <Tooltip
                content={MY_PROFILE_TOOLTIP}
                showArrow
                color="default"
                className="text-defaultBlack"
              >
                <Button
                  onPress={() => router.push(`${PROFILE_URL}/${user?.uuid}`)}
                  size="sm"
                  className="rounded-3xl"
                >
                  <Avatar size="sm" />
                </Button>
              </Tooltip>
          </NavbarItem>
        )}
        {navItems.filter(({title})=>title !== PROFILE_TITLE).map(({ title, href }) => (
          <NavbarItem key={title}>
            <NavLink
              title={title}
              href={href}
              onClick={() => isMobile && isMenuOpen && setIsMenuOpen(false)}
            />
          </NavbarItem>
        ))}
        {showLogout && (
          <NavbarItem>
            <NavLink
              title={LOG_OUT_TITLE}
              onClick={() => {
                handleLogout();
                return isMobile && setIsMenuOpen(false);
              }}
            />
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {navItems.map(({ title, href }) => (
          <NavbarMenuItem key={title}>
            <NavLink
              title={title}
              href={
                title === PROFILE_TITLE ? `${PROFILE_URL}/${user?.uuid}` : href
              }
              onClick={() => {
                if (title === LOG_OUT_TITLE) handleLogout();
                return isMobile && setIsMenuOpen(false);
              }}
            />
          </NavbarMenuItem>
        ))}
        {showLogout && (
          <NavbarMenuItem>
            <NavLink
              title={LOG_OUT_TITLE}
              onClick={() => {
                handleLogout();
                return isMobile && setIsMenuOpen(false);
              }}
            />
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
