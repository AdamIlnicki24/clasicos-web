import Player from "@/assets/icons/player.svg";
import { colors } from "@/constants/colors";

interface PlayerTileProps {
  name?: string;
  surname: string;
}

export function PlayerTile({ name, surname }: PlayerTileProps) {
  return (
    <div className="border-1 border-defaultWhite bg-transparent">
      <Player color={colors.defaultWhite} />
      <p>{`${name ? name + " " : ""}${surname}`}</p>
    </div>
  );
}
