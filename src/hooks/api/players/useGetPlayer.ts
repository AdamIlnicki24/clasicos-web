import { PLAYERS_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Player } from "@/types/player";
import { useQuery } from "@tanstack/react-query";

interface GetPlayerResponse {
  data: Player;
}

const getPlayer = async (uuid: string): Promise<Player> => {
  const { data } = await api.get<undefined, GetPlayerResponse>(
    `${PLAYERS_API_ENDPOINT}/${uuid}`
  );

  return data;
};

export function useGetPlayer(uuid: string) {
  return useQuery({
    queryKey: ["getPlayer", uuid],
    queryFn: () => getPlayer(uuid),
  });
}
