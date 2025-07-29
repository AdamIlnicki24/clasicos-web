import { CreateCommentForm } from "@/components/forms/comments/CreateCommentForm/CreateCommentForm";
import { YOUR_NICK } from "@/constants/texts";
import { Card, CardBody, CardHeader } from "@heroui/react";

interface CreateCommentCardProps {
  nick: string;
  resourceFriendlyLink: string;
}

export function CreateCommentCard({
  nick,
  resourceFriendlyLink,
}: CreateCommentCardProps) {
  return (
    <Card className="w-[95%] bg-accentColor shadow-sm shadow-defaultWhite lg:w-[60%]">
      <CardHeader className="space-x-1">
        <span className="text-defaultGray">{YOUR_NICK}</span>
        <span className="text-defaultWhite">{nick}</span>
      </CardHeader>
      <CardBody>
        <CreateCommentForm resourceFriendlyLink={resourceFriendlyLink} />
      </CardBody>
    </Card>
  );
}
