import { getFlagUrl } from "@/utils/nationalities";
import { Image } from "@heroui/react";

interface PlayerTileProps {
  name?: string;
  surname: string;
  nationality: string;
}

export function PlayerTile({ name, surname, nationality }: PlayerTileProps) {
  return (
    <div className="flex h-[95px] w-[70px] flex-col items-center justify-center gap-y-2 rounded-xl border-1 border-defaultWhite bg-transparent px-1 text-center lg:h-[140px] lg:w-[120px] lg:px-4">
      <Image
        src={getFlagUrl(nationality)}
        alt={`Flaga ${nationality}`}
        className="w-7 rounded-none"
      />
      <p className="flex min-h-[36px] items-center text-[0.7rem] font-normal lg:min-h-[48px] lg:text-[1rem] lg:font-bold">{`${name ? name + " " : ""}${surname}`}</p>
    </div>
  );
}
