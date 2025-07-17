import { CLICK_HERE_BUTTON_LABEL } from "@/constants/buttonLabels";
import { SUGGEST_ADDING_PLAYER } from "@/constants/texts";
import { Link, LinkProps } from "@heroui/react";

export function SuggestAddingPlayerButton({
  ...properties
}: LinkProps) {
  return (
    <div className="px-2 pb-4 pt-2 text-center text-[1.2rem] lg:pb-8 lg:pt-0 lg:text-[1.5rem]">
      <Link
        className="text-[1.2rem] text-linkColor lg:text-[1.5rem]"
        as="button"
        {...properties}
      >
        {CLICK_HERE_BUTTON_LABEL}
      </Link>
      {SUGGEST_ADDING_PLAYER}
    </div>
  );
}
