import { Button } from "@/components/buttons/Button/Button";
import { UserDataCard } from "@/components/cards/NickCard/NickCard";
import { UPDATE_ABOUT_ME_DATA } from "@/constants/buttonLabels";
import { YOU_MUST_BE_LOGGED_IN } from "@/constants/errorMessages";
import { useUser } from "@/hooks/context/useUser";

export function MyProfileContent() {
  const { user } = useUser();

  if (!user) {
    return <div>{YOU_MUST_BE_LOGGED_IN}</div>;
  }

  const nick = user.visitor?.nick;
  const createdAt = user.createdAt;

  // TODO: Think about count below
  const recommendationsCount = user.recommendations;

  if (!nick) return <span>Brak informacji</span>;

  const onSubmitHandler = () => {
    if (process.env.NODE_ENV === "development") {
      console.log("Update form should be displayed");
    }
  };

  //   return <UpdateMeForm visitor={} />;
  return (
    <div>
      <Button title={UPDATE_ABOUT_ME_DATA} onPress={onSubmitHandler} />
      <div className="lg:grid-cols-[2fr_3fr]: grid grid-cols-1">
        {/* <UserDataCard
          nick={nick}
          createdAt={createdAt}
          recommendationsCount={recommendationsCount}
        />
        <AboutMeCard /> */}
      </div>
    </div>
  );
}
