import { BallIcon } from "@/components/icons/BallIcon";
import { RECOMMENDED_BY } from "@/constants/texts";
import { Button, ButtonProps } from "@heroui/react";

interface BallWithCounterButtonProps extends ButtonProps {
  count: number;
  hasRecommended: boolean;
}

export function BallWithCounterButton({
  count,
  hasRecommended,
  ...properties
}: BallWithCounterButtonProps) {
  return (
    <div className="flex gap-x-3">
      <span className="text-[1.15rem] text-defaultGray">{RECOMMENDED_BY}</span>
      <Button
        variant="light"
        size="sm"
        isIconOnly
        className="pointer-events-auto relative"
        {...properties}
      >
        {/* TODO: Improve styles depending on hasRecommended prop */}
        <BallIcon
          className={`pointer-events-none ${hasRecommended ? "opacity-85" : "opacity-25"}`}
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[1.25rem] font-bold text-defaultWhite">
          {count}
        </span>
      </Button>
    </div>
  );
}
