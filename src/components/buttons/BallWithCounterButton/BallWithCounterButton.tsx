import { BallIcon } from "@/components/icons/BallIcon";
import { RECOMMENDED_BY } from "@/constants/texts";
import { LOG_IN_TO_RECOMMEND_COMMENT_TOOLTIP, RECOMMENDATION_CANNOT_BE_CREATED_TOOLTIP } from "@/constants/tooltips";
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
  const isBanned = Boolean(user?.visitor.bannedAt);
  const isDisabled = !user || isBanned;

  const button = (
    <div className="flex items-center gap-x-3">
      <span className="text-[1.15rem] text-defaultGray">{RECOMMENDED_BY}</span>
      <Button
        variant="light"
        size="sm"
        isIconOnly
        isDisabled={isDisabled}
        className={`${hasRecommended ? "border-2 border-primaryColor" : ""} ${isDisabled ? "cursor-not-allowed" : ""} rounded-2xl`}
        {...properties}
      >
        <BallIcon className="pointer-events-none opacity-25" />
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-[1.25rem] font-extrabold text-defaultWhite"
        >
          {count}
        </span>
      </Button>
    </div>
  );

  return isDisabled ? (
    <Tooltip
      content={
        !user
          ? LOG_IN_TO_RECOMMEND_COMMENT_TOOLTIP
          : RECOMMENDATION_CANNOT_BE_CREATED_TOOLTIP
      }
      color={!user ? "warning" : "danger"}
      showArrow
    >
      {button}
    </Tooltip>
  ) : (
    button
  );
}
