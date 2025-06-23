import Avatar from "@/assets/icons/avatar.svg";
import Calendar from "@/assets/icons/calendar.svg";
import { Heading } from "@/components/headings/Heading/Heading";
import { Card, CardBody } from "@heroui/react";

interface AboutMeCardProps {
  favoriteClub: string;
  favoriteFootballer: string;
}

export function AboutMeCard({
  favoriteClub,
  favoriteFootballer,
}: AboutMeCardProps) {
  return (
    <Card className="bg-defaultBlack">
      <CardBody className="flex flex-col items-center">
        <Heading HeadingTag="h2" title="O mnie" />
        <div>Ulubiony klub: {favoriteClub}</div>
        <div>Ulubiony piłkarz: {favoriteFootballer}</div>
      </CardBody>
    </Card>
  );
}
