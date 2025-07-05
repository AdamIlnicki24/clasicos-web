import { ReactNode } from "react";

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
  return (
    <div className="flex w-[95%] flex-col items-center bg-secondaryColor lg:px-12 py-8 lg:w-auto">
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
