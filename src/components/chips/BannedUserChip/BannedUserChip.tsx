import { Chip } from "@heroui/react";

export function BannedUserChip() {
  return (
    <div className="flex gap-4">
      <Chip color="danger" className="text-defaultWhite">Zbanowany</Chip>
    </div>
  );
}
