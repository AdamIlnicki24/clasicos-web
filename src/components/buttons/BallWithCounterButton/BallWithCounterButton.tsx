import { BallIcon } from "@/components/icons/BallIcon";
import { RECOMMENDED_BY } from "@/constants/texts";
import { LOG_IN_TO_RECOMMEND_COMMENT_TOOLTIP } from "@/constants/tooltips";
import { User } from "@/types/user";
import { Button, ButtonProps, Tooltip } from "@heroui/react";

interface BallWithCounterButtonProps extends ButtonProps {
  count: number;
  hasRecommended: boolean;
  user?: User;
}

export function BallWithCounterButton({
  count,
  hasRecommended,
  user,
  ...properties
}: BallWithCounterButtonProps) {
  const button = (
    <div className="flex gap-x-3">
      <span className="text-[1.15rem] text-defaultGray">{RECOMMENDED_BY}</span>
      <Button
        variant="light"
        size="sm"
        isIconOnly
        isDisabled={!user}
        className="pointer-events-auto relative"
        {...properties}
      >
        {/* TODO: Improve styles depending on hasRecommended prop */}
        {/* TODO: Think about adding isPending */}
        <BallIcon
          className={`pointer-events-none ${hasRecommended ? "opacity-85" : "opacity-25"}`}
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[1.25rem] font-bold text-defaultWhite">
          {count}
        </span>
      </Button>
    </div>
  );

  return user ? (
    button
  ) : (
    <Tooltip
      content={LOG_IN_TO_RECOMMEND_COMMENT_TOOLTIP}
      color="warning"
      showArrow
    >
      {button}
    </Tooltip>
  );
}
