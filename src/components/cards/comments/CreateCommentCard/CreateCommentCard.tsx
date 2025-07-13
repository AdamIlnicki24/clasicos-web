// TODO: Add shadow in secondary color

import { CreateCommentForm } from "@/components/forms/comments/CreateCommentForm/CreateCommentForm";
import { Card, CardBody, CardHeader } from "@heroui/react";

interface CreateCommentCardProps {
  nick: string;
}

export function CreateCommentCard({ nick }: CreateCommentCardProps) {
  return (
    <Card className="w-[95%] bg-accentColor lg:w-[60%]">
      <CardHeader className="space-x-1">
        <span className="text-defaultGray">Twój nick:</span>
        <span className="text-defaultWhite">{nick}</span>
      </CardHeader>
      <CardBody>
        <CreateCommentForm />
      </CardBody>
    </Card>
  );
}
