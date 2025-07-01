import { Chip } from "@heroui/react";

export function ActiveUserChip() {
  return (
    <div className="flex gap-4">
      <Chip color="success" className="text-defaultWhite">
        Aktywny
      </Chip>
    </div>
  );
}
