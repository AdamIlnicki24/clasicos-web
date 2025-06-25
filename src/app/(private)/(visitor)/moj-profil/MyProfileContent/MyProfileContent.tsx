"use client";

import { Button } from "@/components/buttons/Button/Button";
import { AboutMeCard } from "@/components/cards/AboutMeCard/AboutMeCard";
import { UserDataCard } from "@/components/cards/NickCard/NickCard";
import { UpdateMeModal } from "@/components/modals/UpdateMeModal/UpdateMeModal";
import { UPDATE_ABOUT_ME_DATA_BUTTON_LABEL } from "@/constants/buttonLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { ENIGMA, NO_INFORMATION } from "@/constants/texts";
import { useGetUserRecommendationsCount } from "@/hooks/api/recommendations/useGetUserRecommendationsCount";
import { useUser } from "@/hooks/context/useUser";
import { formatDate } from "@/utils/date";
import { useDisclosure } from "@heroui/react";

export function MyProfileContent() {
  // TODO: User will always have visitor object

  const { user } = useUser();

  if (!user) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const { data: recommendationsCount } = useGetUserRecommendationsCount(
    user.uuid
  );

  const createdAt = user.createdAt;
  const visitor = user.visitor;

  const nick = visitor.nick;
  const favoriteClub = visitor.favoriteClub;
  const favoriteFootballer = visitor.favoriteFootballer;

  console.log("Nick:", nick);
  console.log("fav club:", favoriteClub);
  console.log("fav player:", favoriteFootballer);
  console.log("User:", user);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmitHandler = () => {
    onOpen();
    if (process.env.NODE_ENV === "development") {
      console.log("Modal with update form should be displayed");
    }
  };

  return (
    <>
      <div className="flex justify-end pe-12 pt-8">
        <Button
          title={UPDATE_ABOUT_ME_DATA_BUTTON_LABEL}
          onPress={onSubmitHandler}
          mode="secondary"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[9fr_11fr]">
        <UserDataCard
          nick={nick ?? ENIGMA}
          createdAt={formatDate(createdAt)}
          recommendationsCount={recommendationsCount ?? 0}
        />
        <AboutMeCard
          favoriteClub={favoriteClub ?? NO_INFORMATION}
          favoriteFootballer={favoriteFootballer ?? NO_INFORMATION}
        />
      </div>
      <UpdateMeModal
        visitor={visitor}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
