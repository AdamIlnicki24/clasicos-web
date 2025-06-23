import Avatar from "@/assets/icons/avatar.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Ball from "@/assets/icons/ball.svg";
import { Card, CardBody } from "@heroui/react";

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
        <div className="pb-8 flex flex-col gap-y-1 items-center">
          <Avatar width={48} />
          <div className="">{nick}</div>
        </div>
        <div className="flex gap-x-3">
          <Ball width={16} />
          <span>Uzyskane rekomendacje: {recommendationsCount}</span>
        </div>
        <div className="flex gap-x-3">
          <Calendar width={16} />
          {/* TODO: Install day-js */}
          <span>Data dołączenia: {createdAt}</span>
        </div>
      </CardBody>
    </Card>
  );
}
