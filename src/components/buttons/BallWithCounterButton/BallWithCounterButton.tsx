import { BallIcon } from "@/components/icons/BallIcon";
import { Button, ButtonProps } from "@heroui/react";

interface BallWithCounterButtonProps extends ButtonProps {
  count: number;
}

export function BallWithCounterButton({
  count,
  ...properties
}: BallWithCounterButtonProps) {
  return (
    <div className="flex gap-x-3">
      <span className="text-[1.15rem] text-defaultGray">Polecają:</span>
      <Button
        variant="light"
        size="sm"
        isIconOnly
        className="pointer-events-auto relative"
        {...properties}
      >
        <BallIcon className="pointer-events-none opacity-25" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[1.25rem] font-bold text-defaultWhite">
          {count}
        </span>
      </Button>
    </div>
  );
}
