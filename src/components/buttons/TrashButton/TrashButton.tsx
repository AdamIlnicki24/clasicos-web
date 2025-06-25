import { Button, ButtonProps } from "@heroui/react";
import { TrashIcon } from "@/components/icons/TrashIcon";

export function TrashButton({ ...properties }: ButtonProps) {
  return (
    <Button
      variant="light"
      size="sm"
      isIconOnly
      className="pointer-events-auto"
      {...properties}
    >
      <TrashIcon className="pointer-events-none text-defaultRed" />
    </Button>
  );
}
