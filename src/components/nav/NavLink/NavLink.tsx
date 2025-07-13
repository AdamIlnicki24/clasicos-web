import { LinkProps, Link } from "@heroui/react";

interface NavLinkProps extends LinkProps {
  title: string;
  isActive?: boolean;
}

export function NavLink({ title, isActive, ...properties }: NavLinkProps) {
  return (
    <Link
      {...(isActive ? { underline: "always" } : { underline: "hover" })}
      {...(isActive && { className: "font-bold" })}
      className="w-full justify-center py-2 text-center text-lg font-semibold text-defaultWhite hover:opacity-70 lg:text-[1.2rem]"
      {...properties}
    >
      {title}
    </Link>
  );
}
