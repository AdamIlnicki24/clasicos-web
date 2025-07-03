import Avatar from "@/assets/icons/avatar.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Ball from "@/assets/icons/ball.svg";
import { Card, CardBody } from "@heroui/react";
import {
  CREATED_AT_LABEL,
  OBTAINED_RECOMMENDATIONS_LABEL,
} from "@/constants/labels";
import { EditButton } from "@/components/buttons/EditButton/EditButton";
import { colors } from "@/constants/colors";

interface UserDataCardProps {
  nick: string;
  onIconPress: () => void;
  recommendationsCount: number;
  createdAt: string;
  isMe: boolean;
}

export function UserDataCard({
  nick,
  onIconPress,
  recommendationsCount,
  createdAt,
  isMe,
}: UserDataCardProps) {
  return (
    <Card className="bg-primaryColor text-defaultWhite">
      <CardBody className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-1 pb-8">
          <Avatar width={48} />
          <div className="flex items-center gap-x-1">
            <div className="text-[1.5rem]">{nick}</div>
            {isMe && (
              <EditButton onPress={onIconPress} color="warning" />
            )}
          </div>
        </div>
        <div className="flex gap-x-3">
          <Ball width={16} />
          <span>
            {OBTAINED_RECOMMENDATIONS_LABEL} {recommendationsCount}
          </span>
        </div>
        <div className="flex gap-x-3">
          <Calendar width={16} />
          <span>
            {CREATED_AT_LABEL} {createdAt}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
