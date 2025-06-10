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
    <Button className="relative inline-block" isIconOnly {...properties}>
      <Ball />
      <span className="text-defaultWhite pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.75rem] font-bold">
        {count}
      </span>
    </Button>
  );
}
