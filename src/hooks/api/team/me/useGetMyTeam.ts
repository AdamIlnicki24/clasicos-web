import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { useQuery } from "@tanstack/react-query";

interface GetTeamResponse {
  data: Team;
}

const getMyTeam = async (): Promise<Team> => {
  const { data } = await api.get<undefined, GetTeamResponse>(
    `${TEAM_API_ENDPOINT}/me`
  );

  return data;
};

export function useGetMyTeam() {
  return useQuery({
    queryKey: ["getMyTeam"],
    queryFn: () => getMyTeam(),
  });
}
