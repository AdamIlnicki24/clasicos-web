import {
  CLOSE_MENU_ARIA_LABEL,
  OPEN_MENU_ARIA_LABEL,
} from "@/constants/ariaLabels";
import { publicNavItems } from "@/constants/menuItems";
import {
  FORUM_TITLE,
  HOME_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  LOG_IN_TITLE,
  LOG_OUT_TITLE,
} from "@/constants/titles";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL,
  LOG_IN_URL,
} from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import {
    Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useContext, useState } from "react";
import { NavLink } from "../NavLink/NavLink";
import { useUser } from "@/hooks/context/useUser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LOG_OUT_ERROR_TOAST, LOG_OUT_SUCCESS_TOAST } from "@/constants/toasts";

export function AdminNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

  const { user, logOut } = useUser();

  const router = useRouter();

  //   const { src, alt } = LOGO_ICON;

  const handleLogout = () => {
    try {
      logOut();

      toast.success(LOG_OUT_SUCCESS_TOAST);

      router.replace(HOME_URL);
    } catch {
      toast.error(LOG_OUT_ERROR_TOAST);
    }
  };

  return (
    <Navbar
      classNames={{
        base: "fixed top-0 bg-primaryColor py-2 lg:py-4 px-2",
        menu: "bg-primaryColor pt-10 w-screen overflow-hidden z-50",
        item: "",
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
          onClick={() => {
            isMobile && isMenuOpen && setIsMenuOpen(false);
          }}
        >
          {/* <Image src={src} alt={alt} className="h-20 lg:h-20" /> */}
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? CLOSE_MENU_ARIA_LABEL : OPEN_MENU_ARIA_LABEL}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden w-full lg:flex">
        {/* <NavbarItem>
          <NavLink
            title={HOME_TITLE}
            href={HOME_URL}
            onClick={() => {
              isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem> */}
        <NavbarItem>
          <NavLink
            title={KNOWLEDGE_ZONE_TITLE}
            href={KNOWLEDGE_ZONE_URL}
            onClick={() => {
              isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <NavLink
            title={FORUM_TITLE}
            href={FORUM_URL}
            onClick={() => {
              isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <NavLink
            as="button"
            title={LOG_OUT_TITLE}
            onClick={() => {
              handleLogout();
              isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem>
        <NavbarItem><Avatar  /></NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {publicNavItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NavLink
              title={item.title}
              href={item.href}
              onClick={() => {
                isMobile && setIsMenuOpen(false);
              }}
            />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
