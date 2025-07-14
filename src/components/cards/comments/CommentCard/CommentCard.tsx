import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { TrashButton } from "@/components/buttons/TrashButton/TrashButton";
import { UserChip } from "@/components/chips/UserChip/UserChip";
import { MobileContext } from "@/context/MobileContext";
import { User } from "@/types/user";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { useContext } from "react";
import { CommentDate } from "../components/CommentDate/CommentDate";
import { Visitor } from "@/types/visitor";
import { ENIGMA } from "@/constants/texts";

interface CommentCardProps {
  author: User;
  currentUser?: User;
  recommendationsCount: number;
  createdAt: string;
  content: string;
  onTrashPress?: () => void;
}

export function CommentCard({
  author,
  currentUser,
  recommendationsCount,
  createdAt,
  content,
  onTrashPress,
}: CommentCardProps) {
  const isMobile = useContext(MobileContext);

  return (
    <Card className="w-[95%] bg-accentColor lg:w-[60%]">
      <CardHeader className="flex justify-between">
        <UserChip nick={author.visitor.nick ?? ENIGMA} user={author} />
        <div className="flex gap-x-6">
          {currentUser?.role === "Admin" && onTrashPress && (
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
