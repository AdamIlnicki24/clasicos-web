import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface PitchBoardProps {
  goalkeepers: ReactNode[];
  defenders: ReactNode[];
  midfielders: ReactNode[];
  forwards: ReactNode[];
}

export function PitchBoard({
  goalkeepers,
  defenders,
  midfielders,
  forwards,
}: PitchBoardProps) {
  const isSmallWidth = useMediaQuery({ query: "(max-width: 365px)" });

  return (
    <div
      className={`flex ${isSmallWidth ? "w-full" : "w-[95%]"} flex-col items-center bg-secondaryColor py-8 lg:w-auto lg:px-12 rounded-3xl`}
    >
      {goalkeepers.length > 0 && <div className="px-1 py-3">{goalkeepers}</div>}
      {defenders.length > 0 && (
        <div className="flex gap-x-3 px-1 py-3 lg:gap-x-6">{defenders}</div>
      )}
      {midfielders.length > 0 && (
        <div className="flex gap-x-3 px-1 py-3 lg:gap-x-6">{midfielders}</div>
      )}
      {forwards.length > 0 && (
        <div className="flex gap-x-3 px-1 py-3 lg:gap-x-6">{forwards}</div>
      )}
    </div>
  );
}
