"use client";

import { Button } from "@/components/buttons/Button/Button";
import { AboutMeCard } from "@/components/cards/AboutMeCard/AboutMeCard";
import { UserDataCard } from "@/components/cards/NickCard/NickCard";
import { UpdateMeModal } from "@/components/modals/UpdateMeModal/UpdateMeModal";
import { UPDATE_ABOUT_ME_DATA } from "@/constants/buttonLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { useGetUserRecommendationsCount } from "@/hooks/api/recommendations/useGetUserRecommendationsCount";
import { useUser } from "@/hooks/context/useUser";
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

  const visitor = user.visitor;
  const nick = visitor.nick;
  const createdAt = user.createdAt;
  const favoriteClub = visitor.favoriteClub;
  const favoriteFootballer = visitor.favoriteFootballer;

  console.log("Nick:", nick);
  console.log("fav club:", favoriteClub);
  console.log("fav player:", favoriteFootballer);
  console.log("User:", user);

  // TODO: Improve fallback below
  if (!nick || !favoriteClub || !favoriteFootballer)
    return <span>Brak informacji</span>;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmitHandler = () => {
    onOpen();
    if (process.env.NODE_ENV === "development") {
      console.log("Modal with update form should be displayed");
    }
    
  };

  //   return <UpdateMeForm visitor={} />;
  return (
    <>
      <div className="flex justify-end pe-12 pt-8">
        <Button
          title={UPDATE_ABOUT_ME_DATA}
          onPress={onSubmitHandler}
          mode="secondary"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[9fr_11fr]">
        <UserDataCard
          nick={nick}
          createdAt={createdAt}
          recommendationsCount={recommendationsCount ?? 0}
        />
        <AboutMeCard
          favoriteClub={favoriteClub}
          favoriteFootballer={favoriteFootballer}
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
