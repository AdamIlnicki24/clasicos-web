import Avatar from "@/assets/icons/avatar.svg";
import Calendar from "@/assets/icons/calendar.svg";

interface UserDataCard {
  nick: string;
  recommendationsCount: number;
  createdAt: string;
}

export function UserDataCard({
  nick,
  recommendationsCount,
  createdAt,
}: UserDataCard) {
  <div className="flex flex-col items-center justify-center">
    <Avatar />
    <div>{nick}</div>
    <div className="flex gap-x-3">
      <Calendar />
      <span>Uzyskane rekomendacje: {recommendationsCount}</span>
    </div>
    <div className="flex gap-x-3">
      <Calendar />
      <span>Data dołączenia: {createdAt}</span>
    </div>
  </div>;
}
