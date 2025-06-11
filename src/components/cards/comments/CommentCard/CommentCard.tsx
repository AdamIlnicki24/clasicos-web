import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { UserChip } from "@/components/chips/UserChip";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { CommentDate } from "../components/CommentDate/CommentDate";

interface CommentCardProps {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
}

export function CommentCard({
  nick,
  recommendationsCount,
  createdAt,
}: CommentCardProps) {
  <Card className="bg-accentColor">
    <CardHeader>
      <div className="flex justify-between">
        <UserChip nick={nick} />
        <div className="gap-x-2">
          <BallWithCounterButton count={recommendationsCount} />
          <CommentDate createdAt={createdAt} />
        </div>
      </div>
    </CardHeader>
    <CardBody>
      Room-filling sound, Intelligent assistant. Smart home control. Works
      seamlessly with iPhone. Check it out
    </CardBody>
  </Card>;
}
