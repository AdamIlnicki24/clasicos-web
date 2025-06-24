import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { UserChip } from "@/components/chips/UserChip";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { CommentDate } from "../components/CommentDate/CommentDate";

interface CommentCardProps {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
  content: string;
}

export function CommentCard({
  nick,
  recommendationsCount,
  createdAt,
  content,
}: CommentCardProps) {
  return (
    <Card className="w-[60%] bg-accentColor">
      <CardHeader className="flex justify-between">
        <UserChip nick={nick} />
        <div className="flex gap-x-6">
          <BallWithCounterButton count={recommendationsCount} />
          <CommentDate createdAt={createdAt} />
        </div>
      </CardHeader>
      <CardBody className="text-defaultWhite">{content}</CardBody>
    </Card>
  );
}
