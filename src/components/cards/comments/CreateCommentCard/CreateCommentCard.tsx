// TODO: Add shadow in secondary color

import { CreateCommentForm } from "@/components/forms/comments/CreateCommentForm/CreateCommentForm";
import { Card, CardBody, CardHeader } from "@heroui/react";

interface CreateCommentCardProps {
  nick: string;
}

export function CreateCommentCard({ nick }: CreateCommentCardProps) {
  return (
    <Card className="w-[60%] bg-accentColor">
      <CardHeader>{nick}</CardHeader>
      <CardBody>
        <CreateCommentForm />
      </CardBody>
    </Card>
  );
}
