import Ball from "@/assets/icons/ball.svg";
import { Button, ButtonProps } from "@heroui/react";

interface BallWithCounterButtonProps extends ButtonProps {
  count: number;
}

export function BallWithCounterButton({
  count,
  ...properties
}: BallWithCounterButtonProps) {
  return (
    <div className="flex gap-x-4">
      <span className="text-[1.15rem]">Polecają:</span>
      <Button className="relative inline-block" isIconOnly size="sm" {...properties}>
        {/* TODO: Improve icon */}
        {/* <Ball /> */}
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.75rem] font-bold text-defaultWhite">
          {count}
        </span>
      </Button>
    </div>
  );
}
