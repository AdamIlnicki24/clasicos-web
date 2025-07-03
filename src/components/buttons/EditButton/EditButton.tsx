import { EditIcon } from "@/components/icons/EditIcon";
import { EDIT_TOOLTIP } from "@/constants/tooltips";
import { Button, ButtonProps, Tooltip } from "@heroui/react";

export function EditButton({ ...properties }: ButtonProps) {
  return (
    <Tooltip content={EDIT_TOOLTIP} showArrow color="warning">
      <Button
        variant="light"
        size="sm"
        isIconOnly
        className="pointer-events-auto"
        {...properties}
      >
        <EditIcon className="pointer-events-none" />
      </Button>
    </Tooltip>
  );
}
