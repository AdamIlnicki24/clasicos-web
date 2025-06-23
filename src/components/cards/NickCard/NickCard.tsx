import Avatar from "@/assets/icons/avatar.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Ball from "@/assets/icons/ball.svg";
import { Card, CardBody } from "@heroui/react";
import {
  CREATED_AT_LABEL,
  OBTAINED_RECOMMENDATIONS_LABEL,
} from "@/constants/labels";

interface UserDataCardProps {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
}

export function UserDataCard({
  nick,
  recommendationsCount,
  createdAt,
}: UserDataCardProps) {
  return (
    <Card className="bg-primaryColor text-defaultWhite">
      <CardBody className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-1 pb-8">
          <Avatar width={48} />
          <div>{nick}</div>
        </div>
        <div className="flex gap-x-3">
          <Ball width={16} />
          <span>
            {OBTAINED_RECOMMENDATIONS_LABEL} {recommendationsCount}
          </span>
        </div>
        <div className="flex gap-x-3">
          <Calendar width={16} />
          {/* TODO: Use day-js */}
          <span>
            {CREATED_AT_LABEL} {createdAt}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
