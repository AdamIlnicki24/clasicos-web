import { Chip, Avatar } from "@heroui/react";

interface UserChipProps {
  nick: string;
}

export function UserChip({ nick }: UserChipProps) {
  return (
    <div className="flex gap-4">
      <Chip
        avatar={
          <Avatar
            getInitials={(name) => name.charAt(0)}
            name={nick}
            size="sm"
          />
        }
        variant="flat"
        className="text-defaultBlack"
      >
        {nick}
      </Chip>
    </div>
  );
}
