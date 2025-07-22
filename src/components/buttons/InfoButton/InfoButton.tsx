import { InfoIcon } from "@/components/icons/InfoIcon";
import { Button, ButtonProps } from "@heroui/react";

export function InfoButton({ ...properties }: ButtonProps) {
  return (
    <Button
      variant="light"
      size="sm"
      isIconOnly
      className="text-defaultWhite pointer-events-auto"
      {...properties}
    >
      <InfoIcon className="pointer-events-none" />
    </Button>
  );
}
