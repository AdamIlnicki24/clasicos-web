import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { Position } from "@/types/position";
import { useQuery } from "@tanstack/react-query";

interface GetPlayersResponse {
  data: Player[];
}

const getPlayers = async (position?: Position): Promise<Player[]> => {
  let endpoint = PLAYERS_API_ENDPOINT;

  if (position) {
    const searchParams = new URLSearchParams({ position });
    endpoint += `?${searchParams.toString()}`;
  }

  const { data } = await api.get<undefined, GetPlayersResponse>(endpoint);

  return data;
};

export function useGetPlayers(position?: Position) {
  return useQuery({
    queryKey: ["getPlayers", position || "all"],
    queryFn: () => getPlayers(position),
  });
}
