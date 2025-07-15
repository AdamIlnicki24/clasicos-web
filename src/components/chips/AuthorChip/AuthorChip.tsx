import { PROFILE_URL } from "@/constants/urls";
import { User } from "@/types/user";
import { Chip, Avatar, Tooltip } from "@heroui/react";
import Link from "next/link";

interface AuthorChipProps {
  nick: string;
  author: User;
  me?: User;
}

export function AuthorChip({ nick, author, me }: AuthorChipProps) {
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

  return me ? (
    <Link href={`${PROFILE_URL}/${author.uuid}`}>{chip}</Link>
  ) : (
    <Tooltip
      content="Zaloguj się, aby zobaczyć profil"
      color="warning"
      showArrow
    >
      <div className="cursor-default">{chip}</div>
    </Tooltip>
  );
}
