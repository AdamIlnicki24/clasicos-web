import {
  CLOSE_MENU_ARIA_LABEL,
  OPEN_MENU_ARIA_LABEL,
} from "@/constants/ariaLabels";
import { logo } from "@/constants/images";
import { publicNavItems } from "@/constants/menuItems";
import {
  FORUM_TITLE,
  KNOWLEDGE_ZONE_TITLE,
  LOG_IN_TITLE
} from "@/constants/titles";
import {
  FORUM_URL,
  HOME_URL,
  KNOWLEDGE_ZONE_URL,
  LOG_IN_URL,
} from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import {
  Image,
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

export function PublicNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

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
          onClick={() => {
            isMobile && isMenuOpen && setIsMenuOpen(false);
          }}
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
            title={LOG_IN_TITLE}
            href={LOG_IN_URL}
            onClick={() => {
              isMobile && setIsMenuOpen(false);
            }}
          />
        </NavbarItem>
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
