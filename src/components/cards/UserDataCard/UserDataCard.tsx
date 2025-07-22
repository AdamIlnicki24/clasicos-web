import Avatar from "@/assets/icons/avatar.svg";
import Ball from "@/assets/icons/ball.svg";
import Calendar from "@/assets/icons/calendar.svg";
import { EditButton } from "@/components/buttons/EditButton/EditButton";
import { InfoButton } from "@/components/buttons/InfoButton/InfoButton";
import {
  CREATED_AT_LABEL,
  OBTAINED_RECOMMENDATIONS_LABEL,
} from "@/constants/labels";
import { ENIGMA } from "@/constants/texts";
import { Card, CardBody } from "@heroui/react";

interface UserDataCardProps {
  nick: string;
  onEditButtonPress: () => void;
  recommendationsCount: number;
  createdAt: string;
  isMe: boolean;
  onOpen: () => void;
}

export function UserDataCard({
  nick,
  onEditButtonPress,
  recommendationsCount,
  createdAt,
  isMe,
  onOpen,
}: UserDataCardProps) {
  const isNickKnown = nick !== ENIGMA;

  return (
    <Card className="bg-primaryColor text-defaultWhite">
      <CardBody className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-1 pb-8">
          <Avatar width={48} />
          <div className="flex items-center gap-x-1">
            {isNickKnown ? (
              <div className="text-[1.5rem] font-bold">{nick}</div>
            ) : (
              <div className="flex items-center gap-x-1">
                <InfoButton onPress={onOpen} />
                <div className="text-[1.5rem] text-defaultGray">{nick}</div>
              </div>
            )}
            {isMe && <EditButton onPress={onEditButtonPress} color="warning" />}
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
