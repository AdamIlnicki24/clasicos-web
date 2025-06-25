import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { TrashButton } from "@/components/buttons/TrashButton/TrashButton";
import { UserChip } from "@/components/chips/UserChip";
import { User } from "@/types/user";
import { Card, CardBody, CardHeader, useDisclosure } from "@heroui/react";
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
  return (
    <Card className="w-[60%] bg-accentColor">
      <CardHeader className="flex justify-between">
        <UserChip nick={nick} />
        <div className="flex gap-x-6">
          {user?.role === "Admin" && onTrashPress && (
            <TrashButton color="warning" onPress={onTrashPress} />
          )}
          <BallWithCounterButton count={recommendationsCount} />
          <CommentDate createdAt={createdAt} />
        </div>
      </CardHeader>
      <CardBody className="text-defaultWhite">{content}</CardBody>
    </Card>
  );
}
