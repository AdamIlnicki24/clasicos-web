import { Button } from "@/components/buttons/Button/Button";
import { Heading } from "@/components/headings/Heading/Heading";
import { CHECK_OUT_TEAM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { ABOUT_ME_HEADING } from "@/constants/headings";
import {
  FAVORITE_CLUB_LABEL,
  FAVORITE_FOOTBALLER_LABEL,
} from "@/constants/labels";
import { Card, CardBody } from "@heroui/react";

interface AboutMeCardProps {
  favoriteClub: string;
  favoriteFootballer: string;
  checkOutTeam: () => void;
}

export function AboutMeCard({
  favoriteClub,
  favoriteFootballer,
  checkOutTeam,
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
        <div className="py-6">
          <Button title={CHECK_OUT_TEAM_BUTTON_LABEL} onPress={checkOutTeam} />
        </div>
      </CardBody>
    </Card>
  );
}
