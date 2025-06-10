import { UserChip } from "@/components/chips/UserChip";
import { Card, CardBody, CardHeader, Chip, User } from "@heroui/react";

interface CommentCardProps {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
}

export function CommentCard({ nick }: CommentCardProps) {
  <Card className="bg-accentColor">
    <CardHeader>
      <div className="flex">
        <UserChip nick={nick} />
      </div>
    </CardHeader>
    <CardBody>
      Room-filling sound, Intelligent assistant. Smart home control. Works
      seamlessly with iPhone. Check it out
    </CardBody>
  </Card>;
}
