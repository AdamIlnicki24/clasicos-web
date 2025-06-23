import { Heading } from "@/components/headings/Heading/Heading";
import { ABOUT_ME_HEADING } from "@/constants/headings";
import {
  FAVORITE_CLUB_LABEL,
  FAVORITE_FOOTBALLER_LABEL,
} from "@/constants/labels";
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
    <Card className="bg-defaultBlack text-defaultWhite">
      <CardBody className="flex flex-col items-center">
        <Heading HeadingTag="h2" title={ABOUT_ME_HEADING} />
        <div>
          {FAVORITE_CLUB_LABEL} {favoriteClub}
        </div>
        <div>
          {FAVORITE_FOOTBALLER_LABEL} {favoriteFootballer}
        </div>
      </CardBody>
    </Card>
  );
}
