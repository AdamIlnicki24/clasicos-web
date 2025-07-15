import { BallWithCounterButton } from "@/components/buttons/BallWithCounterButton/BallWithCounterButton";
import { TrashButton } from "@/components/buttons/TrashButton/TrashButton";
import { UserChip } from "@/components/chips/UserChip/UserChip";
import { ENIGMA } from "@/constants/texts";
import { MobileContext } from "@/context/MobileContext";
import { User } from "@/types/user";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { useContext } from "react";
import { CommentDate } from "../components/CommentDate/CommentDate";
import { CommentWithCount } from "@/types/comment";

interface CommentCardProps {
  comment: CommentWithCount;
  currentUser?: User;
  onTrashPress?: () => void;
  hasRecommended: boolean;
  recommendationsCount: number;
  onToggleRecommendation: () => void;
}

export function CommentCard({
  comment,
  currentUser,
  onTrashPress,
  hasRecommended,
  recommendationsCount,
  onToggleRecommendation,
}: CommentCardProps) {
  const isMobile = useContext(MobileContext);

  return (
    <Card className="w-[95%] bg-accentColor lg:w-[60%]">
      <CardHeader className="flex justify-between">
        <UserChip
          nick={comment.user.visitor.nick ?? ENIGMA}
          user={comment.user}
        />
        <div className="flex gap-x-6">
          {currentUser?.role === "Admin" && (
            <TrashButton color="danger" onPress={onTrashPress} />
          )}
          <BallWithCounterButton
            count={recommendationsCount}
            hasRecommended={hasRecommended}
            onPress={onToggleRecommendation}
            user={currentUser}
          />
          {!isMobile && <CommentDate createdAt={comment.createdAt} />}
        </div>
      </CardHeader>
      <CardBody className="text-defaultWhite">{comment.content}</CardBody>
    </Card>
  );
}
