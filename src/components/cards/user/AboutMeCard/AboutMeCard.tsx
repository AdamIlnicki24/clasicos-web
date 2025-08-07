import { Button } from "@/components/buttons/Button/Button";
import { Heading } from "@/components/headings/Heading/Heading";
import { CHECK_OUT_TEAM_BUTTON_LABEL } from "@/constants/buttonLabels";
import { ABOUT_ME_HEADING } from "@/constants/headings";
import {
  FAVORITE_CLUB_LABEL,
  FAVORITE_FOOTBALLER_LABEL,
} from "@/constants/labels";
import { NO_INFORMATION } from "@/constants/texts";
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
  const isFavoriteClubKnown = favoriteClub !== NO_INFORMATION;
  const isFavoriteFootballerKnown = favoriteFootballer !== NO_INFORMATION;

  return (
    <Card className="bg-defaultBlack text-defaultWhite">
      <CardBody className="flex flex-col items-center">
        <Heading HeadingTag="h2" title={ABOUT_ME_HEADING} />
        <div>
          {FAVORITE_CLUB_LABEL}{" "}
          <span
            className={isFavoriteClubKnown ? "font-bold" : "text-defaultGray"}
          >
            {favoriteClub}
          </span>
        </div>
        <div>
          {FAVORITE_FOOTBALLER_LABEL}{" "}
          <span
            className={
              isFavoriteFootballerKnown ? "font-bold" : "text-defaultGray"
            }
          >
            {favoriteFootballer}
          </span>
        </div>
        <div className="py-6">
          <Button title={CHECK_OUT_TEAM_BUTTON_LABEL} onPress={checkOutTeam} />
        </div>
      </CardBody>
    </Card>
  );
}
