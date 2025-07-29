import { colors } from "@/constants/colors";
import { Link, LinkProps } from "@heroui/react";
import Chevron from "@/assets/icons/chevron.svg";
import { MouseEvent } from "react";

interface ScrollLinkProps extends LinkProps {
  rotated?: boolean;
}

export function ScrollLink({ rotated, ...properties }: ScrollLinkProps) {
  const handleUpClick = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      className="fixed bottom-8 end-8 h-12 w-12 rounded-full border-4 border-secondaryColor p-2"
      onClick={rotated ? handleUpClick : undefined}
      {...properties}
    >
      <Chevron
        color={colors.defaultWhite}
        className={`transition-transform duration-300 ${rotated ? "rotate-180" : "rotate-0"}`}
      />
    </Link>
  );
}
