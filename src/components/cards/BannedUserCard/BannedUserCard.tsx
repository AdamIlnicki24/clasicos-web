import { Card, CardBody } from "@heroui/react";

interface BannedUserCardProps {
  bodyText: string;
}

export function BannedUserCard({ bodyText }: BannedUserCardProps) {
  return (
    <Card className="flex w-[95%] bg-accentColor shadow-sm shadow-defaultWhite lg:w-auto">
      <CardBody className="text-defaultWhite">{bodyText}</CardBody>
    </Card>
  );
}
