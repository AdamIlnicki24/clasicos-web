import { ACTIVE_CHIP } from "@/constants/chips";
import { Chip } from "@heroui/react";

export function ActiveUserChip() {
  return (
    <div className="flex gap-4">
      <Chip color="success" className="text-defaultWhite">
        {ACTIVE_CHIP}
      </Chip>
    </div>
  );
}
