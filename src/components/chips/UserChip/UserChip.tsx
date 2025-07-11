import { PROFILE_URL } from "@/constants/urls";
import { User } from "@/types/user";
import { Chip, Avatar, Tooltip } from "@heroui/react";
import Link from "next/link";

interface UserChipProps {
  nick: string;
  user?: User;
}

export function UserChip({ nick, user }: UserChipProps) {
  const chip = (
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

  return user ? (
    <Link href={`${PROFILE_URL}/${user.uuid}`}>{chip}</Link>
  ) : (
    <Tooltip content="Zaloguj się, aby zobaczyć profil" color="warning" showArrow>
      <div className="cursor-default">{chip}</div>
    </Tooltip>
  );
}
