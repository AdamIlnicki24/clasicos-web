import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { useQuery } from "@tanstack/react-query";

interface GetTeamResponse {
  data: Team;
}

const getTeam = async (uuid: string): Promise<Team> => {
  const { data } = await api.get<undefined, GetTeamResponse>(
    `${TEAM_API_ENDPOINT}/${uuid}`
  );

  return data;
};

export function useGetTeam(uuid: string) {
  return useQuery({
    queryKey: ["getTeam", uuid],
    queryFn: () => getTeam(uuid),
  });
}
