import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { TrashButton } from "@/components/buttons/TrashButton/TrashButton";
import { UserChip } from "@/components/chips/UserChip/UserChip";
import { PROFILE_URL } from "@/constants/urls";
import { MobileContext } from "@/context/MobileContext";
import { User } from "@/types/user";
import { Card, CardBody, CardHeader, Tooltip } from "@heroui/react";
import Link from "next/link";
import { useContext } from "react";
import { CommentDate } from "../components/CommentDate/CommentDate";

interface CommentCardProps {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
  content: string;
  user?: User;
  onTrashPress?: () => void;
}

export function CommentCard({
  nick,
  recommendationsCount,
  createdAt,
  content,
  user,
  onTrashPress,
}: CommentCardProps) {
  const isMobile = useContext(MobileContext);

  return (
    <Card className="w-[95%] bg-accentColor lg:w-[60%]">
      <CardHeader className="flex justify-between">
        <UserChip nick={nick} user={user} />
        <div className="flex gap-x-6">
          {user?.role === "Admin" && onTrashPress && (
            <TrashButton color="danger" onPress={onTrashPress} />
          )}
          <BallWithCounterButton count={recommendationsCount} />
          {!isMobile && <CommentDate createdAt={createdAt} />}
        </div>
      </CardHeader>
      <CardBody className="text-defaultWhite">{content}</CardBody>
    </Card>
  );
}
