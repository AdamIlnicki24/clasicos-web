import { Link, LinkProps } from "@heroui/react";

interface FooterLinkProps extends LinkProps {
  title: string;
}

export function FooterLink({ title, ...properties }: FooterLinkProps) {
  return (
    <Link
      className="text-[0.9rem] lg:text-[1.2rem] font-bold text-defaultWhite"
      {...properties}
    >
      {title}
    </Link>
  );
}
