interface PitchBoardProps {
  goalkeepers: string[];
  defenders: string[];
  midfielders: string[];
  forwards: string[];
}

export function PitchBoard({
  goalkeepers,
  defenders,
  midfielders,
  forwards,
}: PitchBoardProps) {
  return (
    <div className="min-h-[70svh] bg-secondaryColor">
      {goalkeepers.length > 0 && <div className="px-1 py-3">{goalkeepers}</div>}
      {defenders.length > 0 && <div className="px-1 py-3">{defenders}</div>}
      {midfielders.length > 0 && <div className="px-1 py-3">{midfielders}</div>}
      {forwards.length > 0 && <div className="px-1 py-3">{forwards}</div>}
    </div>
  );
}
