import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { useQuery } from "@tanstack/react-query";

interface GetTeamResponse {
  data: Team;
}

const getTeam = async (userUuid: string): Promise<Team> => {
  const { data } = await api.get<undefined, GetTeamResponse>(
    `${TEAM_API_ENDPOINT}/${userUuid}`
  );

  return data;
};

export function useGetTeam(userUuid: string) {
  return useQuery({
    queryKey: ["getTeam", userUuid],
    queryFn: () => getTeam(userUuid),
  });
}
