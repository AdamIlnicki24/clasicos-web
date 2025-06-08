import { TEAM_API_ENDPOINT } from "@/constants/apiEndpoints";
import { api } from "@/services/API";
import { Team } from "@/types/team";
import { useMutation } from "@tanstack/react-query";

interface DeleteTeamResponse {
  data: Team;
}

const deleteMyTeam = async (): Promise<Team> => {
  const { data } = await api.delete<undefined, DeleteTeamResponse>(
    `${TEAM_API_ENDPOINT}/me`
  );

  return data;
};

export function useDeleteMyTeam() {
  return useMutation({
    mutationKey: ["deleteMyTeam"],
    mutationFn: () => deleteMyTeam(),
  });
}
