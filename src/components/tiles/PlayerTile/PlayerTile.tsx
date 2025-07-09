import Player from "@/assets/icons/player.svg";
import { colors } from "@/constants/colors";
import { MobileContext } from "@/context/MobileContext";
import { useContext } from "react";

interface PlayerTileProps {
  name?: string;
  surname: string;
}

export function PlayerTile({ name, surname }: PlayerTileProps) {
  const isMobile = useContext(MobileContext);

  // TODO: Think about replacing icons with flags

  return (
    <div className="flex h-[95px] w-[70px] flex-col items-center justify-center gap-y-2 rounded-xl border-1 border-defaultWhite bg-transparent text-center lg:h-[140px] lg:w-[120px] px-1 lg:px-4">
      <Player color={colors.defaultWhite} width={isMobile ? 16 : 24} />
      <p className="flex font-normal lg:font-bold items-center text-[0.7rem] lg:text-[1rem] lg:min-h-[48px] min-h-[36px]">{`${name ? name + " " : ""}${surname}`}</p>
    </div>
  );
}
